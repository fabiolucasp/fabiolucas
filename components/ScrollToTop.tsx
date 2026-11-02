import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash) {
        let id: string;
        try { id = decodeURIComponent(hash.slice(1)); } catch { return; }
        document.getElementById(id)?.scrollIntoView({ block: 'start' });
      } else {
        window.scrollTo(0, 0);
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);
  return null;
}
