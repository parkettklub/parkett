import React from 'react'
import './Members.css'
import profDefault from './defaultProfile.jpg'
import styles from './Community.module.css'

class Member extends React.Component {
    constructor() {
        super();
    }

    render() {
        let src = profDefault;
        if (this.props.details.src) src = this.props.details.src;
        return (
            <div className={styles.element}>
                <img src={src} />
                <div className={styles.desc}>
                    <div>{this.props.details.position}</div>
                    <br />
                    <div>{this.props.details.description}</div>
                </div>
                <div className={styles.title}>
                    <b>{this.props.details.name}</b>
                </div>
            </div>
        )
    }
}

export default Member