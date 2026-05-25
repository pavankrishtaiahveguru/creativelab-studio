import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function ParallaxImage({ src, alt }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 45,
    damping: 18,
  });

  // Background moves slower than content

  const y = useTransform(smooth, [0, 1], [-180, 180]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      {/* Background Image */}

      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="absolute left-0 top-[-15%] w-full h-[135%] object-cover will-change-transform"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/60" />

      {/* Premium Gradient Depth */}

      <div className="absolute inset-0 bg-linear-to-b from-black/10  to-black/20" />

      {/* Cinematic Vignette */}

      <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.45)]" />
    </div>
  );
}
