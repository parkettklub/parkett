export async function fetchThumbnailLink(url) {
    try {
        const response = await fetch(url);
        const text = await response.text();
        const video = text.querySelector('#video');
        return (video && video.hasAttribute('poster')) ? video.getAttribute('poster') : null;
    } catch (err) {
        console.log(err)
    }
}

async function getSavedThumbnailLink(eventId) {
    // TODO use correct endpoint and JSON property name
    const response = await fetch(`${BACKEND_URL}/Parties/${eventId}`);
    const respJson = await response.json();
    return respJson.bss_thumbnail;
}

export async function saveThumbnail(eventId, url) {
    const link = fetchThumbnailLink(url);
    // save link to backend
}