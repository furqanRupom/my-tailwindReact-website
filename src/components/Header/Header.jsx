import React from 'react';

const Header = () => {
    return (
        <div>
            <header className='flex justify-between items-center bg-sky-200/25 p-5 max-w-7xl mx-auto rounded'>
                <div>
                <h2 className='text-4xl font-medium'><span className='text-sky-400'>React</span> + <span className='text-sky-400'>TailwindCSS</span></h2>
                </div>
                <div>
                    <nav>
                        <ul className='flex space-x-5 items-center text-sky-500 text-lg'>
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Help</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Header;