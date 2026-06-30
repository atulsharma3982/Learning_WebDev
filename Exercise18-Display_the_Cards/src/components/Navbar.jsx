import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className='flex items-center justify-between px-20 bg-amber-200 h-14'>
                <div className="logo">CARDS</div>
                <ul className='flex list-none gap-4'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
