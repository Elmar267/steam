import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function MainCardSkeleton() {
    return (
        <div className="w-full sm:w-[250px] md:w-[300px] lg:w-[270px]">
            <Skeleton height={127} baseColor="#1b2838" highlightColor="#2a475e" borderRadius={4} />

            <div className="mt-1">
                <Skeleton width="100%" height={10} baseColor="#1b2838" highlightColor="#2a475e" borderRadius={3} />
            </div>

            <div className="mt-1">
                <Skeleton width="65%" height={10} baseColor="#1b2838" highlightColor="#2a475e" borderRadius={3} />
            </div>
        </div>
    )
}

export default MainCardSkeleton