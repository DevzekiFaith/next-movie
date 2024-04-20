import React from 'react'
import WallPaper from "/1267873-movie-poster-wallpaper-2880x1800-ipad-retina.jpg";

const Home = () => {
  return (
    <div className='flex justify-center items-center bg-slate-950'>
      <div className='flex justify-center items-start w-[80%] p-6'>
        <img src={WallPaper} placeholder="Blur" alt="Placeholder" />
      </div>
    </div>
  )
}

export default Home
