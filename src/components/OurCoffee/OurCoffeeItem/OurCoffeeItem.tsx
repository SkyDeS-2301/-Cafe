import styles from './OurCoffeeItem.module.css'
import coffeeImg from '../../../assets/coffeeImg/coffee1.jpg'
import DecorBlack from "../../Decor/DecorBlack/DecorBlack.tsx";
import {FC} from "react";

const OurCoffeeItem:FC = () => {
    return (
        <div className='small__container'>
            <div className={styles.item}>
                <img src={coffeeImg} className={styles.img}/>

                <div className={styles.content}>
                    <h2 className='title'>About it</h2>
                    <DecorBlack/>
                    <p className={styles.country}>
                        <span className={styles.subTitle}>Country:</span> Brasil
                    </p>
                    <p className={styles.description}>
                        <span className={styles.subTitle}>Description:</span> Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className={styles.price}><span className={styles.subTitle}>Price:</span> 16.99$</p>
                </div>
            </div>
        </div>
    );
};

export default OurCoffeeItem;