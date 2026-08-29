import React, { useContext, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DATA } from '../context/DataContext';
import { Link } from 'react-router';
import MainCardSkeleton from './MainCardSkeleton';

function ActionGames() {
    const { product } = useContext(DATA)

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    useEffect(() => {
        const updateItemsPerPage = () => {
            const width = window.innerWidth;

            if (width >= 1100) {
                setItemsPerPage(5);
            } else if (width >= 850) {
                setItemsPerPage(4);
            } else if (width >= 600) {
                setItemsPerPage(3);
            } else if (width >= 400) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(1);
            }
        };

        updateItemsPerPage();

        window.addEventListener('resize', updateItemsPerPage);

        return () => {
            window.removeEventListener('resize', updateItemsPerPage);
        };
    }, []);

    const games = product || [];

    const filteredGames = games.filter(
        (game) => game.category === "action")

    const maxIndex = Math.max(
        0,
        filteredGames.length - itemsPerPage
    );

    useEffect(() => {
        setCurrentIndex((prev) =>
            Math.min(prev, maxIndex)
        );
    }, [itemsPerPage, maxIndex]);

    const prevSlide = () => {
        setCurrentIndex((prev) => {
            if (prev === 0) {
                return maxIndex;
            }

            return prev - 1;
        });
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => {
            if (prev >= maxIndex) {
                return 0;
            }

            return prev + 1;
        });
    };


  return (
    <div className="text-white mt-8 p-4 sm:p-6 max-w-[1250px] mx-auto">

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
            <h2 className="text-2xl font-bold text-[#e5e5e5]">
                Action Games
            </h2>
        </div>
        <div className="relative flex items-center">
            <button
                onClick={prevSlide}
                className="absolute -left-3 sm:-left-7 z-10 text-[#67707b] hover:text-white">
                <ChevronLeft className="w-7 h-7 sm:w-9 sm:h-9" />
            </button>
            <div className="overflow-hidden w-full">
                <div
                    className="flex gap-2 sm:gap-3 transition-transform duration-300 ease-in-out"
                    style={{
                        transform: `translateX(calc(
                        -${currentIndex} *
                        (
                        (100% - ${(itemsPerPage - 1) * 8}px)
                        / ${itemsPerPage}
                        + 8px))`,
                    }} >
                    {filteredGames.length === 0 ? (
                        Array.from({ length: 5 }).map((_, i) => (
                            <MainCardSkeleton key={i} />
                        ))
                    ) :
                    (filteredGames.map((game) => (

                        <Link id={game.id} to={`/game/${game.slug}`} key={game.id} className="flex-none cursor-pointer group/card"
                            style={{
                                width: `calc(
                            (100% - ${(itemsPerPage - 1) * 8}px)
                            / ${itemsPerPage})`,
                            }}>
                            <div className="relative aspect-[16/9] overflow-hidden">
                                <img src={game.coverImage} alt={game.title}
                                    className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-200" />
                            </div>
                            {game.discount === '0%' ?
                                (<div className="bg-[#00000066] px-2 py-1.5 flex justify-end items-center gap-1">
                                    <p className="text-[#eee] text-[14px] font-semibold">{game.newPrice}</p>
                                </div>) :
                                (<div className="bg-[#00000066] p-0.5 flex items-center justify-end gap-1 mt-1">
                                    <div className="bg-[#8bc53f] text-black font-bold text-[12px] px-2 py-0.5 rounded-sm">
                                        {game.discount}
                                    </div>
                                    <div className="bg-[#00000066] px-2 py-0.5 flex items-center gap-1">
                                        <p className="text-[#626366] line-through text-[14px]">{game.oldPrice}</p>
                                        <p className="text-[#eee] text-[14px] font-semibold">{game.newPrice}</p>
                                    </div>
                                </div>
                                )}
                        </Link>
                    )))
                    }

                </div>

            </div>

            <button
                onClick={nextSlide}
                className="absolute -right-3 sm:-right-7 z-10 text-[#67707b] hover:text-white"
            >
                <ChevronRight className="w-7 h-7 sm:w-9 sm:h-9" />
            </button>

        </div>

        <div className="flex justify-center gap-1.5 mt-4">

            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${currentIndex === index
                        ? 'w-6 bg-white'
                        : 'w-2 bg-[#ffffff33]'
                        }`}
                />
            ))}

        </div>

    </div>
);
}

export default ActionGames