import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function GameSkeleton() {
  return (
    <div className="w-[100%] md:w-[46%]">
        <Skeleton height={110} baseColor="#1b2838" highlightColor="#2a475e" borderRadius={4} />

        <div className="mt-1">
            <Skeleton width="100%" height={10} baseColor="#1b2838" highlightColor="#2a475e" borderRadius={3} />
        </div>

        <div className="mt-1">
            <Skeleton width="65%" height={10} baseColor="#1b2838" highlightColor="#2a475e" borderRadius={3} />
        </div>
    </div>
  )
}

export default GameSkeleton