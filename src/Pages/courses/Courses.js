import React from 'react';
import { Outlet } from 'react-router-dom';

const Courses = () => {
    return (
        <div className='flex'>
            <aside className='w-[30%] bg-slate-300'>this is course page</aside>
            <Outlet></Outlet>
        </div>
    );
};

export default Courses;