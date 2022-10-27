import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PremiumCourse = () => {

    const data = useLoaderData();

    const {name} = data;
    return (

        
        <div>
            <div className='w-[90%] bg-stone-700 rounded-lg h-[90vh] mx-auto flex justify-center items-center'>
                <h1 className='text-3xl text-orange-300 font-serif'>premium page for {name}</h1>
            </div>
        </div>
    );
};

export default PremiumCourse;