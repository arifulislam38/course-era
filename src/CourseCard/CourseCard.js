
import { FaStar, FaRegStarHalf, FaComment } from 'react-icons/fa';
import { BsAwardFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const CourseCard = ({course}) => {

    const {id, name, description, video, ebook, price, image, rating} = course;
    return (
        
        <div className='border sm:w-[100%] md:w-[32.2%] lg:w-[32.2%] xl:w-[32.2%] p-2 relative'>
            <button className='bg-orange-500 px-2 py-1 absolute top-4 right-0 text-yellow-50'>$ {price}</button>
            <div className='w-full h-full'>
                <img className='w-full h-[40%]' src={image} alt="" />
                <div className='px-2'>
                    <h1 className='text-start text-2xl font-semibold mb-4 mt-4 font-serif'>{name}</h1>
                    <div className='flex justify-between items-center mb-3'>
                        <h2 className='flex text-orange-400 gap-1'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaRegStarHalf></FaRegStarHalf>
                    </h2>
                    <h2><FaComment className='inline text-orange-300'></FaComment> {rating?.count}</h2>
                    <h2><BsAwardFill className='inline text-orange-300'></BsAwardFill> {rating?.badge}</h2>
                    </div>
                    <p className='text-start'>{(description?.descriptions.length) >= 160 ? description.descriptions.slice(0,160)  +' ....' : description.descriptions}</p>

                    <hr className='mt-3 mb-3'/>
                    
                    <div className='flex justify-between mt-6 '>
                        <h1 className='border-r-2 text-xl px-2'>{video}</h1>
                        <h1 className='border-r-2 text-xl px-2'>{ebook}</h1>
                        <button  className='px-2 rounded bg-orange-300'><Link to={`/course/${id}`}>See Details</Link></button>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default CourseCard;