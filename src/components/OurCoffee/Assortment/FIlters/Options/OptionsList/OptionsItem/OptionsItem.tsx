import styles from './OptionsItem.module.css'
import {FC} from "react";
import {DataProps} from "../../../../../../../Interfaces/Interfaces.ts";
interface IProps extends DataProps{
    country: string
}
const OptionsItem:FC<IProps> = (props) => {

    const handleButton = (e:MouseEvent<HTMLButtonElement>) => {
        // @ts-ignore
        props.handleOption(e.target.innerHTML)
    }

    return (
        <li className={styles.item}>
            <button className={styles.button} onClick={handleButton}>
                {props.country}
            </button>
        </li>

    );
};

export default OptionsItem;