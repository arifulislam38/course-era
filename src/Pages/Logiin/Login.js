import React from 'react';
import image from '../../images/login-new.png';
import loginBanner from '../../images/call_banner.jpg';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section>
            <div className='h-[50vh] border border-red-600 relative'>
                <img src={loginBanner} alt="" className='w-full h-full opacity-50' />
                 <h1 className='absolute top-[60%] left-[10%] text-orange-500 text-5xl font-serif '>
                Welcome to Login Page
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
                                    
                                        <input type="email" placeholder="Username or Email" className='p-4 w-full rounded text-xl border'/>

                                        <input type="password" placeholder="Password" className='p-4 w-full rounded text-xl border'/>
                                       
                                        <button class="w-full bg-orange-200 py-4 rounded  text-xl">Login</button>

                                        <button class="w-full bg-orange-200 py-4 rounded  text-xl">Login with Google</button>

                                        <button class="w-full bg-orange-200 py-4 rounded  text-xl">Login with GitHub</button>

                                        <p>For creating new account <Link to='/register' className='text-orange-300 underline'>Create new account</Link></p>
                                    
                                    </form>
                                </div>
                        </div>
                        </div>
                    </div>
                </div>
        </section>
        
        
    );
};

export default Login;