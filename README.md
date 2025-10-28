# Dairy Nearby — Fresh Dairy, Delivered

Dairy Nearby is a modern, responsive e‑commerce web app for a small startup that partners with local farms to deliver fresh dairy to your door. Built with React, Vite, and Tailwind CSS v4, the app features a clean design, smooth micro‑interactions, and an accessible, mobile‑first experience.

## ✨ Features
- Beautiful, responsive UI with modern layout and micro‑interactions
- Product catalog with detail pages (milk, yogurt, cheese, butter)
- Add to cart, quantity updates, and cart summary
- Accessible navigation with sticky header and mobile menu
- Themed components, custom typography (Poppins), and resilient images with lazy‑loading and fallback
- SEO‑friendly head tags and clean URL routing
- Additional informational pages: About, Delivery, Sustainability, FAQ, Careers, Contact, and 404

## 🛠️ Tech Stack
- React 19 + Vite 7
- React Router v7
- Tailwind CSS v4 (+ forms, typography, container‑queries plugins)
- PostCSS via `@tailwindcss/postcss`
- Icons: `lucide-react`
- Motion: CSS animations and small transitions

## 📸 Screenshots
> Replace with your own screenshots/GIFs.
- Home page (hero, categories, featured products)
- Product listing and product detail
- Cart page with quantity updates

## 🚀 Live Demo
- ![GitHub Pages](https://shaikhmujahid-7080.github.io/Dairy-Nearby)

## 📦 Getting Started

### Prerequisites
- Node.js 18+ and npm 9+

### Installation
```bash
# clone your repo
git clone https://github.com/ShaikhMujahid-7080/Dairy-Nearby
cd Dairy-Nearby

# install dependencies
npm install
```

### Development
```bash
npm run dev
# Local: http://localhost:5173/
```

### Production Build
```bash
npm run build
npm run preview
```

## 📁 Project Structure
```text
Dairy-Nearby/
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ Footer.jsx
│  │  ├─ Hero.jsx
│  │  ├─ Img.jsx           # resilient <img> (lazy + fallback)
│  │  └─ ProductCard.jsx
│  ├─ context/
│  │  └─ CartContext.jsx   # add/remove/update quantities
│  ├─ data/
│  │  └─ products.js
│  ├─ layouts/
│  │  └─ RootLayout.jsx
│  ├─ pages/
│  │  ├─ About.jsx
│  │  ├─ Careers.jsx
│  │  ├─ Cart.jsx
│  │  ├─ Contact.jsx
│  │  ├─ Delivery.jsx
│  │  ├─ FAQ.jsx
│  │  ├─ Home.jsx
│  │  ├─ NotFound.jsx
│  │  ├─ ProductDetail.jsx
│  │  └─ Products.jsx
│  ├─ App.jsx
│  ├─ index.css            # Tailwind v4 entry, theme, keyframes
│  └─ main.jsx
├─ index.html               # SEO tags + Poppins font
├─ postcss.config.js        # uses @tailwindcss/postcss
├─ package.json
└─ vite.config.js
```

## 🔤 Design System
- Font: Poppins (400/500/600/700)
- Brand color: `#0ea5e9` with variants
- Spacing: Tailwind defaults with consistent container padding
- Components: cards, chips, buttons, forms (using `@tailwindcss/forms`)

### Tailwind CSS v4 Setup Notes
- Tailwind v4 uses a single `@import "tailwindcss";` entry in `src/index.css`
- Custom theme variables and keyframes defined inside `@theme {}`
- Plugins enabled via `@plugin` directives in CSS
- PostCSS config uses `@tailwindcss/postcss`

Example from `src/index.css`:
```css
@import "tailwindcss";

@theme {
  --font-sans: "Poppins", Inter, ui-sans-serif, system-ui;
  --color-brand: #0ea5e9;
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(6px); }
    to { opacity: 1; transform: translateY(0); }
  }
}

@plugin "@tailwindcss/forms";
@plugin "@tailwindcss/typography";
@plugin "@tailwindcss/container-queries";
```

## 🔗 Routing
- `/` Home
- `/products` Product listing
- `/products/:id` Product detail
- `/cart` Cart
- `/about`, `/delivery`, `/sustainability`, `/faq`, `/careers`, `/contact`
- `*` NotFound

## 🛒 Cart Behavior
- Add items from cards or product detail
- Update quantities and remove items in the cart
- Subtotal auto‑updates; checkout button placeholder for future integration

## ♿ Accessibility
- Semantic HTML and focusable interactive elements
- Sufficient contrast and focus styles
- Keyboard‑friendly navigation and forms

## ⚡ Performance
- Vite dev server + optimized production build
- Lazy‑loaded, optimized images with fallback
- Minimal JS where possible; CSS transitions/animations for polish

## 🧭 Roadmap Ideas
- Authentication and user accounts
- Real payment integration (Stripe)
- Order history and subscriptions
- CMS integration for products and content

## 🤝 Contributing
PRs are welcome! If you’d like to propose a change:
1. Fork the repo
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit changes: `git commit -m "feat: add your feature"`
4. Push and open a PR

## 📄 License
MIT — see `LICENSE` (add one if you haven’t yet).

## 💙 Acknowledgements
- Images courtesy of Unsplash photographers
- Icons by `lucide-react`
- Built with React, Vite, and Tailwind CSS v4
