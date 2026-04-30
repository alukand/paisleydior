# Paisley Dior Hair — Website

A modern, responsive single-page website for hairstylist Paisley Dior. Built with vanilla HTML, CSS, and JavaScript — no frameworks or build tools required.

## Structure

```
├── index.html          # Main page
├── css/
│   └── styles.css      # All styles (design tokens, layout, responsive)
├── js/
│   └── main.js         # Interactivity (nav, carousel, scroll animations)
├── images/             # Place your images here
└── README.md
```

## Features

- **Responsive design** — works on mobile, tablet, and desktop
- **Smooth scroll navigation** with sticky header that adapts on scroll
- **Testimonials carousel** with autoplay, swipe support, and dot indicators
- **Scroll-triggered animations** for service cards
- **Mobile hamburger menu** with full-screen overlay
- **Contact form** (front-end only — connect to your backend or service)
- **Accessible** — semantic HTML, ARIA labels, focus states

## Color Palette

| Token           | Hex       | Usage                              |
|-----------------|-----------|------------------------------------|
| Dark Espresso   | `#2c2420` | Nav (scrolled), footer, dark text  |
| Champagne       | `#d4b896` | Primary accent, buttons, highlights|
| Blush Nude      | `#e8d5c4` | Secondary backgrounds, card hovers |
| Warm White      | `#f7f2ed` | Main background, card backgrounds  |
| Muted Gold      | `#b09070` | Eyebrow text, subtle accents       |

## Adding Your Content

### Images
Place your images in the `images/` folder and update the `src` attributes in `index.html`. Look for `<div class="image-placeholder">` elements — replace those with `<img>` tags.

### Copy
All text content is in `index.html`. Search for placeholder text like "Your Address Here" or "Your Photo Here" and replace with your own.

### Contact Form
The form currently shows a success message client-side. To make it functional, connect it to a service like Formspree, Netlify Forms, or your own backend.

## Running Locally

Open `index.html` in any browser — no build step needed. For local development with live reload:

```bash
npx serve .
```
