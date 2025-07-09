
function setLanguage(lang) {
    fetch('lang/' + lang + '.json')
        .then(response => response.json())
        .then(translations => {
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[key]) {
                    el.textContent = translations[key];
                }
            });
        });
}

// Détecter le choix de langue dans l'URL (ex: ?lang=de)
const urlParams = new URLSearchParams(window.location.search);
const lang = urlParams.get('lang') || 'en';
setLanguage(lang);
