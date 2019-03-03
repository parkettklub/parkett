import React from 'react';
import PropTypes from 'prop-types';
import InputFormSimple from './InputFormSimple';

function SubFormMedia(props) {
    const {
        selectedForm, form, handleChange, spot, bss,
    } = props;
    return (
        <div>
            <InputFormSimple
                selectedForm={selectedForm}
                form={form}
                handleChange={handleChange}
                value={spot}
                name="spot"
                example="www.spot.bme.hu"
                label="SPOT"
            />
            <InputFormSimple
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

SubFormMedia.propTypes = {
    selectedForm: PropTypes.string,
    form: PropTypes.string,
    spot: PropTypes.string,
    bss: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
};

SubFormMedia.defaultProps = {
    selectedForm: '',
    form: '',
    spot: '',
    bss: '',
};

export default SubFormMedia;
