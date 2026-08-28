import React, { createContext, useEffect, useState } from 'react'

export const BASKET = createContext([])

function BasketContext({ children }) {
    const [basket, setBasket] = useState(() => {
        const savedBasket = localStorage.getItem("basket")
        return savedBasket ? JSON.parse(savedBasket) : []
    })

    useEffect(() => {
        localStorage.setItem("basket", JSON.stringify(basket))
    }, [basket])

    function addBasket(id, title, oldPrice, newPrice, discount, platform, coverImage, slug) {
        const alreadyExistsBasket = basket.some(item => item.id === id)

        if (alreadyExistsBasket) {
            return
        }

        setBasket([...basket, {
            id, title, oldPrice, newPrice, discount, platform, coverImage, slug
        }])
    }

    function removeFromBasket(id) {
        setBasket(basket.filter(item => item.id !== id))
    }

    function clearBasket() {
        setBasket([])
    }

    return (
        <BASKET.Provider value={{ addBasket, basket, removeFromBasket, clearBasket }}>
            {children}
        </BASKET.Provider>
    )
}

export default BasketContext