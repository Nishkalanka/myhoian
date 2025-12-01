import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toPrerender = ['', '/hoian-avtorskaya-ekskursiya'];

async function prerender() {
  console.log('Starting preview server...');
  const preview = spawn('npm', ['run', 'preview', '--', '--port', '4173'], {
    stdio: 'inherit', // Pipe output to see server logs
    shell: true,
  });

  // Give the server some time to start
  await new Promise((resolve) => setTimeout(resolve, 5000));

  console.log('Launching Puppeteer...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const route of toPrerender) {
    const page = await browser.newPage();
    const url = `http://localhost:4173${route}`;
    console.log(`Prerendering ${url}...`);

    try {
      await page.goto(url, {
        waitUntil: 'networkidle0',
        timeout: 60000,
      });

      // Wait for React/Helmet to update the DOM
      await new Promise((r) => setTimeout(r, 5000));

      // 🚀 CRITICAL FIX: Restore the preloader state!
      // The React app removes the preloader on mount. We must put it back
      // so that the static HTML served to the user HAS the visible preloader.
      await page.evaluate(() => {
        // 1. Remove the 'loaded' class so the preloader isn't hidden by CSS
        document.body.classList.remove('loaded');

        // 2. Re-create the preloader element if it's missing
        if (!document.getElementById('initial-preloader')) {
          const preloader = document.createElement('div');
          preloader.id = 'initial-preloader';
          preloader.innerHTML = '<img src="/logo.svg" alt="MyHoiAn Logo" />';

          // Insert it at the beginning of the body (or before #root)
          const root = document.getElementById('root');
          if (root) {
            document.body.insertBefore(preloader, root);
          } else {
            document.body.insertBefore(preloader, document.body.firstChild);
          }
        }
      });

      const html = await page.content();

      // Determine output path
      // If route is /foo, output to dist/foo/index.html
      const routePath = route.startsWith('/') ? route.slice(1) : route;
      const outputDir = path.join(__dirname, 'dist', routePath);
      const outputFile = path.join(outputDir, 'index.html');

      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      fs.writeFileSync(outputFile, html);
      console.log(`Saved ${outputFile}`);
    } catch (e) {
      console.error(`Failed to prerender ${route}:`, e);
    } finally {
      await page.close();
    }
  }

  await browser.close();

  // Kill the preview server
  // spawn with shell: true creates a shell process, killing it might not kill the child.
  // But for this script, exiting the process usually kills children attached to stdio?
  // We'll try to kill it explicitly.
  preview.kill('SIGTERM');

  // Force exit to ensure we don't hang
  process.exit(0);
}

prerender();
