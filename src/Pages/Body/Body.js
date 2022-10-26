import React, { useEffect, useState } from 'react';
import CourseCard from '../../CourseCard/CourseCard';
import { ImUsers } from 'react-icons/im';

const Body = () => {

    const [courses, setCourses] = useState([]);
    console.log(courses);
    useEffect(()=> {
        fetch('http://localhost:5000')
        .then(res => res.json())
        .then(data => setCourses(data));
    }, []);
    
    return (
        <>
        <section className='flex justify-evenly items-center mb-14'>
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