import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styles from './Header.module.css';

const ListLink = (props) => {
    const {
        hidden, active, to, children,
    } = props;
    let className = '';
    if (hidden) className = styles.hide;
    if (active) className = styles.active;
    return (
        <div className={className}>
            <Link to={to}>
                <strong className={styles.link}>
                    {children}
                </strong>
            </Link>
        </div>
    );
};

ListLink.propTypes = {
    hidden: PropTypes.bool,
    active: PropTypes.bool,
    to: PropTypes.string,
    children: PropTypes.string,
};

ListLink.defaultProps = {
    hidden: false,
    active: false,
    to: '',
    children: '',
};

export default ListLink;
