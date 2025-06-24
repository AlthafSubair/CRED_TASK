import { useState } from 'react'
import { rechargeOptions } from '@/database/Bills'
import Recharges from './Recharges'
import { usePaymentStore } from '@/store/paymentStore'
import { useRewardStore } from '@/store/RewardStore'
import BillsPopUp from './BillsPopUp'
import RewradProgessPopup from './RewradProgressPopup'

interface SelectedBill {
  id: number
  text: string
  amount: number
}

const BillsAndRecharge = () => {
  const { pay } = usePaymentStore()
  const { update } = useRewardStore()
  const [bills, setBills] = useState(rechargeOptions)
  const [showLevelUp, setShowLevelUp] = useState(false)


  const [selectedBill, setSelectedBill] = useState<SelectedBill | null>(null)

  const handleBillPayment = (value: number) => {
    pay(value)
    update(20)
    setBills(bills.filter((bill) => bill?.id !== selectedBill?.id))
    setSelectedBill(null) // Close popup after payment
     setShowLevelUp(true)
      
  }

  return (
    <section>
      <h1 className='text-black dark:text-white md:text-3xl sm:text-xl text-lg font-bold px-4 md:px-0'>
        Bills & Recharge
      </h1>

      <div className="p-4 flex flex-row flex-wrap gap-4 md:px-0 mx-auto">
        {bills.map(({ id, icon: Icon, text, amount }) => (
          <button
            key={id}
            onClick={() => setSelectedBill({ id, text, amount })}
            className="w-[calc(33.333%-0.999rem)] sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.999rem)] lg:w-[calc(25%-0.75rem)]"
          >
            <Recharges Icon={Icon} text={text} />
          </button>
        ))}
      </div>

      {/* Modal */}
      {selectedBill && (
        <BillsPopUp setSelectedBill={setSelectedBill} selectedBill={selectedBill} handleBillPayment={handleBillPayment}/>
      )}

      {showLevelUp && (
        <RewradProgessPopup onClose={() => setShowLevelUp(false)} />
      )}

    </section>
  )
}

export default BillsAndRecharge
