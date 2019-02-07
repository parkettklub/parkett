import React from 'react';
import PropTypes from 'prop-types';
import './Knowledge-Base.css';
import Card from './Card';
import styles from './Card.module.css';

class OpenCloseComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false,
        };
        this.changeStatus = this.changeStatus.bind(this);
    }

    changeStatus() {
        this.setState(state => ({
            open: !state.open,
        }));
    }

    render() {
        const { open } = this.state;
        const { children, title } = this.props;
        if (open) {
            return (
                <Card>
                    <div
                        className={styles.open}
                        onClick={this.changeStatus}
                        role="button"
                        tabIndex={0}
                        onKeyDown={() => { }}
                    >
                        <div className={styles.title}>{title}</div>
                        {children}
                    </div>
                </Card>
            );
        }
        return (
            <Card>
                <div
                    className={styles.close}
                    onClick={this.changeStatus}
                    role="button"
                    tabIndex={0}
                    onKeyDown={() => { }}
                >
                    <div className={styles.title}>{title}</div>
                </div>
            </Card>
        );
    }
}

OpenCloseComponent.propTypes = {
    children: PropTypes.instanceOf(Object),
    title: PropTypes.string,
};

OpenCloseComponent.defaultProps = {
    children: [],
    title: '',
};

export default OpenCloseComponent;
