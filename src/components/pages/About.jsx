import React from 'react'
import { FaSteam, FaApple, FaChrome, FaWindows } from "react-icons/fa";
import CommunitySection from './CommunitySection';

function About() {
  return (
    <section className="text-white bg1 mt-12 pt-30 pb-30">
      <div className="mx-auto flex max-w-[1200px] items-center px-5">
        <div className="z-10 w-full lg:w-1/2">
          <div className="mb-5 flex items-center gap-4">
            <FaSteam className="text-[70px] text-white" />
            <span className="text-4xl font-bold tracking-wide">
              STEAM
              <sup className="ml-1 text-xs">®</sup>
            </span>
          </div>
          <p className="max-w-[430px] text-[24px] leading-[1.1] text-white">
            Steam is the ultimate destination for
            playing, discussing, and creating games.
          </p>
          <div className="mt-5 flex flex-wrap gap-16">
            <div>
              <div className="mb-1 flex items-center gap-2 text-[11px] font-bold text-gray-400">
                <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                ONLINE
              </div>
              <div className="text-[25px] font-light">
                39,493,723
              </div>
            </div>
            <div>
              <div className="mb-1 flex items-center gap-2 text-[11px] font-bold text-gray-400">
                <span className="h-2 w-2 rounded-full bg-lime-400"></span>
                PLAYING NOW
              </div>
              <div className="text-[25px] font-light">
                12,565,094
              </div>
            </div>
          </div>
          <button className="mt-7 flex items-center px-6 py-2.5 gap-6 sm:gap-12 cursor-pointer justify-between rounded-sm bg-gradient-to-r from-cyan-400 to-blue-500 text-[17px] font-semibold transition hover:brightness-110">
            <span>INSTALL STEAM</span>
            <FaWindows className="text-xl" />
          </button>
          <div className="mt-4">
            <p className="mb-2 text-xs text-gray-400">
              Also available on:
            </p>
            <div className="flex items-center gap-3 text-gray-300">
              <FaApple />
              <FaSteam className="text-sm" />
              <FaChrome />
            </div>
          </div>
        </div>
        <div className="absolute right-0 hidden h-[400px] w-[52%] lg:block">
          <div
            className="absolute right-[18%] top-[30px] h-[285px] w-[72%] bg-cover bg-center"
            style={{backgroundImage:"url('https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/400/header.jpg')",}}/>
          <div className="absolute right-[6%] top-[20px] -z-10 h-[305px] w-[73%] rounded bg-[#20354c] opacity-70"></div>
          <div className="absolute bottom-[35px] right-[26%] h-[35px] w-[150px] bg-[#162536]"></div>
          <div className="absolute right-[17%] top-0 grid grid-cols-12 gap-1 opacity-40">
            {Array.from({ length: 48 }).map((_, index) => (
              <span
                key={index}
                className="h-[3px] w-[3px] rounded-full bg-[#2a6b9b]"
              ></span>
            ))}
          </div>
        </div>
      </div>
      <CommunitySection />
    </section>
  )
}

export default About