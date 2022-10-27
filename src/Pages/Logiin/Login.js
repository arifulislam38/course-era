import React, { useContext, useState } from 'react';
import image from '../../images/login-new.png';
import loginBanner from '../../images/call_banner.jpg';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../Context/Auth/Auth';

const Login = () => {
      const [error, setError] = useState('');
    const { signIn, setLoading } = useContext(AuthContext);
    
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                if(user.emailVerified){
                    navigate(from, {replace: true});
                }
                else{
                    toast.error('Your email is not verified. Please verify your email address.')
                }
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }
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
                                    <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-full mt-12'>
                                    
                                        <input type="email" name='email' placeholder="Username or Email" className='p-4 w-full rounded text-xl border'/>

                                        <input type="password" name='password' placeholder="Password" className='p-4 w-full rounded text-xl border'/>
                                       
                                        <button type='submit' class="w-full bg-orange-200 py-4 rounded  text-xl">Login</button>

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