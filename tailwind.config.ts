import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Explee exact design system
        black: '#000000',
        white: '#FFFFFF',
        
        // Primary text
        text: {
          DEFAULT: '#111111',
          secondary: '#666666',
          muted: '#8A8A8A',
        },
        
        // Borders
        border: {
          DEFAULT: '#E5E5E5',
          dark: '#D4D4D4',
        },
        
        // Backgrounds
        background: {
          DEFAULT: '#FFFFFF',
          surface: '#FAFAFA',
          muted: '#F5F5F5',
        },
        
        // Single brand accent — used sparingly for AI state and key numbers
        accent: {
          DEFAULT: '#E89110',
          soft: '#FDF6E9',
        },

        // Semantic colors (minimal usage)
        success: '#22C55E',
        warning: '#F59E0B',
        danger: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      fontSize: {
        // Explee exact type scale
        'hero': ['72px', { lineHeight: '1.02', letterSpacing: '-0.045em', fontWeight: '800' }],
        'display-1': ['64px', { lineHeight: '1.0', letterSpacing: '-0.04em', fontWeight: '700' }],
        'display-2': ['52px', { lineHeight: '1.05', letterSpacing: '-0.035em', fontWeight: '700' }],
        'display-3': ['42px', { lineHeight: '1.05', letterSpacing: '-0.035em', fontWeight: '700' }],
        'h1': ['32px', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2': ['28px', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h3': ['24px', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '650' }],
        'body-lg': ['20px', { lineHeight: '1.5', letterSpacing: '0' }],
        'body': ['16px', { lineHeight: '1.5', letterSpacing: '0' }],
        'small': ['14px', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
        'micro': ['12px', { lineHeight: '1.35', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '32': '128px',
        '40': '160px',
      },
      maxWidth: {
        'container': '1200px',
      },
      borderRadius: {
        'sm': '6px',
        'DEFAULT': '8px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        'full': '9999px',
      },
      boxShadow: {
        'subtle': '0 4px 20px rgba(0,0,0,0.04)',
        'card': '0 8px 30px rgba(0,0,0,0.04)',
      },
      transitionDuration: {
        'fast': '120ms',
        'normal': '200ms',
        'slow': '300ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
