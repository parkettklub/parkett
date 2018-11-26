import React from 'react'
import styles from './EditEvent.module.css'
import Plus from './plus.svg';

function FormMultipleSelectInput({ selected, title, label, name, handleChange, value, options }) {
    return (
        <div className={styles.formgroup} hidden={selected != title}>
            <label htmlFor={name}><b>{label}</b></label>
            <select multiple id={name} name={name} value={value} onChange={handleChange}
                className={styles.input}  >
                {options}
            </select>
            <img src={Plus} className={styles.plus} />
        </div>
    )
}

export default FormMultipleSelectInput