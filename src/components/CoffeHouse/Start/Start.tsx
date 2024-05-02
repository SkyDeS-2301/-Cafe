import styles from './Start.module.css'
import DecorWhite from "../../Decor/DecorWhite/DecorWhite.tsx";
import {FC} from "react";
const Start:FC = () => {
    return (
        <div className={styles.start}>
            <div className='container'>
                <div className={styles.start__inner}>

                    <h1 className={styles.title}>Everything You Love About Coffee</h1>

                    <DecorWhite />

                    <p className={styles.text}>
                        We makes every day full of energy and taste
                        <span>Want to try our beans?</span>
                    </p>

                    <button className={styles.button}>More</button>
                </div>
            </div>
        </div>
    );
};

export default Start;