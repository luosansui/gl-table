import { Application, ICanvas } from 'pixi.js';
import { useEffect, useRef } from 'react';
/**
 * useApplication
 * @description - Creates a PixiJS Application
 * @example - const app = useApplication();
 * @returns { React.MutableRefObject<Application<ICanvas> | null> } - PixiJS Application
 */
const useApplication =
  (): React.MutableRefObject<Application<ICanvas> | null> => {
    const appRef = useRef<Application<ICanvas> | null>(null);
    useEffect(() => {
      console.log('初始化Application');
      if (!appRef.current) {
        appRef.current = new Application();
      }
      return () => {
        if (appRef.current) {
          console.log('销毁Application');
          appRef.current.destroy();
          appRef.current = null;
        }
      };
    }, []);
    return appRef;
  };

export default useApplication;
