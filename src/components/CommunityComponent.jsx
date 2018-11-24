import React from 'react'
import styles from './Community.module.css'
import SocialFeed from './SocialFeed'
import Members from './Members'

class CommunityComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {

        console.log("img rendered");
        return (
            <div className={styles.main}>
                <SocialFeed />
                <Members />
            </div>
        )
    }
}

export default CommunityComponent;