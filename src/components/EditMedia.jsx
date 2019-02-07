import React from 'react';
import PropTypes from 'prop-types';
import FormSimpleInput from './FormSimpleInput';

function EditMedia(props) {
    const {
        selectedForm, form, handleChange, spot, bss,
    } = props;
    return (
        <div>
            <FormSimpleInput
                selectedForm={selectedForm}
                form={form}
                handleChange={handleChange}
                value={spot}
                name="spot"
                example="www.spot.bme.hu"
                label="SPOT"
            />
            <FormSimpleInput
                selectedForm={selectedForm}
                form={form}
                handleChange={handleChange}
                value={bss}
                name="bss"
                example="www.bss.bme.hu"
                label="BSS"
            />
        </div>
    );
}

EditMedia.propTypes = {
    selectedForm: PropTypes.string,
    form: PropTypes.string,
    spot: PropTypes.string,
    bss: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
};

EditMedia.defaultProps = {
    selectedForm: '',
    form: '',
    spot: '',
    bss: '',
};

export default EditMedia;
