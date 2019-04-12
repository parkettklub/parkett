import React from 'react';
import PropTypes from 'prop-types';
import InputFormSimple from './InputFormSimple';
import InputPicture from './InputPicture';

function SubFormMedia(props) {
    const {
        selectedForm, form, handleChange, spot, bss, bss_cover, spot_cover,
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
            <InputPicture name="spot_cover" inputObj={{ spot_cover }} selectedForm={selectedForm} form={form} handleChange={handleChange} />
            <InputFormSimple
                selectedForm={selectedForm}
                form={form}
                handleChange={handleChange}
                value={bss}
                name="bss"
                example="www.bss.bme.hu"
                label="BSS"
            />
            <InputPicture name="bss_cover" inputObj={{ bss_cover }} selectedForm={selectedForm} form={form} handleChange={handleChange} />
        </div>
    );
}

SubFormMedia.propTypes = {
    selectedForm: PropTypes.string,
    form: PropTypes.string,
    spot: PropTypes.string,
    spot_cover: PropTypes.string,
    bss: PropTypes.string,
    bss_cover: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
};

SubFormMedia.defaultProps = {
    selectedForm: '',
    form: '',
    spot: '',
    spot_cover: '',
    bss: '',
    bss_cover: '',
};

export default SubFormMedia;
