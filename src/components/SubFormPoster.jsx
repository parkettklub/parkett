import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

class SubFormPoster extends React.Component {
    state = {
        selectedFile: null,
        src: null,
    };

    componentWillReceiveProps({ photo }) {
        this.setState({ src: photo });
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
                    name: 'photo',
                    value: reader.result,
                },
            });
        };
        reader.onerror = function (error) {
            alert(`Hiba: ${error}`);
        };
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
                    <strong>Kép:</strong>
                    <div className={styles.formgroup}>
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

SubFormPoster.propTypes = {
    selectedForm: PropTypes.string,
    form: PropTypes.string,
    photo: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
};

SubFormPoster.defaultProps = {
    selectedForm: '',
    form: '',
    photo: '',
};

export default SubFormPoster;
