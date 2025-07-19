module.exports = {
  content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E73D1E',
        accent: '#6C9FD5',
        'on-primary': '#FFFFFF',
        base: '#FFFFFF',
        card: '#F3F3F3',
        heading: '#000000',
        body: '#000000',
      },
      fontFamily: {
        amiko: ['var(--font-amiko)'],
      },
    }
  },
  plugins: [],
};
