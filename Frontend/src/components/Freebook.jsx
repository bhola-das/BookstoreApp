import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from"react-slick"
import { useState,useEffect } from 'react';
import Cards from "./Cards";
import axios from 'axios';


const Freebook = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:3000/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
const filterdata=book.filter((data)=>data.categoray==="free");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      }; 
  return (
   <>
     <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
          Upon visiting the bookstore app, users are welcomed with a curated selection of free books displayed on the homepage. These books include public domain classics, introductory samples of premium titles, and exclusive promotional content from various genres. Users can browse, read summaries, and start reading these free books without any login or sign-up requirements. This open access allows visitors to experience the app's offerings and explore the reading experience before committing to an account.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {filterdata.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
   </>
  )
}

export default Freebook