export function isLoggedIn() {
    if (typeof window !== 'undefined') {
        return !!localStorage.getItem('token');
    }
    return false;
}

export function getToken() {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('token');
    }
    return null;
}

export function setToken() {
    if (!getToken()) {
        const token = new URL(window.location.href).searchParams.get('token');
        if (token) {
            if (typeof window !== 'undefined') {
                localStorage.setItem('token', token);
            }
        }
    }
}

export function logOut() {
    if (isLoggedIn() && typeof window !== 'undefined') {
        localStorage.removeItem('token');
    }
}

export const getAuthHeader = token => ['Authorization', `Bearer ${token}`];

const AUTH_URL = 'http://auth.sch.bme.hu/site/login/';

const PARAMS = {
    client_id: '74854237956044948092',
    response_type: 'code',
    grant_type: 'authorization_code',
    scope: 'basic',
};

export function getLoginUrl() {
    const searchParams = new URLSearchParams(PARAMS);
    return `${AUTH_URL}?${searchParams.toString()}+displayName+sn+givenName+mail+eduPersonEntitlement+linkedAccounts`;
}
