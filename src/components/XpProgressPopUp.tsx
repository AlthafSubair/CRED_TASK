import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import ProgressBar from './ProgressBar'

const XpProgressPopUp = ({ onClose }: { onClose: () => void }) => {
     useEffect(() => {
      const audio = new Audio('/sounds/progress.mp3')
      audio.volume = 0.5
      
    
      audio.play().catch((error) => {
        console.error('Audio play error:', error)
      })
    
      const confettiTimer = setTimeout(() => {
        confetti({
          particleCount: 120,
          spread: 90,
          origin: { y: 0.6 },
        })
      }, 200)
    
      const closeTimer = setTimeout(() => {
        try {
          audio.pause()
          audio.currentTime = 0
        } catch (err) {
          console.warn('Audio cleanup error:', err)
        }
        onClose()
      }, 5000)
    
      return () => {
        try {
          audio.pause()
          audio.currentTime = 0
        } catch (err) {
          console.warn('Audio cleanup error:', err)
        }
        clearTimeout(confettiTimer)
        clearTimeout(closeTimer)
      }
    }, [])
    
  return (
     <AnimatePresence>
      <motion.div
        key="reward-popup"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 dark:bg-black/70 backdrop-blur-md"
      >
        <div className="relative inline-flex overflow-hidden rounded-lg p-[3px] focus:outline-none w-11/12 max-w-md">
          <span className="absolute inset-[-25%] z-0 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%,#e7029a_100%)]"></span>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 flex flex-col w-full h-72 items-center justify-center rounded-lg dark:bg-slate-950 bg-slate-100 text-black text-sm font-medium dark:text-white backdrop-blur-3xl p-4"
          >
            {/* XP Ribbon */}
            <div className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full shadow-lg font-semibold text-xs">
              +20 XP Points
            </div>

            {/* XP Progress bar */}

            <ProgressBar />

            {/* Button */}

            <div className="mt-6">
              <button
                onClick={onClose}
                className="group relative cursor-default w-32 h-10 bg-[linear-gradient(144deg,_#e7029a,_#f472b6_50%,_#bd5fff)] text-white whitespace-nowrap flex flex-wrap rounded-lg overflow-hidden"
              >
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                  OK
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default XpProgressPopUp
