import React from 'react';
import Member from './Member';
import AboutUs from './AboutUs';
import LittleMember from './LittleMember';
import Emese from './Emese.jpg';
import profDefault from './gergoProfile.jpg';
import styles from './Community.module.css';

class Members extends React.Component {
    constructor() {
        super();
        this.state = {
            members: [{
                id: 0,
                name: 'Padányi Emese',
                email: 'dorogix@gmail.com',
                position: 'gazdasági felelős',
                src: Emese,
                description: 'Ez egy hosszú description mert ez itt hosszú Minden rendben van és a parkett klub is a legjobb',

            }, {
                id: 1,
                name: 'Dorogi-Kovács Gábor',
                email: 'dorogix@gmail.com',
                position: 'tag',
                description: 'Mizu.. nem tudom mit írjak ide',

            }, {
                id: 2,
                name: 'Kovács Gergő',
                email: 'dorogix@gmail.com',
                src: profDefault,
                position: 'pr felelős',
                description: 'Hello1',

            }, {
                id: 3,
                name: 'Dorogi-Kovács Gábor',
                email: 'dorogix@gmail.com',
                position: 'tag',
                description: 'Minden rendben van és a parkett klub is a legjobb',

            }, {
                id: 4,
                name: 'Dorogi-Kovács Gábor',
                email: 'dorogix@gmail.com',
                position: 'tag',
                description: 'Minden rendben van és a parkett klub is a legjobb',

            }, {
                id: 5,
                name: 'Dorogi-Kovács Gábor',
                email: 'dorogix@gmail.com',
                position: 'tag',
                description: 'Minden rendben van és a parkett klub is a legjobb',

            }, {
                id: 6,
                name: 'Dorogi-Kovács Gábor',
                email: 'dorogix@gmail.com',
                position: 'tag',
                description: 'Minden rendben van és a parkett klub is a legjobb',

            }, {
                id: 7,
                name: 'Dorogi-Kovács Gábor',
                email: 'dorogix@gmail.com',
                position: 'tag',
                description: 'Minden rendben van és a parkett klub is a legjobb',

            }, {
                id: 8,
                name: 'Dorogi-Kovács Gábor',
                email: 'dorogix@gmail.com',
                position: 'tag',
                description: 'Minden rendben van és a parkett klub is a legjobb',

            }, {
                id: 9,
                name: 'Dorogi-Kovács Gábor',
                email: 'dorogix@gmail.com',
                position: 'tag',
                description: 'Minden rendben van és a parkett klub is a legjobb',

            }, {
                id: 10,
                name: 'Dorogi-Kovács Gábor',
                email: 'dorogix@gmail.com',
                position: 'tag',
                description: 'Minden rendben van és a parkett klub is a legjobb',

            }, {
                id: 11,
                name: 'Dorogi-Kovács Gábor',
                email: 'dorogix@gmail.com',
                position: 'tag',
                description: 'Minden rendben van és a parkett klub is a legjobb',

            }, {
                id: 12,
                name: 'Dorogi-Kovács Gábor',
                email: 'dorogix@gmail.com',
                position: 'tag',
                description: 'Minden rendben van és a parkett klub is a legjobb',

            }, {
                id: 13,
                name: 'Dorogi-Kovács Gábor',
                email: 'dorogix@gmail.com',
                position: 'tag',
                description: 'Minden rendben van és a parkett klub is a legjobb',

            }, {
                id: 14,
                name: 'Dorogi-Kovács Gábor',
                email: 'dorogix@gmail.com',
                position: 'öregtag',
                description: 'Minden rendben van és a parkett klub is a legjobb',

            }, {
                id: 15,
                name: 'Dorogi-Kovács Gábor',
                email: 'dorogix@gmail.com',
                position: 'öregtag',
                description: 'Minden rendben van és a parkett klub is a legjobb',

            }, {
                id: 16,
                name: 'Dorogi-Kovács Gábor',
                email: 'dorogix@gmail.com',
                position: 'öregtag',
                description: 'Minden rendben van és a parkett klub is a legjobb',

            }, {
                id: 17,
                name: 'Dorogi-Kovács Gábor',
                email: 'dorogix@gmail.com',
                position: 'öregtag',
                description: 'Minden rendben van és a parkett klub is a legjobb',

            }, {
                id: 18,
                name: 'Dorogi-Kovács Gábor',
                email: 'dorogix@gmail.com',
                position: 'öregtag',
                description: 'Minden rendben van és a parkett klub is a legjobb',

            }, {
                id: 19,
                name: 'Dorogi-Kovács Gábor',
                email: 'dorogix@gmail.com',
                position: 'öregtag',
                description: 'Minden rendben van és a parkett klub is a legjobb',

            }, {
                id: 20,
                name: 'Dorogi-Kovács Gábor',
                email: 'dorogix@gmail.com',
                position: 'öregtag',
                description: 'Minden rendben van és a parkett klub is a legjobb',

            }, {
                id: 21,
                name: 'Dorogi-Kovács Gábor',
                email: 'dorogix@gmail.com',
                position: 'öregtag',
                description: 'Minden rendben van és a parkett klub is a legjobb',

            }, {
                id: 22,
                name: 'Dorogi-Kovács Gábor',
                email: 'dorogix@gmail.com',
                position: 'öregtag',
                description: 'Minden rendben van és a parkett klub is a legjobb',

            }],
        };
    }

    render() {
        const { members } = this.state;
        return (
            <div className={styles.main}>
                <AboutUs />
                <div className={styles.people6}>
                    {members.map((member) => {
                        if (member.position !== 'öregtag') {
                            if (member.id < 6) {
                                return (<Member {...member} key={member.id} />);
                            }
                        }
                        return null;
                    })}
                </div>
                <div className={styles.peopleOthers}>
                    {members.map((member) => {
                        if (member.position !== 'öregtag') {
                            if (member.id > 5) {
                                return (<Member {...member} key={member.id} />);
                            }
                        }
                        return null;
                    })}
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
