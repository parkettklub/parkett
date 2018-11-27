import React from 'react'
import styles from './Form.module.css'

function FormDateInput({ selected, title, label, name, handleChange, value, example }) {
    return (
        <div className={styles.formgroup} hidden={selected != title}>
            <label htmlFor={label}><b>{label}</b></label>
            <input id={name} name={name} type="datetime-local" className={styles.input}
                value={value} onChange={handleChange} />
            <div className={styles.helper} >{example}</div>
        </div>
    )
}

export default FormDateInput