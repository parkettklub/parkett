import React from 'react';
import SelectableElement from './SelectableElement';
import FormUser from './FormUser';
import { fetchAll } from './FetchFunctions';
import styles from './Editor.module.css';

class EditUsers extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            selectedId: 0,
            selectedObject: null,
        };
    }

    componentDidMount() {
        this.createMember();
        this.fetchUsers();
    }

    editDJ = (id) => {
        const { users } = this.state;
        const selected = users.find(user => user.id === id);
        this.setState({
            selectedId: id,
            selectedObject: (
                <FormUser
                    selectedObject={selected}
                    fetchFunction={this.fetchUsers}
                />
            ),
        });
    }

    createMember = () => {
        this.setState({
            selectedId: null,
            selectedObject: (
                <FormUser
                    selectedObject={{
                        id: -1,
                    }}
                    fetchFunction={this.fetchUsers}
                />),
        });
    }

    fetchUsers = () => {
        this.setState({
            selectedObject: null,
        });
        fetchAll('users').then((myJson) => {
            this.setState({ users: myJson });
        });
    }


    render() {
        const { users, selectedId, selectedObject } = this.state;
        return (
            <div className={styles.center}>
                <div className={styles.main}>
                    <div className={styles.list}>
                        {users.map(user => (
                            <SelectableElement
                                title={user.name}
                                onClick={() => this.editDJ(user.id)}
                                selected={user.id === selectedId}
                                key={user.id}
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

export default EditUsers;
