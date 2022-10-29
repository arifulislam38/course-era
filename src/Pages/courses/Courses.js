import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Courses = () => {
    return (
        <div className='xl:flex lg:flex sm:block md:flex w-full mb-12'>
            <aside className='xl:w-[25%] lg:w-[25%] md:w-[25%] sm:w-[100%]  mb-4'>
                <h1 className='text-4xl font-serif text-orange-300 mb-8'>Course Category</h1>
                <div className='w-[90%] mx-auto border rounded p-2 flex flex-col gap-3'>
                    
                    <button className='border text-xl font-serif py-3 rounded text-gray-600'><Link to={'/courses/UI UX Design'}>UI/UX Design</Link></button>

                    <button className='border text-xl font-serif py-3 rounded text-gray-600'><Link to={'/courses/Graphic Design'}>Graphic Design</Link></button>

                    <button className='border text-xl font-serif py-3 rounded text-gray-600'><Link to={'/courses/Digital Marketing'}>Digital Marketing</Link></button>

                    <button className='border text-xl font-serif py-3 rounded text-gray-600'><Link to={'/courses/programming language'}>Programming language</Link></button>

                    <button className='border text-xl font-serif py-3 rounded text-gray-600'><Link to={'/courses/AI Language'}>AI Language</Link></button>

                    <button className='border text-xl font-serif py-3 rounded text-gray-600'><Link to={'/courses/DataBase'}>DataBase</Link></button>
                    
                </div>
            </aside>
            <Outlet></Outlet>
        </div>
    );
};

export default Courses;