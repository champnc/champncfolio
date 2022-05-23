import React from 'react';
import { Icon } from '@iconify/react';

const Footer = () => {

    return (
        <div className="bg-gray-800">
            <div className="mx-4 mb-4 flex justify-center space-x-7 ">
                <a href="https://github.com/champnc"><img src="./images/github-logo.svg" alt="" className="mt-4 w-5 md:w-5 lg:w-10" /></a>
                <a href="https://www.linkedin.com/in/champnc/"><img src="./images/linkedin-logo.svg" alt="" className="mt-4 w-5 md:w-5 lg:w-10" /></a>
                <a href="https://discordapp.com/users/%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%8A%E0%B8%A1%E0%B8%9B%E0%B9%8C#5723"><img src="./images/discord-logo.svg" alt="" className="mt-4 w-5 md:w-5 lg:w-10" /></a>
                <a href="https://www.facebook.com/natdanai.chaiyakan/"><img src="./images/facebook-logo.svg" alt="" className="mt-4 w-5 md:w-5 lg:w-10" /></a>
            </div>
            <div className="flex justify-center text-white">
                <h3>Copyright © 2022 Build & Design by Champ</h3>
            </div>
        </div>
    );
}

export default Footer;