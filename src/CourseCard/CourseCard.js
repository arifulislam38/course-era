import React from 'react';

const CourseCard = ({course}) => {
    const {name, description, video, ebook, price, image} = course;
    return (
        <div className='border w-[32.2%] p-2 transp h-[450px]'>
            <div className='w-full h-full'>
                <img className='w-full h-[40%]' src={image} alt="" />
                <div className='px-2'>
                    <h1 className='text-start text-2xl font-semibold mb-4 mt-4'>{name}</h1>
                    <h2 className='text-start text-lg mb-6'>{description.location}</h2>
                    <hr className='w-[80%] mx-auto'/>
                    <p className='flex justify-between text-lg font-semibold mt-6'>
                        <span>{video}</span> 
                        <span>{ebook}</span>
                    </p>
                    <div className='flex justify-between mt-6'>
                        <h1 className='text-4xl font-semibold'>$ {price}</h1>
                        <button className='btn'>See Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;