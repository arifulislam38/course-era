import React, { useEffect, useState } from 'react';
import CourseCard from '../../CourseCard/CourseCard';

const Body = () => {

    const [courses, setCourses] = useState([]);
    console.log(courses);
    useEffect(()=> {
        fetch('http://localhost:5000')
        .then(res => res.json())
        .then(data => setCourses(data));
    }, []);
    
    return (
        <section>
            <p className='text-2xl font-serif mb-6'>BUILD YOUR CAREER</p>
            <h1 className='text-5xl text-orange-400 font-semibold font-serif mb-10'>Our Featured Courses</h1>
            <div className='w-[90%] flex flex-wrap gap-5 mx-auto'>
                {courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)}
            </div>
        </section>    
    );
};

export default Body;