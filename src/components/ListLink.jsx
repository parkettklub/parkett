import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import './Header.css';

const ListLink = (props) => {
    const {
        hidden, active, to, children,
    } = props;
    let className = '';
    if (hidden) className = 'hide';
    if (active) className = 'active';
    return (
        <div className={className}>
            <Link to={to}>
                <strong className="link">
                    {children}
                </strong>
            </Link>
        </div>
    );
};

ListLink.propTypes = {
    hidden: PropTypes.bool.isRequired,
    active: PropTypes.bool.isRequired,
    to: PropTypes.string.isRequired,
    children: PropTypes.instanceOf(Object).isRequired,
};


export default ListLink;
