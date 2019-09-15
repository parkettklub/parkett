import React from 'react';
import TipsAndTricks from './TipsAnTricks';
import DanceEtikett from './DanceEtikett';
import LocationAccess from './LocationAccess';
import Attention from './Attention';
import Services from './Services';
import Dances from './Dances';
import FeedBackForm from './FeedBackForm';
import EditButton from '../EditButton';
import styles from './Knowledge.module.css';
import NewsFeed from './NewsFeed';
import texts from '../../utils/Descriptions';


class KnowledgeBaseComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.divTips = React.createRef();
        this.dicEtikett = React.createRef();
        this.divDances = React.createRef();
        this.divGeneral = React.createRef();
        this.divApproach = React.createRef();
    }

    goTips = () => {
        if (this.divTips.current) {
            this.divTips.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
            });
        }
    }

    goDances = () => {
        if (this.divDances.current) {
            this.divDances.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
            });
        }
    }

    goGeneral = () => {
        if (this.divGeneral.current) {
            this.divGeneral.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
            });
        }
    }

    goApproach = () => {
        if (this.divApproach.current) {
            this.divApproach.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
            });
        }
    }

    goEtikett = () => {
        if (this.dicEtikett.current) {
            this.dicEtikett.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
            });
        }
    }

    render() {
        if (!texts) {
            return (
                <div className={styles.main}>
                    <div className={styles.header}>
                        Loading
                    </div>
                </div>
            );
        }
        return (
            <div className={styles.main}>
                <div className={styles.buttons}>
                    <button onClick={this.goDances} type="button">{texts.knowledge.buttons.dances}</button>
                    <button onClick={this.goGeneral} type="button">{texts.knowledge.buttons.general}</button>
                    <button onClick={this.goApproach} type="button">{texts.knowledge.buttons.approach}</button>
                    <button onClick={this.goTips} type="button">{texts.knowledge.buttons.tipps}</button>
                    <button onClick={this.goEtikett} type="button">{texts.knowledge.buttons.etikett}</button>
                </div>
                <div className={styles.header}>
                    <EditButton />
                    <NewsFeed />
                </div>
                <div className={styles.dances} ref={this.divDances}>
                    <Dances />
                </div>
                <div className={styles.general} ref={this.divGeneral}>
                    <div>
                        <div className={styles.title}>{texts.knowledge.general.title}</div>
                        <div>
                            {texts.knowledge.general.desc}
                        </div>
                        <div className={styles.thanks}>
                            <div><strong>{texts.knowledge.thank.title}</strong></div>
                            <div>
                                <strong>{texts.knowledge.thank.spot}</strong>
                                <a href="https://spot.sch.bme.hu/events/parkett-klub/" target="_blank" rel="noopener noreferrer">SPOT fotókör</a>
                            </div>
                            <div>
                                <strong>{texts.knowledge.thank.ac}</strong>
                                <a href="https://acstudio.sch.bme.hu/" target="_blank" rel="noopener noreferrer">AC Studio és Live</a>
                            </div>
                            <div>
                                <strong>{texts.knowledge.thank.bss}</strong>
                                <a href="https://bsstudio.hu/" target="_blank" rel="noopener noreferrer">Budavári Schönherz Stúdió</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.attention}>
                    <Attention />
                </div>
                <div className={styles.drinksAndPlace} ref={this.divApproach}>
                    <LocationAccess />
                    <Services />
                </div>
                <div className={styles.tips} ref={this.divTips}>
                    <TipsAndTricks />
                </div>
                <div className={styles.tips} ref={this.dicEtikett}>
                    <DanceEtikett />
                </div>
                <div className={styles.tips}>
                    <FeedBackForm />
                </div>
            </div>
        );
    }
}

export default KnowledgeBaseComponent;
