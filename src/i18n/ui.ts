// Define supported languages with their native names
export const languages = {
    en: 'English',
    es: 'Español',
} as const;

// Language type is the keys of the languages object
export type Language = keyof typeof languages;

// Default language is English
export const defaultLang: Language = 'en';

// A flexible type for nested translation objects
export type NestedTranslations = {
    [key: string]: string | string[] | NestedTranslations;
};

// Translations type uses a Record for better clarity and type-safety
export type Translations = Record<Language, NestedTranslations>;

// UI translations for each language
export const ui: Translations = {
    en: {
        nav: {
            home: 'Home',
            projects: 'Projects',
            blog: 'Blog',
            about: 'About',
        },
        hero: {
            acronym: 'Center for Advanced Intelligent Mechatronics',
            slogan: 'Innovation in',
            array: ['Mechatronics', 'Robotics', 'Aerospace', 'AI'],
        },
    },
    es: {
        nav: {
            home: 'Inicio',
            projects: 'Proyectos',
            blog: 'Blog',
            about: 'Info',
        },
        hero: {
            acronym: 'Centro Avanzado de Mecatrónica Inteligente',
            slogan: 'Innovación en',
            array: ['Mecatrónica', 'Robótica', 'Aeroespacial', 'IA'],
        },
    },
};