import React from 'react';
import PropTypes from 'prop-types';
import { fetchPost, fetchPut } from './FetchFunctions';
import styles from './Form.module.css';
import FormSimpleInput from './FormSimpleInput';

class FormBand extends React.Component {
    constructor() {
        super();
        this.state = {
            id: -1,
        };
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

    handleSubmit = (event) => {
        event.preventDefault();
        const { id } = this.state;
        if (id === -1) {
            this.addBand();
        } else {
            this.updateBand();
        }
    }

    addBand = () => {
        const { name, url } = this.state;
        const band = {
            name,
            url,
        };
        fetchPost('bands', band).then(() => {
            const { fetchFunction } = this.props;
            fetchFunction();
        });
    }

    updateBand = () => {
        const { id, name, url } = this.state;
        const band = {
            id,
            name,
            url,
        };
        fetchPut('bands', band, id).then(() => {
            const { fetchFunction } = this.props;
            fetchFunction();
        });
    }

    render() {
        const { selected, title } = this.props;
        const { id, name, url } = this.state;
        const isNew = id === -1;
        return (
            <div className={styles.main}>
                <form onSubmit={this.handleSubmit}>
                    <div className={styles.formgroup} hidden={selected !== title}>
                        {isNew ? 'Új Banda adatai:' : 'Banda adatai:'}
                        <FormSimpleInput
                            selected={selected}
                            title={title}
                            handleChange={this.handleChange}
                            value={name}
                            name="name"
                            example="Pedrofon"
                            label="Név"
                        />
                        <FormSimpleInput
                            selected={selected}
                            title={title}
                            handleChange={this.handleChange}
                            value={url}
                            name="url"
                            example="www.example.com"
                            label="Weboldal"
                        />
                        <div className={styles.formgroup}>
                            <input
                                type="submit"
                                className={styles.submit}
                                value={isNew ? 'Zenekar hozzáadása' : 'Zenekar módosítása'}
                            />
                        </div>
                    </div>
                </form>
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
