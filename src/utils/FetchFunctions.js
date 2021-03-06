import { getToken, isLoggedIn } from './login';

const link = process.env.GATSBY_FRONTEND_URL;

export async function fetchAll(type) {
    try {
        const response = await fetch(`${link}${type}`);
        if (!response.ok) {
            alert('Probléma lépett fel az adatbázissal való kommunikációval');
            return null;
        }
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
            if (!response.ok) {
                alert('Probléma lépett fel az adatbázissal való kommunikációval');
                return null;
            }
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
        if (!response.ok) {
            alert('Probléma lépett fel az adatbázissal való kommunikációval');
            return null;
        }
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
            if (!response.ok) {
                alert('Probléma lépett fel az adatbázissal való kommunikációval');
                return null;
            }
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
        const response = await fetch(`${link}${type}/${element.id}`, {
            method: 'PUT',
            body: JSON.stringify(element),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            alert('Probléma lépett fel az adatbázissal való kommunikációval');
            return null;
        }
        alert(`(${element.id ? element.id : ''}. ${type}) ${element.name ? element.name : ''} ${element.title ? element.title : ''} is Saved`);
        return response;
    } catch (error) {
        alert('Probléma lépett fel az adatbázissal való kommunikációval');
        return {};
    }
}
