import { getToken, isLoggedIn } from './login';

global.process = {
    env: {
        NODE_ENV: 'production' // or development
    }
}

console.log(process);
console.log(process.env);


const link = process.env.FRONTEND_URL;

export async function fetchAll(type) {
    try {
        const response = await fetch(`${link}${type}`);
        return response.json();
    } catch (error) {
        alert('Probléma lépett fel az adatbázissal való kommunikációval');
        return [];
    }
}

export async function fetchMe() {
    try {
        if (isLoggedIn()) {
            const response = await fetch(`${link}users/me?token=${getToken()}`);
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
        const response = await fetch(`${link}${type}`, {
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
    const r = confirm(`Do you want to delete : (${id}. ${type} ?`);
    if (r) {
        try {
            const response = await fetch(`${link}${type}/${id}`, {
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
    return {};
}

export async function fetchPut(type, element) {
    try {
        const response = fetch(`${link}${type}/${element.id}`, {
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
