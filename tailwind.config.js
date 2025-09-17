module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Government authority with approachable confidence
        primary: {
          50: "#eff6ff", // blue-50
          100: "#dbeafe", // blue-100
          200: "#bfdbfe", // blue-200
          300: "#93c5fd", // blue-300
          400: "#60a5fa", // blue-400
          500: "#3b82f6", // blue-500
          600: "#2563eb", // blue-600
          700: "#1d4ed8", // blue-700
          800: "#1e40af", // blue-800
          900: "#1f4e79", // custom government blue
          DEFAULT: "#1f4e79", // custom government blue
        },
        // Secondary Colors - National pride accent
        secondary: {
          50: "#fff7ed", // orange-50
          100: "#ffedd5", // orange-100
          200: "#fed7aa", // orange-200
          300: "#fdba74", // orange-300
          400: "#ff9933", // custom saffron
          500: "#f97316", // orange-500
          600: "#ea580c", // orange-600
          700: "#c2410c", // orange-700
          800: "#9a3412", // orange-800
          900: "#7c2d12", // orange-900
          DEFAULT: "#ff9933", // custom saffron
        },
        // Accent Colors - Success and achievement
        accent: {
          50: "#f0fdf4", // green-50
          100: "#dcfce7", // green-100
          200: "#bbf7d0", // green-200
          300: "#86efac", // green-300
          400: "#4ade80", // green-400
          500: "#22c55e", // green-500
          600: "#16a34a", // green-600
          700: "#138808", // custom achievement green
          800: "#166534", // green-800
          900: "#14532d", // green-900
          DEFAULT: "#138808", // custom achievement green
        },
        // Background and Surface Colors
        background: "#fafbfc", // gray-50
        surface: "#ffffff", // white
        // Text Colors
        text: {
          primary: "#1a202c", // gray-900
          secondary: "#4a5568", // gray-600
        },
        // Status Colors
        success: "#38a169", // green-600
        warning: "#d69e2e", // yellow-600
        error: "#e53e3e", // red-600
        // Border Colors
        border: {
          DEFAULT: "#e2e8f0", // gray-200
          focus: "#1f4e79", // primary
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'heading-xl': ['2.25rem', { lineHeight: '2.5rem', fontWeight: '700' }], // 36px
        'heading-lg': ['1.875rem', { lineHeight: '2.25rem', fontWeight: '600' }], // 30px
        'heading-md': ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }], // 24px
        'heading-sm': ['1.25rem', { lineHeight: '1.75rem', fontWeight: '600' }], // 20px
        'body-lg': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '400' }], // 18px
        'body-md': ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }], // 16px
        'body-sm': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }], // 14px
        'caption': ['0.75rem', { lineHeight: '1rem', fontWeight: '400' }], // 12px
      },
      boxShadow: {
        'government': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'government-lg': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'modal': '0 10px 25px rgba(0, 0, 0, 0.15)',
        'focus': '0 0 0 3px rgba(31, 78, 121, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-in-out',
        'slide-up': 'slideUp 300ms ease-in-out',
        'pulse-subtle': 'pulseSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      transitionDuration: {
        'fast': '200ms',
        'normal': '300ms',
      },
      transitionTimingFunction: {
        'government': 'ease-in-out',
      },
      spacing: {
        '18': '4.5rem', // 72px
        '88': '22rem', // 352px
        '128': '32rem', // 512px
      },
      borderRadius: {
        'government': '0.5rem', // 8px
        'government-lg': '0.75rem', // 12px
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.transition-government': {
          transition: 'all 300ms ease-in-out',
        },
        '.transition-government-fast': {
          transition: 'all 200ms ease-in-out',
        },
        '.focus-government': {
          '&:focus': {
            outline: 'none',
            borderColor: '#1f4e79',
            boxShadow: '0 0 0 3px rgba(31, 78, 121, 0.1)',
          },
        },
        '.hover-lift': {
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          },
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
