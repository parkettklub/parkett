import React from 'react';
import styles from './EditEventList.module.css';
import SelectableEvent from './SelectableEvent';
import FormDance from './FormDance';
import styles2 from './EditEvent.module.css';

class EditDance extends React.Component {
    constructor() {
        super();
        this.state = {
            dances: [{
                id: 1,
                name: "salsa",
                content: "A salsa egy világszerte elterjedt társastánc neve, mely az utcai latin táncokhoz sorolható. A név közvetlen jelentése fűszeres szósz, melyet eredetileg a kubai zenék elnevezéseként használtak, de elterjedten használják a tánc jelölésére. Sokféle fajtája létezik ma. Ilyen például a kubai, Puerto Rico-i, kolumbiai, de vannak vonalon táncolt változatai is, mint a Los Angeles-i és a New York-i stílus."
            }, {
                id: 2,
                name: "rock n roll",
                content: "A rocky egy világszerte elterjedt társastánc neve, mely az utcai latin táncokhoz sorolható. A név közvetlen jelentése fűszeres szósz, melyet eredetileg a kubai zenék elnevezéseként használtak, de elterjedten használják a tánc jelölésére. Sokféle fajtája létezik ma. Ilyen például a kubai, Puerto Rico-i, kolumbiai, de vannak vonalon táncolt változatai is, mint a Los Angeles-i és a New York-i stílus."
            }],
            selectedId: 0,
            selectedObject: null
        };
    }

    Add(id) {
        this.setState({
            selectedId: id,
            selectedObject: (<FormDance />)
        })

    }

    render() {
        return (
            <div className={styles.center}>
                <div className={styles.main}>
                    <div className={styles.list}>
                        {this.state.dances.map((dance) =>
                            <SelectableEvent title={dance.name} onClick={() => this.Add(dance.id)}
                                selected={dance.id == this.state.selectedId} />
                        )}
                    </div>
                    <div className={styles.selected}>
                        <div className={styles2.main}>
                            {this.state.selectedObject}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditDance;