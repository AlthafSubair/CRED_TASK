import { useRewardStore } from '@/store/RewardStore';
import React, { useEffect, useRef, useState } from 'react';

const TOTAL = 1600;
const MAX_ARC = 75;

const CircularProgress = () => {
  const { points } = useRewardStore();

  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  // Animate progress toward updated points
  useEffect(() => {
    const animate = () => {
      setProgress((prev) => {
        const diff = points - prev;
        if (Math.abs(diff) < 1) {
          return points;
        }
        return prev + diff * 0.1;
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [points]); // ✅ react to external changes in points

  // Calculate arc
  const percentage = Math.min(progress / TOTAL, 1);
  const dash = percentage * MAX_ARC;
  const strokeDasharray = `${dash} 100`;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative size-40">
        <svg
          className="rotate-[135deg] size-full"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradStroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e7029a" />
              <stop offset="50%" stopColor="#f472b6" />
              <stop offset="75%" stopColor="#bd5fff" />
              <stop offset="100%" stopColor="#e7029a" />
            </linearGradient>
          </defs>

          {/* Background circle */}
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            className="stroke-current dark:text-gray-100 text-gray-300"
            strokeWidth="1"
            strokeDasharray="75 100"
            strokeLinecap="round"
          />

          {/* Animated foreground arc */}
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            stroke="url(#gradStroke)"
            strokeWidth="2"
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
          />
        </svg>

        {/* Center content */}
        <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <span className="text-4xl font-bold">
            {Math.round(progress)}
          </span>
          <span className="text-gray-600 dark:text-slate-500 block">
            of {TOTAL}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;

