import React from 'react';
import styles from './Language.module.css';
import { getLanguage, getLanguageName, setLanguage } from '../../utils/language';
import strings from '../../utils/Descriptions';
import enIcon from './english.svg';
import huIcon from './hungary.svg';

class LanguageSelector extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    componentDidMount() {
        this.setState({ lang: getLanguage(), langName: getLanguageName() });
    }

    componentWillReceiveProps() {
        this.setState({ lang: getLanguage(), langName: getLanguageName() });
    }

    render() {
        const { lang, langName } = this.state;
        if (lang) {
            strings.setLanguage(lang);
        }
        return (
            <div>
                <div className={styles.main}>
                    <div className={styles.langName}>
                        {langName}
                    </div>
                    <div className={`${styles.lang} ${lang && lang.startsWith('hu') ? styles.selected : ''}`}>
                        <span
                            onClick={() => setLanguage('hu')}
                            role="button"
                            onKeyDown={() => { }}
                            tabIndex={0}
                        >
                            <img src={huIcon} alt="" />
                        </span>
                    </div>
                    <div className={`${styles.lang} ${lang && lang.startsWith('en') ? styles.selected : ''}`}>
                        <span
                            onClick={() => setLanguage('en')}
                            role="button"
                            onKeyDown={() => { }}
                            tabIndex={0}
                        >
                            <img src={enIcon} alt="" />
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default LanguageSelector;
