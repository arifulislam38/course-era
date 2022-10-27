import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaComment, FaIdBadge } from 'react-icons/fa';

const CourseDeatails = () => {

    const data = useLoaderData();
    console.log(data)

    const {name, image, video, ebook, rating, description, price, id } = data;

    const {descriptions, title} = description;

    return (
        <section className='mb-40 border-slate-900'>
            <div className='h-[50vh] relative mb-40'>
                <img className='w-full h-full opacity-50' src={image} alt="" />
                <h1 className='text-6xl font-serif absolute bottom-28 left-28'><span className='text-orange-400'>-- Details of</span> {name}</h1>
            </div>
            <div className='flex w-[90%] mx-auto gap-4'>
                <div className='w-[100%]'>
                    <div className='relative'>
                        <img src={image} alt="" className='w-full h-full' />
                        <button className='bg-orange-500 px-2 py-1 absolute top-4 right-0 text-yellow-50'>$ {price}</button>
                        <div className='bg-slate-200 flex justify-between align-center p-8 text-xl font-serif absolute bottom-0 w-full'>
                            <div className='flex justify-between gap-5'>
                                <h2 className='border-r-2 border-gray-500 px-4'>{video}</h2>
                                <h2 className='border-r-2 border-gray-500 px-4'>{ebook}</h2>
                                <h2>{ebook}</h2>
                            </div>
                            <div className='flex justify-between gap-5'>
                                <h2 className='flex gap-2'><FaComment></FaComment> {rating.count}</h2>
                                <h2 className='flex gap-2'><FaIdBadge></FaIdBadge> {rating.badge}</h2>
                            </div>
                        </div>
                    </div>
                    <div className='text-start text-xl mt-7'>
                        <h1 className='mb-7 font-serif text-orange-500 text-3xl'>{title}</h1>
                        <p className='mb-4'>{descriptions}</p>
                        <button className='py-2 px-5 rounded bg-orange-300'><Link to={`/premium/${id}`}>Get Premium Acess</Link></button>
                        
                    </div>
                </div>
                
            </div>
            
        </section>
    );
};

export default CourseDeatails;