import React from 'react';
import PropTypes from 'prop-types';
import { fetchPost, fetchPut } from './FetchFunctions';
import styles from './Form.module.css';
import InputFormSimple from './InputFormSimple';
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
        return (
            <div className={styles.main}>
                <DeleteButton id={id} type="members" fetchFunction={fetchFunction} />
                <div className={styles.formgroup} hidden={selected !== title}>
                    {isNew ? 'Új Tag adatai:' : 'Tag adatai:'}
                    <InputFormSimple
                        selected={selected}
                        title={title}
                        handleChange={this.handleChange}
                        value={name}
                        name="name"
                        example="DJ Eddy"
                        label="Név"
                    />
                    <InputFormSimple
                        selected={selected}
                        title={title}
                        handleChange={this.handleChange}
                        value={email}
                        name="email"
                        example="www.example.com"
                        label="Email"
                    />
                    <InputFormSimple
                        selected={selected}
                        title={title}
                        handleChange={this.handleChange}
                        value={role}
                        name="role"
                        example="tag"
                        label="Pozíció"
                    />
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
