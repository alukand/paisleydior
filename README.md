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

| Token         | Hex       | Usage                     |
|---------------|-----------|---------------------------|
| Sage          | `#8A9A7B` | Primary / accents         |
| Sage Light    | `#B5C4A8` | Borders, subtle elements  |
| Sage Dark     | `#5E6E52` | Hover states              |
| Cream         | `#FAF6F0` | Page background           |
| Rose Gold     | `#C4A882` | Warm accents, stars       |
| Charcoal      | `#2C2C2C` | Headings, footer          |

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
