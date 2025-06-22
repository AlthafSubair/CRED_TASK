import React from 'react'

const CircularProgress = () => {
  return (
<div className="relative size-40 ">
  <svg
    className="rotate-[135deg] size-full"
    viewBox="0 0 36 36"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Define the gradient */}
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
      className="stroke-current  dark:text-gray-100 text-gray-300"
      strokeWidth="1"
      strokeDasharray="75 100"
      strokeLinecap="round"
    />

    {/* Foreground progress circle with gradient */}
    <circle
      cx="18"
      cy="18"
      r="16"
      fill="none"
      stroke="url(#gradStroke)"
      strokeWidth="2"
      strokeDasharray="56.25 100"
      strokeLinecap="round"
    />
  </svg>

  {/* Centered text */}
  <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
    <span className="text-4xl font-bold ">
      1275
    </span>
    <span className="text-gray-600 dark:text-slate-500 block">of 1600</span>
  </div>
</div>

  )
}

export default CircularProgress