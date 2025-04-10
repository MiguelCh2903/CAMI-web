import { ui, defaultLang, type Language } from '@/i18n/ui';

/**
 * Extracts the language code from a URL.
 * @param url - The URL object.
 * @returns The language code if found in ui translations, otherwise the default language.
 */
export function getLangFromUrl(url: URL): Language {
    // Split the pathname and assume the first segment is empty (due to leading '/')
    const parts = url.pathname.split('/');
    // Check if the first segment after the root is a valid language code
    const langCandidate = parts[1];
    return langCandidate in ui ? (langCandidate as Language) : defaultLang;
}

/**
 * Recursively retrieves a nested value from an object using a dot-separated key.
 * @param obj - The object to search.
 * @param path - The dot-separated key path.
 * @returns The found value, or undefined if not present.
 */
function getNestedValue(obj: any, path: string): any {
    return path.split('.').reduce(
        (current, key) => (current && current[key] !== undefined ? current[key] : undefined),
        obj
    );
}

/**
 * Provides a translation function based on the given language.
 * @param lang - The selected language.
 * @returns A function that takes a translation key and returns the corresponding string or array.
 */
export function useTranslations(lang: Language) {
    return function t(key: string): string | string[] | undefined {
        // Try to get the translation from the current language
        const translation = getNestedValue(ui[lang], key);
        if (translation !== undefined) {
            return translation;
        }
        // Fallback to the default language if translation is missing
        const defaultTranslation = getNestedValue(ui[defaultLang], key);
        return defaultTranslation !== undefined ? defaultTranslation : key;
    };
}