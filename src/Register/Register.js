import React from 'react';
import image from '../images/login-new.png';
import loginBanner from '../images/call_banner.jpg';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <section>
            <div className='h-[50vh] border border-red-600 relative'>
                <img src={loginBanner} alt="" className='w-full h-full opacity-50' />
                 <h1 className='absolute top-[60%] left-[10%] text-orange-500 text-5xl font-serif '>
                Welcome to Register Page
            </h1>
            </div>
            
            <div className='py-28'>
            <div class="w-[90%] mx-auto rounded">
                    <div class="grid grid-cols-2 gap-5">
                        <div class="p-8">
                            <img src={image} alt="Register Login"/>
                          </div>
               
                        <div class="p-8">
                             
                                <h3 class="text-4xl text-orange-400 font-serif">Login <span>Now</span></h3>

                                <div class="w-[80%] mx-auto">
                                    <form action="#" className='flex flex-col gap-5 w-full mt-12'>
                                    
                                        <input type="text" placeholder="User Name" className='p-4 w-full rounded text-xl border'/>

                                        <input type="email" placeholder="Username or Email" className='p-4 w-full rounded text-xl border'/>

                                        <input type="password" placeholder="Password" className='p-4 w-full rounded text-xl border'/>
                                       
                                        <button class="w-full bg-orange-200 py-4 rounded  text-xl">Create an Account</button>

                                        <button class="w-full bg-orange-200 py-4 rounded  text-xl">Signup with Google</button>

                                        <button class="w-full bg-orange-200 py-4 rounded  text-xl">SignUp with GitHub</button>
                                        <p>Alrady have an account? <Link to='/login' className='text-orange-300 underline'>Log in</Link> </p>
                                    
                                    </form>
                                </div>
                        </div>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default Register;