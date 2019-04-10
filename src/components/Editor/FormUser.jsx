import React from 'react';
import PropTypes from 'prop-types';
import { fetchPost, fetchPut } from '../FetchFunctions';
import { getID } from '../../utils/login';
import styles from './Form.module.css';
import InputFormSelect from './InputFormSelect';
import DeleteButton from './DeleteButton';

class FormUser extends React.Component {
    constructor() {
        super();
        this.state = {
            id: -1,
        };
    }

    componentDidMount() {
        const { selectedObject } = this.props;
        this.setState({
            ...selectedObject,
        });
    }

    componentWillReceiveProps({ selectedObject }) {
        this.setState({
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


    render() {
        const {
            selected, title, fetchFunction,
        } = this.props;
        const {
            id, name, email, role,
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
