import React, { useEffect } from 'react';
import useApplication from '../hooks/useApplication';

const Canvas = () => {
  const appRef = useApplication();
  useEffect(() => {
    console.log(appRef);
  }, []);
  return <div>123</div>;
};

export default Canvas;
