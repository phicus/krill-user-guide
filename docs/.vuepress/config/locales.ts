import { navbarMenu } from "./navbarMenu";
import { sidebarMenu } from "./sidebarMenus";

export const locales = {
    defaultLanguage: 'en-US',
    config : {
        '/': {
            lang: 'en-US',
            title: 'Krill User Guide',
            description: 'Krill Help',
        },
        '/es/': {
            lang: 'es-ES',
            title: 'Una guía de usuario para Krill',
            description: 'Ayuda de Krill',
        },
    },
    theme : {
        '/': {
            selectLanguageName: '🇬🇧 English',
            selectLanguageText: 'Languages',
            lastUpdatedText: 'Last Updated',
            navbar: navbarMenu.items.en,
            sidebar: sidebarMenu.items.en,
        },
        '/es/': {
            selectLanguageName: '🇪🇸 Spanish',
            selectLanguageText: 'Idiomas',
            lastUpdatedText: 'Actualizado hace',
            navbar: navbarMenu.items.es,
            sidebar: sidebarMenu.items.es,
        }
    },
    searchPlugin : {
        '/': {
            placeholder: 'Search...',
            translations: {
                button: {
                    buttonText: 'Search...',
                },
            },
        },
        '/es/': {
            placeholder: 'Buscar...',
            translations: {
                button: {
                    buttonText: 'Buscar...',
                },
            },
        },
    }
}
