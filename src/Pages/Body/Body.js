import React, { useEffect, useState } from 'react';
import { ImUsers } from 'react-icons/im';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../CourseCard/CourseCard';

const Body = () => {

    const courses = useLoaderData();
    console.log(courses);
    
    return (
        <>
        <section className='flex flex-row md:flex-col xl:flex-row lg:flex-row sm:flex-col  justify-evenly items-center mb-14'>
            <div className='bg-orange-200 rounded p-4 flex justify-evenly items-center gap-6'>
                <div><ImUsers className='w-12 h-12'></ImUsers></div>
                <div className='text-start text-xl font-semibold'><h2>1200+</h2>
                <h2>Expert Tutors</h2></div>
            </div>
            <div className='bg-orange-200 rounded p-4 flex justify-evenly items-center gap-6'>
                <div><ImUsers className='w-12 h-12'></ImUsers></div>
                <div className='text-start text-xl font-semibold'><h2>1200+</h2>
                <h2>Expert Tutors</h2></div>
            </div>
            <div className='bg-orange-200 rounded p-4 flex justify-evenly items-center gap-6'>
                <div><ImUsers className='w-12 h-12'></ImUsers></div>
                <div className='text-start text-xl font-semibold'><h2>1200+</h2>
                <h2>Expert Tutors</h2></div>
            </div>
            <div className='bg-orange-200 rounded p-4 flex justify-evenly items-center gap-6'>
                <div><ImUsers className='w-12 h-12'></ImUsers></div>
                <div className='text-start text-xl font-semibold'><h2>1200+</h2>
                <h2>Expert Tutors</h2></div>
            </div>
        </section>
            <section>
            <p className='text-2xl font-serif mb-6'>BUILD YOUR CAREER</p>
            <h1 className='text-5xl text-orange-400 font-semibold font-serif mb-10'>Our Featured Courses</h1>
            <div className='w-[90%] flex flex-wrap gap-5 mx-auto'>
                {courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)}
               
            </div>
        </section>  
        </>
          
    );
};

export default Body;