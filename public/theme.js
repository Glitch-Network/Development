class ThemeManager {
  constructor() {
    this.themes = {
      // Original dark theme (default)
      'axiom-dark': {
        name: 'Axiom Dark',
        '--color-primary': '#6366f1',
        '--color-secondary': '#8b5cf6',
        '--color-accent': '#06b6d4',
        '--color-success': '#10b981',
        '--color-warning': '#f59e0b',
        '--color-danger': '#ef4444',
        '--color-background': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        '--color-surface': 'rgba(255, 255, 255, 0.08)',
        '--color-surface-hover': 'rgba(255, 255, 255, 0.12)',
        '--color-surface-active': 'rgba(255, 255, 255, 0.16)',
        '--color-text-primary': '#f8fafc',
        '--color-text-secondary': '#cbd5e1',
        '--color-text-muted': '#94a3b8',
        '--color-border': 'rgba(255, 255, 255, 0.2)',
        '--color-border-hover': 'rgba(255, 255, 255, 0.4)',
        '--glass-background': 'rgba(255, 255, 255, 0.1)',
        '--glass-border': 'rgba(255, 255, 255, 0.2)',
        '--glass-shadow': '0 8px 32px rgba(0, 0, 0, 0.3)',
        '--glass-blur': 'blur(20px)',
        'body::before': `
          background:
            radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%);
        `,
        'body': 'background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);'
      },

      // Cyberpunk theme
      'cyberpunk': {
        name: 'Cyberpunk',
        '--color-primary': '#ff0080',
        '--color-secondary': '#00ff80',
        '--color-accent': '#8000ff',
        '--color-success': '#00ff00',
        '--color-warning': '#ffff00',
        '--color-danger': '#ff4040',
        '--color-background': 'linear-gradient(135deg, #0a0a0a 0%, #1a0033 50%, #330066 100%)',
        '--color-surface': 'rgba(255, 0, 128, 0.1)',
        '--color-surface-hover': 'rgba(255, 0, 128, 0.15)',
        '--color-surface-active': 'rgba(255, 0, 128, 0.2)',
        '--color-text-primary': '#ff00ff',
        '--color-text-secondary': '#00ffff',
        '--color-text-muted': '#ff0080',
        '--color-border': 'rgba(255, 0, 255, 0.3)',
        '--color-border-hover': 'rgba(0, 255, 255, 0.5)',
        '--glass-background': 'rgba(255, 0, 255, 0.1)',
        '--glass-border': 'rgba(0, 255, 255, 0.3)',
        '--glass-shadow': '0 8px 32px rgba(255, 0, 128, 0.4)',
        '--glass-blur': 'blur(20px)',
        'body::before': `
          background:
            radial-gradient(circle at 20% 50%, rgba(255, 0, 128, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 255, 128, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(128, 0, 255, 0.4) 0%, transparent 50%);
        `,
        'body': 'background: linear-gradient(135deg, #0a0a0a 0%, #1a0033 50%, #330066 100%);'
      },

      // Baka theme
      'baka': {
        name: 'Baka',
        '--color-primary': '#f7dc6f',
        '--color-secondary': '#3498db',
        '--color-accent': '#e74c3c',
        '--color-success': '#2ecc71',
        '--color-warning': '#f1c40f',
        '--color-danger': '#e74c3c',
        '--color-background': 'linear-gradient(135deg, #e74c3c 0%, #3498db 50%, #e74c3c 100%)',
        '--color-surface': 'rgba(247, 220, 111, 0.1)',
        '--color-surface-hover': 'rgba(247, 220, 111, 0.15)',
        '--color-surface-active': 'rgba(247, 220, 111, 0.2)',
        '--color-text-primary': '#f7dc6f',
        '--color-text-secondary': '#3498db',
        '--color-text-muted': '#e74c3c',
        '--color-border': 'rgba(52, 152, 219, 0.3)',
        '--color-border-hover': 'rgba(247, 220, 111, 0.5)',
        '--glass-background': 'rgba(247, 220, 111, 0.1)',
        '--glass-border': 'rgba(52, 152, 219, 0.3)',
        '--glass-shadow': '0 8px 32px rgba(231, 76, 60, 0.4)',
        '--glass-blur': 'blur(20px)',
        'body::before': `
          background:
            radial-gradient(circle at 20% 50%, rgba(247, 220, 111, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(52, 152, 219, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(231, 76, 60, 0.4) 0%, transparent 50%);
        `,
        'body': 'background: linear-gradient(135deg, #e74c3c 0%, #3498db 50%, #e74c3c 100%);'
      },

      // Pipkin theme
      'pipkin': {
        name: 'pipipipipipi',
        '--color-primary': '#ff69b4',
        '--color-secondary': '#ff1493',
        '--color-accent': '#ff4500',
        '--color-success': '#32cd32',
        '--color-warning': '#ff8c00',
        '--color-danger': '#ff6347',
        '--color-background': 'linear-gradient(135deg, #ffe4e1 0%, #ffb6c1 50%, #ff69b4 100%)',
        '--color-surface': 'rgba(255, 182, 193, 0.1)',
        '--color-surface-hover': 'rgba(255, 182, 193, 0.15)',
        '--color-surface-active': 'rgba(255, 182, 193, 0.2)',
        '--color-text-primary': '#ff69b4',
        '--color-text-secondary': '#ff1493',
        '--color-text-muted': '#ff69b4',
        '--color-border': 'rgba(255, 20, 147, 0.3)',
        '--color-border-hover': 'rgba(255, 105, 180, 0.5)',
        '--glass-background': 'rgba(255, 105, 180, 0.1)',
        '--glass-border': 'rgba(255, 20, 147, 0.3)',
        '--glass-shadow': '0 8px 32px rgba(255, 105, 180, 0.4)',
        '--glass-blur': 'blur(20px)',
        'body::before': `
          background:
            radial-gradient(circle at 20% 50%, rgba(255, 105, 180, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 20, 147, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(255, 69, 0, 0.4) 0%, transparent 50%);
        `,
        'body': 'background: linear-gradient(135deg, #ffe4e1 0%, #ffb6c1 50%, #ff69b4 100%);'
      },

      // Ocean theme
      'ocean': {
        name: 'Ocean Depths',
        '--color-primary': '#0ea5e9',
        '--color-secondary': '#06b6d4',
        '--color-accent': '#0891b2',
        '--color-success': '#059669',
        '--color-warning': '#d97706',
        '--color-danger': '#dc2626',
        '--color-background': 'linear-gradient(135deg, #0c4a6e 0%, #075985 50%, #0369a1 100%)',
        '--color-surface': 'rgba(56, 189, 248, 0.1)',
        '--color-surface-hover': 'rgba(56, 189, 248, 0.15)',
        '--color-surface-active': 'rgba(56, 189, 248, 0.2)',
        '--color-text-primary': '#e0f2fe',
        '--color-text-secondary': '#bae6fd',
        '--color-text-muted': '#7dd3fc',
        '--color-border': 'rgba(56, 189, 248, 0.25)',
        '--color-border-hover': 'rgba(14, 165, 233, 0.4)',
        '--glass-background': 'rgba(14, 165, 233, 0.1)',
        '--glass-border': 'rgba(56, 189, 248, 0.25)',
        '--glass-shadow': '0 8px 32px rgba(14, 165, 233, 0.3)',
        '--glass-blur': 'blur(20px)',
        'body::before': `
          background:
            radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(8, 145, 178, 0.3) 0%, transparent 50%);
        `,
        'body': 'background: linear-gradient(135deg, #0c4a6e 0%, #075985 50%, #0369a1 100%);'
      },

      // Forest theme
      'forest': {
        name: 'Forest Night',
        '--color-primary': '#16a34a',
        '--color-secondary': '#059669',
        '--color-accent': '#0d9488',
        '--color-success': '#22c55e',
        '--color-warning': '#eab308',
        '--color-danger': '#ef4444',
        '--color-background': 'linear-gradient(135deg, #052e16 0%, #14532d 50%, #166534 100%)',
        '--color-surface': 'rgba(34, 197, 94, 0.08)',
        '--color-surface-hover': 'rgba(34, 197, 94, 0.12)',
        '--color-surface-active': 'rgba(34, 197, 94, 0.16)',
        '--color-text-primary': '#f0fdf4',
        '--color-text-secondary': '#dcfce7',
        '--color-text-muted': '#bbf7d0',
        '--color-border': 'rgba(34, 197, 94, 0.2)',
        '--color-border-hover': 'rgba(22, 163, 74, 0.4)',
        '--glass-background': 'rgba(22, 163, 74, 0.1)',
        '--glass-border': 'rgba(34, 197, 94, 0.2)',
        '--glass-shadow': '0 8px 32px rgba(22, 163, 74, 0.3)',
        '--glass-blur': 'blur(20px)',
        'body::before': `
          background:
            radial-gradient(circle at 20% 50%, rgba(22, 163, 74, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(5, 150, 105, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(13, 148, 136, 0.3) 0%, transparent 50%);
        `,
        'body': 'background: linear-gradient(135deg, #052e16 0%, #14532d 50%, #166534 100%);'
      },

      // Sunset theme
      'sunset': {
        name: 'Sunset Dreams',
        '--color-primary': '#f97316',
        '--color-secondary': '#ec4899',
        '--color-accent': '#8b5cf6',
        '--color-success': '#10b981',
        '--color-warning': '#f59e0b',
        '--color-danger': '#ef4444',
        '--color-background': 'linear-gradient(135deg, #451a03 0%, #7c2d12 50%, #ea580c 100%)',
        '--color-surface': 'rgba(249, 115, 22, 0.1)',
        '--color-surface-hover': 'rgba(249, 115, 22, 0.15)',
        '--color-surface-active': 'rgba(249, 115, 22, 0.2)',
        '--color-text-primary': '#fff7ed',
        '--color-text-secondary': '#fed7aa',
        '--color-text-muted': '#fdba74',
        '--color-border': 'rgba(251, 146, 60, 0.25)',
        '--color-border-hover': 'rgba(249, 115, 22, 0.4)',
        '--glass-background': 'rgba(249, 115, 22, 0.1)',
        '--glass-border': 'rgba(251, 146, 60, 0.25)',
        '--glass-shadow': '0 8px 32px rgba(249, 115, 22, 0.4)',
        '--glass-blur': 'blur(20px)',
        'body::before': `
          background:
            radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.4) 0%, transparent 50%);
        `,
        'body': 'background: linear-gradient(135deg, #451a03 0%, #7c2d12 50%, #ea580c 100%);'
      },

      // Monochrome theme
      'monochrome': {
        name: 'Monochrome',
        '--color-primary': '#ffffff',
        '--color-secondary': '#d1d5db',
        '--color-accent': '#9ca3af',
        '--color-success': '#ffffff',
        '--color-warning': '#d1d5db',
        '--color-danger': '#6b7280',
        '--color-background': 'linear-gradient(135deg, #000000 0%, #111827 50%, #374151 100%)',
        '--color-surface': 'rgba(255, 255, 255, 0.05)',
        '--color-surface-hover': 'rgba(255, 255, 255, 0.1)',
        '--color-surface-active': 'rgba(255, 255, 255, 0.15)',
        '--color-text-primary': '#ffffff',
        '--color-text-secondary': '#d1d5db',
        '--color-text-muted': '#9ca3af',
        '--color-border': 'rgba(255, 255, 255, 0.1)',
        '--color-border-hover': 'rgba(255, 255, 255, 0.2)',
        '--glass-background': 'rgba(255, 255, 255, 0.05)',
        '--glass-border': 'rgba(255, 255, 255, 0.1)',
        '--glass-shadow': '0 8px 32px rgba(0, 0, 0, 0.5)',
        '--glass-blur': 'blur(20px)',
        'body::before': `
          background:
            radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(209, 213, 219, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(156, 163, 175, 0.1) 0%, transparent 50%);
        `,
        'body': 'background: linear-gradient(135deg, #000000 0%, #111827 50%, #374151 100%);'
      },

      'graduation': {
        name: 'Graduation',
        '--color-primary': '#8f2e7b',
        '--color-secondary': '#c0198a',
        '--color-accent': '#d3c7a2',
        '--color-success': '#703469',
        '--color-warning': '#b25385',
        '--color-danger': '#dc5b70',
        '--color-background': 'linear-gradient(135deg, #703469 0%, #8f2e7b 50%, #c0198a 100%)',
        '--color-surface': 'rgba(143, 46, 123, 0.15)',
        '--color-surface-hover': 'rgba(143, 46, 123, 0.25)',
        '--color-surface-active': 'rgba(143, 46, 123, 0.35)',
        '--color-text-primary': '#f8fafc',
        '--color-text-secondary': '#d3c7a2',
        '--color-text-muted': '#b25385',
        '--color-border': 'rgba(211, 199, 162, 0.3)',
        '--color-border-hover': 'rgba(143, 46, 123, 0.5)',
        '--glass-background': 'rgba(192, 25, 138, 0.15)',
        '--glass-border': 'rgba(211, 199, 162, 0.3)',
        '--glass-shadow': '0 8px 32px rgba(143, 46, 123, 0.5)',
        '--glass-blur': 'blur(20px)',
        'body::before': `
          background:
            radial-gradient(circle at 20% 50%, rgba(192, 25, 138, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(143, 46, 123, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(211, 199, 162, 0.3) 0%, transparent 50%);
        `,
        'body': 'background: linear-gradient(135deg, #703469 0%, #8f2e7b 50%, #c0198a 100%);'
      },

      'mbdtf': {
        name: 'My Beautiful Dark Twisted Fantasy',
        '--color-primary': '#f2274c',
        '--color-secondary': '#a5112cff',
        '--color-accent': '#f2e2ce',
        '--color-success': '#a01428',
        '--color-warning': '#b45050',
        '--color-danger': '#6b0a0a',
        '--color-background': 'linear-gradient(135deg, #120101 0%, #300303 50%, #6b0a0a 100%)',
        '--color-surface': 'rgba(180, 40, 40, 0.15)',
        '--color-surface-hover': 'rgba(180, 40, 40, 0.25)',
        '--color-surface-active': 'rgba(180, 40, 40, 0.35)',
        '--color-text-primary': '#f8fafc',
        '--color-text-secondary': '#f2e2ce',
        '--color-text-muted': '#f2274c',
        '--color-border': 'rgba(242, 226, 206, 0.3)',
        '--color-border-hover': 'rgba(180, 40, 40, 0.5)',
        '--glass-background': 'rgba(140, 20, 20, 0.15)',
        '--glass-border': 'rgba(242, 226, 206, 0.3)',
        '--glass-shadow': '0 8px 32px rgba(180, 40, 40, 0.5)',
        '--glass-blur': 'blur(20px)',
        'body::before': `
          background:
            radial-gradient(circle at 20% 50%, rgba(180, 40, 40, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(140, 20, 20, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(242, 226, 206, 0.3) 0%, transparent 50%);
        `,
        'body': 'background: linear-gradient(135deg, #120101 0%, #300303 50%, #6b0a0a 100%);'
      },

      'ye': {
        name: 'Ye',
        '--color-primary': '#7A8CA4',
        '--color-secondary': '#414141ff',
        '--color-accent': '#11DA2D',
        '--color-success': '#08F42A',
        '--color-warning': '#7A8CA4',
        '--color-danger': '#11DA2D',
        '--color-background': 'linear-gradient(135deg, #11DA2D 0%, #414141ff 50%, #7A8CA4 100%)',
        '--color-surface': 'rgba(122, 140, 164, 0.15)',
        '--color-surface-hover': 'rgba(122, 140, 164, 0.25)',
        '--color-surface-active': 'rgba(122, 140, 164, 0.35)',
        '--color-text-primary': 'rgba(114, 114, 114, 1)ff',
        '--color-text-secondary': '#414141ff',
        '--color-text-muted': '#7A8CA4',
        '--color-border': 'rgba(242, 238, 229, 0.3)',
        '--color-border-hover': 'rgba(122, 140, 164, 0.5)',
        '--glass-background': 'rgba(122, 140, 164, 0.15)',
        '--glass-border': 'rgba(242, 238, 229, 0.3)',
        '--glass-shadow': '0 8px 32px rgba(122, 140, 164, 0.5)',
        '--glass-blur': 'blur(20px)',
        'body::before': `
          background:
            radial-gradient(circle at 20% 50%, rgba(122, 140, 164, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(242, 238, 229, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(122, 140, 164, 0.3) 0%, transparent 50%);
        `,
        'body': 'background: linear-gradient(135deg, #11DA2D 0%, #F2EEE5 50%, #7A8CA4 100%);'
      }
    };

    // Load plugin themes from localStorage
    this.loadPluginThemes();

    this.currentTheme = this.getStoredTheme();
    this.styleElement = null;
    this.init();
  }

  // Load themes from plugins stored in localStorage
  loadPluginThemes() {
    try {
      const pluginThemes = localStorage.getItem('axiom_plugin_themes');
      if (pluginThemes) {
        const themes = JSON.parse(pluginThemes);
        Object.assign(this.themes, themes);
        console.log('Loaded plugin themes:', Object.keys(themes));
      }
    } catch (error) {
      console.error('Failed to load plugin themes:', error);
    }
  }

  // Save plugin themes to localStorage
  savePluginThemes() {
    try {
      // Get all themes that aren't part of the default set
      const defaultThemeKeys = [
        'axiom-dark', 'cyberpunk', 'baka', 'pipkin', 'ocean', 
        'forest', 'sunset', 'monochrome', 'graduation', 'mbdtf', 'ye'
      ];
      
      const pluginThemes = {};
      Object.entries(this.themes).forEach(([key, theme]) => {
        if (!defaultThemeKeys.includes(key)) {
          pluginThemes[key] = theme;
        }
      });

      localStorage.setItem('axiom_plugin_themes', JSON.stringify(pluginThemes));
      console.log('Saved plugin themes:', Object.keys(pluginThemes));
    } catch (error) {
      console.error('Failed to save plugin themes:', error);
    }
  }

  // Get theme from localStorage or default
  getStoredTheme() {
    const stored = localStorage.getItem('axiom_theme');
    return stored && this.themes[stored] ? stored : 'axiom-dark';
  }

  // Save theme to localStorage
  saveTheme(themeKey) {
    localStorage.setItem('axiom_theme', themeKey);
  }

  // Initialize theme manager
  init() {
    this.createStyleElement();
    this.applyTheme(this.currentTheme);
    this.createThemeSelector();
  }

  // Create dynamic style element for theme overrides
  createStyleElement() {
    this.styleElement = document.createElement('style');
    this.styleElement.id = 'theme-manager-styles';
    document.head.appendChild(this.styleElement);
  }

  // Apply theme by updating CSS custom properties and dynamic styles
  applyTheme(themeKey) {
    if (!this.themes[themeKey]) {
      console.warn(`Theme "${themeKey}" not found. Using default.`);
      themeKey = 'axiom-dark';
    }

    const theme = this.themes[themeKey];
    const root = document.documentElement;
   
    // Apply CSS custom properties to :root
    Object.entries(theme).forEach(([property, value]) => {
      if (property.startsWith('--')) {
        root.style.setProperty(property, value);
      }
    });

    // Build dynamic CSS for special selectors
    let dynamicCSS = '';

    // Handle body::before background
    if (theme['body::before']) {
      dynamicCSS += `
        body::before {
          ${theme['body::before']}
        }
      `;
    }

    // Handle body background
    if (theme['body']) {
      dynamicCSS += `
        body {
          ${theme['body']}
        }
      `;
    }

    // Apply dynamic CSS
    this.styleElement.textContent = dynamicCSS;

    this.currentTheme = themeKey;
    this.saveTheme(themeKey);
   
    // Update selector if it exists
    const selector = document.getElementById('theme-selector');
    if (selector) {
      selector.value = themeKey;
    }

    // Trigger custom event for theme change
    document.dispatchEvent(new CustomEvent('themeChanged', {
      detail: { theme: themeKey, themeData: theme }
    }));
  }

  // Create theme selector dropdown
  createThemeSelector() {
    const selector = document.createElement('select');
    selector.id = 'theme-selector';
    selector.className = 'theme-selector';
   
    // Add styles for the selector
    const selectorStyles = `
      .theme-selector {
        background: var(--glass-background);
        border: 2px solid var(--glass-border);
        border-radius: var(--border-radius, 12px);
        color: var(--color-text-primary);
        font-size: 14px;
        padding: 8px 12px;
        outline: none;
        cursor: pointer;
        backdrop-filter: var(--glass-blur);
        transition: all var(--transition-normal, 0.3s cubic-bezier(0.4, 0, 0.2, 1));
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
        background-position: right 8px center;
        background-repeat: no-repeat;
        background-size: 16px;
        padding-right: 40px;
        margin-left: 16px;
      }
     
      .theme-selector:focus {
        border-color: var(--color-primary);
        background-color: var(--color-surface-hover);
        box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
      }
     
      .theme-selector option {
        background: #1e293b;
        color: var(--color-text-primary);
        padding: 8px;
      }
    `;
   
    // Add selector styles
    if (!document.getElementById('theme-selector-styles')) {
      const styleEl = document.createElement('style');
      styleEl.id = 'theme-selector-styles';
      styleEl.textContent = selectorStyles;
      document.head.appendChild(styleEl);
    }

    // Populate options
    Object.entries(this.themes).forEach(([key, theme]) => {
      const option = document.createElement('option');
      option.value = key;
      option.textContent = theme.name;
      if (key === this.currentTheme) {
        option.selected = true;
      }
      selector.appendChild(option);
    });

    // Add event listener for theme changes
    selector.addEventListener('change', (e) => {
      this.applyTheme(e.target.value);
    });

    return selector;
  }

  // Get current theme
  getCurrentTheme() {
    return this.currentTheme;
  }

  // Get all available themes
  getAvailableThemes() {
    return Object.keys(this.themes);
  }

  // Add a new theme (enhanced to save plugin themes)
  addTheme(key, themeData) {
    this.themes[key] = themeData;
    this.savePluginThemes(); // Save to localStorage
    
    // Update selector if it exists
    const selector = document.getElementById('theme-selector');
    if (selector) {
      // Remove existing selector and recreate
      selector.remove();
      this.createThemeSelector();
    }

    console.log(`Added theme: ${key}`);
  }

  // Remove a theme (only plugin themes can be removed)
  removeTheme(key) {
    const defaultThemeKeys = [
      'axiom-dark', 'cyberpunk', 'baka', 'pipkin', 'ocean', 
      'forest', 'sunset', 'monochrome', 'graduation', 'mbdtf', 'ye'
    ];

    if (defaultThemeKeys.includes(key)) {
      console.warn(`Cannot remove default theme: ${key}`);
      return false;
    }

    if (this.themes[key]) {
      delete this.themes[key];
      this.savePluginThemes();
      
      // If the removed theme was active, switch to default
      if (this.currentTheme === key) {
        this.applyTheme('axiom-dark');
      }

      // Update selector
      const selector = document.getElementById('theme-selector');
      if (selector) {
        selector.remove();
        this.createThemeSelector();
      }

      console.log(`Removed theme: ${key}`);
      return true;
    }

    return false;
  }

  // Get theme data for a specific theme
  getThemeData(themeKey) {
    return this.themes[themeKey] || null;
  }

  // Update an existing theme
  updateTheme(key, themeData) {
    if (this.themes[key]) {
      this.themes[key] = { ...this.themes[key], ...themeData };
      this.savePluginThemes(); // Save to localStorage
      
      // If it's the current theme, reapply it
      if (key === this.currentTheme) {
        this.applyTheme(key);
      }

      console.log(`Updated theme: ${key}`);
    }
  }

  // Export current theme as JSON
  exportTheme(themeKey = this.currentTheme) {
    const theme = this.themes[themeKey];
    if (!theme) return null;
    
    return JSON.stringify(theme, null, 2);
  }

  // Import theme from JSON
  importTheme(themeKey, jsonData) {
    try {
      const themeData = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;
      this.addTheme(themeKey, themeData);
      return true;
    } catch (error) {
      console.error('Failed to import theme:', error);
      return false;
    }
  }

  // Reset all themes to default (removes all plugin themes)
  resetThemes() {
    const defaultThemeKeys = [
      'axiom-dark', 'cyberpunk', 'baka', 'pipkin', 'ocean', 
      'forest', 'sunset', 'monochrome', 'graduation', 'mbdtf', 'ye'
    ];

    // Remove all non-default themes
    Object.keys(this.themes).forEach(key => {
      if (!defaultThemeKeys.includes(key)) {
        delete this.themes[key];
      }
    });

    // Clear plugin themes from localStorage
    localStorage.removeItem('axiom_plugin_themes');
    
    // Reset to default theme
    this.applyTheme('axiom-dark');
    
    // Update selector
    const selector = document.getElementById('theme-selector');
    if (selector) {
      selector.remove();
      this.createThemeSelector();
    }

    console.log('Reset all themes to defaults');
  }

  // Create a theme selector and append it to a specific element
  appendThemeSelectorTo(parentElement) {
    const selector = this.createThemeSelector();
    if (parentElement && selector) {
      parentElement.appendChild(selector);
    }
    return selector;
  }

  // Remove theme selector from DOM
  removeThemeSelector() {
    const selector = document.getElementById('theme-selector');
    const styles = document.getElementById('theme-selector-styles');
    
    if (selector) selector.remove();
    if (styles) styles.remove();
  }

  // Get CSS custom properties as an object for current theme
  getCurrentThemeVariables() {
    const theme = this.themes[this.currentTheme];
    if (!theme) return {};
    
    const variables = {};
    Object.entries(theme).forEach(([key, value]) => {
      if (key.startsWith('--')) {
        variables[key] = value;
      }
    });
    
    return variables;
  }

  // Get plugin themes only
  getPluginThemes() {
    const defaultThemeKeys = [
      'axiom-dark', 'cyberpunk', 'baka', 'pipkin', 'ocean', 
      'forest', 'sunset', 'monochrome', 'graduation', 'mbdtf', 'ye'
    ];
    
    const pluginThemes = {};
    Object.entries(this.themes).forEach(([key, theme]) => {
      if (!defaultThemeKeys.includes(key)) {
        pluginThemes[key] = theme;
      }
    });
    
    return pluginThemes;
  }

  // Reload themes from localStorage (useful for refreshing after plugin changes)
  reloadPluginThemes() {
    this.loadPluginThemes();
    
    // Update selector
    const selector = document.getElementById('theme-selector');
    if (selector) {
      selector.remove();
      this.createThemeSelector();
    }
    
    console.log('Reloaded plugin themes');
  }
}

// Make ThemeManager available globally
window.ThemeManager = ThemeManager;
window.themeManager = new ThemeManager();

// Optional: Listen for theme changes
document.addEventListener('themeChanged', (event) => {
  console.log('Theme changed to:', event.detail.theme);
});