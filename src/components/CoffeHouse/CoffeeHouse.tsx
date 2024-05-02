import styles from './CoffeeHouse.module.css'
import Start from "./Start/Start.tsx";
import About from "./About/About.tsx";
import Our from "./Our/Our.tsx";
import {FC} from "react";
import {DataProps} from "../../Interfaces/Interfaces.ts";

const CoffeeHouse:FC<DataProps> = (props ) => {
    return (
        <div className={styles.wrapper}>
                <Start/>

                <About/>

                <Our data={props.data}/>
        </div>
    );
};

export default CoffeeHouse;