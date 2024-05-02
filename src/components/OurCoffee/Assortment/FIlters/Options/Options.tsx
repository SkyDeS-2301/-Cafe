import styles from './Options.module.css'
import OptionsList from "./OptionsList/OptionsList.tsx";
import {FC} from "react";
import {DataProps} from "../../../../../Interfaces/Interfaces.ts";
const Options:FC<DataProps> = (props) => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.text}>Or filter</p>

            <OptionsList handleOption={props.handleOption}/>
        </div>
    );
};

export default Options;