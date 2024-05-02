import styles from './AssortmentItem.module.css'
import coffee from '../../../../../images/coffee1.png'
import {FC} from "react";

interface IProps {
    name: string,
    country: string,
    price: number,
}

const AssortmentItem: FC<IProps> = ({name, country, price}) => {
    return (
        <div className={styles.item}>
            <img src={coffee} className={styles.img}/>

            <p className={styles.text}>{name}</p>
            <p className={styles.text}>{country}</p>
            <p className={styles.price}>{price}$</p>
        </div>
    );
};

export default AssortmentItem;