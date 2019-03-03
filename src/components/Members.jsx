import React from 'react';
import Member from './Member';
import AboutUs from './AboutUs';
import LittleMember from './LittleMember';
import { fetchAll } from './FetchFunctions';
import styles from './Community.module.css';

class Members extends React.Component {
    constructor() {
        super();
        this.state = {
            members: [],
        };
    }

    componentDidMount() {
        this.fetchMembers();
    }

    fetchMembers = async function () {
        const myJson = await fetchAll('members');
        this.setState({ members: myJson });
    }

    render() {
        const { members } = this.state;
        return (
            <div className={styles.main}>
                <AboutUs />
                <div className={styles.people6}>
                    {members.map((member) => {
                        if (member.position !== 'öregtag') {
                            return (<Member {...member} key={member.id} />);
                        }
                        return null;
                    }).slice(1, 7)}
                </div>
                <div className={styles.peopleOthers}>
                    {members.map((member) => {
                        if (member.position !== 'öregtag') {
                            return (<Member {...member} key={member.id} />);
                        }
                        return null;
                    }).slice(7)}
                </div>
                <div className={styles.peopleOthers}>
                    {members.map((member) => {
                        if (member.position === 'öregtag') {
                            return (<LittleMember {...member} key={member.id} />);
                        }
                        return null;
                    })}
                </div>
            </div>
        );
    }
}

export default Members;
