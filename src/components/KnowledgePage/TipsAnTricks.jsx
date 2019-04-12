import React from 'react';
import texts from '../../utils/Descriptions';
import styles from './TipsAndTricks.module.css';

class TipsAndTricks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: '',
        };
        this.myDivToFocus = React.createRef();
    }


    changeTab = (str) => {
        this.setState({ selected: str });
        if (this.myDivToFocus.current) {
            this.myDivToFocus.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
            });
        }
    }

    isActive = (str) => {
        const { selected } = this.state;
        return selected === str;
    }

    render() {
        return (
            <div className={styles.tips}>
                <div className={styles.title}>Tippek és tanácsok</div>
                <div className={styles.long}>{texts.tips.main}</div>
                <div className={styles.tabs}>
                    {texts.tips.tabs.map(tab => (
                        <button
                            onClick={() => this.changeTab(tab.head)}
                            type="button"
                            className={this.isActive(tab.head) ? styles.active : ''}
                        >
                            {tab.head}
                        </button>
                    ))}
                </div>
                <div ref={this.myDivToFocus}>
                    {texts.tips.tabs.map(tab => (
                        <div hidden={!this.isActive(tab.head)} className={styles.tab}>
                            <div key="7"><strong>{tab.head}</strong></div>
                            <div className={styles.list}>
                                {tab.body.map((text, index) => (<li key={index}>{text}</li>))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default TipsAndTricks;
