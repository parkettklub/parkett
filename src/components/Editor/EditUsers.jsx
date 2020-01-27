import React from 'react';
import SelectableElement from './SelectableElement';
import FormUser from './FormUser';
import { fetchAll } from '../../utils/FetchFunctions';
import styles from './Editor.module.css';

const compare = (a, b) => {
    if (a.role === 'admin') {
        return -1;
    }
    if (b.role === 'admin') {
        return 1;
    }
    if (a.role === 'editor') {
        return -1;
    }
    if (b.role === 'editor') {
        return 1;
    }
    if (a.role === 'member') {
        return -1;
    }
    if (b.role === 'member') {
        return 1;
    }
    return 0;
};

const abc = (a, b) => {
    if (a.name === null) {
        return 1;
    }
    if (b.name === null) {
        return -1;
    }
    return a.name.localeCompare(b.name);
};


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

    fetchUsers = () => {
        this.setState({
            selectedObject: null,
        });
        fetchAll('users').then((myJson) => {
            const sortedUsers = myJson.sort(abc).sort(compare);
            this.setState({ users: sortedUsers });
        });
    }


    render() {
        const { users, selectedId, selectedObject } = this.state;
        if (!users) {
            return (<div className={styles.center} />);
        }
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
