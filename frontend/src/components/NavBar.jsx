import React from 'react'
import { GrLanguage } from 'react-icons/gr'
import { FaRegUser , FaXmark, FaBars } from "react-icons/fa6";
import { ReactTyped } from "react-typed";


const logo = () => {
    return (
        <a href="/">
            <span className='text-3xl font-sans font-bold text-primary '>
               codezyra
            </span>
        </a>
    )
}
const navItems = [
    { link: '/products', path: 'Products' },
    { link: '/solutions', path: 'Solutions' },
    { link: '/resources', path: 'Resources' },
    { link: '/support', path: 'Support' },
    { link: '/company', path: 'Company' },
    { link: '/comunity', path: 'Comunity' },
]

const contactUs = () => {
    return (
        <button className='
        border-solid 
        border-2 
        border-black 
        rounded-lg
        hover:bg-primary
        hover:text-white
        hover:border-none
        h-10
        w-36
        '>
            Contact Us
        </button>
    )
}

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
                <nav className='h-16 pl-4 pr-4 flex justify-between items-center bg-white shadow-md'>
            <div className='flex justify-start items-center space-x-20 overflow-hidden'>
                {logo()}
                <div className='hidden md:flex space-x-10'>
                    {navItems.map((item) => (
                        <a key={item.path} href={item.link} className='hover:text-primary'>
                            {item.path}
                        </a>
                    ))}
                </div>
            </div>
            <div className='hidden md:flex space-x-6 items-center'>
                {contactUs()}
                <a href="/" className='flex space-x-1 items-center hover:text-primary'>
                    <p>En</p>
                    <GrLanguage />
                </a>
                <a href="/" className='hover:text-primary'><FaRegUser />
                </a>
            </div>
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='hover:outline-none hover:text-primary'> 
                    {isMenuOpen ? <FaXmark /> : <FaBars />}
                </button>
            </div>
        </nav>
        {isMenuOpen && (
            <div className='md:hidden'>
                <div className='flex flex-col space-y-4 items-center'>
                    {navItems.map((item) => (
                        <a key={item.path} href={item.link} className='hover:text-primary'>
                            {item.path}
                        </a>
                    ))}
                    {contactUs()}
                    <a href="/" className='flex space-x-1 items-center hover:text-primary'>
                        <p>En</p>
                        <GrLanguage />
                    </a>
                    <a href="/" className='hover:text-primary'><FaRegUser />
                    </a>
                </div>
            </div>
        )}
        </>



    )
}


export default NavBar