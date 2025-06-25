/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // তোমার React ফোল্ডারের path
    ],
    theme: {
      extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
      themes: [
        {
          frostbox: {
            primary: "#5bc0eb",        // Main CTA Button
            secondary: "#9AD0EC",      // Secondary Button
            accent: "#a29bfe",         // Accent color like highlights or links
            neutral: "#333333",        // Main text
            "base-100": "#e6f7ff",     // Page background
            info: "#84ccf5",           // Info messages
            success: "#6bcf63",        // Success messages
            warning: "#f4bb44",        // Warning messages
            error: "#e57373",          // Error messages
          },
        },
      ],
    },
  };
  