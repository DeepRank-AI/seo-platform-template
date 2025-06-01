import { defineI18nConfig } from '#i18n'

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
            // Example: appTitle: 'DeepRankAI'
        },
        // Add more locales as needed
        // fr: {
        //   welcome: 'Bienvenue'
        // }
    }
}))
