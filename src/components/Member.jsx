import React from 'react'
import profDefault from './defaultProfile.jpg'
import styles from './Community.module.css'

function Member(props) {
    let src = profDefault;
    if (props.details.src) src = props.details.src;
    return (
        <div className={styles.element}>
            <img src={src} />
            <div className={styles.desc}>
                <div>{props.details.position}</div>
                <br />
                <div>{props.details.description}</div>
            </div>
            <div className={styles.title}>
                <b>{props.details.name}</b>
            </div>
        </div>
    )
}

export default Member