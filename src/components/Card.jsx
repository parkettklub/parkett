import React from 'react'
import styles from "./Card.module.css"

const Card = (props) => {
  <article className={styles.card}>
    {this.props.title && <header className={styles.header}>
      {this.props.title}
    </header>}
    {this.props.children}
  </article>
}

export default Card;