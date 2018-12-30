import React from 'react'
import styles from './Form.module.css'

function FormSelect({ selected, title, label, onClick }) {
    return (
        <div className={selected == title ? styles.selected : ""}
            onClick={onClick}>
            {label}
        </div>
    )
}

export default FormSelect