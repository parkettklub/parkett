const link = `${process.env.FRONTEND_URL}`;
const AUTH_URL = `${process.env.AUTH_URL}`;

let PARAMS = {
    client_id: `${process.env.AUTH_CLIENT_ID}`,
    response_type: 'code',
    grant_type: 'authorization_code',
    scope: `${process.env.AUTH_SCOPE}`,
};

export function isLoggedIn() {
    if (typeof window !== 'undefined') {
        const last = localStorage.getItem('date');
        if (!last) {
            localStorage.removeItem('token');
            localStorage.removeItem('role');
            localStorage.removeItem('date');
            localStorage.removeItem('id');
            return false;
        }
        if ((new Date()).getTime() - (new Date(last)).getTime() > 10000000) {
            localStorage.removeItem('token');
            localStorage.removeItem('role');
            localStorage.removeItem('date');
            localStorage.removeItem('id');
            return false;
        }
        return !!localStorage.getItem('token');
    }
    return false;
}

export function getID() {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('id');
    }
    return null;
}

export function getToken() {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('token');
    }
    return null;
}

async function fetchMe() {
    if (isLoggedIn()) {
        const response = await fetch(`${link}users/me?token=${getToken()}`);
        return response.json();
    }
    return { name: 'Példa Béla', role: 'főszerep', email: 'barb@ra.com' };
}

export function setToken() {
    if (!getToken()) {
        const token = new URL(window.location.href).searchParams.get('token');
        if (token) {
            if (typeof window !== 'undefined') {
                localStorage.setItem('token', token);
                localStorage.setItem('date', new Date());
                fetchMe().then((response) => {
                    localStorage.setItem('role', response.role);
                    localStorage.setItem('id', response.id);
                });
            }
        }
    }
}

export function getRole() {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('role');
    }
    return null;
}

export function isAdmin() {
    if (typeof window !== 'undefined') {
        return getRole() === 'admin';
    }
    return true;
}

export function isEditor() {
    if (typeof window !== 'undefined') {
        return getRole() === 'admin' || getRole() === 'editor';
    }
    return true;
}

export function logOut() {
    if (isLoggedIn() && typeof window !== 'undefined') {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('date');
        localStorage.removeItem('id');
    }
}

export const getAuthHeader = token => ['Authorization', `Bearer ${token}`];

export function getLoginUrl() {
    if (typeof window === 'undefined' || (typeof window !== 'undefined') && (window.location.href.includes('netlify'))) {
        PARAMS = {
            client_id: '13936315458712517828',
            response_type: 'code',
            grant_type: 'authorization_code',
            scope: 'basic',
        };
    }
    const searchParams = new URLSearchParams(PARAMS);
    return `${AUTH_URL}?${searchParams.toString()}+displayName+sn+givenName+mail+eduPersonEntitlement+linkedAccounts`;
}
