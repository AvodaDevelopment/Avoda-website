# Avoda Website

A modern, responsive React website built with Vite.

## Features

- ⚡ Lightning-fast performance with Vite
- 🎨 Modern, beautiful UI with responsive design
- 🔄 React Router for seamless navigation
- 📱 Mobile-first approach
- 🎯 Clean and maintainable code structure

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The application will open automatically in your browser at `http://localhost:3000`.

### Building for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
avoda-website/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable components
│   ├── pages/       # Page components
│   ├── App.jsx      # Main app component
│   ├── main.jsx     # Application entry point
│   └── index.css    # Global styles
├── index.html       # HTML template
├── package.json     # Dependencies and scripts
└── vite.config.js   # Vite configuration
```

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **CSS3** - Styling with CSS custom properties

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

### Updating Colors

Edit the CSS custom properties in `src/index.css`:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #ec4899;
  /* ... other colors */
}
```

### Adding New Pages

1. Create a new component in `src/pages/`
2. Import and add a route in `src/App.jsx`
3. Update the navigation in `src/components/Navbar.jsx`

## License

This project is open source and available under the MIT License.

