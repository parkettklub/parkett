import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';
import FormSimpleInput from './FormSimpleInput';

class FormDJ extends React.Component {
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
            this.addDJ();
        } else {
            this.updateDJ();
        }
    }

    addDJ = () => {
        const { name, content } = this.state;
        const dj = {
            name,
            content,
        };
        fetch('http://parkett-klub.herokuapp.com/djs', {
            method: 'POST',
            body: JSON.stringify(dj),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => {
            const { fetchFunction } = this.props;
            fetchFunction();
        });
    }

    updateDJ = () => {
        const { id, name, content } = this.state;
        const dj = {
            id,
            name,
            content,
        };
        fetch('http://parkett-klub.herokuapp.com/djs/' + id, {
            method: 'PUT',
            body: JSON.stringify(dj),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => {
            const { fetchFunction } = this.props;
            fetchFunction();
        });
    }


    render() {
        const { selected, title } = this.props;
        const { id, name, content } = this.state;
        const isNew = id === -1;
        return (
            <div className={styles.main}>
                <form onSubmit={this.handleSubmit}>
                    <div className={styles.formgroup} hidden={selected !== title}>
                        {isNew ? 'Új DJ adatai:' : 'DJ adatai:'}
                        <FormSimpleInput
                            selected={selected}
                            title={title}
                            handleChange={this.handleChange}
                            value={name}
                            name="name"
                            example="DJ Eddy"
                            label="Név"
                        />
                        <FormSimpleInput
                            selected={selected}
                            title={title}
                            handleChange={this.handleChange}
                            value={content}
                            name="content"
                            example="www.example.com"
                            label="Weboldal"
                        />
                        <div className={styles.formgroup}>
                            <input
                                type="submit"
                                value={isNew ? 'DJ hozzáadása' : 'DJ módosítása'}
                                className={styles.submit}
                            />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

FormDJ.propTypes = {
    selectedObject: PropTypes.instanceOf(Object).isRequired,
    selected: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    fetchFunction: PropTypes.func.isRequired,
};

export default FormDJ;
