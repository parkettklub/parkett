import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Card = (props) => {
  const { title, children, color } = props;
  return (
    <article
      className={styles.card}
      style={{
        background: color,
      }}
    >
      {title && <header className={styles.header}>{title}</header>}
      {children}
    </article>
  );
};

Card.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string,
  color: PropTypes.string,
};

Card.defaultProps = {
  title: '',
  color: '#FFFFFF',
};

export default Card;
