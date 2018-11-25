import React from 'react'
import styles from './EditEventList.module.css'

function SelectableEvent({ title, start_date, onClick }) {
    return (
        <div className={styles.selectable} onClick={onClick}>
            {start_date} {title}
        </div>
    )
}

export default SelectableEvent