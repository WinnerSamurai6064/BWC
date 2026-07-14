export const defaultTheme = {
    wallpaper: null,

    colors: {
        background: '#0f1115',
        surface: 'rgba(255,255,255,0.08)',
        surfaceHover: 'rgba(255,255,255,0.12)',
        border: 'rgba(255,255,255,0.12)',

        text: '#ffffff',
        textSecondary: 'rgba(255,255,255,0.65)',

        accent: '#5ea2ff',

        glass: 'rgba(255,255,255,0.08)'
    }
};

export function applyTheme(theme = defaultTheme) {

    const root = document.documentElement;

    root.style.setProperty('--bg', theme.colors.background);

    root.style.setProperty('--surface', theme.colors.surface);

    root.style.setProperty('--surface-hover', theme.colors.surfaceHover);

    root.style.setProperty('--border', theme.colors.border);

    root.style.setProperty('--text', theme.colors.text);

    root.style.setProperty('--text-secondary', theme.colors.textSecondary);

    root.style.setProperty('--accent', theme.colors.accent);

}
