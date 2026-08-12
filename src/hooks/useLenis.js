import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

const useLenis = () => {
  useEffect(() => {
    if (window.__lenis) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: true,
      respectReducedMotion: false,
      autoRaf: true,
    });

    window.__lenis = lenis;

    return () => {
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);
};

export default useLenis;
