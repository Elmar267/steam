import React, { createContext, useState } from 'react'
export const WISH = createContext([])

function WishContext({children}) {
    const [wish, setWish] = useState([])
    function addWish(id, title, oldPrice, newPrice, discount, platform, coverImage){
        const alreadyExistsWish = wish.some(item => item.id === id);

        if (alreadyExistsWish) {
            return;
        }

        setWish([...wish, {
            id, title, oldPrice, newPrice, discount, platform, coverImage
        }])
    }

    function removeFromWishlist(id) {
        setWish(wish.filter(item => item.id !== id))
    }

    function clearWishlist() {
        setWish([])
    }

  return (
    <WISH.Provider value={{addWish, wish, removeFromWishlist, clearWishlist}}>
        {children}
    </WISH.Provider>
  )
}

export default WishContext