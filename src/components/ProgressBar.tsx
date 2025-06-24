"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useXPStore } from "@/store/xpStore";

const ProgressBar = () => {
  const { xp } = useXPStore(); // 🧠 Zustand XP state
  const [progress, setProgress] = useState(xp); // 📊 Local progress state
  const controls = useAnimation(); // 🎮 Animation controller

  // ⏱ Animate when progress changes
  useEffect(() => {
    controls.start({ width: `${progress}%` });
  }, [progress, controls]);

  // 📈 Update progress when XP changes
  useEffect(() => {
    if (xp !== progress) {
      const increment = () => {
        setProgress((prev) => {
          if (prev < xp) return prev + 1;
          return xp;
        });
      };

      const interval = setInterval(increment, 10); // Smooth step animation
      return () => clearInterval(interval);
    }
  }, [xp, progress]);

  return (
    <div className="pb-2 flex flex-col justify-center items-center w-full px-12 gap-2">
      {/* Level text */}
      <h3 className="text-slate-500 mt-2">Level 2</h3>

      {/* Progress Track */}
      <div className="relative w-full dark:bg-gray-100 bg-gray-300 rounded-3xl h-3.5 group overflow-hidden">
        {/* Progress Fill */}
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
