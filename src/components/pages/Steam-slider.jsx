import React, { useContext, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import { DATA } from "../context/DataContext";
import { Link } from "react-router";

const PEEK_PCT = 8;
const AUTOPLAY_TIME = 3000;

function RatingLabel({ rating }) {
    const color = rating === "Mixed" ? "text-[#a3a3a3]" : "text-[#67c1f1]";
    return <span className={`${color} hover:underline cursor-pointer`}>{rating}</span>;
}

function SteamSlider() {
    const { product } = useContext(DATA);
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const timerRef = useRef(null);

    const games = product?.filter(game => game.discount !== "0%") || [];
    const count = games.length;
    const slide = games[index];
    const prevSlide = count > 0 ? games[(index - 1 + count) % count] : null;
    const nextSlide = count > 0 ? games[(index + 1) % count] : null;

    const goTo = (newIndex) => {
        if (!count) return;
        setIndex((newIndex + count) % count);
    };

    const next = () => goTo(index + 1)
    const prev = () => goTo(index - 1)

    useEffect(() => {
        if (!count) return;
        if (index >= count) setIndex(0)
    }, [count, index]);

    useEffect(() => {
        if (paused || count <= 1) return
        timerRef.current = setInterval(() => {
            setIndex((currentIndex) => (currentIndex + 1) % count)
        }, AUTOPLAY_TIME);
        return () => clearInterval(timerRef.current);
    }, [paused, count]);

    const insetStyle = { paddingLeft: `${PEEK_PCT}%`, paddingRight: `${PEEK_PCT}%` }

    if (!product || product.length === 0) return null

    return (
        <div className="w-full py-4 font-sans select-none" style={{ fontFamily: "'Motiva Sans', Arial, Helvetica, sans-serif" }} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            <div className="max-w-[1920px] mx-auto">

                <div className="hidden md:flex items-center justify-between mb-3" style={insetStyle}>
                    <h2 className="text-white text-[20px] font-bold tracking-tight">Featured & Recommended</h2>
                    <div className="flex items-center gap-2 bg-gradient-to-b from-[#3699d4] to-[#1b6ea8] rounded-[3px] pl-2 pr-3 py-[6px] cursor-pointer hover:brightness-110 transition">
                        <div className="flex -space-x-2">
                            <span className="w-[22px] h-[22px] rounded-full bg-[#0e1c26] border-2 border-[#8fd0f0] text-[8px] text-[#8fd0f0] flex items-center justify-center font-bold">20</span>
                            <span className="w-[22px] h-[22px] rounded-full bg-[#0e1c26] border-2 border-[#8fd0f0] text-[8px] text-[#8fd0f0] flex items-center justify-center font-bold">50</span>
                        </div>
                        <span className="text-white text-[13px] font-semibold whitespace-nowrap">Send a Gift Card</span>
                    </div>
                </div>

                <div className="md:hidden px-3 mb-2"><h2 className="text-white text-[17px] font-bold">Featured & Recommended</h2></div>

                <div className="flex items-stretch">

                    <button aria-label="Previous slide" onClick={prev} className="hidden md:flex relative shrink-0 overflow-hidden group" style={{ width: `${PEEK_PCT}%` }}>
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${prevSlide?.coverImage})`, filter: "grayscale(0.5) brightness(0.55)" }} />
                        <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />
                        <span className="relative m-auto text-white/70 group-hover:text-white transition-colors"><ChevronLeft size={26} strokeWidth={2} /></span>
                    </button>

                    <Link  to={`/game/${slide.slug}`} className="flex-1 min-w-0 flex bg-[#16232f] shadow-[0_2px_10px_rgba(0,0,0,0.4)]">

                        <div className="relative flex-1 min-w-0 overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${slide.coverImage})`, aspectRatio: "226/100" }}>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            <div className="absolute inset-0 flex items-center px-5 sm:px-8 md:px-12">
                                <div key={slide.id} className="text-white font-black uppercase leading-[0.9] tracking-tight" style={{ fontSize: "clamp(20px, 3.6vw, 42px)", textShadow: "0 2px 16px rgba(0,0,0,0.75)" }}>
                                    {slide.title?.split(" ").map((word, i) => <div key={i}>{word}</div>)}
                                </div>
                            </div>
                        </div>

                        <div className="hidden lg:flex flex-col w-[240px] shrink-0 bg-[#1c2d3d] px-4 py-4">
                            <h3 className="text-white text-[18px] font-semibold mb-1 truncate">{slide.title}</h3>
                            <div className="text-[13px] mb-3 leading-snug"><RatingLabel rating={slide.playerRating} /> {slide.reviews && <span className="text-[#7f97ab]">({slide.reviews} Reviews)</span>}</div>

                            <p className="text-[#ccc] text-[12px] leading-5 mb-5">{slide.aboutGame}</p>

                            <div className="flex-1" />

                            <div className="flex items-start gap-2 mb-3 text-[#a4d007]">
                                <TrendingUp size={20} className="mt-0.5 shrink-0" />
                                <div className="leading-tight">
                                    <div className="text-[13px] font-semibold">{slide.category || "Featured"}</div>
                                    <div className="text-white text-[13px]">Recommended on Steam</div>
                                </div>
                            </div>

                            {slide.discount === '0%' ? 
                                  (<div className="bg-[#00000066] px-2 py-1.5 flex justify-end items-center gap-1">
                                      <p className="text-[#eee] text-[14px] font-semibold">{slide.newPrice}</p>
                                  </div>) :
                                  (<div className="p-1 flex items-center justify-end gap-1 mt-1">
                                      <div className="bg-[#8bc53f] text-black font-bold text-[13px] px-2 py-0.5 rounded-sm">
                                          {slide.discount}
                                      </div>
                                      <div className="bg-[#00000066] px-2 py-1.5 flex items-center gap-1">
                                          <p className="text-[#626366] line-through text-[13x]">{slide.oldPrice}</p>
                                          <p className="text-[#eee] text-[14px] font-semibold">{slide.newPrice}</p>
                                      </div>
                                  </div>
                                  )}
                        </div>
                    </Link>

                    <button aria-label="Next slide" onClick={next} className="hidden md:flex relative shrink-0 overflow-hidden group" style={{ width: `${PEEK_PCT}%` }}>
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${nextSlide?.coverImage})`, filter: "grayscale(0.5) brightness(0.55)" }} />
                        <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />
                        <span className="relative m-auto text-white/70 group-hover:text-white transition-colors"><ChevronRight size={26} strokeWidth={2} /></span>
                    </button>

                </div>

                <div className="md:hidden flex items-center justify-between bg-[#1c2d3d] px-4 py-3">
                    <button aria-label="Previous slide" onClick={prev} className="text-white/70"><ChevronLeft size={20} /></button>
                    <div className="flex gap-3">
                        <div>
                            <h3 className="text-white text-sm font-semibold">{slide.title}</h3>
                            <div className="text-xs"><RatingLabel rating={slide.playerRating} /></div>
                        </div>
                        {slide.discount === '0%' ? 
                            (<div className="bg-[#00000066] px-1ş5 py-0.5 flex justify-end items-center gap-1">
                                <p className="text-[#eee] text-[12px] font-semibold">{slide.newPrice}</p>
                            </div>) :
                            (<div className="p-1 flex flex-wrap items-center justify-end gap-1 mt-1">
                                <div className="bg-[#8bc53f] text-black font-bold text-[10px] px-2 py-0.5 rounded-sm">
                                    {slide.discount}
                                </div>
                                <div className="bg-[#00000066] px-1.5 py-0.5 flex flex-wrap items-center gap-1">
                                    <p className="text-[#626366] line-through text-[11px]">{slide.oldPrice}</p>
                                    <p className="text-[#eee] text-[12px] font-semibold">{slide.newPrice}</p>
                                </div>
                            </div>
                            )}
                    </div>
                    <button aria-label="Next slide" onClick={next} className="text-white/70"><ChevronRight size={20} /></button>
                </div>

                <div className="flex items-center justify-center gap-[6px] mt-3" style={insetStyle}>
                    {games.map((game, i) => 
                      <button key={game.id || i} aria-label={`Go to slide ${i + 1}: ${game.title}`} onClick={() => goTo(i)} className="p-1"><span className={`block rounded-full transition-all duration-300 ${i === index ? "w-[9px] h-[9px] bg-white" : "w-[7px] h-[7px] bg-[#3a4b5c] hover:bg-[#5a7086]"}`} /></button>)}
                </div>

            </div>
        </div>
    );
}

export default SteamSlider