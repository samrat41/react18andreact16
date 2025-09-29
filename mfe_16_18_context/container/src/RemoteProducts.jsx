import React from 'react';

export default function RemoteProducts(props) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    let cleanup;
    let cancelled = false;

    (async () => {
      const mod = await import('products/mount');
      if (cancelled || !ref.current) return;
      cleanup = mod.mount(ref.current, props);
    })();

    return () => {
      cancelled = true;
      if (cleanup) cleanup();
    };
  }, [props]);

  return <div ref={ref} />;
}


