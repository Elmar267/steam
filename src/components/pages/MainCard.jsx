import React, { useContext } from 'react'
import { DATA } from '../context/DataContext'
import { Link } from 'react-router'

function MainCard() {
    const { product } = useContext(DATA)

  return (
    <div className='max-w-[1250px] mx-auto px-5 mb-10 mt-5'>
        <h3 className='text-2xl font-bold text-[#e5e5e5] py-3'>Story Games</h3>
        <div className='bg-[#1b3145] p-5'>
            <div className='flex flex-wrap justify-center gap-5'>
                {product.map((item, i ) => {
                    if(item.category == "story")
                        return <Link id={item.id} to={`/game/${item.slug}`} key={i} className='w-[100%] sm:w-[250px] md:w-[300px] lg:w-[270px] transition-transform duration-200 hover:scale-[1.02]'>
                                    <div className='w-full'>
                                        <img className='w-[100%]' src={item.coverImage} alt={item.title} />
                                    </div>
                                    <div className='flex flex-wrap justify-between pl-2 gap-2 text-white'>
                                        <p className='text-[12px] w-[70%] pt-0.5 text-[#eee]'>{item.title.slice(0, 29)}</p>
                                        {item.discount === '0%' ? 
                                            (<div className="bg-[#00000066] px-2 py-1.5 flex items-center gap-1">
                                                <p className="text-[#eee] text-[14px] font-semibold">{item.newPrice}</p>
                                            </div>) :
                                            (<div className="bg-[#00000033] p-1 flex items-center justify-end gap-1 mt-1">
                                                <div className="bg-[#8bc53f] text-black font-bold text-[13px] px-2 py-0.5 rounded-sm">
                                                    {item.discount}
                                                </div>
                                                <div className="bg-[#00000066] px-2 py-1.5 flex items-center gap-1">
                                                    <p className="text-[#626366] line-through text-[13px]">{item.oldPrice}</p>
                                                    <p className="text-[#eee] text-[14px] font-semibold">{item.newPrice}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </Link>
                })}
            </div>
        </div>
    </div>
  )
}

export default MainCard