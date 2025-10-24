# Barzel Engineering

A modern, multi-page company website built with Vue.js, Vite, and Tailwind CSS.

## 🚀 Features

- **Multi-page Application**: 6 pages (Home, About Us, Services, Our Work, Clients, Contact Us)
- **Modern Tech Stack**: Vue 3 + Vite for fast development and optimized builds
- **Responsive Design**: Mobile-first design with responsive navigation
- **Beautiful UI**: Tailwind CSS v4 with custom blue theme
- **Client-side Routing**: Vue Router for seamless page transitions
- **Reusable Components**: Navbar and Footer components
- **Automated Deployment**: GitHub Actions workflow for continuous deployment

## 🎨 Design

The website features a professional blue color scheme optimized for engineering and technology companies:
- Primary colors ranging from blue-50 to blue-950
- Responsive navigation with mobile hamburger menu
- Clean, modern card-based layouts
- Smooth transitions and hover effects

## 📦 Tech Stack

- **Framework**: [Vue.js 3](https://vuejs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [Vue Router 4](https://router.vuejs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Deployment**: GitHub Pages

## 🛠️ Development Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Adarsh-P-Thomson/barzelengineering.git
cd barzelengineering
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📂 Project Structure

```
barzelengineering/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   ├── CNAME                   # Custom domain configuration
│   └── vite.svg
├── src/
│   ├── assets/                 # Static assets
│   ├── components/
│   │   ├── Navbar.vue          # Navigation bar component
│   │   └── Footer.vue          # Footer component
│   ├── router/
│   │   └── index.js            # Vue Router configuration
│   ├── views/
│   │   ├── Home.vue            # Home page
│   │   ├── AboutUs.vue         # About Us page
│   │   ├── Services.vue        # Services page
│   │   ├── OurWork.vue         # Our Work page
│   │   ├── Clients.vue         # Clients page
│   │   └── ContactUs.vue       # Contact Us page
│   ├── App.vue                 # Main application component
│   ├── main.js                 # Application entry point
│   └── style.css               # Global styles with Tailwind
├── index.html                  # HTML entry point
├── package.json
├── postcss.config.js           # PostCSS configuration
└── vite.config.js              # Vite configuration
```

## 🌐 Pages

1. **Home** (`/`) - Landing page with hero section and call-to-actions
2. **About Us** (`/about`) - Company story, mission, and values
3. **Services** (`/services`) - Engineering services offered
4. **Our Work** (`/our-work`) - Portfolio of completed projects
5. **Clients** (`/clients`) - Client testimonials and industries served
6. **Contact Us** (`/contact`) - Contact form and information

## 🚢 Deployment

The website is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### Custom Domain Setup

The site is configured for the custom domain `barzelengineering.com`:

1. The `CNAME` file in the `public/` directory specifies the custom domain
2. DNS records must be configured to point to GitHub Pages:
   - A record pointing to GitHub Pages IPs
   - CNAME record for www subdomain

### Manual Deployment

To deploy manually:

```bash
npm run build
# Then push the dist/ folder to GitHub Pages
```

## 🎯 Customization

### Changing Colors

The primary blue theme is defined in `src/style.css` using CSS variables:
```css
@theme {
  --color-primary-50: #eff6ff;
  --color-primary-600: #2563eb;
  /* ... more color values */
}
```

### Adding New Pages

1. Create a new component in `src/views/`
2. Add the route in `src/router/index.js`
3. Add navigation links in `src/components/Navbar.vue`

## 📝 License

All rights reserved © 2025 Barzel Engineering

## 🤝 Contributing

This is a company website project. For any inquiries, please contact the repository owner.

## 📧 Contact

- **Website**: [barzelengineering.com](https://barzelengineering.com)
- **Email**: info@barzelengineering.com
- **Phone**: +1 (555) 123-4567

