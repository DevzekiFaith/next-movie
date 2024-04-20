import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import MovieIcon from "/film.svg"
import Image001 from "/list (1).svg"
import Image002 from "/x.svg"

const NavBar = () => {

  const [showMovie, setShowMovie] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setShowMovie(!showMovie);

  }
  const HandleToggle = () => {
    setToggle(!toggle);
  }


  return (
    <div>
      <div className='flex justify-between p-3 bg-slate-600 text-white relative '>
        <Link to="/">
          <div className='flex gap-2 items-end'>
            <img className='w-[2rem]' src={MovieIcon} alt="movie icon" />
            <h5 className='font-extrabold'>movie</h5>
          </div>
        </Link>
        <div className='xl:flex xl:flex-row flex-col justify-end gap-x-4 hidden'>
          <a href="/">Home</a>
          <a href="/AllMovie">AllMovie</a>
          <a href="/AddMovie">AddMovie</a>
          <a href="/LatestMovie">LatestMovie</a>
        </div>
        {/* <div className='xl:hidden block'>
          <img className='ml-[2rem] w-[2rem]' src={Image001} alt='Burger' />
        </div> */}
      </div>

      <div className="xl:hidden block">
        {!toggle ?

          (<button className='absolute top-0 right-3 mt-3 xl:hidden block' onClick={HandleToggle}><img className='ml-[2rem] w-[2rem]' src={Image001} alt='Burger' /></button>)
          :
          (<div className='border w-[16rem] absolute top-[4rem] right-[4rem] h-[14rem] bg-white shadow-2xl '>
            <div className=" bg-green-500">
              <marquee direction="right">This is the modal version</marquee>
            </div>
            <div className='ml-[13rem] border cursor-pointer w-[2rem] h-[2rem] rounded-[50%] border-primary-500 mt-[0.6rem] shadow-2xl' onClick={HandleToggle}>
              <img className='w-[2rem] ' src={Image002} alt='close button' />
            </div>
            <div className='flex xl:flex-row flex-col justify-center items-center gap-2'>
              <a href="/">Home</a>
              <a href="/AllMovie">AllMovie</a>
              <a href="/AddMovie">AddMovie</a>
              <a href="/LatestMovie">LatestMovie</a>
            </div>
          </div>)}
      </div>
    </div>
  )
}

export default NavBar
