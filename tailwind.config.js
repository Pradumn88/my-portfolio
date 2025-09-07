module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep professional navy
        primary: {
          DEFAULT: "#1a365d", // navy-900
          50: "#f0f4f8", // navy-50
          100: "#d6e3f0", // navy-100
          200: "#b8cde0", // navy-200
          300: "#9bb7d0", // navy-300
          400: "#7ea1c0", // navy-400
          500: "#618bb0", // navy-500
          600: "#4a75a0", // navy-600
          700: "#335f90", // navy-700
          800: "#1c4980", // navy-800
          900: "#1a365d", // navy-900
        },
        // Secondary Colors - Energizing blue
        secondary: {
          DEFAULT: "#3182ce", // blue-600
          50: "#ebf8ff", // blue-50
          100: "#bee3f8", // blue-100
          200: "#90cdf4", // blue-200
          300: "#63b3ed", // blue-300
          400: "#4299e1", // blue-400
          500: "#3182ce", // blue-500
          600: "#2c5aa0", // blue-600
          700: "#2a4365", // blue-700
          800: "#153e75", // blue-800
          900: "#1a202c", // blue-900
        },
        // Accent Colors - Lighter blue for interactions
        accent: {
          DEFAULT: "#4299e1", // blue-400
          50: "#ebf8ff", // blue-50
          100: "#bee3f8", // blue-100
          200: "#90cdf4", // blue-200
          300: "#63b3ed", // blue-300
          400: "#4299e1", // blue-400
          500: "#3182ce", // blue-500
        },
        // Background Colors
        background: "#ffffff", // white
        surface: {
          DEFAULT: "#f7fafc", // gray-50
          100: "#edf2f7", // gray-100
          200: "#e2e8f0", // gray-200
        },
        // Text Colors
        text: {
          primary: "#2d3748", // gray-800
          secondary: "#718096", // gray-500
          muted: "#a0aec0", // gray-400
        },
        // Status Colors
        success: {
          DEFAULT: "#38a169", // green-600
          50: "#f0fff4", // green-50
          100: "#c6f6d5", // green-100
          500: "#48bb78", // green-500
        },
        warning: {
          DEFAULT: "#ed8936", // orange-500
          50: "#fffaf0", // orange-50
          100: "#feebc8", // orange-100
          500: "#ed8936", // orange-500
        },
        error: {
          DEFAULT: "#e53e3e", // red-500
          50: "#fed7d7", // red-50
          100: "#fed7d7", // red-100
          500: "#e53e3e", // red-500
        },
        // Border Colors
        border: {
          DEFAULT: "#e2e8f0", // gray-200
          focus: "#4299e1", // blue-400
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'hero-sm': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'section': ['2.25rem', { lineHeight: '1.2', fontWeight: '600' }],
        'subsection': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'code': ['0.875rem', { lineHeight: '1.4', fontWeight: '400' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'large': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}