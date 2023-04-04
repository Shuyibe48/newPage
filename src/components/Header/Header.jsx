import React, { useState } from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
import { ClipboardDocumentCheckIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [menuFold, setMenuFold] = useState(false)

    return (

        <div className=' bg-gray-100'>
            <div className='container mx-auto relative flex justify-between items-center px-4 py-5'>
                <div className='inline-flex items-center'>
                    <ClipboardDocumentCheckIcon className="h-8 w-8 text-blue-500" />
                    <h2 className='text-3xl font-bold ml-2'>newPage</h2>
                </div>

                <nav className='hidden lg:block'>
                    <NavLink className='font-semibold text-2xl ml-8' to='/'>Home</NavLink>
                    <NavLink className='font-semibold text-2xl ml-8' to='/books'>Books</NavLink>
                    <NavLink className='font-semibold text-2xl ml-8' to='/about'>About</NavLink>
                </nav>

                <div className='lg:hidden'>
                    <div className='lg:hidden'>
                        {
                            menuFold ?
                                <XMarkIcon onClick={() => setMenuFold(!menuFold)} className="h-8 w-8 text-blue-500" />
                                :
                                <Bars3Icon onClick={() => setMenuFold(!menuFold)} className="h-8 w-8 text-blue-500" />
                        }
                    </div>
                    <div className='lg:hidden'>
                        {
                            menuFold ?
                                <nav className='absolute inset-x-14 nav-position lg:relative bg-gray-100 px-8 py-4'>
                                    <NavLink className='block font-semibold text-2xl' to='/'>Home</NavLink>
                                    <NavLink className='block font-semibold text-2xl' to='/books'>Books</NavLink>
                                    <NavLink className='block font-semibold text-2xl' to='/about'>About</NavLink>
                                </nav>
                                :

                                ''
                        }
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Header;