import styles from './OurItem.module.css'
import {FC} from "react";
import coffee from '../../../../../images/coffee1.png'

interface IProps {
    name: string,
    imagesId: number,
    price: number
}

const OurItem: FC<IProps> = (props) => {

    return (
        <li className={styles.wrapper}>
            <img src={coffee} className={styles.img} alt={props.name}/>
            <p className={styles.text}>{props.name}</p>
            <div className={styles.price}>{props.price}$</div>
        </li>
    );
};

export default OurItem;