export const languages = {
  en: 'English',
  es: 'Español',
  ru: 'Русский',
};

export const defaultLang = 'en';

export const showDefaultLang = true;

export const ui ={

    en:{
      //Navbar items
    'navItem1': 'Home',
    'navItem2': 'About',
    'navItem3': 'Contact',
    //Cover Items
    'downloadBtn': 'Download',
    'SteamBtn': 'Download from Steam',

    //Characters
    'characterTitle': 'Characters',
    },

    es:{
      //Navbar items
    'navItem1': 'Inicio',
    'navItem2': 'Acerca de',
    'navItem3': 'Contacto',

    //Cover Items
    'downloadBtn': 'Descargar',
    'SteamBtn': 'Descárgalo desde Steam',

    //Personajes
    'characterTitle': 'Personajes',
    },
    
    ru:{
      //Navbar items
        'navItem1': 'Главная',
        'navItem2': 'О нас',
        'navItem3': 'Контакты',

      //Cover Items
        'downloadBtn': 'Скачать',
        'SteamBtn': 'Скачать из Steam',
      //Characters
      'characterTitle': 'Персонажи',
    }
} as const;
