import React from 'react'
import styles from './EditEvent.module.css'
import Plus from './plus.svg';
import Minus from './minus.svg';

class FormSelectInput extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false
        }
        this.change = this.change.bind(this);
    }

    change() {
        if (this.state.open) this.props.close();
        else this.props.addNew();
        this.setState({ open: !this.state.open });

    }

    render() {
        let { selected, title, label, name, handleChange, value, options } = this.props;
        return (
            <div className={styles.formgroup} hidden={selected != title}>
                <label htmlFor={name}><b>{label}</b></label>
                <select id={name} name={name} value={value} onChange={handleChange}
                    className={styles.input}  >
                    {options}
                </select>
                <img src={this.state.open ? Minus : Plus} className={styles.plus} onClick={this.change} />
            </div>
        )
    }
}

export default FormSelectInput