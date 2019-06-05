import React from 'react';
import PropTypes from 'prop-types';
import { fetchPost, fetchPut, fetchAll } from '../../utils/FetchFunctions';
import { getID } from '../../utils/login';
import styles from './Form.module.css';
import InputFormSelect from './InputFormSelect';
import DeleteButton from './DeleteButton';
import FormMember from './FormMember';

const initialState = {
    name: undefined,
    email: undefined,
    role: undefined,
};

class FormUser extends React.Component {
    constructor() {
        super();
        this.state = {
            id: -1,
            members: [],
            addSelected: null,
        };
    }

    componentDidMount() {
        const { selectedObject } = this.props;
        this.setState({
            ...initialState,
            ...selectedObject,
        });
        this.fetchMembers();
    }

    componentWillReceiveProps({ selectedObject }) {
        this.setState({
            ...initialState,
            ...selectedObject,
        });
    }

    handleChange = (event) => {
        const { name } = event.target;
        this.setState({ [name]: event.target.value });
    }

    uploadChanges = () => {
        const { id } = this.state;
        if (id < 0) {
            this.addMember();
        } else {
            this.updateMember();
        }
    }

    addMember = () => {
        fetchPost('users', this.state).then(() => {
            const { fetchFunction } = this.props;
            fetchFunction();
        });
    }

    updateMember = () => {
        fetchPut('users', this.state).then(() => {
            const { fetchFunction } = this.props;
            fetchFunction();
        });
    }

    fetchMembers = () => {
        fetchAll('members').then((myJson) => {
            this.setState({ members: myJson });
        });
    }

    addNewElement = (name) => {
        this.setState({ addSelected: name });
    }

    close = () => {
        this.setState({ addSelected: null });
    }

    render() {
        const {
            selected, title, fetchFunction,
        } = this.props;
        const {
            id, name, email, role, member_id, members, addSelected,
        } = this.state;
        const isNew = id < 0;
        const options = [];
        options.push(<option value="admin">Admin</option>);
        options.push(<option value="editor">Szerkesztő</option>);
        options.push(<option value="member">Tag</option>);
        return (
            <div className={styles.main}>
                <DeleteButton id={id} type="members" fetchFunction={fetchFunction} />
                <div className={styles.formgroup} hidden={selected !== title}>
                    {isNew ? 'Új Tag adatai:' : 'Tag adatai:'}
                    <div className={styles.formgroup}>
                        {`${id} : ${name}`}
                    </div>
                    <div className={styles.formgroup}>
                        {email}
                    </div>
                    <div className={styles.formgroup}>
                        {(getID() != id)
                            ? (
                                <InputFormSelect
                                    selected={selected}
                                    title={title}
                                    handleChange={this.handleChange}
                                    value={role}
                                    name="role"
                                    example="tag"
                                    label="Pozíció"
                                    options={options}
                                />
                            )
                            : role}
                        <InputFormSelect
                            selected={selected}
                            title={title}
                            handleChange={this.handleChange}
                            value={member_id}
                            name="member_id"
                            label="Tag"
                            options={members.map(type => (
                                <option value={type.id} key={type.id}>
                                    {`${type.id} – ${type.name}`}
                                </option>
                            ))}
                            addNew={() => this.addNewElement('member_id')}
                            close={() => this.close()}
                        />
                        <FormMember
                            selected={addSelected}
                            title="member_id"
                            selectedObject={{
                                id: -1,
                            }}
                            fetchFunction={this.fetchMembers}
                        />
                    </div>
                    <div className={styles.formgroup}>
                        <button
                            onClick={this.uploadChanges}
                            type="submit"
                            className={styles.submit}
                        >
                            {'Felhasználó módosítása'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

FormUser.propTypes = {
    selectedObject: PropTypes.instanceOf(Object).isRequired,
    selected: PropTypes.string,
    title: PropTypes.string,
    fetchFunction: PropTypes.func.isRequired,
};

FormUser.defaultProps = {
    selected: '',
    title: '',
};

export default FormUser;
