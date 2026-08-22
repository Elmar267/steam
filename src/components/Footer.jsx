import React from 'react'
import { SiValve } from "react-icons/si";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className='bg-[#0f1924]'>
        <div className='max-w-[1150px] mx-auto px-5 py-6'>
            <div className='flex flex-wrap justify-center justify-center gap-5'>
                <div className='w-[100%] md:w-[30%]'>
                    <div className='flex flex-wrap items-center'>
                        <div className='max-w-[144px]'>
                            <img src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016" alt="logo" />
                        </div>
                            <SiValve className='text-[100px] text-[#acb2b8] hover:text-[#fff]' />
                    </div>
                    <p className='text-[#c5c3c0] text-[13px]'>© 2026 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries. VAT included in all prices where applicable.</p>
                    <div className='flex flex-wrap items-center gap-5 py-4'>
                        <FaYoutube className='text-[30px] text-[#acb2b8] hover:text-[#fff]' />
                        <FaInstagram className='text-[30px] text-[#acb2b8] hover:text-[#fff]' />
                        <FaFacebook className='text-[30px] text-[#acb2b8] hover:text-[#fff]' />
                        <FaXTwitter className='text-[30px] text-[#acb2b8] hover:text-[#fff]' />
                    </div>
                </div>
                <div className='w-[100%] md:w-[67%] flex flex-wrap justify-center gap-20'>
                    <div>
                        <h5 className='text-[#c5c3c0] text-[15px] font-medium py-5'>STEAM</h5>
                        <p className='text-[14px] text-[#acb2b8] pb-5'>About Steam</p>
                        <p className='text-[14px] text-[#acb2b8] pb-5'>Steam SSA</p>
                        <p className='text-[14px] text-[#acb2b8] pb-5'>Steamworks</p>
                        <p className='text-[14px] text-[#acb2b8] pb-5'>Steam Distribution</p>
                        <p className='text-[14px] text-[#acb2b8] pb-5'>Gift Cards</p>
                    </div>
                    <div>
                        <h5 className='text-[#c5c3c0] text-[15px] font-medium py-5'>VALVE</h5>
                        <p className='text-[14px] text-[#acb2b8] pb-5'>About Valve</p>
                        <p className='text-[14px] text-[#acb2b8] pb-5'>Jobs</p>
                        <p className='text-[14px] text-[#acb2b8] pb-5'>Hardware</p>
                        <p className='text-[14px] text-[#acb2b8] pb-5'>Recycling</p>
                    </div>
                    <div>
                        <h5 className='text-[#c5c3c0] text-[15px] font-medium py-5'>LEGAL</h5>
                        <p className='text-[14px] text-[#acb2b8] pb-5'>Privacy</p>
                        <p className='text-[14px] text-[#acb2b8] pb-5'>Accessibility</p>
                        <p className='text-[14px] text-[#acb2b8] pb-5'>Notices & Policies</p>
                        <p className='text-[14px] text-[#acb2b8] pb-5'>Cookies</p>
                        <p className='text-[14px] text-[#acb2b8] pb-5'>Refunds</p>
                    </div>
                    <div>
                        <h5 className='text-[#c5c3c0] text-[15px] font-medium py-5'>MORE</h5>
                        <p className='text-[14px] text-[#acb2b8] pb-5'>Get Steam</p>
                        <p className='text-[14px] text-[#acb2b8] pb-5'>Get Mobile Apps</p>
                        <p className='text-[14px] text-[#acb2b8] pb-5'>Get Support</p>
                        <p className='text-[14px] text-[#acb2b8] pb-5'>My Account</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer