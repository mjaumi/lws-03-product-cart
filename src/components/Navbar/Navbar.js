import React from 'react';
import { useSelector } from 'react-redux';
import logo from '../../assets/images/logo.png';

const Navbar = ({ setRerouteToPage }) => {
    // integration of react-redux hooks here
    const totalCartItems = useSelector(state => state.cart.totalCartItems);

    // rendering the navbar component here
    return (
        <nav className='bg-[#171C2A] py-4'>
            <div className='navBar'>
                <a onClick={() => setRerouteToPage('home')} href='#home'>
                    <img src={logo} alt='LWS' className='max-w-[140px]' />
                </a>

                <div className='flex gap-4'>
                    <a onClick={() => setRerouteToPage('home')} href='#home' className='navHome' id='lws-home'> Home </a>
                    <a onClick={() => setRerouteToPage('cart')} href='#cart' className='navCart' id='lws-cart'>
                        <i className='text-xl fa-sharp fa-solid fa-bag-shopping'></i>
                        <span id='lws-totalCart'>{totalCartItems}</span>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;