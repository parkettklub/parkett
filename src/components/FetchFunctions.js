export function fetchAll(type) {
    return fetch(`http://parkett-klub.herokuapp.com/${type}`);
}

export function fetchPost(type, element) {
    return fetch(`http://parkett-klub.herokuapp.com/${type}`, {
        method: 'POST',
        body: JSON.stringify(element),
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export function fetchPut(type, element) {
    return fetch(`http://parkett-klub.herokuapp.com/${type}/${element.id}`, {
        method: 'PUT',
        body: JSON.stringify(element),
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
