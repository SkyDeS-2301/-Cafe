import styles from './Search.module.css'
import {ChangeEvent, FC, useState} from "react";
import {DataProps} from "../../../../../Interfaces/Interfaces.ts";
const Search:FC<DataProps> = (props) => {

    const [value, setValue] = useState('')

    const handleValue = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        // @ts-ignore
        props.handleFilter(e.target.value.toLowerCase())
    }

    return (
        <div className={styles.wrapper}>
            <p className={styles.text}>Looking for</p>
            <input
                className={styles.input}
                type='text'
                placeholder='start typing here...'
                value={value}
                onChange={handleValue}
            />
        </div>
    );
};

export default Search;