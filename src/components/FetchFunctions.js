import { getToken, isLoggedIn } from '../utils/login';

export async function fetchAll(type) {
    try {
        const response = await fetch(`https://parkett-klub.herokuapp.com/${type}`);
        return response.json();
    } catch (error) {
        alert('Probléma lépett fel az adatbázissal való kommunikációval');
        return [];
    }
}

export async function fetchMe() {
    try {
        if (isLoggedIn()) {
            const response = await fetch('https://parkett-klub.herokuapp.com/users/me?token=' + getToken());
            return response.json();
        }
        return {};
    } catch (error) {
        alert('Probléma lépett fel az adatbázissal való kommunikációval');
        return {};
    }
}

export async function fetchPost(type, element) {
    try {
        const response = await fetch(`https://parkett-klub.herokuapp.com/${type}`, {
            method: 'POST',
            body: JSON.stringify(element),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        alert(`(${element.id ? element.id : ''}. ${type}) ${element.name ? element.name : ''} ${element.title ? element.title : ''} is Saved`);
        return response;
    } catch (error) {
        alert('Probléma lépett fel az adatbázissal való kommunikációval');
        return {};
    }
}

export async function fetchDelete(type, id) {
    try {
        const response = await fetch(`https://parkett-klub.herokuapp.com/${type}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        alert(`(${id}. ${type} is Deleted`);
        return response;
    } catch (error) {
        alert('Probléma lépett fel az adatbázissal való kommunikációval');
        return {};
    }
}

export async function fetchPut(type, element) {
    try {
        const response = fetch(`https://parkett-klub.herokuapp.com/${type}/${element.id}`, {
            method: 'PUT',
            body: JSON.stringify(element),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        alert(`(${element.id ? element.id : ''}. ${type}) ${element.name ? element.name : ''} ${element.title ? element.title : ''} is Saved`);
        return response;
    } catch (error) {
        alert('Probléma lépett fel az adatbázissal való kommunikációval');
        return {};
    }
}