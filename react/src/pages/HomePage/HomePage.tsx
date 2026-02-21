import { BrandCard } from '../../components/BrandCard/BrandCard'

const reactCars = [
    {
        id: "1",
        brand: "Tesla",
        car: "Model S",
        otherCars: "Model 3, Model X, Model Y, Cybertruck",
        resources: [
            "https://www.tesla.com/models",
            "https://www.tesla.com"
        ],
        country: "USA",
        isNormal: false,
        editDate: "03.02.2025, 19:49"
    },
    {
        id: "2",
        brand: "BMW",
        car: "3 Series",
        otherCars: "5 Series, 7 Series, X3, X5, i4",
        resources: [
            "https://www.bmw.com",
            "https://www.bmw.com/en/models/3-series/sedan/overview.html"
        ],
        country: "Germany",
        isNormal: true,
        editDate: "03.02.2025, 20:25"
    },
    {
        id: "3",
        brand: "Mercedes-Benz",
        car: "C-Class",
        otherCars: "E-Class, S-Class, GLC, GLE, A-Class",
        resources: [
            "https://www.mercedes-benz.com",
            "https://www.mercedes-benz.com/en/vehicles/passenger-cars/c-class/"
        ],
        country: "Germany",
        isNormal: true,
        editDate: "03.02.2025, 19:01"
    },
    {
        id: "4",
        brand: "Audi",
        car: "A4",
        otherCars: "A3, A6, Q3, Q5, e-tron",
        resources: [
            "https://www.audi.com",
            "https://www.audi.com/en/models/a4.html"
        ],
        country: "Germany",
        isNormal: true,
        editDate: "21.02.2025, 20:26"
    }
];


export const HomePage = () => {
    return (
        <>
            {reactCars.map((card, index) => (
                <BrandCard card={card} key={index} />
            ))}
        </>
    );

}

export default HomePage;
