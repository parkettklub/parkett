import React from 'react'
import profDefault from './defaultProfile.jpg'
import styles from './Community.module.css'

function Member({src = profDefault, position, description, name}) {
    return (
        <div className={styles.element}>
            <img src={src} />
            <div className={styles.desc}>
                <div>{position}</div>
                <br />
                <div>{description}</div>
            </div>
            <div className={styles.title}>
                <b>{name}</b>
            </div>
        </div>
    )
}

export default Member