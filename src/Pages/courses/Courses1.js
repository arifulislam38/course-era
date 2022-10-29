import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../CourseCard/CourseCard';

const Courses1 = () => {
    const data = useLoaderData();
    console.log(data)

    return (
       <div className='lg:w-[75%] xl:w-[75%] md:w-[75%] sm:w-[100%] flex flex-wrap gap-3'>

         {data? 
            data.map(course => <CourseCard course={course}></CourseCard>) 
            :
            <div className='flex justify-center items-center text-3xl text-red-400 font-serif w-full'><p>No data found</p></div>
          
          }
         {/* {!data ? <p>No data found</p> : ''} */}
       </div>
    );
};

export default Courses1;