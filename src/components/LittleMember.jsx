import React from 'react'
import profDefault from './defaultProfile.jpg'
import styles from './Community.module.css'

function LittleMember({src = profDefault, name}) {
    let className = `${styles.element} ${styles.small}`;
    return (
         <div className={className}>
            <img src={src} />
            <div className={styles.title}>
                <b>{name}</b>
            </div>
         </div>
        )
}

export default LittleMember