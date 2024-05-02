import styles from './OurList.module.css'
import OurItem from "./OurItem/OurItem.tsx";
import {FC} from "react";
import {DataProps} from "../../../../Interfaces/Interfaces.ts";
import {TypeDataItem} from "../../../App/App.tsx";

const OurList: FC<DataProps> = (props) => {
    const elementsList = props.data.map((item:TypeDataItem, index) => (
        <OurItem
            key={index}
            name={item.name}
            imagesId={item.imagesId}
            price={item.price}/>
    ))

    return (
        <ul className={styles.wrapper}>
            {elementsList}
        </ul>
    );
};

export default OurList;