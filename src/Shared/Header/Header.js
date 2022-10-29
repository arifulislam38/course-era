import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';
import { AuthContext } from '../../Context/Auth/Auth';
import { FaBars, FaUser } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import logo from '../../images/learning-guru.png'


const Header = () => {

    const [value, setValue] = useState('light');

    const {user , logOut} = useContext(AuthContext);

    const [open, setOpen] = useState(false);

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
    };

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    };
    return (
        <nav className={`flex justify-between items-center w-full bg-slate-300 h-[70px] px-10 shadow-gray-300 ${open? 'mb-32' : 'mb-4'} border-b-2 border-slate-200`}>
          <div>
            <Link to='/' className='lg:text-5xl sm:text-4xl text-2xl text-orange-400 font-serif sm:text-start sm:hidden md:flex lg:flex xl:flex hidden'>Learning Guru</Link>
            <Link to='/'><img className='rounded-full w-[50px] h-[50px] md:hidden lg:hidden xl:hidden sm:block bg-orange-200' src={logo} alt="" /></Link>
          </div>


            
            <div className=" flex justify-between items-center gap-3 text-xl text-orange-400 ">
                            <button className='w-7 h-7 font-bold' onClick={changeTheme}>{value === 'light'? <BsMoonStarsFill className='w-full h-full'></BsMoonStarsFill> : <BsSun className='w-full h-full'></BsSun>}</button>
                           {user ?
                            
                           <div className='flex gap-3 justify-center items-center'>
                           
                            {user.photoURL ? 
                              <img title={user.displayName} className='w-[50px] h-[50px] rounded-full' src={user?.photoURL} alt="" />
                              :
                              <FaUser title={user.displayName} className='w-[50px] h-[50px] rounded-full'></FaUser>
                            }
                            <button onClick={handleLogOut}>Log out</button>
                           </div>
                           :
                           <div className='flex gap-3'>
                            <button className='border rounded-lg py-1 px-2 bg-orange-300 hover:bg-orange-200'><NavLink to='/login' className={({isActive}) => isActive ? 'text-blue-500' : 'text-white'}>LogIn</NavLink></button>

                            <button className='border rounded-lg py-1 px-2 bg-orange-300 hover:bg-orange-200'><NavLink to='/register' className={({isActive}) => isActive ? 'text-blue-500' : 'text-white'}>Register</NavLink></button>
                           </div>
                           }
            </div>



          <div className={`lg:text-xl md:text-xl text-lg text-orange-400 flex gap-4 absolute md:static ${open? 'top-16 flex flex-col bg-slate-300 ml-[-40px] w-full': 'top-[-400px]'}`} >
              <NavLink to='/' className={({isActive}) => isActive ? 'text-blue-500' : ''}>Home</NavLink>

              <NavLink to='/courses' className={({isActive}) => isActive ? 'text-blue-500' : ''}>Courses</NavLink>

              <NavLink to='/faq' className={({isActive}) => isActive ? 'text-blue-500' : ''}>FAQ</NavLink>

              <NavLink to='/blog' className={({isActive}) => isActive ? 'text-blue-500' : ''}>Blog</NavLink>
          </div>
          <div className='md:hidden h-6 w-6' onClick={() => setOpen(!open)}>
            {
              open ? <ImCross></ImCross> : <FaBars></FaBars>
            }
          </div>
        </nav>
    );
};

export default Header;