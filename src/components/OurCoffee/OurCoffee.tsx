import styles from './OurCoffee.module.css'
import OurStart from "./OurStart/OurStart.tsx";
import OurContent from "./OurContent/OurContent.tsx";
import {FC} from "react";
import {DataProps} from "../../Interfaces/Interfaces.ts";
// import OurCoffeeItem from "./OurCoffeeItem/OurCoffeeItem.tsx";

const OurCoffee:FC<DataProps> = (props) => {
    return (
        <div className={styles.wrapper}>
            <OurStart/>

            <OurContent
                data={props.data}
                handleFilter={props.handleFilter}
                handleOption={props.handleOption}
            />

            {/*<OurCoffeeItem/>*/}
        </div>
    );
};

export default OurCoffee;