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

    fetchMembers = () => {
        fetchAll('members').then((myJson) => {
            this.setState({ members: myJson });
        });
    }

    render() {
        const { members } = this.state;
        members.sort((a, b) => a.name.localeCompare(b.name));
        return (
            <div className={styles.main}>
                <AboutUs />
                <div className={styles.memberTitle}>Tagok:</div>
                <div className={styles.people6}>
                    {members.filter(member => member.position !== 'öregtag').map(
                        member => <Member {...member} key={member.id} />,
                    ).slice(0, 6)}
                </div>
                <div className={styles.peopleOthers}>
                    {members.filter(member => member.position !== 'öregtag').map(
                        member => <Member {...member} key={member.id} />,
                    ).slice(6)}
                </div>
                <div className={styles.oldMembers}>Öregtagok:</div>
                <div className={styles.peopleOthers}>
                    {members.filter(member => member.position === 'öregtag').map(
                        member => <LittleMember {...member} key={member.id} />,
                    )}
                </div>
            </div>
        );
    }
}

export default Members;
