import styles from './App.module.css'
import Navbar from "../Navbar/Navbar.tsx";
import Footer from "../Footer/Footer.tsx";
// import CoffeeHouse from "../CoffeHouse/CoffeeHouse.tsx";
import OurCoffee from "../OurCoffee/OurCoffee.tsx";

import {FC, useState} from "react";


export type TypeDataItem = {
    name: string,
    imagesId: number,
    country: string,
    price: number,
}

const App:FC = () => {
    const initialData: TypeDataItem[] = [
        { name: 'Solimo Coffee Beans 2 kg', imagesId: 1, country: 'Brazil', price: 74.73 },
        { name: 'Presto Coffee Beans 1 kg', imagesId: 2, country: 'Kenya', price: 60.73 },
        { name: 'AROMISTICO Coffee 1 kg', imagesId: 3, country: 'Columbia', price: 10.73 },
        { name: 'Presto Coffee Beans 1 kg', imagesId: 1, country: 'Columbia', price: 30.73 },
        { name: 'AROMISTICO Coffee 1 kg', imagesId: 2, country: 'Brazil', price: 90.73 },
        { name: 'Solimo Coffee Beans 2 kg', imagesId: 3, country: 'Kenya', price: 20.73 },
    ];

    const [state, setState] = useState<TypeDataItem[]>(initialData);

    const handleFilter = (text: string): void => {
        const newState: TypeDataItem[] = initialData.filter(item => item.name.toLowerCase().includes(text))
        setState(newState)
    }
    const handleOption = (name: string): void => {
        const newState: TypeDataItem[] = initialData.filter(item => {
            if (item.country === name) return item
            if (item.country === name) return item
            if (item.country === name) return item
        })
        setState(newState)
    }

    return (
        <>
            <Navbar/>

            <div className={styles.mainWrapper}>

                <main className={styles.content}>

                    {/*<CoffeeHouse data={state}/>*/}

                    <OurCoffee data={state} handleFilter={handleFilter} handleOption={handleOption}/>

                </main>

                <Footer/>
            </div>
        </>

    )
}

export default App