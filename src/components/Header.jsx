import React, { useEffect, useState } from 'react'
import { HiMenu } from "react-icons/hi";
import { Link } from 'react-router';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import MobileSidebar from './pages/MobileSidebar';
import { auth } from '../firebase';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        await signOut(auth);
    };

  return (
    <header className='bg-[#171d25] fixed top-0 left-0 right-0 z-99'>
        <div className='max-w-[1250px] mx-auto px-5 py-6'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-20 justify-between items-center'>
                    <Link to={'/store'} className='w-[120px] md:w-[165px]'>
                        <img  src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016" alt="logo" />
                    </Link>
                    <div className='hidden md:flex lg:flex'>
                        <ul className='flex flex-wrap justify-center items-center gap-5'>
                            <li>
                                <Link to={'/store'} className='text-[#dcdedf] font-medium'>STORE</Link>
                            </li>
                            <li>
                                <Link to={'/about'} className='text-[#dcdedf] font-medium'>ABOUT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='hidden md:flex lg:flex items-center gap-2'>
                    {user ? (
                        <>
                            <div className='flex items-center gap-2'>
                                <div className='w-[32px] h-[32px] rounded-full bg-[#66c0f4] flex items-center justify-center text-[#171d25] font-medium text-[14px]'>
                                    {(user.displayName || user.email).charAt(0).toUpperCase()}
                                </div>
                                <span className='text-[#c5c3c0] text-[14px]'>
                                    {user.displayName || user.email}
                                </span>
                            </div>
                            <span className='text-[#c5c3c0]'>|</span>
                            <button onClick={handleLogout} className='text-[#66c0f4] text-[14px] hover:text-white'>
                                Log out
                            </button>
                        </>
                    ) : (
                        <Link to={'/login'} className='text-[#c5c3c0]'>
                            <p className='text-[14px] cursor-pointer'>Log in</p>
                        </Link>
                    )}
                </div>
                <div className='flex md:hidden lg:hidden'>
                    <HiMenu onClick={() => setMenuOpen(!menuOpen)} className='text-[30px] cursor-pointer text-[#f4f5f9]' />
                </div>
            </div>
            
        </div>
        <MobileSidebar  isOpen={menuOpen} onClose={() => setMenuOpen(false)}  />
    </header>
  )
}

export default Header