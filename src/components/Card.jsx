import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Card = (props) => {
  const { title, children } = props;
  return (
    <article className={styles.card}>
      {title && <header className={styles.header}>{title}</header>}
      {children}
    </article>
  );
};

Card.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
