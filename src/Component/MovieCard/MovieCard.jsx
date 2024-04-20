import { useState } from "react"
import PropTypes from "prop-types"
import React from 'react'
import ProductListPage from "./../ProductListPage/ProductListPage"


const MovieCard = ({ title, description, posterUrl, rating, func, thriller }) => {

  const [openCard, setOpenCard] = useState(false)




  return (


    <div className="w-[100%] relative" onClick={func}>
      <div>
        <div className='xl:w-[300px] w-[350px]  xl:h-[530px] p-[1rem] border shadow-lg ml-[1rem] hover:bg-orange-500  cursor-pointer '>
          <div className="hover:translate-y-3">
            <img className='w-[100%]' src={posterUrl || "https://tinyurl.com/4d5cn9vu"} placeholder="blur" alt='movie poster' />
          </div>
          <h4 className="mt-[1.2rem]">Title: {title}</h4>
          <p className="py-[0.6rem]">Description: {description}</p>
          <h4 className="text-sm">Rating: {rating}</h4>
          <div className="text-sm w-[12rem] h-[4rem] absolute top-0">Thriller: <iframe width="200" height="100" src="https://www.youtube.com/embed/xF-BL8XF4mg?si=di0_fiyObDQDi6rV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
        </div>

      </div>

    </div>
  )
}

MovieCard.propTypes = {
  description: PropTypes.string,
  posterUrl: PropTypes.string,
  rating: PropTypes.number,
  title: PropTypes.string,
  func: PropTypes.string,
}


export default MovieCard
