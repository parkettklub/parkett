import React from 'react'
import styles from './EditEventList.module.css'

function SelectableEvent({ title, start_date, onClick, selected }) {
    return (
        <div className={selected ? styles.selectedline : styles.selectable} onClick={onClick}>
            {start_date} {title}
        </div>
    )
}

export default SelectableEvent