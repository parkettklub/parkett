import React from 'react'
import './Knowledge-Base.css';

class OpenCloseComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false
        }
        this.changeStatus = this.changeStatus.bind(this);
    }

    changeStatus() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        if (this.state.open) {
            return (
                <div className="card withpadding" onClick={this.changeStatus}>
                    <div className="title">{this.props.title}</div>
                    {this.props.content}
                </div>
            )
        } else {
            return (
                <div className="card withpadding" onClick={this.changeStatus}>
                    <div className="title">{this.props.title}</div>
                </div>
            )
        }
    }
}

export default OpenCloseComponent;