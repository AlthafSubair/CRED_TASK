import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaHandshake } from 'react-icons/fa6'
import { toast } from 'react-hot-toast'

interface SelectedBill {
  id: number
  text: string
  amount: number
}

interface BillsPopUpProps {
  handleBillPayment: (value: number) => void
  selectedBill: SelectedBill
  setSelectedBill: (bill: SelectedBill | null) => void
}

const BillsPopUp = ({ handleBillPayment, selectedBill, setSelectedBill }: BillsPopUpProps) => {

  // ESC key closes modal
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedBill(null)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [setSelectedBill])

  const handlePay = () => {
    navigator.vibrate?.(150) // vibrate mobile
    toast.success("Payment Successful!")
    handleBillPayment(selectedBill.amount)
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 dark:bg-black/70 backdrop-blur-md"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative dark:bg-slate-950 bg-white text-black dark:text-white rounded-xl shadow-xl border dark:border-slate-700 border-slate-300 w-11/12 max-w-md p-6"
        >

          {/* Close Button */}
          <button
            onClick={() => setSelectedBill(null)}
            className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
            aria-label="Close dialog"
          >
            &times;
          </button>

          {/* Heading */}
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-3">
            <FaHandshake size={24} className="text-[#e7029a]" />
            Confirm Payment
          </h2>

          {/* Info Text */}
          <p className="mb-10 text-sm leading-relaxed">
            You are about to pay <strong>₹{selectedBill.amount}</strong> for{' '}
            <strong>{selectedBill.text}</strong>.
          </p>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <button
              className="px-4 py-2 w-28 h-10 rounded-md bg-white dark:bg-gray-950 border dark:border-slate-400 hover:bg-gray-100 dark:hover:bg-gray-600"
              onClick={() => setSelectedBill(null)}
            >
              Cancel
            </button>

            <button
              onClick={handlePay}
              className="relative w-32 h-10 inline-flex active:scale-95 transition overflow-hidden rounded-lg p-[1px] focus:outline-none"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
              <span className="inline-flex h-full w-full items-center justify-center rounded-lg dark:bg-slate-950 bg-white px-7 text-sm font-medium dark:text-white text-black backdrop-blur-3xl">
                Pay Now
              </span>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default BillsPopUp
