import React, { useContext } from 'react'
import { DATA } from '../context/DataContext'
import { Link } from 'react-router'
import GameSkeleton from './GameSkeleton'

function GameCard2() {
    const { product } = useContext(DATA)

  return (
    <div className='w-[100%] md:w-[48%] mx-auto mb-10 mt-5'>
        <h3 className='text-2xl font-bold text-[#e5e5e5] py-3'>Racing-sports Games</h3>
        <div className='bg-[#1b3145] px-5 py-8'>
            <div className='flex flex-wrap justify-center gap-5'>
                {product.length === 0 ? (
                        Array.from({ length: 4 }).map((_, i) => (
                            <GameSkeleton key={i} />
                        ))
                    ) :
                (product.filter((item) => item.category === "racing-sports").slice(0, 4).map((item, i ) => {
                        return <Link id={item.id} to={`/game/${item.slug}`} key={i} className='w-[100%] md:w-[46%] transition-transform duration-200 hover:scale-[1.02]'>
                                    <div className='w-full'>
                                        <img className='w-[100%]' src={item.coverImage} alt={item.title} />
                                    </div>
                                    <div className='flex flex-wrap justify-between pl-2 gap-2 text-white'>
                                        <p className='text-[12px] pt-0.5 text-[#eee]'>{item.title.slice(0, 29)}</p>
                                        {item.discount === '0%' ?
                                            (<div className="bg-[#00000044] px-2 py-1.5 flex justify-end items-center gap-1">
                                                <p className="text-[#eee] text-[14px] font-semibold">{item.newPrice}</p>
                                            </div>) :
                                            (<div className="bg-[#00000044] p-0.5 flex items-center justify-end gap-1 mt-1">
                                                <div className="bg-[#8bc53f] text-black font-bold text-[12px] px-2 py-0.5 rounded-sm">
                                                    {item.discount}
                                                </div>
                                                <div className="bg-[#00000066] px-2 py-0.5 flex items-center gap-1">
                                                    <p className="text-[#626366] line-through text-[14px]">{item.oldPrice}</p>
                                                    <p className="text-[#eee] text-[14px] font-semibold">{item.newPrice}</p>
                                                </div>
                                            </div>
                                            )}
                                    </div>
                                </Link>
                }))
                }
            </div>
        </div>
    </div>
  )
}

export default GameCard2