import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

class InputPicure extends React.Component {
    state = {
        selectedFile: null,
        src: null,
    };

    componentWillReceiveProps({ inputObj, name }) {
        this.setState({ src: inputObj[name], name });
    }

    fileSelectedHandler = (event) => {
        this.setState({
            selectedFile: event.target.files[0],
        });
    }

    fileUploadHandler = (event) => {
        event.preventDefault();
        const { selectedFile, name } = this.state;
        const reader = new FileReader();
        if (selectedFile.size > 500000) {
            alert(`Tulságosan nagy fájlt töltöttél fel! ${selectedFile.size}`);
            return;
        }
        reader.readAsDataURL(selectedFile);
        reader.onload = () => {
            this.setState({
                src: reader.result,
            });
            alert('Feltöltve');
            const {
                handleChange,
            } = this.props;
            handleChange({
                target: {
                    name,
                    value: reader.result,
                },
            });
        };
        reader.onerror = function (error) {
            alert(`Hiba: ${error}`);
        };
    }

    deletePicture = () => {
        const { name } = this.state;
        const {
            handleChange,
        } = this.props;
        handleChange({
            target: {
                name,
                value: '',
            },
        });
        this.setState({
            selectedFile: null,
            src: null,
        });
    }

    render() {
        const {
            selectedForm, form,
        } = this.props;
        const {
            src,
        } = this.state;
        return (
            <div>
                <div className={styles.formgroup} hidden={selectedForm !== form}>
                    <div className={styles.label}><strong>Kép:</strong></div>
                    <div className={styles.formgroup}>
                        <button onClick={this.deletePicture} type="button">Törlés</button>
                        <input type="file" onChange={this.fileSelectedHandler} />
                        <button onClick={this.fileUploadHandler} type="button">Feltöltés</button>
                        <div className={styles.helper}>
                            {'A kép felbontása legyen körülbelül 350x400 px'}
                        </div>
                        <div className={styles.picture}>
                            <img src={src} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

InputPicure.propTypes = {
    selectedForm: PropTypes.string,
    form: PropTypes.string,
    inputObj: PropTypes.object.isRequired,
    name: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
};

InputPicure.defaultProps = {
    selectedForm: '',
    form: '',
    name: '',
};

export default InputPicure;
