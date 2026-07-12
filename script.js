const translations = {
  en: {
    home: "Home",
    privacy: "Privacy",
    terms: "Terms",
    support: "Support"
  },
  es: {
    home: "Inicio",
    privacy: "Privacidad",
    terms: "Términos",
    support: "Soporte"
  }
};

function setLanguage(lang) {
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "en";
  setLanguage(lang);
});
