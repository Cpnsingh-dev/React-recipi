import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch';
import { Api_Url } from './useFetch';
import { Loader } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Utensils, BookOpen } from 'lucide-react';

const RecipiDetailView = () => {
    // console.log(useParams());
    const { id } = useParams();

    const { data, loading, error } = useFetch(`${Api_Url}lookup.php?i=${id}`);

    const meal = data?.meals?.[0];

    const ingredients = [];

    if (meal) {
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];

            if (typeof ingredient === "string" && ingredient.trim()) {
                ingredients.push({
                    ingredient: ingredient.trim(),
                    measure: typeof measure === "string" ? measure.trim() : "",
                });
            }
        }
    }

    const instructions = meal?.strInstructions
        ? meal.strInstructions
            .split(/\r?\n|\./)   // split by newline OR dot
            .map(step => step.trim())
            .filter(step => step.length > 0)
        : [];

    if (loading) return (
        <div className='text-center p-8 text-gray-300'>
            <Loader className='animate-spin inline-block mr-2 text-blue-200' />
            Preparing Your RecipiCard
        </div>
    )

    return (
        <>
            <main className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
                <Link className='text-yellow-400 hover:text-yellow-300 flex items-center mb-6 font-medium transition text-lg group' to={'/'}>
                    <ChevronLeft className='w-6 h-6 mr-1 transition  ' />
                    Back to DashBoard
                </Link>
                <div className='bg-gray-900 p-6 md:p-12 rounded-3xl shadow-2xl shadow-black/70 
                border border-gray-800 '>
                    <div className='lg:flex lg:space-x-12 '>
                        <div className='lg:w-1/2 mb-8 lg:mb-0'>
                            <h1 className='text-4xl font-black text-gray-100 mb-6 leading-tight'>{meal?.strMeal}</h1>
                            <img src={meal.strMealThumb} alt="image" className='w-[350px] h-[350px] rounded-xl shadow-2xl shadow-blaack/50 object-cover border-4 border-gray-800 ring-2 ring-blue-500/50 mx-4 ' />
                        </div>

                        <div className='lg:w-1/2 bg-gray-800 rounded-xl shadow-inner shadow-black/30 border-gray-700'>
                            <h2 className='text-3xl font-bold text-yellow-400 mb-6 flex items-center border-b border-gray-700 pb-3'>
                                <Utensils className='w-7 mt-3 h-7 mr-2 ml-2 text-blue-500' />Key Ingradients
                            </h2>
                            <ul className='grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 list-none p-0'>
                                {ingredients.map((item, index) => (
                                    <li className="bg-gray-100 px-4 py-2 rounded-md text-sm flex justify-between text-black" key={index}>
                                        <span className="font-medium">{item.ingredient}</span>
                                        <span className="text-gray-600">{item.measure && `- ${item.measure}`}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className='mt-8 pt-4 border-t border-gray-700 '>
                                <div className='text-lg text-gray-400 space-x-3 flex flex-wrap gap-y-2'>


                                    <span className=' text-white bg-blue-600 space-x-3 mb-3 px-4 py-1.5 rounded-full font-semibold text-sm shadow-md'>
                                        {meal.strCategory}
                                    </span>
                                    <span className=' text-white bg-green-600 space-x-3 mb-3 px-4 py-1.5 rounded-full font-semibold text-sm shadow-md'>
                                        {meal.strArea}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* instruction */}
                <div className='mt-14 pt-8 border-t border-gray-800'>
                    <h2 className='text-3xl font-bold text-gray-100 mb-8 flex items-center'>
                        <BookOpen className='w-7 h-7 m-3 text-blue-500' />
                        Detail Preparation Step
                    </h2>

                    <ol className='space-y-6 list-none text-gray-300'>
                        {instructions?.map((step, index) => (
                            <li
                                key={index}
                                className='text-lg leading-relaxed bg-gray-800 p-5 rounded-xl border-l-4 border-blue-500 shadow-lg shadow-black/30 transition duration-300 hover:bg-gray-700/50'
                            >
                                <span className='font-extrabold text-yellow-400 mr-3 text-xl'>
                                    {index + 1}
                                </span>
                                {step.trim()}
                            </li>
                        ))}
                    </ol>
                </div>
            </main>
        </>
    );
};

export default RecipiDetailView
