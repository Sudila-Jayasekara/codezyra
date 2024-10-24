import React from 'react'

const logo = () => {
    return (
        <a href="/">
            <span className='text-2xl font-sans font-bold text-primary '>
                CODEZYRA
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

const navItem = (item) => {
    return
}

const NavBar = () => {
    return (
        <nav className='h-16 pl-4 pr-4 flex justify-between items-center bg-white shadow-md'>
            <div className='flex space-x-20 items-center'>
                {logo()}
                <div className='hidden md:flex space-x-10'>
                    {navItems.map((item) => (
                        <a key={item.path} href={item.link} className='hover:text-primary'>
                            {item.path}
                        </a>
                    ))}
                </div>
            </div>
            <div className='bg-yellow-100'>Menu</div>
        </nav>
    )
}


export default NavBar