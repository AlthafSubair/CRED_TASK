import React from 'react'
import ThemeToggler from './ThemeToggler'

const Header = () => {
  return (
    <header className='p-4 w-full flex justify-between items-center'>
        <h1 className='bg-[linear-gradient(to_right,#e7029a_0%,#f472b6_40%,#bd5fff_80%,#e7029a_100%)] bg-clip-text text-transparent sm:text-3xl md:text-4xl text-2xl font-bold'>
            DashBoard
        </h1>
        <ThemeToggler />
    </header>
  )
}

export default Header