import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const SliderPage: React.FC = () => {
  useEffect(() => {
    const preloader = document.getElementById('initial-preloader');
    if (preloader) {
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.remove();
      }, 500);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>История России - Интерактивная карта</title>
        <meta
          name="description"
          content="Интерактивная карта изменений границ России на протяжении веков"
        />
      </Helmet>
      <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
        <iframe
          src="/timeline/index.html"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            display: 'block',
            backgroundColor: 'black',
          }}
          title="Timeline"
        />
      </div>
    </>
  );
};

export default SliderPage;
