import React from 'react'

const Footer = () => {
  return (
    <div className='mt-[2rem]'>
      <div className='flex justify-center gap-x-4 mt-[2rem] text-blue-600 font-bold'>
        <a href="/">Home</a>
        <a href="/AllMovie">AllMovie</a>
        <a href="/AddMovie">AddMovie</a>
        <a href="/LatestMovie">LatestMovie</a>
      </div>

      <div className='flex justify-center items-center mt-[1rem] bg-slate-500'>
        <span className="text-white font-bold">&copy;</span>
        <p className='text-white'>copyright 2023 Aeon Studioo</p>
      </div>

    </div>
  )
}

export default Footer
