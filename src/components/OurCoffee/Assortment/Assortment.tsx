import styles from './Assortment.module.css'
import Filters from "./FIlters/Filters.tsx";
import AssortmentList from "./AssortmentList/AssortmentList.tsx";
import {FC} from "react";
import {DataProps} from "../../../Interfaces/Interfaces.ts";

const Assortment:FC<DataProps> = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className='small__container'>
                <Filters
                    handleFilter={props.handleFilter}
                    handleOption={props.handleOption}
                />

                <AssortmentList data={props.data}/>
            </div>
        </div>
    );
};

export default Assortment;