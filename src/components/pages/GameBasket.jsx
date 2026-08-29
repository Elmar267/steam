import React, { useContext, useState } from 'react'
import { BASKET } from '../context/BasketContext'
import { Link } from 'react-router';

function GameBasket() {
    const { basket, removeFromBasket, clearBasket } = useContext(BASKET)

    const CountOldPrice = basket.reduce((price, item) => {
        return price + Number(item.oldPrice.replace('$', ''));
    }, 0);
    const TotalPrice = basket.reduce((price, item) => {
        return price + Number(item.newPrice.replace('$', ''));
    }, 0);
    
  return (
    <div className='bg2 min-h-[90vh] mt-8 pt-20 pb-30'>
        <div className='max-w-[1250px] mx-auto px-5 py-8'>
            <div className="flex flex-wrap justify-between items-center gap-3 mb-4 px-0 sm:px-4">
                <h3 className="text-[24px] font-medium text-[#e5e5e5]">Your Shopping Cart</h3>
                <Link to={'/store'} className="bg-[#315b78] hover:bg-[#4f95bd] px-3 py-1.5 text-sm text-white cursor-pointer">Back to store</Link>
            </div>
            <div className="flex flex-wrap gap-3 items-start">
                <div className='w-[100%] md:w-[63%]  order-1 md:order-0'>
                    <div className="bg-[#263746] flex items-center py-4 px-4 mb-4">
                        <p className="text-base text-[#ddd]">Check out the entire game collection</p>
                    </div>
                    {basket.length === 0 ? 
                        <p className='text-[17px] text-[#bbb] font-medium ml-5'>Your Cart is empty</p> : 
                        basket.map((item, i) => {
                            return <div key={i} className="bg-[#2b3b49] p-3 mb-4 cursor-pointer">
                                            <div className='flex justify-end mb-1'>
                                                <div onClick={() => removeFromBasket(item.id)} className='px-1 flex items-center justify-center rounded-xs text-[#aaa] bg-[#16232d] hover:text-white hover:bg-[#de3618] text-[12px] cursor-pointer'>
                                                    Remove
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap justify-between items-center gap-3">
                                                <div className='w-[100%] sm:w-[20%]'>
                                                    <img className='w-full h-full object-cover' src={item.coverImage} alt={item.title} />
                                                </div>
                                                <div className='w-[100%] sm:w-[76%] flex flex-wrap justify-between gap-3'>
                                                    <div>
                                                        <p className="text-[17px]  text-[#e6e6e6]">{item.title}</p>
                                                        <p className="text-xs text-[#75a7c9]">Digital Edition</p>
                                                    </div>
                                                    <div className="flex flex-wrap items-center gap-2">
                                                        {item.discount === '0%' ? 
                                                        (<div className="bg-[#00000066] px-2 py-1.5 flex justify-end items-center gap-1">
                                                            <p className="text-[#eee] text-[16px] font-semibold">{item.newPrice}</p>
                                                        </div>) :
                                                        (<div className="p-1 flex flex-wrap items-center justify-end gap-1 mt-1">
                                                            <div className="bg-[#8bc53f] text-black font-bold text-[15px] px-2 py-0.5 rounded-sm">
                                                                {item.discount}
                                                            </div>
                                                            <div className="bg-[#00000066] px-2 py-1.5 flex flex-wrap items-center gap-1">
                                                                <p className="text-[#626366] line-through text-[15px]">{item.oldPrice}</p>
                                                                <p className="text-[#eee] text-[16px] font-semibold">{item.newPrice}</p>
                                                            </div>
                                                        </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                    })}
                </div>
                <div className="bg-[#16232d] w-[100%] md:w-[35%] p-4">
                    <div className='flex flex-wrap justify-between gap-3 py-1'>
                        <p className='text-[#eee] text-[13px] font-medium'>Old Price:</p>
                        <p className='text-[#eee] text-[15px] font-medium'>${CountOldPrice.toFixed(2)}</p>
                    </div>
                    <div className='flex flex-wrap justify-between gap-3 py-1'>
                        <p className='text-[#eee] text-[13px] font-medium'>Game count:</p>
                        <p className='text-[#eee] text-[15px] font-medium'>{basket.length}</p>
                    </div>
                    <div className='flex flex-wrap justify-between gap-3 py-1.5'>
                        <p className='text-[#eee] text-[15px] font-medium'>Total Price:</p>
                        <p className='text-[#eee] text-[17px] font-medium'>${TotalPrice.toFixed(2)}</p>
                    </div>
                    <div className="pb-4">
                        <p className="text-[13px] py-2 text-[#eee]">Sales tax will be calculated during checkout where applicable</p>
                        <div className="flex flex-wrap gap-1.5">
                            <button className='text-[#fff] p-1 w-full rounded-xs bg-[#45acff] hover:bg-[#45bbfd]'>Continue to Payment</button>
                        </div>
                    </div>
                    <div className="pb-4">
                        <div className="flex flex-wrap gap-1.5">
                            <button onClick={() => clearBasket()} className='text-[#fff] p-1 w-full rounded-xs bg-[#45acff] hover:bg-[#45bbfd]'>Remove all items</button>
                        </div>
                        <p className="text-[13px] pt-2 text-[#eee]">The adults in your Steam Family will be notified of your purchase request</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GameBasket