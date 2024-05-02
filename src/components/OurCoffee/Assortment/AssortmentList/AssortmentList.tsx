import styles from './AssortmentList.module.css'
import AssortmentItem from "./AssortmentItem/AssortmentItem.tsx";
import {FC} from "react";
import {DataProps} from "../../../../Interfaces/Interfaces.ts";

const AssortmentList: FC<DataProps> = (props) => {

    const assortmentElements = props.data.map(({name, country, price}, index) => (
        <AssortmentItem key={index} name={name} country={country} price={price}/>
    ))

    return (
        <div className={styles.list}>
            {assortmentElements}
        </div>
    );
};

export default AssortmentList;