import React from 'react';
import SelectableElement from './SelectableElement';
import FormMember from './FormMember';
import { fetchAll } from '../../utils/FetchFunctions';
import Plus from './plus.svg';
import styles from './Editor.module.css';

const abc = (a, b) => a.name.localeCompare(b.name);

const roles = (a, b) => {
    let aPoint = 10;
    switch (a.position) {
        case 'öregtag':
            aPoint = 0;
            break;
        case 'újonc':
            aPoint = 1;
            break;
        case 'tag':
            aPoint = 2;
            break;
        default:
            aPoint = 10; // vezetoseg
    }
    let bPoint = 10;
    switch (b.position) {
        case 'öregtag':
            bPoint = 0;
            break;
        case 'újonc':
            bPoint = 1;
            break;
        case 'tag':
            bPoint = 2;
            break;
        default:
            bPoint = 10; // vezetoseg
    }
    if (aPoint < bPoint) return 1;
    return aPoint > bPoint ? -1 : 0;
};

class EditMember extends React.Component {
    constructor() {
        super();
        this.state = {
            members: [],
            selectedId: 0,
            selectedObject: null,
        };
    }

    componentDidMount() {
        this.createMember();
        this.fetchMembers();
    }

    editDJ = (id) => {
        const { members } = this.state;
        const selected = members.find(memeber => memeber.id === id);
        this.setState({
            selectedId: id,
            selectedObject: (
                <FormMember
                    selectedObject={selected}
                    fetchFunction={this.fetchMembers}
                />
            ),
        });
    }

    createMember = () => {
        this.setState({
            selectedId: null,
            selectedObject: (
                <FormMember
                    selectedObject={{
                        id: -1,
                    }}
                    fetchFunction={this.fetchMembers}
                />),
        });
    }

    fetchMembers = () => {
        this.setState({
            selectedObject: null,
        });
        fetchAll('members').then((myJson) => {
            this.setState({ members: myJson });
        });
    }


    render() {
        const { members, selectedId, selectedObject } = this.state;
        members.sort(abc).sort(roles);
        return (
            <div className={styles.center}>
                <div className={styles.main}>
                    <div className={styles.list}>
                        <div
                            className={styles.selectable}
                            onClick={this.createMember}
                            onKeyDown={() => { }}
                            role="button"
                            tabIndex={0}
                        >
                            <img src={Plus} className={styles.addElement} alt="" />
                            {'Új Tag'}
                        </div>
                        {members.map(member => (
                            <SelectableElement
                                title={member.name}
                                onClick={() => this.editDJ(member.id)}
                                selected={member.id === selectedId}
                                key={member.id}
                            />
                        ))}
                    </div>
                    <div className={styles.selected}>
                        {selectedObject}
                    </div>
                </div>
            </div>
        );
    }
}

export default EditMember;
