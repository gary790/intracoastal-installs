/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,ts,jsx,js}'],
  theme: {
    extend: {
      colors: {
        navy: '#0B2545',
        atlantic: '#13315C',
        brass: '#C9A961',
        'brass-hover': '#b89952',
        sand: '#F7F5F0',
        'sand-warm': '#FAF8F3',
        ink: '#111827',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-hero': ['clamp(3rem, 5.5vw + 1rem, 5.5rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display-xl': ['clamp(2.5rem, 4vw + 1rem, 4.5rem)', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(2rem, 3vw + 0.5rem, 3.25rem)', { lineHeight: '1.12', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.5rem, 1.5vw + 0.5rem, 2.25rem)', { lineHeight: '1.15' }],
        'display-sm': ['1.25rem', { lineHeight: '1.3' }],
        'body-lg': ['1.1875rem', { lineHeight: '1.7' }],
      },
      maxWidth: {
        narrow: '640px',
        default: '1024px',
        wide: '1280px',
        ultrawide: '1440px',
      },
      spacing: {
        sp1: '8px',
        sp2: '16px',
        sp3: '24px',
        sp4: '32px',
        sp5: '40px',
        sp6: '48px',
        sp8: '64px',
        sp10: '80px',
        sp12: '96px',
        sp16: '128px',
        sp20: '160px',
      },
      borderRadius: {
        DEFAULT: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(11,37,69,0.04), 0 6px 16px rgba(11,37,69,0.06)',
        elevated: '0 4px 8px rgba(11,37,69,0.04), 0 16px 40px rgba(11,37,69,0.08)',
        dramatic: '0 8px 16px rgba(11,37,69,0.06), 0 32px 64px rgba(11,37,69,0.12)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
