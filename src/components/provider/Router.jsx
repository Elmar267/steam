import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from '../../layout/Layout'
import Store from '../pages/Store'
import About from '../pages/About'
import Support from '../pages/Support'
import DetailGames from '../pages/DetailGames'
import GameBasket from '../pages/GameBasket'
import WishList from '../pages/WishList'

function Router() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Store/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/support' element={<Support/>} />
                <Route path='/game/:slug' element={<DetailGames/>} />
                <Route path='/basket' element={<GameBasket/>} />
                <Route path='/wishlist' element={<WishList/>} />
            </Route>
        </Routes>
    </>
  )
}

export default Router