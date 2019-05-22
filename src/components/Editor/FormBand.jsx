import React from 'react';
import PropTypes from 'prop-types';
import { fetchPost, fetchPut } from '../../utils/FetchFunctions';
import styles from './Form.module.css';
import InputFormSimple from './InputFormSimple';
import DeleteButton from './DeleteButton';

const initialState = {
    id: -1,
    name: undefined,
    url: undefined,
};

class FormBand extends React.Component {
    constructor() {
        super();
        this.state = initialState;
    }

    componentDidMount() {
        const { selectedObject } = this.props;
        this.setState({
            ...initialState,
            ...selectedObject,
        });
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
            this.addBand();
        } else {
            this.updateBand();
        }
    }

    addBand = () => {
        const { fetchFunction } = this.props;
        fetchPost('bands', this.state).then(() => {
            fetchFunction();
        });
    }

    updateBand = () => {
        const { fetchFunction } = this.props;
        fetchPut('bands', this.state).then(() => {
            fetchFunction();
        });
    }

    render() {
        const { selected, title, fetchFunction } = this.props;
        const { id, name, url } = this.state;
        const isNew = id < 0;
        return (
            <div className={styles.main}>
                <DeleteButton id={id} type="bands" fetchFunction={fetchFunction} />
                <div className={styles.formgroup} hidden={selected !== title}>
                    {isNew ? 'Új Banda adatai:' : 'Banda adatai:'}
                    <InputFormSimple
                        selected={selected}
                        title={title}
                        handleChange={this.handleChange}
                        value={name}
                        name="name"
                        example="Pedrofon"
                        label="Név"
                    />
                    <InputFormSimple
                        selected={selected}
                        title={title}
                        handleChange={this.handleChange}
                        value={url}
                        name="url"
                        example="www.example.com"
                        label="Weboldal"
                    />
                    <div className={styles.formgroup}>
                        <button
                            onClick={this.uploadChanges}
                            type="submit"
                            className={styles.submit}
                        >
                            {isNew ? 'Zenekar hozzáadása' : 'Zenekar módosítása'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

FormBand.propTypes = {
    selectedObject: PropTypes.instanceOf(Object).isRequired,
    selected: PropTypes.string,
    title: PropTypes.string,
    fetchFunction: PropTypes.func.isRequired,
};

FormBand.defaultProps = {
    selected: '',
    title: '',
};


export default FormBand;
