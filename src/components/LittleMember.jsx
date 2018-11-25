import React from 'react'
import profDefault from './defaultProfile.jpg'
import styles from './Community.module.css'

function LittleMember(props) {
    let src = profDefault;
    if (props.details.src) src = props.details.src;
    return (
         <div className={styles.element + " " + styles.small}>
            <img src={src} />
            <div className={styles.title}>
                <b>{props.details.name}</b>
            </div>
         </div>
        )
}

export default LittleMember