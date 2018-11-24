import React from 'react'
import styles from './Community.module.css'

class CommunityComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {

        console.log("img rendered");
        return (
            <div className={styles.main}>
                <div className={styles.instagram}>
                    <div className={styles.element}>insta 1</div>
                    <div className={styles.element}>insta 2</div>
                    <div className={styles.element}>insta 3</div>
                    <div className={styles.element}>insta 4</div>
                    <div className={styles.element}>insta 5</div>
                    <div className={styles.element}>insta 6</div>
                    <div className={styles.element}>insta 7</div>
                    <div className={styles.element}>insta 8</div>
                    <div className={styles.element}>insta 9</div>
                </div>
                <div className={styles.people6}>
                    <div className={styles.element}>people 10</div>
                    <div className={styles.element}>people 11</div>
                    <div className={styles.element}>people 12</div>
                    <div className={styles.element}>people 13</div>
                    <div className={styles.element}>people 14</div>
                    <div className={styles.element}>people 15</div>
                </div>
                <div className={styles.peopleOthers}>
                    <div className={styles.element}>people 16</div>
                    <div className={styles.element}>people 17</div>
                    <div className={styles.element}>people 18</div>
                    <div className={styles.element}>people 19</div>
                    <div className={styles.element}>people 010</div>
                    <div className={styles.element}>people 011</div>
                    <div className={styles.element}>people 012</div>
                    <div className={styles.element}>people 013</div>
                    <div className={styles.element}>people 014</div>
                    <div className={styles.element}>people 015</div>
                    <div className={styles.element}>people 016</div>
                    <div className={styles.element}>people 017</div>
                    <div className={styles.element}>people 018</div>
                    <div className={styles.element}>people 019</div>
                </div>
            </div>
        )
    }
}

export default CommunityComponent;