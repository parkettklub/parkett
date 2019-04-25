import React from 'react';
import styles from './Angel.module.css';

const initCircle = (base, length) => {
    const alap = Math.round(length / 2) - 1;
    const output = [];

    for (let i = -alap; i <= alap; i += 1) {
        output.push([base[0] + length, base[1] + i]);
        output.push([base[0] - length, base[1] + i]);
        output.push([base[0] + i, base[1] + length]);
        output.push([base[0] + i, base[1] - length]);
    }

    let from = [base[0] + length, base[1] + alap];
    while (from[1] <= base[1] + length - 2) {
        from[1] += 1;
        from[0] -= 1;
        output.push([...from]);
    }

    from = [base[0] + length, base[1] - alap];
    while (from[1] >= base[1] - length + 2) {
        from[1] -= 1;
        from[0] -= 1;
        output.push([...from]);
    }

    from = [base[0] - length, base[1] - alap];
    while (from[1] >= base[1] - length + 2) {
        from[1] -= 1;
        from[0] += 1;
        output.push([...from]);
    }

    from = [base[0] - length, base[1] + alap];
    while (from[1] <= base[1] + length - 2) {
        from[1] += 1;
        from[0] += 1;
        output.push([...from]);
    }
    return output;
};

class AngelComponenet extends React.Component {
    constructor() {
        super();
        this.state = {
            table: new Array(13).fill(0).map(() => new Array(13).fill(0)),
            circle: [...initCircle([6, 6], 5)],
            angelI: 6,
            angelJ: 6,
        };
    }

    reset = () => {
        this.setState({
            table: new Array(13).fill(0).map(() => new Array(13).fill(0)),
            circle: [...initCircle([6, 6], 5)],
            angelI: 6,
            angelJ: 6,
        });
    }

    setAngel = (i, j) => {
        const { table } = this.state;
        table[i][j] = 0;
        this.setState({ table });
    }

    setDevil = (i, j) => {
        const { table } = this.state;
        table[i][j] = 1;
        this.setState({ table });
    }

    handleKeyPress = (event) => {
        const { angelI, angelJ, table } = this.state;
        if (event.key === 'w') {
            if (table[angelI - 1][angelJ] !== 1) {
                this.setState(state => ({ angelI: state.angelI - 1 }));
                this.AI([angelI - 1, angelJ], [angelI, angelJ]);
            }
        }
        if (event.key === 's') {
            if (table[angelI + 1][angelJ] !== 1) {
                this.setState(state => ({ angelI: state.angelI + 1 }));
                this.AI([angelI + 1, angelJ], [angelI, angelJ]);
            }
        }
        if (event.key === 'a') {
            if (table[angelI][angelJ - 1] !== 1) {
                this.setState(state => ({ angelJ: state.angelJ - 1 }));
                this.AI([angelI, angelJ - 1], [angelI, angelJ]);
            }
        }
        if (event.key === 'd') {
            if (table[angelI][angelJ + 1] !== 1) {
                this.setState(state => ({ angelJ: state.angelJ + 1 }));
                this.AI([angelI, angelJ + 1], [angelI, angelJ]);
            }
        }
    }

    AI = ([i, j], prev) => {
        const { circle } = this.state;
        if (circle.length === 0) {
            this.setDevil(prev[0], prev[1]);
            return;
        }
        let minIndex = 0;
        circle.forEach((value, index) => {
            const x = value[0] - i;
            const y = value[1] - j;
            const xA = circle[minIndex][0] - i;
            const yA = circle[minIndex][1] - j;
            if ((x * x) + (y * y) < (xA * xA) + (yA * yA)) {
                minIndex = index;
            }
            if ((x * x) + (y * y) === (xA * xA) + (yA * yA)) {
                const ok = circle.find((element) => {
                    const xDiv = Math.abs(element[0] - value[0]);
                    const yDiv = Math.abs(element[1] - value[1]);
                    return xDiv === 1 && yDiv === 1;
                });
                if (ok) {
                    minIndex = index;
                }
            }
        });
        this.setState({ circle: circle.filter(element => element !== circle[minIndex]) });
        this.setDevil(circle[minIndex][0], circle[minIndex][1]);
    }

    render() {
        const { table, angelI, angelJ } = this.state;
        return (
            <div className={styles.main} onKeyPress={this.handleKeyPress} role="button" tabIndex={0}>
                <div>Juss ki a sárga négyzet szélére!</div>
                <div>Iranyítás: WASD</div>
                <div>
                    <button onClick={this.reset} type="button">RESET</button>
                </div>
                <table>
                    <tbody>
                        {table.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((element, index) => {
                                    if (angelI === rowIndex && angelJ === index) {
                                        return (
                                            <th key={index}>
                                                <div
                                                    className={styles.angel}
                                                />
                                            </th>
                                        );
                                    }
                                    return (
                                        <th key={index}>
                                            <div
                                                className={(element === 1)
                                                    ? styles.devil
                                                    : styles.clean}
                                            />
                                        </th>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default AngelComponenet;
