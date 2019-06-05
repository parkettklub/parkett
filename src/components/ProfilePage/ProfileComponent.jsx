import React from 'react';
import { fetchMe, fetchAll } from '../../utils/FetchFunctions';
import { getRole } from '../../utils/login';
import styles from './Profile.module.css';
import FormMember from '../Editor/FormMember';

class ProfileComponent extends React.Component {
    state = {};

    componentDidMount() {
        this.getMe();
    }

    getMe = () => {
        fetchMe().then((myJson) => {
            this.setState({ ...myJson });
            if (myJson.member_id) this.fetchMembers(myJson.member_id);
        });
    }

    fetchMembers = (id) => {
        fetchAll(`members/${id}`).then((myJson) => {
            this.setState({ member: myJson });
        });
    }

    render() {
        const { name, email, member } = this.state;
        return (
            <div className={styles.main}>
                <h2>{`név: ${name}`}</h2>
                <h4>{`szerep: ${getRole()}`}</h4>
                <div>{`email: ${email}`}</div>
                {
                    member ? (
                        <FormMember
                            selectedObject={member}
                            fetchFunction={this.fetchMembers}
                        />
                    ) : null
                }

            </div>
        );
    }
}

export default ProfileComponent;
