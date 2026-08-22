import React, { useContext } from 'react'
import { FaShoppingCart, FaStar } from "react-icons/fa";
import MainCard from './MainCard';
import { DATA } from '../context/DataContext';
import GameSlider from './GameSlider';
import Search from './Search';
import { Link } from 'react-router';
import SteamSlider from './Steam-slider';

function Store() {
  const { product, category, features } = useContext(DATA)
  // console.log(product);
  // console.log(category);
  // console.log(features);
  

  return (
    <main className='bg2 mt-10 pt-30 pb-20'>
        <div className='bg-[#182434] fixed top-0 right-0 left-0 z-98'>
          <div className='max-w-[1250px] mx-auto px-2 sm:px-3 md:px-5 lg:px-5 pt-28 pb-2 flex flex-wrap justify-center md:justify-between lg:justify-between'>
            <div className='w-[100%] md:w-[530px] lg:w-[580px] flex flex-wrap justify-end gap-2 sm:gap-5 md:gap-5 lg:gap-5'>
              <Search />
              <div className='flex justify-center gap-2 sm:gap-5 md:gap-5 lg:gap-5'>
                <Link to={'/wishlist'} className='flex items-center gap-1 text-white bg-[#45acff] py-1.5 md:py-1 px-2 rounded-xs cursor-pointer'><FaStar /><span className='hidden md:flex lg:flex'>whishlist</span></Link>
                <Link to={'/basket'} className='flex items-center gap-1 text-white bg-[#45acff] py-1.5 md:py-1 px-2 rounded-xs cursor-pointer'><FaShoppingCart /><span className='hidden md:flex lg:flex'>basket</span></Link>
              </div>
            </div>
            <div className='hidden md:flex lg:flex my-1 sm:order-first md:order-first lg:order-first'>
              <p className='text-[16px] text-white font-medium cursor-pointer'>Categories</p>
            </div>
          </div>
        </div>

        <SteamSlider/>

        <MainCard />

        <GameSlider />


    </main>
  )
}

export default Store