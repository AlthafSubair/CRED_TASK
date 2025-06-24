import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className=" rounded-lg mb-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <Link href="/" className="hover:underline">DashBoard</Link>. All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer