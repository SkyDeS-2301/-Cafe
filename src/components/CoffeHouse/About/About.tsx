import styles from './About.module.css'
import DecorBlack from "../../Decor/DecorBlack/DecorBlack.tsx";
import {FC} from "react";

const About:FC = () => {
    return (
        <div className={styles.about}>
            <div className='container'>
                <div className={styles.about__inner}>
                    <h2 className='title'>About Us</h2>

                    <DecorBlack/>
                    <div className={styles.wrapperText}>
                        <p className={styles.text}>Extremity sweetness difficult behaviour he of. On disposal of as
                            landlord
                            horrible.
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.</p>
                        <p className={styles.text}>Now residence dashwoods she excellent you. Shade being under his bed
                            her,
                            Much
                            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                            horrible but confined day end marriage. Eagerness furniture set preserved far
                            recommend. Did even but nor are most gave hope. Secure active living depend son
                            repair day ladies now.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;