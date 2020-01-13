import strings from './Descriptions';

function GetInterfaceLanguage() {
    let lang = strings.getInterfaceLanguage().substr(0, 2);
    if (!lang) {
        lang = 'hu';
    }
    return lang;
}

export function getLanguage() {
    if (typeof window !== 'undefined') {
        let lang = localStorage.getItem('lang');
        if (!lang || lang === '') {
            lang = GetInterfaceLanguage();
            localStorage.setItem('lang', lang);
        }
        return lang;
    }
    return GetInterfaceLanguage();
}

export function getLanguageName() {
    const lang = getLanguage();
    if (lang.startsWith('en')) {
        return 'English';
    }
    if (lang.startsWith('hu')) {
        return 'Magyar';
    }
    return getLanguage();
}

export function setLanguage(language) {
    if (typeof window !== 'undefined') {
        localStorage.setItem('lang', language);
        location.reload();
    }
}

export function changeLanguage() {
    if (typeof window !== 'undefined') {
        let lang = localStorage.getItem('lang');
        if (!lang) {
            lang = GetInterfaceLanguage();
        } else if (lang === 'en') {
            lang = 'hu';
        } else {
            lang = 'en';
        }
        localStorage.setItem('lang', lang);
        location.reload();
    }
}
