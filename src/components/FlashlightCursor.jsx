import { useEffect, useState } from 'react';

export default function FlashlightCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      setPosition({ x: currentX, y: currentY });
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className={`flashlight ${isActive ? 'active' : ''}`}
      style={{
        transform: `translate(${position.x - 150}px, ${position.y - 150}px)`
      }}
    />
  );
}
