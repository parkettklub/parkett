import React from 'react';
import texts from './Descriptions';
import styles from './TipsAndTricks.module.css';

class TipsAndTricks extends React.Component {
    state = {
        cloth: true,
        shoes: false,
        hygine: false,
        drink: false,
    }

    changeTab = (str) => {
        const newState = {
            cloth: false, shoes: false, hygine: false, drink: false,
        };
        switch (str) {
            case 'cloth':
                newState.cloth = true;
                break;
            case 'shoes':
                newState.shoes = true;
                break;
            case 'hygine':
                newState.hygine = true;
                break;
            case 'drink':
                newState.drink = true;
                break;
            default:
        }
        this.setState(() => newState);
    }

    render() {
        const {
            cloth, shoes, hygine, drink,
        } = this.state;
        return (
            <div>
                <div className={styles.title}>Tippek és tanácsok</div>
                <div className={styles.long}>{texts.tips.main}</div>
                <div className={styles.tabs}>
                    <button
                        onClick={() => this.changeTab('shoes')}
                        type="button"
                        className={shoes ? styles.active : ''}
                    >
                        {'Milyen cipőben menjek?'}
                    </button>
                    <button
                        onClick={() => this.changeTab('cloth')}
                        type="button"
                        className={cloth ? styles.active : ''}
                    >
                        {'Mit vegyek fel?'}
                    </button>
                    <button
                        onClick={() => this.changeTab('hygine')}
                        type="button"
                        className={hygine ? styles.active : ''}
                    >
                        {'Figyelj a higéniára!'}
                    </button>
                    <button
                        onClick={() => this.changeTab('drink')}
                        type="button"
                        className={drink ? styles.active : ''}
                    >
                        {'Evés-ivés, dohányzás'}
                    </button>
                </div>
                <div hidden={!shoes} className={styles.tab}>
                    <div key="7"><strong>Milyen cipőben menjek? </strong></div>
                    <div className={styles.list}>
                        {texts.tips.shoes.map((text, index) => (<li key={index}>{text}</li>))}
                    </div>
                </div>
                <div hidden={!cloth} className={styles.tab}>
                    <div><strong>Mit vegyek fel? </strong></div>
                    <div className={styles.list}>
                        {texts.tips.cloths.map((text, index) => (<li key={index}>{text}</li>))}
                    </div>
                </div>
                <div hidden={!hygine} className={styles.tab}>
                    <div key="17"><strong>Figyelj a higéniára! </strong></div>
                    <div className={styles.list}>
                        {texts.tips.hygine.map((text, index) => (<li key={index}>{text}</li>))}
                    </div>
                </div>
                <div hidden={!drink} className={styles.tab}>
                    <div key="20"><strong>Evés-ivés, dohányzás </strong></div>
                    <div className={styles.list}>
                        {texts.tips.eat.map((text, index) => (<li key={index}>{text}</li>))}
                    </div>
                </div>
            </div>
        );
    }
}

export default TipsAndTricks;
