import { useEffect, useState } from 'react';

function SceneRenderer({ children, active, className = '' }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (active) {
      const id = window.requestAnimationFrame(() => setIsMounted(true));
      return () => window.cancelAnimationFrame(id);
    }
    setIsMounted(false);
    return undefined;
  }, [active]);

  return <div className={`scene ${active ? 'is-active' : ''} ${isMounted ? 'is-visible' : ''} ${className}`.trim()}>{children}</div>;
}

export default SceneRenderer;
