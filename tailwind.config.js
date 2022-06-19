module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1f2937",
          secondary: "#fca5a5",
          accent: "#9ca3af",
          neutral: "#111827",
          "base-100": "#f5f5f4",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272"
        }
      }
    ]
  },
  plugins: [require("daisyui")]
};
