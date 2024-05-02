import styles from './Footer.module.css'
import styleNav from '../Navigation.module.css'
import logoBlack from '../../assets/logoBlack.svg'
import DecorBlack from "../Decor/DecorBlack/DecorBlack.tsx";
import {FC} from "react";

const Footer:FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styleNav.container}>
                <nav className={styleNav.nav}>
                    <ul className={styleNav.menu}>
                        <li className={styleNav.menu__item}>
                            <a href='#!' className={`${styleNav.logo} ${styles.menu__itemLink}`}>
                                <img src={logoBlack} alt='Logo'/>
                                Coffee house
                            </a>
                        </li>
                        <li className={styleNav.menu__item}>
                            <a href='#!' className={styles.menu__itemLink}>
                                Our coffee
                            </a>
                        </li>
                    </ul>
                </nav>
                <DecorBlack/>
            </div>
        </footer>
    );
};

export default Footer;