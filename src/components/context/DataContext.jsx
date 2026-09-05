import React, { createContext, useEffect, useState } from 'react'
import { getCategory, getData, getFeatures, getFooter, getGenres } from '../../service/api'
export const DATA = createContext([])

function DataContext({children}) {
    const [product, setProduct] = useState([])
    const [category, setCategory] = useState([])
    const [features, setFeatures] = useState([])
    const [genres, setGenres] = useState([])
    const [footerData, setFooterData] = useState([])

    useEffect(()=> {
        getData().then(res=> setProduct(res) )
        getCategory().then(res=> setCategory(res) )
        getFeatures().then(res=> setFeatures(res) )
        getGenres().then(res=> setGenres(res) )
        getFooter().then(res=> setFooterData(res) )
    },[])
    

  return (
    <DATA.Provider value={{product, category, features, genres, footerData}}>
        {children}
    </DATA.Provider>
  )
}

export default DataContext