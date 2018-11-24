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
            <div className={styles.element} style={{
                backgroundImage: 'url("' + src + '")',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}>
                <div></div>
                <div className="profileDesc">
                    <div className="profileName"><b>{this.props.details.name}</b></div>
                    <div className="desc">{this.props.details.position}</div>
                    <div className="desc">{this.props.details.description}</div>
                </div>
            </div>
        )
    }
}

export default Member