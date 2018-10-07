import React from 'react'
import './Card.css'

class Login extends React.Component {

    AUTH_URL = 'http://auth.sch.bme.hu/site/login/';

    PARAMS = {
        client_id: '74854237956044948092',
        response_type: 'code',
        grant_type: 'authorization_code',
        scope: 'basic'
    }

    get login() {
        const searchParams = new URLSearchParams();
        for (const prop in this.PARAMS) {
            searchParams.set(prop, this.PARAMS[prop]);
        }
        return this.AUTH_URL + '?' + searchParams.toString();
    }

    render() {
        return (
            <div className="card withpadding">
                <a href={this.login}>Login</a>
            </div>
        )
    }

}

export default Login