import React from 'react';
import TipsAndTricks from './TipsAnTricks';
import DanceEtikett from './DanceEtikett';
import LocationAccess from './LocationAccess';
import Attention from './Attention';
import Services from './Services';
import Dances from './Dances';
import EditButton from './EditButton';
import styles from './Knowledge.module.css';
import NewsFeed from './NewsFeed';


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
        return (
            <div className={styles.main}>
                <div className={styles.buttons}>
                    <button onClick={this.goDances} type="button">Táncok</button>
                    <button onClick={this.goGeneral} type="button">Álltalános</button>
                    <button onClick={this.goApproach} type="button">Megközelítés</button>
                    <button onClick={this.goTips} type="button">Tippek</button>
                    <button onClick={this.goEtikett} type="button">Etikett</button>
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
                        <div className={styles.title}>Álltalánosan a bulikról</div>
                        <div>
                            {`Kéthetente megtelik a kollégium nagyterme a város tánckedvelő fiataljaival, 
            és a hangfalakból salsa, rock & roll, boogie-woogie vagy modern társastáncok zenéi szólnak, 
            esetleg éppen egy zenekar húzza élőben a talpalávalót. Nagy a kínálat, így nálunk biztosan 
            megtalálod a Hozzád illő táncstílust és bulit.`}
                        </div>
                        <div className={styles.thanks}>
                            <div><strong>Köszönet </strong></div>
                            <div>
                                <strong>A backend-ért: </strong>
                                <a href="http://kir-dev.sch.bme.hu/" target="_blank" rel="noopener noreferrer">Kir-Dev</a>
                            </div>
                            <div>
                                <strong>A design-ért és frontend-ért: </strong>
                                <a href="http://schdesign.hu/" target="_blank" rel="noopener noreferrer">Schönherz Design Stúdió</a>
                            </div>
                            <div>
                                <strong>A fotókért: </strong>
                                <a href="https://spot.sch.bme.hu/events/parkett-klub/" target="_blank" rel="noopener noreferrer">SPOT fotókör</a>
                            </div>
                            <div>
                                <strong>A hangosításért: </strong>
                                <a href="https://acstudio.sch.bme.hu/" target="_blank" rel="noopener noreferrer">AC Studio és Live</a>
                            </div>
                            <div>
                                <strong>A videókért: </strong>
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
            </div>
        );
    }
}

export default KnowledgeBaseComponent;
