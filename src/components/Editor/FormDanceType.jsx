import React from 'react';
import PropTypes from 'prop-types';
import { fetchPost, fetchPut } from '../../utils/FetchFunctions';
import styles from './Form.module.css';
import InputFormSimple from './InputFormSimple';
import InputPicture from './InputPicture';
import DeleteButton from './DeleteButton';
import InputColor from './InputColor';

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

    handleChange = (event) => {
        const { name } = event.target;
        this.setState({ [name]: event.target.value });
    }

    uploadChanges = () => {
        const { id } = this.state;
        if (id < 0) {
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
        const { selected, title, fetchFunction } = this.props;
        const {
            id, name, color, image,
        } = this.state;
        const isNew = id < 0;
        return (
            <div className={styles.main}>
                <DeleteButton id={id} type="dance_types" fetchFunction={fetchFunction} />
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
                        inLine
                    />
                    <div className={styles.inLine}>
                        <InputPicture
                            name="image"
                            inputObj={{ image }}
                            handleChange={this.handleChange}
                            inLine
                        />
                        <InputColor
                            selected={selected}
                            title={title}
                            handleChange={this.handleChange}
                            value={color}
                            name="color"
                            example="#FFFFFF"
                            label="Szín"
                            inLine
                        />
                    </div>
                    <div className={styles.formgroup}>
                        <label>
                            <strong>Preview</strong>
                            <div
                                className={styles.preview}
                                style={{
                                    background: color,
                                }}
                            >
                                <img src={image} alt="" />
                                <div>This is an example text</div>
                            </div>
                        </label>
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
