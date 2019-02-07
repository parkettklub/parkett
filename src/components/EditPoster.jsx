import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

class EditPoster extends React.Component {
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
            console.error('Too Bog File!' + selectedFile.size);
            return;
        }
        reader.readAsDataURL(selectedFile);
        reader.onload = () => {
            this.setState({
                src: reader.result,
            });
            console.log('loaded');
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
            console.log('Error: ', error);
        };
    }

    render() {
        const {
            selectedForm, form,
        } = this.props;
        return (
            <div>
                <div className={styles.formgroup} hidden={selectedForm !== form}>
                    <strong>Plakát </strong>
                    {'Size must be around 350x400 px'}
                    <input type="file" onChange={this.fileSelectedHandler} />
                    <button onClick={this.fileUploadHandler}>Uppload</button>
                    <img src={this.state.src} />
                </div>
            </div>
        );
    }
}

EditPoster.propTypes = {
    selectedForm: PropTypes.string.isRequired,
    form: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default EditPoster;
