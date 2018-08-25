import React from 'react'
import Folk from './dancing-figures/FolkDance.svg';
import Kizomba from './dancing-figures/Kizomba.svg';
import Salsa from './dancing-figures/Salsa.svg';
import Swing from './dancing-figures/Swing.svg';


const styles = {
    transition: 'max-height 1s ease-out'
};

class Dances extends React.Component {
    constructor() {
        super();
        this.state = {
            dances: [{
                id: 1,
                name: "salsa",
                type: 0,
                content: "A salsa egy világszerte elterjedt társastánc neve, mely az utcai latin táncokhoz sorolható. A név közvetlen jelentése fűszeres szósz, melyet eredetileg a kubai zenék elnevezéseként használtak, de elterjedten használják a tánc jelölésére. Sokféle fajtája létezik ma. Ilyen például a kubai, Puerto Rico-i, kolumbiai, de vannak vonalon táncolt változatai is, mint a Los Angeles-i és a New York-i stílus."
            }, {
                id: 2,
                type: 1,
                name: "magyar néptánc",
                content: "Hamarosan bővebben..."
            }, {
                id: 3,
                type: 2,
                name: "rock 'n' roll",
                content: "Majd egyszer..."
            }, {
                id: 4,
                type: 3,
                name: "kizomba",
                content: "Dél-Afrikából, az egykori portugál gyarmat Angolából indult hódító útjára a kizomba, melyet sokan - tévesen - egyfajta afrikai tangóként határoznak meg. Tény, hogy a táncban tetten érhetők a tangó alaplépései, de a tangó színpadiasságától, jellegzetes romantikus drámájától igencsak messze áll a laza, dögös, bulis kizomba. A kizomba szó egyébként nem is jelent mást, mint ünnepet, kikapcsolódást, szórakozást. A szamba elődjének számító, hagyományos angolai szemba, a francia Antillákról származó zouk zene, valamint az argentin tangó lépései álltak össze a kizombában egzotikus eleggyé."
            }],
            selectedid: null,
        }
        this.select = this.select.bind(this);
    }

    select(id) {
        if (this.state.selectedid != id) {
            this.setState({
                selectedid: id
            });
        } else {
            this.setState({
                selectedid: null
            });
        }
    }

    render() {
        const danceRows = [];
        this.state.dances.forEach((dance) => danceRows.push(
            <Dance dance={dance} selected={this.state.selectedid == dance.id} click={this.select} key={dance.id} />)
        )
        return (
            <div className="card-grid">
                <div>
                    {danceRows}
                </div>
            </div>
        )
    }
}

function Dance(props) {
    let color = "red";
    let icon = Folk;
    switch (props.dance.type) {
        case 0: color = "red"; icon = Salsa; break;
        case 1: color = "green"; icon = Folk; break;
        case 2: color = "yellow"; icon = Swing; break;
        case 3: color = "purple"; icon = Kizomba; break;
        default: color = "green"
    }

    let description = [];
    let selectedClass = "";
    if (props.selected) {
        selectedClass += " selected";
        description.push(
            <div className={"card withpadding descritpion " + color} onClick={() => props.click(props.dance.id)} style={{ ...styles }} key="card">
                <div></div>
                <div><b>{props.dance.name}: </b>{props.dance.content}</div>
            </div>
        )
    } else {
        let name = props.dance.name;
        name = name.charAt(0).toUpperCase() + name.slice(1);
        description.push(
            <div className={"card withpadding dance " + color} onClick={() => props.click(props.dance.id)} style={{ ...styles }} key="card">
                <div><img src={icon} /></div>
                <div><b>{name}</b></div>
            </div>
        );
    }

    return (

        <div className={selectedClass}>
            {description}
        </div>
    )
}

export default Dances 