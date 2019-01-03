import React from 'react';
import PropTypes from 'prop-types';
import styles from './Dances.module.css';
import Folk from './dancing-figures/FolkDance.svg';
import Kizomba from './dancing-figures/Kizomba.svg';
import Salsa from './dancing-figures/Salsa.svg';
import Swing from './dancing-figures/Swing.svg';
import Card from './Card';

const animationStyle = {
    transition: 'all 0.5s ease-out',
};

class Dances extends React.Component {
    constructor() {
        super();
        this.state = {
            dances: [{
                id: 1,
                name: 'salsa',
                type: 0,
                content: 'A salsa egy világszerte elterjedt társastánc neve, mely az utcai latin táncokhoz sorolható. A név közvetlen jelentése fűszeres szósz, melyet eredetileg a kubai zenék elnevezéseként használtak, de elterjedten használják a tánc jelölésére. Sokféle fajtája létezik ma. Ilyen például a kubai, Puerto Rico-i, kolumbiai, de vannak vonalon táncolt változatai is, mint a Los Angeles-i és a New York-i stílus.',
            }, {
                id: 2,
                type: 1,
                name: 'magyar néptánc',
                content: 'Hamarosan bővebben...',
            }, {
                id: 3,
                type: 2,
                name: "rock 'n' roll",
                content: 'Majd egyszer...',
            }, {
                id: 4,
                type: 3,
                name: 'kizomba',
                content: 'Dél-Afrikából, az egykori portugál gyarmat Angolából indult hódító útjára a kizomba, melyet sokan - tévesen - egyfajta afrikai tangóként határoznak meg. Tény, hogy a táncban tetten érhetők a tangó alaplépései, de a tangó színpadiasságától, jellegzetes romantikus drámájától igencsak messze áll a laza, dögös, bulis kizomba. A kizomba szó egyébként nem is jelent mást, mint ünnepet, kikapcsolódást, szórakozást. A szamba elődjének számító, hagyományos angolai szemba, a francia Antillákról származó zouk zene, valamint az argentin tangó lépései álltak össze a kizombában egzotikus eleggyé.',
            }],
            selectedid: null,
        };
        this.select = this.select.bind(this);
    }

    select(id) {
        const { selectedid } = this.state;
        if (selectedid !== id) {
            this.setState({
                selectedid: id,
            });
        } else {
            this.setState({
                selectedid: null,
            });
        }
    }

    render() {
        const { dances, selectedid } = this.state;
        return (
            <div className={styles.main}>
                <div className={styles.grid}>
                    {dances.map(dance => (
                        <Dance
                            dance={dance}
                            selected={selectedid === dance.id}
                            click={this.select}
                            key={dance.id}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

function Dance({ dance, selected, click }) {
    const {
        type, name, id, content,
    } = dance;
    let color;
    let icon;
    switch (type) {
        case 0: color = styles.red; icon = Salsa; break;
        case 1: color = styles.green; icon = Folk; break;
        case 2: color = styles.yellow; icon = Swing; break;
        case 3: color = styles.purple; icon = Kizomba; break;
        default: color = styles.green; icon = Folk;
    }
    return (
        <Card>
            <div
                className={`${styles.dance} ${color} ${selected ? styles.open : ''}`}
                onClick={() => click(id)}
                style={animationStyle}
                key="card"
                role="button"
                onKeyDown={() => { }}
                tabIndex={0}
            >
                <div><img src={icon} alt="" /></div>
                <div>
                    {' '}
                    <strong>
                        {name.charAt(0).toUpperCase() + name.slice(1)}
                    </strong>
                </div>
                <div className={styles.descritpion}>{content}</div>
            </div>
        </Card>
    );
}

Dance.propTypes = {
    dance: PropTypes.instanceOf(Object).isRequired,
    selected: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired,
};

export default Dances;
