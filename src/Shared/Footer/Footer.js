import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const Footer = () => {
    return (
<footer>
        <div class="bg-black mt-5 text-gray-300 text-start">
            <div class="w-[80%] mx-auto p-4">
                <div class="grid grid-cols-3 gap-5">


                    <div class="text-xl font-serif">
                        <div class="flex flex-col gap-5">
                           <img src="assets/images/icon/logo.png" alt="image" className='mb-8' />
                            <div class="">
                                <h6 className='text-orange-300'>Office Address</h6>
                                <p>London Oxford Street, 012 United Kingdom.</p>
                            </div>
                            <div class="">
                                <h6 className='text-orange-300'>Business Phone</h6>
                                <p>+012 3456 7890</p>
                            </div>
                            <div class="">
                                <h6 className='text-orange-300'>Business Email</h6>
                                <p>Business@themerocket.net</p>
                            </div>

                            <ul class="">
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>


                    <div class="">
                        <div class="text-xl font-serif">
                            <h4 class="mb-8 text-orange-300 text-2xl">Footer Menu</h4> 
                            <ul className='flex flex-col gap-3'>
                                <li className='border-b-2 border-gray-600 py-2'><FaAngleRight className='text-orange-500 inline'></FaAngleRight> Case Studies</li>
                                <li className='border-b-2 border-gray-600 py-2'><FaAngleRight className='text-orange-500 inline'></FaAngleRight> About Us</li>
                                <li className='border-b-2 border-gray-600 py-2'><FaAngleRight className='text-orange-500 inline'></FaAngleRight> Our Story</li>
                                <li className='border-b-2 border-gray-600 py-2'><FaAngleRight className='text-orange-500 inline'></FaAngleRight> Blog Post</li>
                                <li className='border-b-2 border-gray-600 py-2'><FaAngleRight className='text-orange-500 inline'></FaAngleRight> Work with Us</li>
                            </ul>
                        </div>
                    </div>


                    <div class="">
                        <div class="text-xl font-serif flex flex-col gap-3">
                            <h4 class="text-2xl text-orange-300 mb-8">Working Day &amp; time</h4>
                            <p>Architecto beatae vitae dicta sunt ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
                            <ul className='flex flex-col gap-3'>
                                <li><span>Mon - Tus : </span>6.00 am - 10.00 pm</li>
                                <li><span>Wed - Tur : </span>8.00 am - 6.00 pm</li>
                                <li><span>Friday : </span>3.00 pm - 8.00 pm</li>
                                <li><span>Sunday : </span>Closed</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="footer-bottom">
                    <p>Copyright © 2019 <span><a class="primary-color" href="https://themeforest.net/user/pixelthemez/portfolio" target="_blank">Edification</a> </span> - All Rights Reserved. Made by <span><a class="primary-color" href="https://furioustheme.com/" target="_blank">Furioustheme</a></span></p>
                </div>
            </div>
        </div>
    </footer>
        
    );
};

export default Footer;