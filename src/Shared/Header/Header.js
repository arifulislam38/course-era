import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo192.png';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';

const Header = () => {

    const [value, setValue] = useState('light');

useEffect(()=> {
    document.getElementsByTagName("html")[0].setAttribute("data-theme", value);
}, [value]);

    const changeTheme = () => {
        if (value === 'light'){
            setValue('dark');
        }
        else{
            setValue('light');
        }
    }
    return (
        <nav className='h-[90vh]'>
          
        <div className="carousel w-screen h-full">
                <div id="item1" className="carousel-item w-full relative">
                    <img src="https://placeimg.com/800/200/arch" alt='' className="w-full" />
                    <div className='absolute top-[30%] left-[50%] text-yellow-700 text-2xl translate-x-[-50%]'>
                        <h1>javascript</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta voluptatum tempore nam facilis velit eius porro fugiat a veniam suscipit!</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#item4" className="btn btn-circle">❮</a> 
      <a href="#item2" className="btn btn-circle">❯</a>
    </div>
                </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://placeimg.com/800/200/arch"  alt='' className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://placeimg.com/800/200/arch"  alt='' className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="https://placeimg.com/800/200/arch"  alt='' className="w-full" />
  </div>
</div> 

<div className="navbar bg-transparent absolute top-0">
            <div className="navbar-end font-semibold text-2xl text-white flex justify-evenly">
               <Link className='hover:bg-gray-200 p-2 rounded'>Courses</Link>
               <Link className='hover:bg-gray-200 p-2 rounded'>Blog</Link>
               <Link className='hover:bg-gray-200 p-2 rounded'>about</Link>
               <Link className='hover:bg-gray-200 p-2 rounded'>FAQ</Link>
            </div>
            <div className="navbar-center">
               <img className='w-16' src={logo} alt=''></img> 
            </div>
            <div className="navbar-start">
               <button className='w-7 h-7 font-bold' onClick={changeTheme}>{value === 'light'? <BsMoonStarsFill className='w-full h-full'></BsMoonStarsFill> : <BsSun className='w-full h-full'></BsSun>}</button>
            </div>
        </div>
</nav>
    );
};

export default Header;