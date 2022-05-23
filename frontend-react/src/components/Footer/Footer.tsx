import React from 'react';
import { Icon } from '@iconify/react';

const Footer = () => {

    return (
        <div className="bg-gray-800">
            <div className="mx-4 mb-4 flex justify-center space-x-7 ">
                <a href=""><img src="./logo192.png" alt="" className="mt-4 w-5 md:w-5 lg:w-10" /></a>
                <a href=""><img src="./logo192.png" alt="" className="mt-4 w-5 md:w-5 lg:w-10" /></a>
                <a href=""><img src="./logo192.png" alt="" className="mt-4 w-5 md:w-5 lg:w-10" /></a>
                <a href=""><img src="./logo192.png" alt="" className="mt-4 w-5 md:w-5 lg:w-10" /></a>
            </div>
            <div className="flex justify-center text-white">
                <h3>Copyright © 2022 Build & Design by Champ</h3>
            </div>
        </div>
    );
}

export default Footer;