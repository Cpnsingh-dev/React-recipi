import React from 'react'
import { Key, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

const CategorySelection = () => {
    const featuredArea = [
        "American",
        "British",
        "Canadian",
        "Chinese",
        "Italian",
        "Mexican",
        "Russian",
        "Thai"
    ];
    return (
        <>
            <section className='mt-2 mx-auto '>
                <h2 className='text-3xl font-extrabold text-gray-100 mb-6 tracking-tightborder-1-4 border-yellow-400 pl-4 flex items-center'>
                    <Utensils className='w-6 h-6 text-blue-500' />
                    Quick Filter By Primary Ingredients
                </h2>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                    {featuredArea.map((cat, index) => <Link to={`/search/${cat}`} Key={index} className='bg-gray-800 p-4 rounded-xl shadow-xl shadow-black transition duration-300 text-center font-semibold text-gray-100 border border-gray-700 hover:border-blue-500 hover:text-blue-400 transform hover:scale-[1.05] hover:bg-gray-700/50'>
                        {cat}
                    </Link>)}
                </div>
            </section>
        </>
    )
}

export default CategorySelection
