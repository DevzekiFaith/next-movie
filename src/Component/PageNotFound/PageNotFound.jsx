import React from 'react'
import ErrorImage from "/undraw_traveling_yhxq.svg";
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div>
      <p className='text-center'>Sorry, but the page you are looking for does not exist.</p>
      <div className='flex justify-center items-center flex-1'>
        <img className='h- mt-[5rem]' src={ErrorImage} placeholder="Blur" alt='Error Image' />
      </div>
      <Link to="/"> <h1 className='text-center underline text-blue-600 font-extrabold'>click to Home Page</h1></Link>

    </div>
  )
}

export default PageNotFound
