import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SteamSliderSkeleton() {
    return (
        <div className="w-full py-4 font-sans select-none">
            <div className="max-w-[1920px] mx-auto">

                <div className="hidden md:flex items-center justify-between mb-3 px-[8%]">
                    <Skeleton width={220} height={20} baseColor="#1b2838" highlightColor="#2a475e" />
                    <Skeleton width={150} height={34} borderRadius={3} baseColor="#1b2838" highlightColor="#2a475e" />
                </div>

                <div className="md:hidden px-3 mb-2">
                    <Skeleton width={190} height={17} baseColor="#1b2838" highlightColor="#2a475e" />
                </div>

                <div className="flex items-stretch">

                    <div className="hidden md:block w-[8%] bg-[#1c2d3d]">
                        <Skeleton height="100%" containerClassName="block h-full" baseColor="#16232f" highlightColor="#2a475e" />
                    </div>

                    <div className="flex-1 min-w-0 flex bg-[#16232f]">

                        <div className="relative flex-1 min-w-0 aspect-[226/100] overflow-hidden">
                            <Skeleton width="100%" height="100%" baseColor="#1b2838" highlightColor="#2a475e" />
                        </div>

                        <div className="hidden lg:flex flex-col w-[240px] shrink-0 bg-[#1c2d3d] px-4 py-4">

                            <Skeleton width="80%" height={18} baseColor="#1b2838" highlightColor="#2a475e" />

                            <Skeleton width="65%" height={13} className="mt-2" baseColor="#1b2838" highlightColor="#2a475e" />

                            <div className="mt-4 space-y-2">
                                <Skeleton width="100%" height={10} baseColor="#1b2838" highlightColor="#2a475e" />
                                <Skeleton width="95%" height={10} baseColor="#1b2838" highlightColor="#2a475e" />
                                <Skeleton width="75%" height={10} baseColor="#1b2838" highlightColor="#2a475e" />
                            </div>

                            <div className="flex-1" />

                            <Skeleton width="65%" height={13} baseColor="#1b2838" highlightColor="#2a475e" />

                            <div className="flex justify-end mt-3">
                                <Skeleton width={100} height={28} borderRadius={2} baseColor="#1b2838" highlightColor="#2a475e" />
                            </div>

                        </div>
                    </div>

                    <div className="hidden md:block w-[8%] bg-[#1c2d3d]">
                        <Skeleton height="100%" containerClassName="block h-full" baseColor="#16232f" highlightColor="#2a475e" />
                    </div>

                </div>

                <div className="md:hidden flex items-center justify-between bg-[#1c2d3d] px-4 py-3">
                    <Skeleton width={20} height={20} circle baseColor="#1b2838" highlightColor="#2a475e" />

                    <div className="flex-1 mx-4">
                        <Skeleton width="70%" height={14} baseColor="#1b2838" highlightColor="#2a475e" />
                        <Skeleton width="45%" height={10} className="mt-2" baseColor="#1b2838" highlightColor="#2a475e" />
                    </div>

                    <Skeleton width={20} height={20} circle baseColor="#1b2838" highlightColor="#2a475e" />
                </div>

                <div className="flex justify-center gap-[6px] mt-3">
                    {Array.from({ length: 7 }).map((_, i) => (
                        <Skeleton key={i} width={i === 0 ? 9 : 7} height={i === 0 ? 9 : 7} circle baseColor="#1b2838" highlightColor="#2a475e" />
                    ))}
                </div>

            </div>
        </div>
    );
}

export default SteamSliderSkeleton;