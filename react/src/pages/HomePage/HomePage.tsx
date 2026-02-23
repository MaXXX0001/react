import { BrandCard } from '../../components/BrandCard/BrandCard'
import { BrandCardList } from '../../components/BrandCardList/BrandCardList'
import { useState, useEffect } from "react";
import { API_URL } from '../../constants'

export const HomePage = () => {
    const [brands, setBrands] = useState([]);

    // @ts-ignore
    const getBrands = async () => {
        try {
            const response = await fetch(`${API_URL}/brands`);
            const brands = await response.json();

            setBrands(brands)

            // brands.push(...data);
        } catch (error) {}
    };

    useEffect(() => {
        getBrands()
    }, [])

    return (
        <>
            <BrandCardList cards={brands} />
        </>
    );

}

export default HomePage;
