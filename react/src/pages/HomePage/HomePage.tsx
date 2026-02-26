import {BrandCardList} from '../../components/BrandCardList/BrandCardList'
import { Loader } from '../../components/Loader/Loader'
import { useFetch } from '../../hooks/useFetch'
import { useState, useEffect, useRef } from "react";
import { API_URL } from '../../constants'

export const HomePage = () => {
    const [brands, setBrands] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    const inputRef = useRef(null);

    const [getBrands, isLoading, error] = useFetch(async (url) => {
        const response = await fetch(`${API_URL}/${ url }`);
        const brands = await response.json();

        setBrands(brands)

        return brands;
    });

    useEffect(() => {
        // @ts-ignore
        getBrands('brands')
    }, [])

    const searchValuerHandler = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <>
            <input type="text" value={searchValue} onChange={searchValuerHandler} ref={inputRef}/>

            { isLoading && <Loader/> }
             {error && <p>{error}</p> }
            <BrandCardList cards={ brands }/>
        </>
    );

}

export default HomePage;
