import styles from './Our.module.css'
import OurList from "./OurList/OurList.tsx";
import {FC} from "react";
import {DataProps} from "../../../Interfaces/Interfaces.ts";
const Our:FC<DataProps> = (props) => {
    return (
        <div className={styles.our}>
            <div className='small__container'>
                <div className={styles.our__inner}>

                    <h2 className='title'>Our best</h2>

                    <OurList data={props.data.slice(0, 3)}/>

                </div>
            </div>
        </div>
    );
};

export default Our;