import React from 'react'
import styles from './Editor.module.css'

function SelectableElement({ title, startDate, onClick, selected }) {
    return (
        <div className={selected ? styles.selectedline : styles.selectable} onClick={onClick}>
            {startDate} {title}
        </div>
    )
}

export default SelectableElement