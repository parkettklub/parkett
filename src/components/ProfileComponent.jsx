import React from 'react';
import { fetchMe } from './FetchFunctions';


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
        const { name, role, email } = this.state;
        return (
            <div>
                <h2>{`név: ${name}`}</h2>
                <h4>{`szerep: ${role}`}</h4>
                <div>{`email: ${email}`}</div>
            </div>
        );
    }
}

export default ProfileComponent;
