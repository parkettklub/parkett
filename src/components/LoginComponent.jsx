import React from 'react'
import './Card.css'

class LoginComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            client_id: '87676418335280014999',
            unique_id: '',
            permissions: 'basic+displayName+mail',
            client_pass: 'zFuqsvsAlil63jv8jYetBtZCGw4rCpJ2v5iepQeRyFNqp9oOXI8Y3Xb0KUrNA1FwunQa4vrr15Yf4DuQ',
            your_code: ''
        };
        this.Login = this.Login.bind(this);
        this.Response = this.Response.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    Login() {
        console.log('Login');
        const base = 'https://auth.sch.bme.hu/site/login?';
        const client_unique_id = 'valtoztasdmeg';
        let url = base + 'response_type=code';
        url = url + '&client_id=' + this.state.client_id;
        url = url + '&state=' + client_unique_id;
        url = url + '&scope=' + this.state.permissions;
        this.setState({
            unique_id: client_unique_id
        })
        /*fetch(url, {
            method: 'POST',
            mode: 'no-cors'
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log('Request failed', error)
        });*/
        console.log(url);
    }

    handleChange(event) {
        this.setState({ your_code: event.target.value });
    }

    Response() {
        //let your_code = 'fde8c00751381d9ec3214290ea3cd4baee1d3b3e';
        let base64 = require('base-64');
        let url = 'https://auth.sch.bme.hu/oauth2/token?grant_type=authorization_code&code=' + this.state.your_code;
        fetch(url, {
            headers: {
                'Authorization': 'Basic ' + base64.encode(this.state.client_id + ':' + this.state.client_pass),
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            mode: 'no-cors',
            method: 'POST'
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log('Request failed', error)
        });
    }

    render() {
        return (
            <div className="card withpadding">
                <button onClick={this.Login}>Login</button>
                <input type="text" name="code" value={this.state.your_code} onChange={this.handleChange} />
                <button onClick={this.Response}>Response</button>
            </div>
        )
    }
}

export default LoginComponent