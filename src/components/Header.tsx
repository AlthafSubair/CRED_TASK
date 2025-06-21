import React from 'react'
import ThemeToggler from './ThemeToggler'

const Header = () => {
  return (
    <header className='p-4 w-full flex justify-between items-center'>
      
    

        <h1 className='bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent sm:text-3xl md:text-4xl text-2xl font-bold'>
            DashBoard
        </h1>

        <ThemeToggler />
    </header>
  )
}

export default Header