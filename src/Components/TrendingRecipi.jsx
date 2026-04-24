import React from 'react'
import useFetch from './useFetch'
import RecipiCard from './RecipiCard';
import SlickSlider from "react-slick";

import { Link } from 'react-router-dom';

import { Clock, Loader } from 'lucide-react';

const TrendingRecipi = ({ title, fetchUrl }) => {
    const Slider = SlickSlider.default;
    const { data, loading, error } = useFetch(fetchUrl);
    console.log("My main data", data?.meals);
    const meals = data?.meals || [];

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 600,
        autoplaySpeed: 2000,
        cssEase: "linear",
        appendDots: () => null,
        customPaging: () => null,
    };
    if (loading) return (
        <div className='text-center p-8 text-gray-300'>
            <Loader className='animate-spin inline-block mr-2 text-blue-200' />
            Loading {title}...
        </div>
    )

    return (
        <>
            <section className='mt-2 mx-auto '>
                <h2 className='text-3xl font-extrabold text-gray-100 mb-6 tracking-tightborder-1-4 border-yellow-400 pl-4 flex items-center'>
                    <Clock className='w-6 h-6 text-blue-500' />
                    {title}</h2>
                <div className='w-full mx-auto'>

                    <Slider {...settings}>
                        {meals.map(meal => <div className='px-10  flex justify-center' key={meal.idMeal}>
                            <Link to={`/recipi/${meal.idMeal}`}>
                                <div className='relative bg-gray-900 rounded-xl shadow-xl overflow-hidden group transform transition duration-500 cursor-pointer border border-gray-800 hover:shadow-blue-600/50'>
                                    <div className='absolute insert-0 rounded-xl border-2 border-transparent group-hover:border-blue-500/100 transition'>
                                    </div>
                                    <div className='flex justify-center items-center p-5'>
                                        <img src={meal?.strMealThumb} alt="" className='h-[120px] w-[120px] rounded-xl border-yellow-400 transition duration-500 group-hover:scale-105' />
                                    </div>
                                </div>
                            </Link>
                        </div>)}



                    </Slider>

                </div>
            </section>
        </>
    )
}

export default TrendingRecipi
