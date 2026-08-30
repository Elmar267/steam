import React, { useContext } from 'react'
import { SiValve } from "react-icons/si";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router';
import { DATA } from './context/DataContext';

function Footer() {
    const { footerData } = useContext(DATA)

  return (
    <footer className='bg-[#0f1924]'>
        <div className='max-w-[1150px] mx-auto px-5 py-6'>
            <div className='flex flex-wrap justify-center justify-center gap-5'>
                <div className='w-[100%] md:w-[30%]'>
                    <div className='flex flex-wrap items-center'>
                        <Link to={'/'} className='max-w-[144px]'>
                            <img src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016" alt="logo" />
                        </Link>
                            <Link to={'/'}>
                                <SiValve className='text-[100px] text-[#acb2b8] hover:text-[#fff]' />
                            </Link>
                    </div>
                    <p className='text-[#c5c3c0] text-[13px]'>© 2026 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries. VAT included in all prices where applicable.</p>
                    <Link to={'/'} className='flex flex-wrap items-center gap-5 py-4'>
                        <FaYoutube className='text-[30px] text-[#acb2b8] hover:text-[#fff]' />
                        <FaInstagram className='text-[30px] text-[#acb2b8] hover:text-[#fff]' />
                        <FaFacebook className='text-[30px] text-[#acb2b8] hover:text-[#fff]' />
                        <FaXTwitter className='text-[30px] text-[#acb2b8] hover:text-[#fff]' />
                    </Link>
                </div>
                <div className='w-[100%] md:w-[67%] flex flex-wrap justify-center gap-20'>
                    <div>
                        <h5 className='text-[#c5c3c0] text-[15px] font-medium py-5'>STEAM</h5>
                        {footerData.slice(0, 5).map((item, i) => 
                          <Link to={'/'} key={i}><p className='text-[14px] text-[#acb2b8] pb-5'>{item.name}</p></Link>
                        )}
                    </div>
                    <div>
                        <h5 className='text-[#c5c3c0] text-[15px] font-medium py-5'>VALVE</h5>
                        {footerData.slice(5, 9).map((item, i) => 
                          <Link to={'/'} key={i}><p className='text-[14px] text-[#acb2b8] pb-5'>{item.name}</p></Link>
                        )}
                    </div>
                    <div>
                        <h5 className='text-[#c5c3c0] text-[15px] font-medium py-5'>LEGAL</h5>
                        {footerData.slice(9, 14).map((item, i) => 
                          <Link to={'/'} key={i}><p className='text-[14px] text-[#acb2b8] pb-5'>{item.name}</p></Link>
                        )}
                    </div>
                    <div>
                        <h5 className='text-[#c5c3c0] text-[15px] font-medium py-5'>MORE</h5>
                        {footerData.slice(14, 18).map((item, i) => 
                          <Link to={'/'} key={i}><p className='text-[14px] text-[#acb2b8] pb-5'>{item.name}</p></Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer