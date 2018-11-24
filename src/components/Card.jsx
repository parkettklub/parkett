import React from 'react'
import styles from "./Card.module.css"

const Card = (props) => {
  const { title } = props;
  return (
    <article className={styles.card}>
      {title &&
        <header className={styles.header}>
          {title}
        </header>}
      {props.children}
    </article>
  )
}

export default Card;