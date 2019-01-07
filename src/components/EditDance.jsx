import React from 'react';
import SelectableElement from './SelectableElement';
import FormDance from './FormDance';
import styles from './Editor.module.css';
import Plus from './plus.svg';

class EditDance extends React.Component {
    constructor() {
        super();
        this.state = {
            dances: [{
                id: 1,
                name: 'salsa',
                content: 'A salsa egy világszerte elterjedt társastánc neve, mely az utcai latin táncokhoz sorolható. A név közvetlen jelentése fűszeres szósz, melyet eredetileg a kubai zenék elnevezéseként használtak, de elterjedten használják a tánc jelölésére. Sokféle fajtája létezik ma. Ilyen például a kubai, Puerto Rico-i, kolumbiai, de vannak vonalon táncolt változatai is, mint a Los Angeles-i és a New York-i stílus.',
            }, {
                id: 2,
                name: 'rock n roll',
                content: 'A rocky egy világszerte elterjedt társastánc neve, mely az utcai latin táncokhoz sorolható. A név közvetlen jelentése fűszeres szósz, melyet eredetileg a kubai zenék elnevezéseként használtak, de elterjedten használják a tánc jelölésére. Sokféle fajtája létezik ma. Ilyen például a kubai, Puerto Rico-i, kolumbiai, de vannak vonalon táncolt változatai is, mint a Los Angeles-i és a New York-i stílus.',
            }],
            selectedId: 0,
            selectedObject: null,
        };
    }

    editDance(id) {
        const { dances } = this.state;
        const selected = dances.find(dance => dance.id === id);
        this.setState({
            selectedId: id,
            selectedObject: (<FormDance selectedObject={selected} />),
        });
    }

    createDance = () => {
        this.setState({
            selectedId: null,
            selectedObject: (<FormDance selectedObject={{ id: -1 }} />),
        });
    }

    render() {
        const { selectedObject, dances, selectedId } = this.state;
        return (
            <div className={styles.center}>
                <div className={styles.main}>
                    <div className={styles.list}>
                        <div className={styles.selectable} onClick={this.createDance} onKeyDown={() => { }} role="button" tabIndex={0}>
                            <img src={Plus} className={styles.addElement} alt="" />
                            {'Új Tánc'}
                        </div>
                        {dances.map(
                            dance => (
                                <SelectableElement
                                    title={dance.name}
                                    onClick={() => this.editDance(dance.id)}
                                    selected={dance.id === selectedId}
                                />),
                        )}
                    </div>
                    <div className={styles.selected}>
                        {selectedObject}
                    </div>
                </div>
            </div>
        );
    }
}

export default EditDance;
