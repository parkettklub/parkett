import React from 'react'
import styles from './EditEvent.module.css'

function FormSelect({ selected, title, onClick }) {
    return (
        <div className={selected == title ? styles.selected : ""}
            onClick={onClick}>
            {title}
        </div>
    )
}

export default FormSelect