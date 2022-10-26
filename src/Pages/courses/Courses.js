import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Courses = () => {
    return (
        <div className='flex mb-12'>
            <aside className='w-[25%]'>
                <h1 className='text-4xl font-serif text-orange-300 mb-8'>Course Category</h1>
                <div className='w-[90%] mx-auto border rounded p-2 flex flex-col gap-3'>
                    
                    <button className='border text-xl font-serif py-3 rounded text-gray-600'><Link>UI/UX Design</Link></button>
                    <button className='border text-xl font-serif py-3 rounded text-gray-600'>Grapic Design</button>
                    <button className='border text-xl font-serif py-3 rounded text-gray-600'>Marketing</button>
                    <button className='border text-xl font-serif py-3 rounded text-gray-600'><Link to={'/courses/programming language'}>Programming language</Link></button>
                    <button className='border text-xl font-serif py-3 rounded text-gray-600'>AI Language</button>
                    
                </div>
            </aside>
            <Outlet></Outlet>
        </div>
    );
};

export default Courses;