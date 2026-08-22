import React, { createContext, useState } from 'react'
export const BASKET = createContext([])

function BasketContext({children}) {
    const [basket, setBasket] = useState([])
    function addBasket(id, title, oldPrice, newPrice, discount, platform, coverImage){
        setBasket([...basket, {
            id, title, oldPrice, newPrice, discount, platform, coverImage
        }])
    }

    function removeFromBasket(id) {
        setBasket(basket.filter(item => item.id !== id))
    }

    function clearBasket() {
        setBasket([])
    }

  return (
    <BASKET.Provider value={{addBasket, basket, removeFromBasket, clearBasket}}>
        {children}
    </BASKET.Provider>
  )
}

export default BasketContext