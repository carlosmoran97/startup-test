module.exports = {
  content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E73D1E',
        secondary: '#6C9FD5',
        'on-primary': '#FFFFFF',
      },
      fontFamily: {
        amiko: ['var(--font-amiko)'],
      },
    }
  },
  plugins: [],
};
