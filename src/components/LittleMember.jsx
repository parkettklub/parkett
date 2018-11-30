import React from 'react'
import profDefault from './defaultProfile.jpg'
import styles from './Community.module.css'

function LittleMember({ src = profDefault, name }) {
    return (
        <div className={`${styles.element} ${styles.small}`}>
            <img src={src} />
            <div className={styles.title}>
                <strong>{name} </strong>
            </div>
        </div>
    )
}

export default LittleMember