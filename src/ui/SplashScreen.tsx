"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useSplash } from "../lib/SplashContext";

export default function SplashScreen() {
  const { markDone } = useSplash();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Total splash duration: 2.8s then exit animation plays (~0.8s)
    const t = setTimeout(() => setVisible(false), 2800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence onExitComplete={markDone}>
      {visible && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-999 flex flex-col items-center justify-center overflow-hidden bg-bg-primary"
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Radial glow behind logo */}
          <motion.div
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <div className="h-105 w-105 rounded-full bg-[#64ffda]/5 blur-[100px]" />
          </motion.div>

          {/* Logo */}
          <div className="relative flex items-center justify-center">
            {/* Spinning ring */}
            <motion.div
              className="absolute h-32 w-32 rounded-full border border-[#64ffda]/20"
              initial={{ rotate: 0, opacity: 0, scale: 0.6 }}
              animate={{ rotate: 360, opacity: 1, scale: 1 }}
              transition={{ rotate: { duration: 8, repeat: Infinity, ease: "linear" }, opacity: { duration: 0.6, delay: 0.2 }, scale: { duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }}
            >
              {/* Dot on the ring */}
              <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#64ffda]" />
            </motion.div>

            {/* Outer pulsing ring */}
            <motion.div
              className="absolute h-44 w-44 rounded-full border border-[#64ffda]/10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.8, 1.05, 1], opacity: [0, 0.6, 0.3] }}
              transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
            />

            {/* Letter mark */}
            <motion.div
              className="relative flex items-baseline gap-px select-none"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.span
                className="text-5xl font-bold tracking-tight text-text-primary"
                animate={{ textShadow: ["0 0 0px #64ffda", "0 0 30px #64ffda55", "0 0 0px #64ffda"] }}
                transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "easeInOut" }}
              >
                K
              </motion.span>
              <motion.span
                className="text-4xl font-bold text-[#64ffda]"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                .
              </motion.span>
            </motion.div>
          </div>

          {/* Name + title */}
          <motion.div
            className="mt-10 flex flex-col items-center gap-1 text-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-sm tracking-[0.25em] text-text-secondary uppercase">
              Khaled Mahomud
            </p>
            <p className="font-mono text-xs tracking-[0.2em] text-[#64ffda]/70 uppercase">
              Frontend Developer
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="absolute bottom-16 left-1/2 h-px w-48 -translate-x-1/2 overflow-hidden rounded-full bg-[#64ffda]/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.4 }}
          >
            <motion.div
              className="h-full rounded-full bg-[#64ffda]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
