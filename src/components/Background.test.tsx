import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Background from './Background'

describe('Background Component', () => {
  it('renders the background wrapper', () => {
    const { container } = render(<Background />)
    const backgroundDiv = container.querySelector('div')

    expect(backgroundDiv).toBeInTheDocument()
  })

  it('has correct classes for background styles', () => {
    const { container } = render(<Background />)
    const wrapperDiv = container.querySelector('div')

    expect(wrapperDiv).toHaveClass('absolute', 'inset-0')
  })

  it('renders inner grid layer div with correct styles', () => {
    const { container } = render(<Background />)
    const innerDiv = container.querySelectorAll('div')[2]

    expect(innerDiv).toBeInTheDocument()
    expect(innerDiv?.getAttribute('class')).toBeNull()
  })

  it('applies dark mode background styles using Tailwind dark variant', () => {
    const { container } = render(<Background />)
    const styledDiv = container.querySelectorAll('div')[1]

    expect(styledDiv?.className).toContain('dark:bg-[#03030c]')
    expect(styledDiv?.className).toContain('dark:[&>div]:bg-[linear-gradient')
  })
})
