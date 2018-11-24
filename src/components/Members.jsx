import React from 'react'
import './Members.css'
import Member from './Member';
import LittleMember from './LittleMember';
import Emese from './Emese.jpg'
import profDefault from './gergoProfile.jpg'
import styles from './Community.module.css'

class Members extends React.Component {
    constructor() {
        super();
        this.state = {
            members: [{
                id: 0,
                name: "Padányi Emese",
                email: "dorogix@gmail.com",
                position: "tag",
                src: Emese,
                description: "Ez egy hosszú description mert ez itt hosszú Minden rendben van és a parkett klub is a legjobb",

            }, {
                id: 1,
                name: "Dorogi-Kovács Gábor",
                email: "dorogix@gmail.com",
                position: "tag",
                description: "Mizu.. nem tudom mit írjak ide",

            }, {
                id: 2,
                name: "Kovács Gergő",
                email: "dorogix@gmail.com",
                src: profDefault,
                position: "pr felelős",

            }, {
                id: 3,
                name: "Dorogi-Kovács Gábor",
                email: "dorogix@gmail.com",
                position: "tag",
                description: "Minden rendben van és a parkett klub is a legjobb",

            }, {
                id: 4,
                name: "Dorogi-Kovács Gábor",
                email: "dorogix@gmail.com",
                position: "tag",
                description: "Minden rendben van és a parkett klub is a legjobb",

            }, {
                id: 5,
                name: "Dorogi-Kovács Gábor",
                email: "dorogix@gmail.com",
                position: "tag",
                description: "Minden rendben van és a parkett klub is a legjobb",

            }, {
                id: 6,
                name: "Dorogi-Kovács Gábor",
                email: "dorogix@gmail.com",
                position: "tag",
                description: "Minden rendben van és a parkett klub is a legjobb",

            }, {
                id: 7,
                name: "Dorogi-Kovács Gábor",
                email: "dorogix@gmail.com",
                position: "tag",
                description: "Minden rendben van és a parkett klub is a legjobb",

            }, {
                id: 8,
                name: "Dorogi-Kovács Gábor",
                email: "dorogix@gmail.com",
                position: "tag",
                description: "Minden rendben van és a parkett klub is a legjobb",

            }, {
                id: 9,
                name: "Dorogi-Kovács Gábor",
                email: "dorogix@gmail.com",
                position: "öregtag",
                description: "Minden rendben van és a parkett klub is a legjobb",

            }, {
                id: 10,
                name: "Dorogi-Kovács Gábor",
                email: "dorogix@gmail.com",
                position: "öregtag",
                description: "Minden rendben van és a parkett klub is a legjobb",

            }]
        }
    }

    render() {
        let memberRows6 = [];
        let memberRowsOthers = [];
        this.state.members.forEach((member) => {
            if (member.position != "öregtag") {
                if (member.id < 6)
                    memberRows6.push(<Member details={member} key={member.id} />)
                else
                    memberRowsOthers.push(<Member details={member} key={member.id} />)
            }
        });


        let oldMemberRows = [];
        this.state.members.forEach((member) => {
            if (member.position == "öregtag")
                oldMemberRows.push(<LittleMember details={member} key={member.id} />)
        })

        let rows = [];
        rows.push(
            <div className={styles.people6}>
                {memberRows6}
            </div>
        )
        rows.push(
            <div className={styles.peopleOthers}>
                {memberRowsOthers}
            </div>
        )
        return rows;
    }
}

export default Members