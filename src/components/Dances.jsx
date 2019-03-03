import React from 'react';
import PropTypes from 'prop-types';
import { fetchAll } from './FetchFunctions';
import styles from './Dances.module.css';
import Card from './Card';

const animationStyle = {
    transition: 'all 0.5s ease-out',
};

class Dances extends React.Component {
    constructor() {
        super();
        this.state = {
            dances: [],
            selectedid: null,
        };
    }

    componentDidMount() {
        this.fetchDances();
    }

    async fetchDances() {
        const selectedObject = await fetchAll('dances');
        this.setState({ dances: selectedObject });
    }

    select = (id) => {
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
        dance_type, name, id, content,
    } = dance;
    let { color } = dance_type;
    const { image } = dance_type;
    if (selected) {
        color += 'A0';
    }
    return (
        <Card>
            <div
                className={`${styles.dance} ${selected ? styles.open : ''}`}
                style={
                    {
                        backgroundColor: color,
                        ...animationStyle,
                    }
                }
                onClick={() => click(id)}
                key="card"
                role="button"
                onKeyDown={() => { }}
                tabIndex={0}
            >
                <div><img src={image} alt="" /></div>
                <div className={styles.title}>
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
    selected: PropTypes.bool,
    click: PropTypes.func.isRequired,
};

Dance.defaultProps = {
    selected: false,
}

export default Dances;
