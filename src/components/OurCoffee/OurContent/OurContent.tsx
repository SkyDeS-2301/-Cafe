import styles from './OurContent.module.css'
import Beans from "../Beans/Beans.tsx";
import Assortment from "../Assortment/Assortment.tsx";
import {FC} from "react";
import {DataProps} from "../../../Interfaces/Interfaces.ts";
const OurContent:FC<DataProps> = (props) => {
    return (
        <div className={styles.wrapper}>
            <Beans/>

            <Assortment
                data={props.data}
                handleFilter={props.handleFilter}
                handleOption={props.handleOption}
            />
        </div>
    );
};

export default OurContent;