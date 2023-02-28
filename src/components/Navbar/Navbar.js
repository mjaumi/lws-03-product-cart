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
                <button onClick={() => setRerouteToPage('home')}>
                    <img src={logo} alt='LWS' className='max-w-[140px]' />
                </button>

                <div className='flex gap-4'>
                    <button onClick={() => setRerouteToPage('home')} className='navHome' id='lws-home'> Home </button>
                    <button onClick={() => setRerouteToPage('cart')} className='navCart' id='lws-cart'>
                        <i className='text-xl fa-sharp fa-solid fa-bag-shopping'></i>
                        <span id='lws-totalCart'>{totalCartItems}</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;