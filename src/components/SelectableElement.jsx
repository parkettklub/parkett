import React from 'react'
import styles from './Editor.module.css'

function SelectableElement({ title, start_date, onClick, selected }) {
    return (
        <div className={selected ? styles.selectedline : styles.selectable} onClick={onClick}>
            {start_date} {title}
        </div>
    )
}

export default SelectableElement