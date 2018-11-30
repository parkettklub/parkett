import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

function EditPoster(props) {
    const {
        selectedForm, form, handleChange, photo,
    } = props;
    return (
        <div>
            <div className={styles.formgroup} hidden={selectedForm !== form}>
                <label htmlFor="photo">
                    <b>Plakát</b>
                    {'Size must be around 350x400 px'}
                    <input
                        id="photo"
                        name="photo"
                        type="picture"
                        className={styles.input}
                        value={photo}
                        onChange={handleChange}
                    />
                </label>
                <img alt="" src="https://media.gettyimages.com/photos/theres-always-something-new-to-learn-picture-id1008383410?b=1&k=6&m=1008383410&s=170x170&h=jdv-af6Q0-NNPAX62uhnpM4dGA1tSakzkNTh-aOqXO0=" />
            </div>
        </div>
    );
}

EditPoster.propTypes = {
    selectedForm: PropTypes.string.isRequired,
    form: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default EditPoster;
