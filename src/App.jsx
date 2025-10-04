import { useEffect } from 'react';
import FlashlightCursor from './components/FlashlightCursor';
import RainEffect from './components/RainEffect';
import LightningEffect from './components/LightningEffect';
import Scene1 from './components/Scene1';
import Scene2 from './components/Scene2';
import Scene3 from './components/Scene3';
import Scene4 from './components/Scene4';
import Scene5 from './components/Scene5';
import Scene6 from './components/Scene6';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax-bg');

      parallaxElements.forEach((element) => {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    let rafId: number;
    const onScroll = () => {
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="relative">
      <FlashlightCursor />
      <RainEffect />
      <LightningEffect />

      <div className="vignette" />
      <div className="fog-overlay" />

      <Scene1 />
      <Scene2 />
      <Scene3 />
      <Scene4 />
      <Scene5 />
      <Scene6 />
    </div>
  );
}

export default App;
