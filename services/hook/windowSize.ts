import { useState, useEffect } from 'react';

// Custom hook for tracking window size
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;

// Usage
// function MyComponent() {
//     const { width, height } = useWindowSize();

//     return (
//       <div>
//         <p>Window width: {width}px</p>
//         <p>Window height: {height}px</p>
//       </div>
//     );
//   }
