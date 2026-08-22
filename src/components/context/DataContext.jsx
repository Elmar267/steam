import React, { createContext, useEffect, useState } from 'react'
import { getCategory, getData, getFeatures } from '../../service/api'
export const DATA = createContext([])

function DataContext({children}) {
    const [product, setProduct] = useState([])
    const [category, setCategory] = useState([])
    const [features, setFeatures] = useState([])

    useEffect(()=> {
        getData().then(res=> setProduct(res) )
    },[])
    useEffect(()=> {
        getCategory().then(res=> setCategory(res) )
    },[])
    useEffect(()=> {
        getFeatures().then(res=> setFeatures(res) )
    },[])
    

  return (
    <DATA.Provider value={{product, category, features}}>
        {children}
    </DATA.Provider>
  )
}

export default DataContext