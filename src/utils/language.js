import strings from './Descriptions';

export function getLanguage() {
    let lang = localStorage.getItem('lang');
    if (!lang) {
        lang = strings.getInterfaceLanguage();
        localStorage.setItem('lang', lang);
    }
    return lang;
}

export function changeLanguage() {
    let lang = localStorage.getItem('lang');
    if (!lang) {
        lang = strings.getInterfaceLanguage();
    } else if (lang === 'en') {
        lang = 'hu';
    } else {
        lang = 'en';
    }
    localStorage.setItem('lang', lang);
    location.reload();
}
