import React from 'react';
import Card from './Card';
import styles from './JoinUs.module.css';

class JoinUsComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name } = event.target.name;
        this.setState({ [name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({});
    }

    render() {
        const { name, email } = this.state;
        return (
            <Card>
                <div className={styles.main}>
                    <div className={styles.title}>Csatlakozz a rendezőkhöz!</div>
                    <div>
                        <div className={styles.formgroup}>
                            <label htmlFor={name}>
                                <strong>Név</strong>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    className={styles.input}
                                    value={name}
                                    onChange={this.handleChange}
                                />
                            </label>
                        </div>
                        <div className={styles.formgroup}>
                            <label htmlFor={email}>
                                <strong>Emailcím</strong>
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    className={styles.input}
                                    value={email}
                                    onChange={this.handleChange}
                                />
                            </label>
                        </div>
                        <div className={styles.formgroup}>
                            <input type="submit" value="Csatlakozás" className={styles.submit} />
                        </div>
                    </div>
                </div>
            </Card>
        );
    }
}

export default JoinUsComponent;
