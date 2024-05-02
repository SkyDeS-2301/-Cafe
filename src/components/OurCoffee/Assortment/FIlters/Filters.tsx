import styles from './Filters.module.css'
import Search from "./Search/Search.tsx";
import Options from "./Options/Options.tsx";
import {FC} from "react";
import {DataProps} from "../../../../Interfaces/Interfaces.ts";
const Filters:FC<DataProps> = (props) => {
    return (
        <div className={styles.wrapper}>

            <Search handleFilter={props.handleFilter}/>

            <Options handleOption={props.handleOption}/>

        </div>
    );
};

export default Filters;