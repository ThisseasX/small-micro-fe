import { useEffect, useRef } from 'react';

const MicroFrontend = ({ id, url, props }) => {
  const ref = useRef();

  useEffect(() => {
    const script = document.createElement('script');

    script.addEventListener('load', () => {
      window[`render${id}`]?.(ref?.current, props);
    });

    document.head.appendChild(script);
    let cssLinks = [];

    if (url?.includes('.js')) {
      script.src = url;
    } else {
      (async () => {
        const manifest = await (await fetch(`${url}/manifest.json`)).json();
        const files = Object.values(manifest);
        const entryFile = files?.find(({ isEntry }) => isEntry)?.file;

        script.src = `${url}/${entryFile}`;

        const cssFiles = files?.filter(({ file }) => file?.endsWith('.css'));

        cssFiles?.forEach(({ file }) => {
          document.head
            .querySelector(`link[rel=stylesheet][href="${url}/${file}"]`)
            ?.remove();
        });

        cssLinks = cssFiles?.map(({ file }) => {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = `${url}/${file}`;
          return link;
        });

        cssLinks.forEach((link) => document.head.appendChild(link));
      })();
    }

    return () => {
      window[`unmount${id}`]?.();
      script?.remove();
      cssLinks?.forEach((link) => link?.remove());
    };
  }, []);

  return <div ref={ref} />;
};

export default MicroFrontend;
