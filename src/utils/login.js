export function isLoggedIn() {
    return !!localStorage.getItem('token');
}

export function getToken() {
    return localStorage.getItem('token');
}

export function setToken() {
    if (!getToken()) {
        const token = new URL(window.location.href).searchParams.get('token')
        if (token) localStorage.setItem('token', token);
    }
}

const AUTH_URL = 'http://auth.sch.bme.hu/site/login/';

const PARAMS = {
    client_id: '74854237956044948092',
    response_type: 'code',
    grant_type: 'authorization_code',
    scope: 'basic'
}

export function getLoginUrl() {
    const searchParams = new URLSearchParams();
    for (const prop in PARAMS) {
        searchParams.set(prop, PARAMS[prop]);
    }
    return AUTH_URL + '?' + searchParams.toString();
}
