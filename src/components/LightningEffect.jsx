import { useEffect } from 'react';

export default function LightningEffect() {
  useEffect(() => {
    const triggerLightning = () => {
      const lightning = document.getElementById('lightning');
      if (lightning) {
        lightning.classList.add('flash');
        setTimeout(() => {
          lightning.classList.remove('flash');
        }, 200);
      }
    };

    const randomInterval = () => {
      const min = 5000;
      const max = 15000;
      return Math.random() * (max - min) + min;
    };

    let timeoutId;

    const scheduleLightning = () => {
      timeoutId = setTimeout(() => {
        triggerLightning();
        scheduleLightning();
      }, randomInterval());
    };

    scheduleLightning();

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return null;
}
