import React, { createContext, useEffect, useState } from "react";
import { getData } from "../../service/api";

export const DATA = createContext([]);

function DataContext({ children }) {
    const [product, setProduct] = useState([]);
    const [category, setCategory] = useState([]);
    const [features, setFeatures] = useState([]);
    const [genres, setGenres] = useState([]);
    const [footerData, setFooterData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const [products, categories, featuresData, genresData, footer] =
                await Promise.all([
                    getData("products"),
                    getData("category"),
                    getData("features"),
                    getData("genres"),
                    getData("footer")
                ]);
            setProduct(products);
            setCategory(categories);
            setFeatures(featuresData);
            setGenres(genresData);
            setFooterData(footer);
        }

        fetchData();
    }, []);

    return (
        <DATA.Provider  value={{ product, category, features, genres, footerData }} >
            {children}
        </DATA.Provider>
    );
}

export default DataContext;