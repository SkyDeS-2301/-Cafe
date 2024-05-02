import styles from './Navbar.module.css'
import styleNav from '../Navigation.module.css'
import logoWhite from '../../assets/logoWhite.svg';
import {FC} from "react";

const Navbar:FC = () => {
    return (
        <header className={styles.header}>
            <div className='container'>
                <nav className={styleNav.nav}>
                    <ul className={styleNav.menu}>
                        <li className={styleNav.menu__item}>
                            <a href='#!' className={`${styleNav.logo} ${styles.menu__itemLink}`}>
                                <img src={logoWhite} alt='Logo'/>
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
            </div>
        </header>
    );
};

export default Navbar;