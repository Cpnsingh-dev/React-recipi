import React from 'react'
import RecipiSlider from './RecipiSlider';
import CategorySelection from './CategorySelection';
import TrendingRecipi from './TrendingRecipi';

import { Api_Url } from './useFetch';


const HomeView = () => {
    return (
        <>
            <main className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
                <RecipiSlider title="Staff Curated Picks" fetchUrl={`${Api_Url}search.php?f=c
`} />

                <TrendingRecipi title="Quick & Easy Meal" fetchUrl={`${Api_Url}filter.php?a=Canadian
`} />

                <CategorySelection />
            </main>
        </>
    )
}

export default HomeView
