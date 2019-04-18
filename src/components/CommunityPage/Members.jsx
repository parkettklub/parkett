import React from 'react';
import Member from './Member';
import AboutUs from './AboutUs';
import LittleMember from './LittleMember';
import { fetchAll } from '../../utils/FetchFunctions';
import styles from './Community.module.css';
import Popup from './Popup';

class Members extends React.Component {
    constructor() {
        super();
        this.state = {
            members: [],
            showPopup: false,
            selectedMember: null,
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

    close = () => {
        this.setState({
            showPopup: false,
            selectedMember: null,
        });
    }

    open = (member) => {
        this.setState({
            showPopup: true,
            selectedMember: member,
        });
    }

    next = (member) => {
        const { members } = this.state;
        let i = members.findIndex(m => m.id === member.id) + 1;
        if (i >= members.length) i = 0;
        this.setState({
            showPopup: true,
            selectedMember: members[i],
        });
    }

    prev = (member) => {
        const { members } = this.state;
        let i = members.findIndex(m => m.id === member.id) - 1;
        if (i < 0) i = members.length - 1;
        this.setState({
            showPopup: true,
            selectedMember: members[i],
        });
    }

    render() {
        const { members, showPopup, selectedMember } = this.state;
        members.sort((a, b) => a.name.localeCompare(b.name)).sort((a, b) => ((a.position === 'öregtag' && b.position !== 'öregtag') ? -1 : 0));
        return (
            <div className={styles.main}>
                <AboutUs />
                <div className={styles.memberTitle}>Tagok</div>
                <div className={styles.people6}>
                    {members.filter(member => member.position !== 'öregtag').map(
                        member => (
                            <Member
                                {...member}
                                key={member.id}
                                onClick={() => this.open(member)}
                            />
                        ),
                    ).slice(0, 6)}
                </div>
                <div className={styles.peopleOthers}>
                    {members.filter(member => member.position !== 'öregtag').map(
                        member => (
                            <Member
                                {...member}
                                key={member.id}
                                onClick={() => this.open(member)}
                            />
                        ),
                    ).slice(6)}
                </div>
                <div className={styles.oldMembers}>Öregtagok</div>
                <div className={styles.peopleOthers}>
                    {members.filter(member => member.position === 'öregtag').map(
                        member => (
                            <LittleMember
                                {...member}
                                key={member.id}
                                onClick={() => this.open(member)}
                            />
                        ),
                    )}
                </div>
                {
                    showPopup
                        ? (
                            <Popup
                                {...selectedMember}
                                close={() => this.close()}
                                next={() => this.next(selectedMember)}
                                prev={() => this.prev(selectedMember)}
                            />
                        )
                        : null
                }
            </div>
        );
    }
}

export default Members;
