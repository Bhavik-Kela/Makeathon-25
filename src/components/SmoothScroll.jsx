import { useEffect } from 'react';

export default function SmoothScroll({ children }) {
  useEffect(() => {
    let rafId;
    let currentScroll = window.scrollY;
    let targetScroll = window.scrollY;

    const smoothScroll = () => {
      currentScroll += (targetScroll - currentScroll) * 0.1;

      if (Math.abs(targetScroll - currentScroll) < 0.5) {
        currentScroll = targetScroll;
      }

      window.scrollTo(0, currentScroll);
      rafId = requestAnimationFrame(smoothScroll);
    };

    const handleScroll = () => {
      targetScroll = window.scrollY;
    };

    const handleWheel = (e) => {
      e.preventDefault();
      targetScroll += e.deltaY * 0.5;
      targetScroll = Math.max(0, Math.min(targetScroll, document.body.scrollHeight - window.innerHeight));
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleWheel, { passive: false });
    rafId = requestAnimationFrame(smoothScroll);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return <>{children}</>;
}
