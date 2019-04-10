import React from 'react';
import SelectableElement from './SelectableElement';
import FormMember from './FormMember';
import { fetchAll } from '../FetchFunctions';
import Plus from './plus.svg';
import styles from './Editor.module.css';

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
