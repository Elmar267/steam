import React, { useContext } from 'react'
import { FaShoppingCart, FaStar } from "react-icons/fa";
import MainCard from './MainCard';
import GameSlider from './GameSlider';
import Search from './Search';
import { Link } from 'react-router';
import SteamSlider from './Steam-slider';
import ActionGames from './ActionGames';
import HorrorGames from './HorrorGames';
import { BASKET } from '../context/BasketContext';
import { WISH } from '../context/WishContext';
import GameCard from './GameCard';
import GameCard2 from './GameCard2';

function Store() {
  const { basket } = useContext(BASKET)
  const { wish } = useContext(WISH)
  

  return (
    <main className='bg2 mt-7 pt-30 pb-30'>
        <div className='bg-[#182434] fixed top-0 right-0 left-0 z-98'>
          <div className='max-w-[1250px] mx-auto px-2 sm:px-3 md:px-5 lg:px-5 pt-21 md:pt-23.5 pb-2 flex flex-wrap justify-center md:justify-between lg:justify-between'>
            <div className='w-[100%] md:w-[530px] lg:w-[580px] flex flex-wrap justify-end gap-2 sm:gap-5 md:gap-5 lg:gap-5'>
              <Search />
              <div className='flex justify-center gap-1 sm:gap-5'>
                <Link to={'/wishlist'} className='flex items-center text-[14px] gap-1 text-white py-1.5 md:py-1 px-1 sm:px-2 rounded-xs cursor-pointer'><FaStar /><p className='hidden md:flex lg:flex'>whishlist {wish.length !== 0 ? <span className='pl-1 text-[11px]'>{wish.length}</span> : ''}</p></Link>
                <Link to={'/basket'} className='flex items-center text-[14px] gap-1 text-white bg-[#45acff] py-1.5 md:py-1 px-2 rounded-xs cursor-pointer'><FaShoppingCart /><p className='hidden md:flex lg:flex'>Cart {basket.length !== 0 ? <span className='pl-1 text-[11px]'>{basket.length}</span> : ''}</p></Link>
              </div>
            </div>
            <div className='hidden md:flex lg:flex my-1 sm:order-first md:order-first lg:order-first'>
              <p className='text-[14px] text-white font-medium cursor-pointer'>Categories</p>
            </div>
          </div>
        </div>

        <SteamSlider/>

        <GameSlider />

        <MainCard />

        <ActionGames/>

        <div className='max-w-[1250px] mx-auto flex flex-wrap justify-center'>
          <GameCard />
          <GameCard2 />
        </div>

        <HorrorGames/>

    </main>
  )
}

export default Store