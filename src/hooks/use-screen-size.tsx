import { useEffect, useState } from "react";

function getScreenSize() {
  const { innerHeight: screenHeight, innerWidth: screenWidth } = window;
  return { screenHeight, screenWidth };
}

export function useScreenSize() {
  const [screenSize, setScreenSize] = useState(getScreenSize());

  useEffect(() => {
    function handleResize() {
      setScreenSize(getScreenSize());
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
}
