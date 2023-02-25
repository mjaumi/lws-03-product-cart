import React from 'react';
import logo from '../../assets/images/logo.png';

const Navbar = ({ setRerouteToPage }) => {
    return (
        <nav class="bg-[#171C2A] py-4">
            <div class="navBar">
                <a onClick={() => setRerouteToPage('home')} href="#home">
                    <img src={logo} alt="LWS" class="max-w-[140px]" />
                </a>

                <div class="flex gap-4">
                    <a onClick={() => setRerouteToPage('home')} href="#home" class="navHome" id="lws-home"> Home </a>
                    <a onClick={() => setRerouteToPage('cart')} href="#cart" class="navCart" id="lws-cart">
                        <i class="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
                        <span id="lws-totalCart">0</span>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;