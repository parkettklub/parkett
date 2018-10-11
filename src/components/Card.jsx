import React from 'react'
import styles from "./Card.module.css"

const Card = (props) => {
  const {title} = this.props;
  <article className={styles.card}>
    {title &&
      <header className={styles.header}>
        {title}
      </header>}
    {this.props.children}
  </article>
}

export default Card;