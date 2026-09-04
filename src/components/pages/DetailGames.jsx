import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router'
import { DATA } from '../context/DataContext'
import { BASKET } from '../context/BasketContext';
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { WISH } from '../context/WishContext';

function DetailGames() {
    const { slug } = useParams()
    const { product } = useContext(DATA)
    const { addBasket, removeFromBasket, basket } = useContext(BASKET)
    const { addWish, removeFromWishlist, wish } = useContext(WISH)
    const [selectedImage, setSelectedImage] = useState(null)

    const game = product.find(item => item.slug === slug)

    if(!game){
        return <div className="min-h-[90vh] bg2 mt-8 pt-20 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-15 h-15 border-4 border-gray-600 border-t-white rounded-full animate-spin"></div>
                    <p className="text-white text-[24px]">
                        Loading...
                    </p>
                </div>
            </div>
    }

    const galleryImages = game.images?.length ? game.images : Array(6).fill(game.coverImage)
    const mainImage = selectedImage || game.coverImage
    const isAdded = basket.some(item => item.id === game.id)
    const isAddedWish = wish.some(item => item.id === game.id)

    return (
    <div className="min-h-screen bg2 text-white mt-8 pt-20 pb-20">
        <div className="max-w-[1250px] mx-auto px-3">
            <div className="text-[13px] text-[#67a5d8] mb-1">
                All Games › Games › {game.genres?.[0] || "Adventure Games"} › {game.title}
            </div>
            <div className="flex justify-between items-center mb-2">
                <h1 className="text-[26px] text-[#e5e5e5]">{game.title}</h1>
                <Link to={'/store'} className="bg-[#315b78] hover:bg-[#4f95bd] px-3 py-1.5 text-sm text-white cursor-pointer">Back to store</Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] bg-[#101820]">
                <div>
                    <div className="relative bg-black aspect-video">
                        <img src={mainImage} alt={game.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex gap-1 p-1 bg-[#111a22] justify-center overflow-x-auto">
                        {galleryImages.map((coverImage, index) => (
                            <div key={index} onClick={() => setSelectedImage(coverImage)} className={`shrink-0 w-[130px] h-[70px] cursor-pointer ${selectedImage === coverImage ? "ring-2 ring-white" : ""}`}>
                                <img src={coverImage} alt="" className={`w-full h-full object-cover ${selectedImage === coverImage ? "opacity-100" : "opacity-70 hover:opacity-100"}`} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-[#171e25] p-4">
                    <img src={game.coverImage} alt={game.title} className="w-full h-[150px] object-cover mb-4" />
                    <p className="text-[#ccc] text-sm leading-5 mb-5">{game.aboutGame}</p>
                    <div className="space-y-2 mt-6 text-sm">
                        <div className="flex justify-between gap-3">
                            <span className="text-[#7d8992] text-[13px]">PLAYER RATING:</span>
                            <span className="text-[#67a9d8]">{game.playerRating}</span>
                        </div>
                        <div className="flex justify-between gap-3">
                            <span className="text-[#7d8992] text-[13px]">RELEASE DATE:</span>
                            <span className="text-[#67a9d8]">{game.releaseDate}</span>
                        </div>
                        <div className="flex justify-between gap-3">
                            <span className="text-[#7d8992] text-[13px]">DEVELOPER:</span>
                            <span className="text-[#67a9d8]">{game.developer}</span>
                        </div>
                        <div className="flex justify-between gap-3">
                            <span className="text-[#7d8992] text-[13px]">PUBLISHER:</span>
                            <span className="text-[#67a9d8]">{game.publisher}</span>
                        </div>
                    </div>
                    <p className="text-[13px] text-[#6d7982] mt-6 mb-2">Popular user-defined tags:</p>
                    <div className="flex flex-wrap gap-1">
                        {game.genres?.map((item,index) => (
                            <span key={index} className="text-xs text-[#67a9d8] bg-[#294b61] px-2 py-1">{item}</span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-[#111d28] p-2 flex flex-wrap justify-center sm:justify-between gap-3 mt-1">
                <button onClick={() => { isAddedWish ? removeFromWishlist(game.id) :
                            addWish( game.id, game.title, game.oldPrice, game.newPrice, game.discount, game.platform, game.coverImage, game.slug )
                    }}
                    className={`rounded-xs px-3 py-1.5 text-sm text-white font-medium ${
                        isAddedWish ? "bg-[#6a7282] hover:bg-[#717171] cursor-pointer" :
                            "bg-[#315a75] hover:bg-[#4f95bd] cursor-pointer"
                    }`} >
                    {isAddedWish ? "Remove from wish" : "Add to wish"}
                </button>
                <button className="bg-[#315a75] hover:bg-[#4f95bd] px-3 py-1.5 text-sm">View Your Queue →</button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-3 mt-10">
                <div>
                    <div className="bg-[#263746] h-[55px] flex items-center px-4 mb-4">
                        <p className="text-base text-[#ddd]">Check out the entire game collection</p>
                    </div>
                    <div className="bg-[#2b3b49] p-4 mb-4">
                        <div className="flex flex-wrap justify-between items-center gap-3">
                            <div>
                                <p className="text-base text-[#e6e6e6]">{game.title}</p>
                                <p className="text-xs text-[#75a7c9]">Digital Edition</p>
                            </div>
                            <div className="flex flex-wrap items-center gap-2">
                                {game.discount === '0%' ? 
                                    (<div className="bg-[#00000066] px-2 py-1.5 rounded-xs flex justify-end items-center gap-1">
                                        <p className="text-[#eee] text-[15px] font-semibold">{game.newPrice === "$0" ? 'Free' : game.newPrice}</p>
                                    </div>) :
                                    (<div className="p-1 flex items-center justify-end gap-1 mt-1">
                                        <div className="bg-[#8bc53f] text-black font-bold text-[14px] px-2 py-0.5 rounded-sm">
                                            {game.discount}
                                        </div>
                                        <div className="bg-[#00000066]  rounded-xs px-2 py-1.5 flex items-center gap-1">
                                            <p className="text-[#626366] line-through text-[15px]">{game.oldPrice}</p>
                                            <p className="text-[#eee] text-[15px] font-semibold">{game.newPrice}</p>
                                        </div>
                                    </div>
                                )}
                                <button onClick={() => { isAdded ? removeFromBasket(game.id) :
                                            addBasket( game.id, game.title, game.oldPrice, game.newPrice, game.discount, game.platform, game.coverImage, game.slug )
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
                    <div className="bg-[#1d2d3a] p-5">
                        <h2 className="text-[20px] text-[#e5e5e5] mb-3">About This Game</h2>
                        <hr className="border-[#354957] mb-4" />
                        <p className="text-base leading-6 text-[#aaa]">{game.description}</p>
                    </div>
                </div>
                <div className="bg-[#16232d] p-4 h-fit">
                    <div className="pb-4">
                        <p className="text-[14px] text-[#7d8992] mb-3">Genres:</p>
                        <div className="flex flex-wrap gap-1.5">
                            {game.genres?.map((item,index) => (
                                <span key={index} className="text-[13px] text-[#67a9d8] bg-[#294b61] px-2 py-1">{item}</span>
                            ))}
                        </div>
                    </div>
                    <hr className="border-[#35424c]" />
                    <div className="py-4">
                        <p className="text-[14px] text-[#7d8992] mb-3">Features:</p>
                        <div className="flex flex-wrap gap-1.5">
                            {game.features?.map((item,index) => (
                                <span key={index} className="text-[13px] text-[#67a9d8] bg-[#294b61] px-2 py-1">{item}</span>
                            ))}
                        </div>
                    </div>
                    <hr className="border-[#35424c]" />
                    <div className="pt-4">
                        <p className="text-[14px] text-[#7d8992] mb-3">Languages:</p>
                        <div className="flex flex-wrap gap-1.5">
                            {game.languages?.map((item,index) => (
                                <span key={index} className="text-[13px] text-[#67a9d8] bg-[#294b61] px-2 py-1">{item}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default DetailGames