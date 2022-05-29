import React, {useState} from 'react';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <nav className="app__navbar flex justify-between items-center m-4">
            <div className="app__navbar-logo text-3xl font-bold text-gray-800">
                <h1>CHAMPNC</h1>
            </div>
            <ul className="app__navbar-links  flex justify-between items-center space-x-8">
                {['About me', 'Experiance', 'Education', 'Work', 'Contact'].map((item) => (
                    <li key={`link-${item}`} className="text-gray-400 hover:text-gray-900 duration-500">
                        <div />
                        <a href={`#${item.toLocaleLowerCase()}`} className="text-lg font-bold">{item}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;