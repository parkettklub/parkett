import React from 'react';
import PropTypes from 'prop-types';
import { fetchPost, fetchPut } from './FetchFunctions';
import styles from './Form.module.css';
import FormSimpleInput from './FormSimpleInput';

class FormDanceType extends React.Component {
    constructor() {
        super();
        this.state = {
            id: -1,
            selectedFile: null,
            src: null,
        };
    }

    componentWillReceiveProps({ selectedObject }) {
        this.setState({
            ...selectedObject, src: selectedObject.image,
        });
    }


    fileSelectedHandler = (event) => {
        this.setState({
            selectedFile: event.target.files[0],
        });
        console.log(event.target.files[0]);
    }

    fileUploadHandler = (event) => {
        event.preventDefault();
        const { selectedFile } = this.state;

        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = () => {
            this.setState({
                src: reader.result,
            });
            console.log("loaded");
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }


    handleChange = (event) => {
        const { name } = event.target;
        this.setState({ [name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { id } = this.state;
        if (id === -1) {
            this.addDanceType();
        } else {
            this.updateDanceType();
        }
    }

    addDanceType = () => {
        const { name, color, src } = this.state;
        const dance_type = {
            name,
            color,
            image: src,
        };
        fetchPost('dance_types', dance_type).then(() => {
            const { fetchFunction } = this.props;
            fetchFunction();
        });
    }

    updateDanceType = () => {
        const { id, name, color, src } = this.state;
        const dance_type = {
            id,
            name,
            color,
            image: src,
        };
        fetchPut('dance_types', dance_type, id).then(() => {
            const { fetchFunction } = this.props;
            fetchFunction();
        });
    }


    render() {
        const { selected, title } = this.props;
        const { id, name, color } = this.state;
        const isNew = id === -1;
        return (
            <div className={styles.main}>
                <form onSubmit={this.handleSubmit}>
                    <div className={styles.formgroup} hidden={selected !== title}>
                        {isNew ? 'Új Dance type adatai:' : 'Dance type adatai:'}
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
                            value={color}
                            name="color"
                            example="#FFFFFF"
                            label="Szín"
                        />
                        <div className={styles.formgroup}>
                            <input type="file" onChange={this.fileSelectedHandler} />
                            <button onClick={this.fileUploadHandler}>Uppload</button>
                            <img src={this.state.src} />
                        </div>
                        <div className={styles.formgroup}>
                            <input
                                type="submit"
                                value={isNew ? 'Dance type hozzáadása' : 'Dance type módosítása'}
                                className={styles.submit}
                            />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

FormDanceType.propTypes = {
    selectedObject: PropTypes.instanceOf(Object).isRequired,
    selected: PropTypes.string,
    title: PropTypes.string,
    fetchFunction: PropTypes.func.isRequired,
};

FormDanceType.defaultProps = {
    selected: '',
    title: '',
};

export default FormDanceType;
