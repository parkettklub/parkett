import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Card = (props) => {
  const { title, children, key } = props;
  return (
    <article className={styles.card} key={key}>
      {title && <header className={styles.header}>{title}</header>}
      {children}
    </article>
  );
};

Card.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired,
  key: PropTypes.number.isRequired,
};

export default Card;
