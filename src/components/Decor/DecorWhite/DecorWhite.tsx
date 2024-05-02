import styles from './DecorWhite.module.css'
import decorWhiteImg from '../../../assets/decor-white.png'
import {FC} from "react";
const DecorWhite:FC = () => {
    return (
        <div className={styles.wrapper}>
            <img src={decorWhiteImg}/>
        </div>
    );
};

export default DecorWhite;