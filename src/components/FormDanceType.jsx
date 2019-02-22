import React from 'react';
import PropTypes from 'prop-types';
import { fetchPost, fetchPut } from './FetchFunctions';
import styles from './Form.module.css';
import InputFormSimple from './InputFormSimple';

class FormDanceType extends React.Component {
    constructor() {
        super();
        this.state = {
            id: -1,
            selectedFile: null,
            image: null,
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
            ...selectedObject, image: selectedObject.image,
        });
    }


    fileSelectedHandler = (event) => {
        this.setState({
            selectedFile: event.target.files[0],
        });
    }

    fileUploadHandler = (event) => {
        event.preventDefault();
        const { selectedFile } = this.state;

        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = () => {
            this.setState({
                image: reader.result,
            });
            console.log('loaded');
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }


    handleChange = (event) => {
        const { name } = event.target;
        this.setState({ [name]: event.target.value });
    }

    uploadChanges = () => {
        const { id } = this.state;
        if (id === -1) {
            this.addDanceType();
        } else {
            this.updateDanceType();
        }
    }

    addDanceType = () => {
        fetchPost('dance_types', this.state).then(() => {
            const { fetchFunction } = this.props;
            fetchFunction();
        });
    }

    updateDanceType = () => {
        fetchPut('dance_types', this.state).then(() => {
            const { fetchFunction } = this.props;
            fetchFunction();
        });
    }


    render() {
        const { selected, title } = this.props;
        const {
            id, name, color, image,
        } = this.state;
        const isNew = id === -1;
        return (
            <div className={styles.main}>
                <div className={styles.formgroup} hidden={selected !== title}>
                    {isNew ? 'Új Dance type adatai:' : 'Dance type adatai:'}
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
                        value={color}
                        name="color"
                        example="#FFFFFF"
                        label="Szín"
                    />
                    <div className={styles.formgroup}>
                        <input type="file" onChange={this.fileSelectedHandler} />
                        <button onClick={this.fileUploadHandler} type="submit">Uppload</button>
                        <img src={image} alt="" />
                    </div>
                    <div className={styles.formgroup}>
                        <button
                            onClick={this.uploadChanges}
                            type="submit"
                            className={styles.submit}
                        >
                            {isNew ? 'Dance type hozzáadása' : 'Dance type módosítása'}
                        </button>
                    </div>
                </div>
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
