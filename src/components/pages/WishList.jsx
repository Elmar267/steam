import React, { useContext } from 'react'
import { WISH } from '../context/WishContext';
import { BASKET } from '../context/BasketContext';
import { Link } from 'react-router';

function WishList() {
    const { wish, removeFromWishlist } = useContext(WISH)
    const { addBasket, removeFromBasket, basket } = useContext(BASKET)

  return (
    <div className='bg2 min-h-[90vh] mt-10 pt-20 pb-30'>
        <div className='max-w-[1250px] mx-auto px-5 py-8'>
            <div className="flex flex-wrap justify-between items-center gap-3 mb-4 px-0 sm:px-4">
                <h3 className="text-[24px] font-medium text-[#e5e5e5]">All Games</h3>
                <Link to={'/store'} className="bg-[#315b78] hover:bg-[#4f95bd] px-3 py-1.5 text-sm text-white cursor-pointer">Back to store</Link>
            </div>
            <div className="flex flex-wrap gap-3 items-start">
                <div className='w-[100%] order-1 md:order-0'>
                    <div className="bg-[#263746] flex items-center py-4 px-4 mb-4">
                        <p className="text-base text-[#ddd]">Check out the entire Wishlist</p>
                    </div>
                    {wish.length === 0 ? 
                        <p className='text-[17px] text-[#bbb] font-medium ml-5'>Your Wishlist is empty</p> :  
                        wish.map((item, i) => {
                            const isAdded = basket.some(basketItem => basketItem.id === item.id)

                            return <div key={i} className="bg-[#2b3b49] p-3 mb-4 cursor-pointer">
                                        <div className='flex justify-end mb-1'>
                                            <div onClick={() => removeFromWishlist(item.id)} className='px-1 flex items-center justify-center rounded-xs text-[#aaa] bg-[#16232d] hover:text-white hover:bg-[#de3618] text-[12px] cursor-pointer'>
                                                Remove
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap justify-between items-center gap-3">
                                            <div className='w-[100%] sm:w-[20%]'>
                                                <img className='w-full h-full object-cover' src={item.coverImage} alt={item.title} />
                                            </div>
                                            <div className='w-[100%] sm:w-[76%] flex flex-wrap justify-between gap-3'>
                                                <div>
                                                    <p className="text-[20px] text-[#e6e6e6]">{item.title}</p>
                                                    <p className="text-[#75a7c9]">Digital Edition</p>
                                                </div>
                                                <div className="flex flex-wrap items-center gap-2">
                                                    {item.discount === '0%' ? 
                                                        (<div className="bg-[#00000066] px-2 py-1.5 flex justify-end items-center gap-1">
                                                            <p className="text-[#eee] text-[16px] font-semibold">{item.newPrice === "$0" ? 'Free' : item.newPrice}</p>
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
                                                    <button onClick={() => { isAdded ? removeFromBasket(item.id) :
                                                                addBasket( item.id, item.title, item.oldPrice, item.newPrice, item.discount, item.platform, item.coverImage, item.slug )
                                                        }}
                                                        className={`rounded-xs px-2 py-1.5 text-[14px] text-white font-medium ${
                                                            isAdded ? "bg-[#6a7282] hover:bg-[#717171] cursor-pointer" :
                                                            "bg-[#75a916] hover:bg-[#8ed629] cursor-pointer"
                                                        }`} >
                                                        {isAdded ? "Remove from Basket" : "Add to Basket"}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default WishList