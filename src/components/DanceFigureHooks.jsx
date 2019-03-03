import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchAll } from './FetchFunctions';
import styles from './EventDetails.module.css';


export default ({ id }) => {

    const [src, setSrc] = useState("");

    useEffect(async function name() {
        if (id != null) {
            const response = await fetchAll(`dance_types/${id}`);
            const json = await response.json();
            setSrc(json.selectedObject.image);
        }
    }, [id]);

    return (
        <div className={styles.danceFigure}>
            <img src={src} alt="" />
        </div>
    );
}