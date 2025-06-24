"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useXPStore } from "@/store/xpStore";

const ProgressBar = () => {
  const { xp, level } = useXPStore();
  const [progress, setProgress] = useState(xp);
  const controls = useAnimation();
  const [showLevelUp, setShowLevelUp] = useState(false);

  const prevLevelRef = useRef(level); // ⏪ Track previous level

  // Animate progress bar width
  useEffect(() => {
    controls.start({ width: `${progress}%` });
  }, [progress, controls]);

  // Smooth progress update
  useEffect(() => {
    if (xp !== progress) {
      const increment = () => {
        setProgress((prev) => {
          if (prev < xp) return prev + 1;
          return xp;
        });
      };
      const interval = setInterval(increment, 10);
      return () => clearInterval(interval);
    }
  }, [xp, progress]);

  // Show "Level Up" ONLY when level increases
  useEffect(() => {
    if (level > prevLevelRef.current) {
      setShowLevelUp(true);
      const timeout = setTimeout(() => setShowLevelUp(false), 2000);
      prevLevelRef.current = level; // 🔁 update previous level
      return () => clearTimeout(timeout);
    }
  }, [level]);

  return (
    <div className="relative pb-2 flex flex-col justify-center items-center w-full px-12 gap-2">
      {/* Level Up Effect */}
      {showLevelUp && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1.2 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute -top-4 text-pink-500 font-bold text-xl z-10"
        >
          🎉 Level Up! 🎉
        </motion.div>
      )}

      {/* Level Display */}
      <h3 className="text-slate-500 mt-6">Level {level}</h3>

      {/* Progress Track */}
      <div className="relative w-full dark:bg-gray-100 bg-gray-300 rounded-3xl h-3.5 group overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={controls}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="relative bg-[linear-gradient(to_right,#e7029a_0%,#f472b6_40%,#bd5fff_80%,#e7029a_100%)] h-3.5 rounded-3xl"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          {/* Tooltip */}
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs font-semibold bg-black text-white px-2 py-0.5 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {progress}%
          </div>
        </motion.div>
      </div>

      {/* XP Count */}
      <p className="dark:text-gray-400 text-slate-400">
        <span className="dark:text-slate-300 text-gray-600">{progress}</span>
        /100 XP
      </p>
    </div>
  );
};

export default ProgressBar;
