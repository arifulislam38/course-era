import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo192.png';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';
import { AuthContext } from '../../Context/Auth/Auth';

const Header = () => {

    const [value, setValue] = useState('light');

    const {user , logOut} = useContext(AuthContext);

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
        <nav className='mb-4'>
 
                    <div className="navbar bg-slate-200">
                        <div className="navbar-end font-semibold text-2xl text-orange-300 flex justify-evenly">
                            <Link className='hover:bg-gray-200 p-2 rounded' to={'/courses'}>Courses</Link>
                            <Link className='hover:bg-gray-200 p-2 rounded'>Blog</Link>
                            <Link className='hover:bg-gray-200 p-2 rounded'>about</Link>
                            <Link className='hover:bg-gray-200 p-2 rounded'>FAQ</Link>
                        </div>
                        <div className="navbar-center">
                            <img className='w-16' src={logo} alt=''></img> 
                        </div>
                        <div className="navbar-start">
                            <button className='w-7 h-7 font-bold' onClick={changeTheme}>{value === 'light'? <BsMoonStarsFill className='w-full h-full'></BsMoonStarsFill> : <BsSun className='w-full h-full'></BsSun>}</button>
                           {user ?
                            
                           <div className='flex gap-3'>
                            <p>{user?.email}</p>
                            <img src={user?.photoURL} alt="" />
                            <button onClick={handleLogOut}>Log out</button>
                           </div>
                           :
                           <div className='flex gap-3'>
                            <Link to='login'>Log In</Link>
                            <Link to='register'>Register</Link>
                           </div>
                           }
                        </div>
                    </div>
        </nav>
    );
};

export default Header;