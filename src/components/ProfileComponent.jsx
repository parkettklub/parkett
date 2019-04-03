import React from 'react';
import { fetchMe } from './FetchFunctions';
import { getRole } from '../utils/login';
import styles from './Profile.module.css';

class ProfileComponent extends React.Component {
    state = {};


    componentDidMount() {
        this.getMe();
    }

    getMe = () => {
        fetchMe().then((myJson) => {
            this.setState({ ...myJson });
        });
    }

    render() {
        const { name, email } = this.state;
        return (
            <div className={styles.main}>
                <h2>{`név: ${name}`}</h2>
                <h4>{`szerep: ${getRole()}`}</h4>
                <div>{`email: ${email}`}</div>
            </div>
        );
    }
}

export default ProfileComponent;
