import styles from './OptionsList.module.css'
import OptionsItem from "./OptionsItem/OptionsItem.tsx";
import {FC} from "react";
import {DataProps} from "../../../../../../Interfaces/Interfaces.ts";
const OptionsList:FC<DataProps> = (props) => {
    return (
        <ul className={styles.list}>
            <OptionsItem handleOption={props.handleOption} country='Brazil'/>
            <OptionsItem handleOption={props.handleOption} country='Kenya'/>
            <OptionsItem handleOption={props.handleOption} country='Columbia'/>
        </ul>
    );
};

export default OptionsList;