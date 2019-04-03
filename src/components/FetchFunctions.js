import { getToken, isLoggedIn } from '../utils/login';

export async function fetchAll(type) {
    const response = await fetch(`https://parkett-klub.herokuapp.com/${type}`);
    return response.json();
}

export async function fetchMe() {
    if (isLoggedIn()) {
        const response = await fetch('https://parkett-klub.herokuapp.com/users/me?token=' + getToken());
        return response.json();
    }
    return { name: 'Példa Béla', role: 'főszerep', email: 'barb@ra.com' };
}

export async function fetchPost(type, element) {
    const response = await fetch(`https://parkett-klub.herokuapp.com/${type}`, {
        method: 'POST',
        body: JSON.stringify(element),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    alert(`(${element.id ? element.id : ''}. ${type}) ${element.name ? element.name : ''} ${element.title ? element.title : ''} is Saved`);
    return response;
}

export async function fetchDelete(type, id) {
    const response = await fetch(`https://parkett-klub.herokuapp.com/${type}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    alert(`(${id}. ${type} is Deleted`);
    return response;
}

export async function fetchPut(type, element) {
    const response = fetch(`https://parkett-klub.herokuapp.com/${type}/${element.id}`, {
        method: 'PUT',
        body: JSON.stringify(element),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    alert(`(${element.id ? element.id : ''}. ${type}) ${element.name ? element.name : ''} ${element.title ? element.title : ''} is Saved`);
    return response;
}