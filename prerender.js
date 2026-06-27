import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toPrerender = ['', '/hoian-avtorskaya-ekskursiya'];

async function prerender() {
  console.log('Starting preview server...');
  // Use detached: true to create a process group
  const preview = spawn('npm', ['run', 'preview', '--', '--port', '4173'], {
    stdio: 'inherit',
    shell: true,
    detached: true,
  });

  // Give the server some time to start
  await new Promise((resolve) => setTimeout(resolve, 5000));

  console.log('Launching Puppeteer...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
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
        await page.evaluate(() => {
          document.body.classList.remove('loaded');
          if (!document.getElementById('initial-preloader')) {
            const preloader = document.createElement('div');
            preloader.id = 'initial-preloader';
            preloader.innerHTML = '<img src="/logo.svg" alt="MyHoiAn Logo" />';
            const root = document.getElementById('root');
            if (root) {
              document.body.insertBefore(preloader, root);
            } else {
              document.body.insertBefore(preloader, document.body.firstChild);
            }
          }
        });

        const html = await page.content();
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
  } finally {
    await browser.close();

    console.log('Killing preview server group...');
    // Kill the entire process group
    if (preview.pid) {
      try {
        process.kill(-preview.pid, 'SIGTERM');
      } catch (e) {
        console.log('Error killing process group:', e.message);
      }
    }

    // Force exit
    setTimeout(() => {
      process.exit(0);
    }, 1000);
  }
}

prerender();
