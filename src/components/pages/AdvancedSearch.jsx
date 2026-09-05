import React, { useContext, useState } from 'react'
import { DATA } from '../context/DataContext'
import { BASKET } from '../context/BasketContext'
import { Link } from 'react-router'

function AdvancedSearch() {
    const { product, category, features, genres} = useContext(DATA)
    const { addBasket, basket, removeFromBasket } = useContext(BASKET)
    const [OpenPrice, setOpenPrice] = useState(false)
    const [OpenCategory, setOpenCategory] = useState(false)
    const [OpenFeatures, setOpenFeatures] = useState(false)
    const [OpenGenres, setOpenGenres] = useState(false)
    const [value, setValue] = useState(60)
    const [filtered, setFiltered] = useState('')
    const [filterFeatures, setFilterFeatures] = useState('')
    const [filterGenres, setFilterGenres] = useState('')

    const filteredGames = product.filter((item) => {
        const categoryMatch = !filtered || item.category?.toLowerCase() === filtered.toLowerCase()
        const featureMatch = !filterFeatures || item.features?.some(feature => feature.toLowerCase() === filterFeatures.toLowerCase())
        const genreMatch = !filterGenres || item.genres?.some(genre => genre.toLowerCase() === filterGenres.toLowerCase())
        const price =
            String(item.newPrice).toLowerCase() === "free"
                ? 0
                : Number(String(item.newPrice).replace("$", ""))
        const priceMatch = price <= value

        return categoryMatch && featureMatch && genreMatch && priceMatch

    })

  return (
    <div className='bg2 mt-10 pt-18 pb-30'>
        <div className='max-w-[1250px] mx-auto px-5 py-8'>
            <div className="flex flex-wrap justify-between items-center gap-3 mb-4 px-0 sm:px-4">
                <h3 className="text-[24px] font-medium text-[#e5e5e5]">Advanced Filters</h3>
                <Link to={'/store'} className="bg-[#315b78] hover:bg-[#4f95bd] px-3 py-1.5 text-sm text-white cursor-pointer">Back to store</Link>
            </div>
            <div className="flex flex-wrap gap-3 items-start">
                <div className='w-[100%] md:w-[67%]  order-1 md:order-0'>
                    <div className="bg-[#263746] flex items-center py-4 px-4 mb-4">
                        <p className="text-base text-[#ddd]">Search the game</p>
                    </div>
                    {filteredGames.length === 0 ? 
                        <p className='text-[17px] text-[#bbb] font-medium ml-5'>0 results match your search.</p> : 
                        filteredGames.slice(0, 8).map((item, i) => {
                            const isAdded = basket.some(game => game.id === item.id)
                            return <div key={i} className="bg-[#16202d] hover:bg-[#101822] p-3 mb-4 cursor-pointer">
                                        <div className="flex flex-wrap justify-between items-center gap-3">
                                            <div className='w-[100%] sm:w-[20%]'>
                                                <img className='w-full h-full object-cover' src={item.coverImage} alt={item.title} />
                                            </div>
                                            <div className='w-[100%] sm:w-[76%] flex flex-wrap justify-between gap-3'>
                                                <div>
                                                    <p className="text-[16px] text-[#e6e6e6]">{item.title}</p>
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
                                                    <button onClick={() => { isAdded ? removeFromBasket(item.id) :
                                                                addBasket( item.id, item.title, item.oldPrice, item.newPrice, item.discount, item.platform, item.coverImage, item.slug )
                                                        }}
                                                        className={`rounded-xs px-2 py-1.5 text-[14px] text-white font-medium ${
                                                            isAdded ? "bg-[#6a7282] hover:bg-[#717171] cursor-pointer" :
                                                            "bg-[#75a916] hover:bg-[#8ed629] cursor-pointer"
                                                        }`} >
                                                        {isAdded ? "Remove" : "Add to Basket"}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                    })}
                </div>
                <div className="bg-[#16202d] w-[100%] md:w-[30%] p-4">
                    <p className='text-[16px] text-[#ddd] text-center py-1 '>Filter Options</p>
                    <div className="w-full my-5 cursor-pointer">
                        <button onClick={() => setOpenPrice(!OpenPrice)} className="w-full cursor-pointer px-3 py-1.5 bg-[#2f4052] text-[#d6e5f2] flex items-center justify-between text-left hover:bg-[#384b5e]">
                            <p className='text-[13px] text-[#ddd]'>Narrow by Price</p>
                        </button>
                        {OpenPrice && (
                            <div className="w-full bg-[#1b2838] border border-[#2f4052] px-3 py-1">
                                <div className='flex justify-between gap-2 mt-2'>
                                    <p className='text-[#ddd] text-[14px]'>0</p>
                                    <p className='text-[#ddd] text-[14px]'>60$</p>
                                </div>
                                <input value={value} onChange={(e) => setValue(Number(e.target.value))} className='w-full h-[4px] cursor-pointer accent-[#66c0f4]' type="range" min='0' max="60" step="10" />
                                {value == 0 ?
                                    <p className='text-[#66c0f4] text-[14px] p-1 text-center'>free</p> :
                                    <p className='text-[#66c0f4] text-[14px] p-1 text-center'>Under {value} $</p>}
                            </div>
                        )}
                    </div>
                    <div className="w-full my-5 cursor-pointer">
                        <button onClick={() => setOpenCategory(!OpenCategory)} className="w-full cursor-pointer px-3 py-1.5 bg-[#2f4052] text-[#d6e5f2] flex items-center justify-between text-left hover:bg-[#384b5e]">
                            <p className='text-[14px] text-[#ddd]'>Narrow by category</p>
                        </button>
                        {OpenCategory && (
                            <div className="w-full bg-[#1b2838] border border-[#2f4052] px-2 py-1">
                                        <label onClick={() => setFiltered('')}>
                                            <div className='cursor-pointer flex items-center gap-3 hover:bg-[#323e4c] my-1 py-1'>
                                                <input type="radio" name='category' className="w-[18px] accent-[#66c0f4]"/>
                                                <p className="text-[#66c0f4] text-[14px]">All</p>
                                            </div>
                                        </label> 
                                    {category.map((item, i) => {
                                        return <label key={i} onClick={() => setFiltered(item.name)}>
                                                    <div className='cursor-pointer flex items-center gap-3 hover:bg-[#323e4c] my-1 py-1'>
                                                        <input type="radio" name='category' className="w-[18px] accent-[#66c0f4]"/>
                                                        <p className="text-[#66c0f4] text-[14px]">{item.name}</p>
                                                    </div>
                                                </label>
                                    })}
                            </div>
                        )}
                    </div>
                    <div className="w-full my-5 cursor-pointer">
                        <button onClick={() => setOpenFeatures(!OpenFeatures)} className="w-full cursor-pointer px-3 py-1.5 bg-[#2f4052] text-[#d6e5f2] flex items-center justify-between text-left hover:bg-[#384b5e]">
                            <p className='text-[14px] text-[#ddd]'>Narrow by features</p>
                        </button>
                        {OpenFeatures && (
                            <div className="w-full bg-[#1b2838] border border-[#2f4052] px-2 py-1">
                                    <label onClick={() => setFilterFeatures('')}>
                                        <div className='cursor-pointer flex items-center gap-3 hover:bg-[#323e4c] my-1 py-1'>
                                            <input type="radio" name='features' className="w-[18px] accent-[#66c0f4]"/>
                                            <p className="text-[#66c0f4] text-[14px]">All</p>
                                        </div>
                                    </label>
                                {features.map((item, i) => {
                                    return <label key={i} onClick={() => setFilterFeatures(item.name)}>
                                                <div className='cursor-pointer flex items-center gap-3 hover:bg-[#323e4c] my-1 py-1'>
                                                    <input type="radio" name='features' className="w-[18px] accent-[#66c0f4]"/>
                                                    <p className="text-[#66c0f4] text-[14px]">{item.name}</p>
                                                </div>
                                            </label>
                                })}
                            </div>
                        )}
                    </div>
                    <div className="w-full my-5">
                        <button onClick={() => setOpenGenres(!OpenGenres)} className=" cursor-pointer w-full px-3 py-1.5 bg-[#2f4052] text-[#d6e5f2] flex items-center justify-between text-left hover:bg-[#384b5e]">
                            <p className='text-[13px] text-[#ddd]'>Narrow by genres</p>
                        </button>
                        {OpenGenres && (
                            <div className="w-full bg-[#1b2838] border border-[#2f4052] px-3 py-1">
                                    <label onClick={() => setFilterGenres('')}>
                                        <div className='cursor-pointer flex items-center gap-3 hover:bg-[#323e4c] my-1 py-1'>
                                            <input type="radio" name='genres' className="w-[18px] accent-[#66c0f4]"/>
                                            <p className="text-[#66c0f4] text-[14px]">All</p>
                                        </div>
                                    </label>
                                {genres.map((item, i) => {
                                    return <label key={i} onClick={() => setFilterGenres(item.name)}>
                                                <div className='cursor-pointer flex items-center gap-3 hover:bg-[#323e4c] my-1 py-1'>
                                                    <input type="radio" name='genres' className="w-[18px] accent-[#66c0f4]"/>
                                                    <p className="text-[#66c0f4] text-[14px]">{item.name}</p>
                                                </div>
                                            </label>
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdvancedSearch