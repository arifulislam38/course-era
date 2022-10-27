import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../logo192.png';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';
import { AuthContext } from '../../Context/Auth/Auth';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';


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
        // <nav className={`flex justify-between items-center bg-slate-300 h-[10vh] px-10 shadow-gray-300 ${open? 'mb-32' : 'mb-1'} border-b-2 border-gray-400`}>
 
                    <div className="flex justify-evenly items-center px-5 bg-slate-200">
                        <div className=" font-semibold text-2xl text-orange-300 flex justify-between">
                            <NavLink className='hover:bg-gray-200 p-2 rounded' to={'/courses'}>Courses</NavLink>
                            <NavLink className='hover:bg-gray-200 p-2 rounded' to='/blog'>Blog</NavLink>
                            <NavLink className='hover:bg-gray-200 p-2 rounded' to='/about'>about</NavLink>
                            <NavLink className='hover:bg-gray-200 p-2 rounded' to='/faq'>FAQ</NavLink>
                        </div>
                        <div className="navbar-center">
                            <h1 className='text-5xl font-serif text-orange-400'>Learn Guru</h1>
                        </div>
                        <div className="">
                            <button className='w-7 h-7 font-bold' onClick={changeTheme}>{value === 'light'? <BsMoonStarsFill className='w-full h-full'></BsMoonStarsFill> : <BsSun className='w-full h-full'></BsSun>}</button>
                           {user ?
                            
                           <div className='flex gap-3 justify-center items-center'>
                            <p>{user?.email}</p>
                            <img className='w-[50px] h-[50px] rounded-full' src={user?.photoURL} alt="" />
                            <button onClick={handleLogOut}>Log out</button>
                           </div>
                           :
                           <div className='flex gap-3'>
                            <Link to='login'>Log In</Link>
                            <Link to='register'>Register</Link>
                           </div>
                           }
                        </div>

                        <div className='md:hidden h-6 w-6' onClick={() => setOpen(!open)}>
                            {
                            open ? <ImCross></ImCross> : <FaBars></FaBars>
                            }
                        </div>
                    </div>
        // </nav>
    );
};

export default Header;