import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../CourseCard/CourseCard';

const Courses1 = () => {
    const data = useLoaderData();
    console.log(data)

    return (
       <div className='w-[60%] flex flex-wrap gap-3'>
         {data.map(course => <CourseCard course={course}></CourseCard>)}
       </div>
    );
};

export default Courses1;