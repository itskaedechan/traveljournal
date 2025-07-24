A simple React-based travel journal web application built with Tailwind CSS. Users can view a list of travel destinations, each with photos, descriptions, and Google Maps links. Layout is inspired by Scrimba.

🔧 Built With
⚛️ React
💨 Tailwind CSS
📦 JSON for data structure

🚀 Live Demo
https://traveljournal-ten.vercel.app/

To run locally:

1. Clone repository
   git clone https://github.com/yourusername/traveljournal.git
   cd traveljournal

2. Install dependencies
   npm install

3. Start the development server
   npm run dev

4. Build for production
   npm run build

5. Preview production build
   npx serve dist

For Tailwind CSS 3 React+Vite Issue: (credits to StackOverflow Thread for fix)

1. Run: npm install -D tailwindcss@3 postcss autoprefixer
2. Run: npx tailwindcss init -p

- Will create both tailwind.config.js and postcss.config.js

3. Add these three in index.css file:
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

4. Update tailwind.config.js to this:
   export default {
   content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
   theme: {
   extend: {},
   },
   plugins: [require("@tailwindcss/aspect-ratio")],
   };

Also install VSCode Extension PostCSS Language Support for Tailwind.
Prettier for code formatting
ES7+ React/Redux/React-Native snippets for React Shortcuts.

📝 Features
List of curated travel spots
Responsive design with Tailwind CSS
Clickable Google Maps link for each location
Clean layout and UI

📌 To Do
Add filtering or search by location
Add animations or transitions
Add user-submitted entries (with form)

📜 License
This project is open-source and available under the MIT License.

Thank you.
