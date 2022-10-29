import React, { useContext, useState } from 'react';
import image from '../images/login-new.png';
import loginBanner from '../images/call_banner.jpg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/Auth/Auth';
import toast from 'react-hot-toast';

const Register = () => {
     const [error, setError] = useState('');
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,  email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                toast.success('Please verify your email address.');
               
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => setError(error));
    }

    const handleEmailVerification  = () => {
        verifyEmail()
        .then(() =>{})
        .catch(error => setError(error));
    }

    

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
                             
                                <h3 class="text-4xl text-orange-400 font-serif">Register <span>Now</span></h3>

                                <div class="w-[80%] mx-auto">
                                    <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-full mt-12'>
                                    
                                        <input type="text" name='name' placeholder="Full Name" className='p-4 w-full rounded text-xl border'/>


                                        <input type="text" name='photourl' placeholder="Photo URL" className='p-4 w-full rounded text-xl border'/>

                                        <input type="email" name='email' placeholder="Username or Email" className='p-4 w-full rounded text-xl border'/>

                                        <input type="password" name='password' placeholder="Password" className='p-4 w-full rounded text-xl border'/>

                                        {error && <p>{error}</p>}
                                       
                                        <button type="submit" className="w-full bg-orange-200 py-4 rounded  text-xl">Create an Account</button>

                                        
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