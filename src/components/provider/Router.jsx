import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import Layout from '../../layout/Layout'
import Store from '../pages/Store'
import About from '../pages/About'
import DetailGames from '../pages/DetailGames'
import GameBasket from '../pages/GameBasket'
import WishList from '../pages/WishList'
import ScrollToTop from '../pages/ScrollToTop'
import AdvancedSearch from '../pages/AdvancedSearch'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login'
import Register from '../pages/Register'

function Router() {
  return (
    <>
        <ScrollToTop />

        <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path='/' element={<Layout/>}>
                <Route index element={<Navigate to="/store" replace />} />
                <Route path='/store' element={<Store />} />
                <Route path='/about' element={<About/>} />
                <Route path='/game/:slug' element={<DetailGames/>} />
                <Route path='/basket' element={<GameBasket/>} />
                <Route path='/wishlist' element={<WishList/>} />
                <Route path='/advancedsearch' element={<AdvancedSearch/>} />
            </Route>
        </Routes>
    </>
  )
}

export default Router