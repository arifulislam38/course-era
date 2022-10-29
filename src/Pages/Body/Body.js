import React, { useEffect, useState } from 'react';
import { ImUsers } from 'react-icons/im';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../CourseCard/CourseCard';

const Body = () => {

    const courses = useLoaderData();
    console.log(courses);
    
    return (
        <>
        <section className='mb-8'>
            <div className='w-[95%] h-[80vh] mx-auto rounded-md bg-slate-400 flex justify-center items-center'>
                <h1 className='text-5xl font-serif text-orange-300'>Welcome To Learning Guru</h1>
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