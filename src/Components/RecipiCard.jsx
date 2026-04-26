import React from 'react'
import { Link } from 'react-router-dom';

const RecipiCard = ({ meal }) => {

    return (
        <Link to={`/recipi/${meal.idMeal}`}>
            <div className='relative bg-gray-900 rounded-xl shadow-xl overflow-hidden group transform transition duration-500 cursor-pointer border border-gray-800 hover:shadow-blue-600/50'>
                <div className='absolute insert-0 rounded-xl border-2 border-transparent group-hover:border-blue-500/100 transition'>
                </div>
                <div className='flex justify-center items-center p-5'>
                    <img
                        src={meal?.strMealThumb}
                        alt={meal?.strMeal}
                        className='w-full h-48 object-cover rounded-xl transition duration-500 group-hover:scale-105'
                    />
                </div>
                <div className='p-2 text-center '>
                    <h3 className='text-xl pb-3 font-bold text-gray-100 mb-1 group-hover:text-blue-400 transition duration-300'>{meal.strMeal}</h3>
                </div>
            </div>
        </Link>
    );
}

export default RecipiCard
