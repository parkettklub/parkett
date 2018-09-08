import React from 'react'
import styles from "./Card.module.css"

class Card extends React.Component {
  render() {

    if (this.props.title) {
      var header =
        <header className={styles.header}>
          {this.props.title}
        </header>;
    }

    return (
      <article className={styles.card}>
        {header}
        <section>
          {this.props.children}
        </section>
      </article>
    );
  }
}

export default Card;