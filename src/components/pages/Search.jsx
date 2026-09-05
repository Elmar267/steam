import React, { useContext, useEffect, useState } from 'react'
import { DATA } from '../context/DataContext'
import { Link } from 'react-router'

function Search() {
    const [search, setSearch] = useState('')
    const { product } = useContext(DATA)
    const [debouncedSearch, setDebouncedSearch] = useState('')

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search)
        }, 500)

        return () => clearTimeout(timer)
    }, [search])

    const filterGame = debouncedSearch && product.length !== 0 ?
        product.filter(item =>
            debouncedSearch.toLowerCase()
                .split(" ")
                .every(word =>
                    item.title.toLowerCase()
                        .split(" ")
                        .some(titleWord => titleWord.startsWith(word))
            )
        ) : []      

  return (
    <div className='absolute right-[41%] sm:right-[48%] md:right-[31%] lg:right-[26%] w-[55%] sm:w-[320px] md:w-[350px] lg:w-[400px]'>
        <input value={search} onChange={(e) => setSearch(e.target.value)} className='bg-[#354150] min-w-[155px] text-[#eee] rounded-xs w-[100%] px-3 pt-1 pb-0.5 border border-blue-400 border-r focus:border-[#66c0f4] focus:bg-[#242931] focus:outline-none' type="text" placeholder='search...' />
            {search && (
                <div className='min-w-[230px] w-[100%] my-2 rounded-xs bg-[#404655] p-3'>
                    <p className='text-[#e5e5e5]'>Search results</p>
                    {filterGame.length === 0 ? (<p className='py-2 text-[#e5e5e5]'>No items match your query.</p>) : 
                        (filterGame.slice(0, 4).map((item, i) =>
                            <Link key={i} id={item.id} to={`/game/${item.slug}`} className='w-full bg-[#45505e] hover:bg-[#616e80] cursor-pointer my-2 rounded-xs flex'>
                                <div className='w-[35%] overflow-hidden'>
                                    <img src={item.coverImage} className='h-full object-cover' alt={item.title} />
                                </div>
                                <div className='w-[65%] px-2'>
                                    <p className='text-[#f6f6f6] text-[14px] my-1'>{item.title}</p>
                                    {item.discount === '0%' ? 
                                        (<div className="px-1 py-0.5 flex items-center gap-1">
                                            <p className="text-[#eee] text-[13px] font-semibold">{item.newPrice}</p>
                                        </div>) :
                                        (<div className="p-0.5 flex flex-wrap items-center justify-start gap-1 mt-1">
                                            <div className="bg-[#8bc53f] text-black font-bold text-[10px] px-2 py-0.5 rounded-sm">
                                                {item.discount}
                                            </div>
                                            <div className="bg-[#00000066] px-1 py-0.5 flex flex-wrap items-center gap-1">
                                                <p className="text-[#626366] line-through text-[10x]">{item.oldPrice}</p>
                                                <p className="text-[#eee] text-[11px] font-semibold">{item.newPrice}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </Link>
                        )
                    )}
                    <Link to={'/advancedsearch'}>
                        <div className='py-1 text-center bg-[#45505e] hover:bg-[#616e80] cursor-pointer mt-5 rounded-xs'>
                            <p className='text-[#fff]'>Advanced Search</p>
                        </div>
                    </Link>
                </div>
                )}
    </div>
  )
}

export default Search