import styles from './Beans.module.css'
import beansImg from '../../../assets/beans.png'
import DecorBlack from "../../Decor/DecorBlack/DecorBlack.tsx";
import {FC} from "react";

const Beans:FC = () => {
    return (
        <div className='small__container'>
            <div className={styles.wrapper}>
                <img src={beansImg} className={styles.img}/>

                <div>
                    <h2 className='title'>About our beans</h2>
                    <DecorBlack/>

                    <div className={styles.wrapperText}>
                        <p className={styles.text}>
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        </p>
                        <p className={styles.text}>
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions.
                        </p>
                        <p className={styles.text}>
                            As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.
                        </p>
                    </div>

                </div>
            </div>
            <hr className={styles.line}/>
        </div>
    );
};

export default Beans;