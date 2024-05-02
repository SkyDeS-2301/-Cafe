import styles from './DecorBlack.module.css'
import decorBlackImg from '../../../assets/decor-black.png'
import {FC} from "react";
const DecorBlack:FC = () => {
    return (
        <div className={styles.wrapper}>
            <img src={decorBlackImg}/>
        </div>
    );
};

export default DecorBlack;