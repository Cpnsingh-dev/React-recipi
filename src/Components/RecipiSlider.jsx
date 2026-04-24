import React from 'react'
import useFetch from './useFetch'
import RecipiCard from './RecipiCard';
import SlickSlider from "react-slick";

import { Clock, Loader } from 'lucide-react';

const RecipiSlider = ({ title, fetchUrl }) => {
    const Slider = SlickSlider.default;
    const { data, loading, error } = useFetch(fetchUrl);
    console.log("My main data", data?.meals);
    const meals = data?.meals || [];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
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
                <div style={{ width: '90%', margin: 'auto', padding: '10px' }}>

                    <Slider {...settings}>
                        {meals.map(meal => <div className='px-10  flex justify-center' key={meal.idMeal}>

                            <RecipiCard meal={meal} />
                        </div>)}



                    </Slider>

                </div>
            </section>
        </>
    )
}

export default RecipiSlider
