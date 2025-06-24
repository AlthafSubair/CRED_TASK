import React from 'react'
import { render, screen, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import BalanceAmount from '../components/BalanceAmount'

jest.mock('@/store/paymentStore', () => ({
    usePaymentStore: jest.fn(),
}))

import { usePaymentStore } from '@/store/paymentStore'

describe('BalanceAmount Component', () => {
    beforeEach(() => {
        jest.useFakeTimers()
    })

    afterEach(() => {
        jest.runOnlyPendingTimers()
        jest.useRealTimers()
        jest.clearAllMocks()
    })

    it('renders the balance amount correctly', () => {
        ; (usePaymentStore as unknown as jest.Mock).mockReturnValue({ amount: 100 })

        render(<BalanceAmount />)

        expect(screen.getByText('Available Balance')).toBeInTheDocument()
        expect(screen.getByText('$ 100')).toBeInTheDocument()
    })

    it('animates balance increasing smoothly', () => {
        let storeAmount = 100
            ; (usePaymentStore as unknown as jest.Mock).mockImplementation(() => ({ amount: storeAmount }))

        render(<BalanceAmount />)

         expect(screen.getByText((text) => text.includes('100'))).toBeInTheDocument()

        // Simulate store update
        storeAmount = 105
            ; (usePaymentStore as unknown as jest.Mock).mockImplementation(() => ({ amount: storeAmount }))

        act(() => {
            jest.advanceTimersByTime(60) // enough time to animate from 100 to 105
        })

        expect(screen.getByText((content) => content.includes('$') && content.includes('105'))).toBeInTheDocument()

    })
    it('animates balance decreasing smoothly', () => {
        let storeAmount = 200
            ; (usePaymentStore as unknown as jest.Mock).mockImplementation(() => ({ amount: storeAmount }))

        render(<BalanceAmount />)
         expect(screen.getByText((text) => text.includes('200'))).toBeInTheDocument()

        // Simulate decrease
        storeAmount = 195
            ; (usePaymentStore as unknown as jest.Mock).mockImplementation(() => ({ amount: storeAmount }))

        act(() => {
            jest.advanceTimersByTime(60)
        })

        expect(screen.getByText((content) => content.includes('$') && content.includes('195'))).toBeInTheDocument()

    })
    it('does not animate if amount is unchanged', () => {
        ; (usePaymentStore as unknown as jest.Mock).mockReturnValue({ amount: 150 })

        render(<BalanceAmount />)

        act(() => {
            jest.advanceTimersByTime(100)
        })

        expect(screen.getByText('$ 150')).toBeInTheDocument()
    })


})
