"use client";

import { useEffect, useState, useRef, useMemo } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const trailingRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  // Check if touch device
  const isDesktop = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return !window.matchMedia("(pointer: coarse)").matches;
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    // Hide default cursor on all elements
    const style = document.createElement("style");
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over interactive element
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor-hover]');
      setIsHovering(!!isClickable);
    };

    window.addEventListener("mousemove", updatePosition, { passive: true });

    // Cleanup
    return () => {
      document.head.removeChild(style);
      window.removeEventListener("mousemove", updatePosition);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isDesktop]);

  // Smooth trailing animation
  useEffect(() => {
    if (!isDesktop) return;

    const animate = () => {
      trailingRef.current.x += (position.x - trailingRef.current.x) * 0.4;
      trailingRef.current.y += (position.y - trailingRef.current.y) * 0.4;
      
      const trailingEl = document.getElementById("cursor-trailing");
      if (trailingEl) {
        trailingEl.style.transform = `translate3d(${trailingRef.current.x}px, ${trailingRef.current.y}px, 0) translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isDesktop, position, isHovering]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Outer trailing circle */}
      <div
        id="cursor-trailing"
        className="pointer-events-none fixed left-0 top-0 z-50 will-change-transform"
      >
        <div
          className={`h-7    w-7    rounded-full border-2 transition-colors duration-200 ${
            isHovering
              ? "border-accent-green bg-accent-green/10"
              : "border-accent-cyan/30"
          }`}
        />
      </div>

      {/* Inner dot */}
      <div
        className="pointer-events-none fixed left-0 top-0 z-50 will-change-transform"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div
          className={`rounded-full transition-all duration-100 ${
            isHovering
              ? "h-1.5 w-1.5 bg-accent-green"
              : "h-1 w-1 bg-accent-cyan"
          }`}
        />
      </div>
    </>
  );
}
