import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react'
import SideImage from "/pexel1.jpg";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import HeroImage from "/pexel22.jpg"

const AddMovie = () => {

  // NUMBER 1 STAGE.
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [rating, setRating] = useState("");

// NUMBER 2 STAGE.

  const clearField = () => {
    setTitle("")
    setDescription("")
    setPosterUrl("")
    setRating("")
  }
  
  // NUMBER 3 STAGE.

  const HandleSubmit = (e) => {
    e.preventDefault();

    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    const newMovies = {
      id: movies.length + 1,
      title: title,
      description: description,
      posterUrl: posterUrl,
      rating: rating,
    }

    console.log(newMovies);

    //1.  GET LOCAL localStorage
    // 2. CHECK IF LOCAL STORAGE IS EMPTY, if it, then create AN EMPTY ARRAY

    // let movies = JSON.parse(localStorage.getItem("movies")) || [];

    //3.  ADD NEW MOVIE TO THE ARRAY

    movies.push(newMovies);

    //4.  SAVE MOVIE ARRAY INTO LOCAL STORAGE USING A METHOD

    localStorage.setItem('movies', JSON.stringify(movies));


    // CLEAR FIELD  AFTER SUBMISSION

    clearField();

  };


  return (
    <div className='flex xl:flex-row flex-col p-[1rem] xl:p-0'>
      <div className="w-[100%] mt-[1rem]">
        <img src={SideImage} placeholder="Blur" alt='' />
      </div>
      <div className='flex flex-col justify-center items-center xl:w-[100%] py-[1rem] xl:p-0 w-[100%]'>
        <div className='relative h-screen mt-[1rem]'>
          {/* <h1>This is the ADDMOVIE Page</h1> */}
          <img className='h-[42.21rem]' src={HeroImage} placeholder="" alt='Hero Image' />
        </div>
        <Form className='absolute xl:w-[32rem] w-[18rem] cursor-pointer' onSubmit={(e) =>HandleSubmit(e)}>
          <Form.Group className="mb-3" controlId="Movie Title">
            <Form.Label className='font-bold'>Movie Title</Form.Label><br></br>
            <Form.Control className='border-1' type="text" placeholder="Enter Movie Title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label className='font-bold'>Description</Form.Label><br></br>
            <Form.Control type="text" placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)}required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="posterUrl">
            <Form.Label className='font-bold'>PosterUrl</Form.Label><br></br>
            <Form.Control type="text" placeholder="Enter PosterUrl" value={posterUrl} onChange={(e) => setPosterUrl(e.target.value)} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="rating">
            <Form.Label className='font-bold'>Rating</Form.Label><br></br>
            <Form.Control type="Number" placeholder="Enter Rating" value={rating} onChange={(e) => setRating(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="rating">
            <Form.Label className='font-bold'>Thriller</Form.Label><br></br>
            <Form.Control type="Video" placeholder="" value={rating} onChange={(e) => setRating(e.target.value)}/>
          </Form.Group>
          <Button className='w-[18rem] xl:w-[32rem] mt-[1rem] uppercase font-extrabold active:' variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
};

export default AddMovie
