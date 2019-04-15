import strings from './Descriptions';

export function getLanguage() {
    if (typeof window !== 'undefined') {
        let lang = localStorage.getItem('lang');
        if (!lang) {
            lang = strings.getInterfaceLanguage();
            localStorage.setItem('lang', lang);
        }
        return lang;
    }
    return strings.getInterfaceLanguage();
}

export function getLanguageName() {
    switch (getLanguage()) {
        case 'en':
            return 'English';
        case 'hu':
            return 'Magyar';
        default:
            return 'Nem definiálható';
    }
}

export function changeLanguage() {
    if (typeof window !== 'undefined') {
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
}
