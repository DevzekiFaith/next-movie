import React from 'react'
import { useState } from 'react'
import Image001 from "/list (1).svg"
import Image002 from "/x.svg"


const Modal = () => {
  return (


    <div className='border w-[16rem] absolute top-[4rem] right-[4rem] h-[14rem] bg-white shadow-2xl '>
      <div className=" bg-green-500">
        <marquee direction="right">This is the modal version</marquee>
      </div>
      <div className='ml-[13rem] border cursor-pointer w-[2rem] h-[2rem] rounded-[50%] border-primary-500 mt-[0.6rem] shadow-2xl' onClick={HandleToggle}>
        <img className='w-[2rem] ' src={Image002} alt='close button' />
      </div>

      <div className="xl:hidden sm:d-block md:d-block">
          {!toggle ?

            (<button onClick={HandleToggle}><img className='ml-[2rem] w-[2rem]' src={Image001} alt='Burger' /></button>)
            :
            (<div className='border w-[16rem] absolute top-[4rem] right-[4rem] h-[14rem] bg-white shadow-2xl '>
              <div className=" bg-green-500">
                <marquee direction="right">This is the modal version</marquee>
              </div>
              <div className='ml-[13rem] border cursor-pointer w-[2rem] h-[2rem] rounded-[50%] border-primary-500 mt-[0.6rem] shadow-2xl' onClick={HandleToggle}>
                <img className='w-[2rem] ' src={Image002} alt='close button' />
              </div>
          </div>)}
        </div>
     
    </div>
  )
}

export default Modal
