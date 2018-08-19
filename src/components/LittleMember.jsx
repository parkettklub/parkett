import React from 'react'
import './Members.css'
import profDefault from './defaultProfile.jpg'

class LittleMember extends React.Component {
    constructor() {
        super();
    }

    render() {
        let src = profDefault;
        if (this.props.details.src) src = this.props.details.src;
        return (
            <div className="card roundUp small" style={{
                backgroundImage: 'url("' + src + '")',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}>
                <div></div>
                <div className="profileDesc small">
                    <div className="profileName"><b>{this.props.details.name}</b></div>
                </div>
            </div>
        )
    }
}

export default LittleMember