import React from 'react';
import { Link } from 'react-router-dom';

const Log = () => {
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(form, email, password);
    }
    return (
        <div>
            <section>
            <div className='h-[50vh] border border-red-600 relative'>
                {/* <img src={loginBanner} alt="" className='w-full h-full opacity-50' /> */}
                 <h1 className='absolute top-[60%] left-[10%] text-orange-500 text-5xl font-serif '>
                Welcome to Login Page
            </h1>
            </div>
            
            <div className='py-28'>
            <div class="w-[90%] mx-auto rounded">
                    <div class="grid grid-cols-2 gap-5">
                        <div class="p-8">
                            {/* <img src={image} alt="Register Login"/> */}
                          </div>
               
                        <div class="p-8">
                             
                                <h3 class="text-4xl text-orange-400 font-serif">Login <span>Now</span></h3>

                                <div class="w-[80%] mx-auto">
                                    <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-full mt-12'>
                                    
                                        <input type="email" placeholder="Username or Email" name='email' className='p-4 w-full rounded text-xl border'/>

                                        <input type="password" placeholder="Password" name='password' className='p-4 w-full rounded text-xl border'/>
                                       
                                        <button type='submit' class="w-full bg-orange-200 py-4 rounded  text-xl">Login</button>

                                        
                                    
                                    </form>
                                </div>
                        </div>
                        </div>
                    </div>
                </div>
        </section>
        </div>
    );
};

export default Log;