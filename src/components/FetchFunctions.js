export function fetchAll(type) {
    return fetch(`http://parkett-klub.herokuapp.com/${type}`).then(response => response.json());
}

export function fetchPost(type, element) {
    return fetch(`http://parkett-klub.herokuapp.com/${type}`, {
        method: 'POST',
        body: JSON.stringify(element),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => {
        alert(`(${element.id ? element.id : ''}. ${type}) ${element.name ? element.name : ''} ${element.title ? element.title : ''} is Saved`);
        return response;
    });
}

export function fetchPut(type, element) {
    return fetch(`http://parkett-klub.herokuapp.com/${type}/${element.id}`, {
        method: 'PUT',
        body: JSON.stringify(element),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => {
        alert(`(${element.id ? element.id : ''}. ${type}) ${element.name ? element.name : ''} ${element.title ? element.title : ''} is Saved`);
        return response;
    });
}
