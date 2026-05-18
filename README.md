# Ultra Tax Services

> Modern, bilingual website for a professional tax and credit services business in Las Vegas, NV.

[![Tech Stack](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Responsive-Design-4A90D9?style=for-the-badge)]()
[![Bilingual](https://img.shields.io/badge/Language-English%20%7C%20Español-4A90D9?style=for-the-badge)]()

---

## 🌟 Overview

Ultra Tax Services is a fully responsive, bilingual website built for a local Las Vegas business specializing in tax preparation, credit repair, and business financial services. The site features a modern design with smooth animations, bilingual content (English/Spanish), and strategic call-to-action elements to drive customer engagement.

### Key Highlights
- 📱 **Fully Responsive** — Optimized for desktop, tablet, and mobile devices
- 🌐 **Bilingual** — Seamless English/Español language switching with localStorage persistence
- 🎨 **Modern UI** — Professional gradient design with gold accents and smooth animations
- ⚡ **Fast Performance** — Pure HTML/CSS/JavaScript with zero heavy framework dependencies
- 🔔 **Conversion-Focused** — Strategic CTA buttons including "Call Now" and "Book Now"

---

## 🎯 Features

### Core Functionality
| Feature | Description |
|---------|-------------|
| **Language Switcher** | One-click toggle between English and Spanish with state persistence |
| **Mobile Navigation** | Hamburger menu with smooth animations |
| **Contact Form** | Validated form ready for backend integration |
| **CTA Buttons** | "Call Now" (`tel:`) and "Book Now" buttons for conversions |
| **Blog Integration** | News section with external article links |
| **Newsletter Signup** | Email subscription form |

### Pages
1. **Home** — Hero section, service preview, company story, testimonials
2. **Services** — Detailed service cards (Tax Preparation, Credit Repair, Business Services)
3. **About** — Company history, mission, values, team information
4. **Contact** — Contact form, business information, FAQ section
5. **Blog** — Tax news and financial tips articles

---

## 🎨 Design System

### Color Palette
```css
Primary:    #1e3a5f (Dark Blue)
Secondary:  #2c5f8a (Blue)
Accent:     #4a90d9 (Light Blue)
Gold:       #d4af37 (Gold — premium accents)
Danger:     #dc2626 (Red — urgent CTAs)
```

### Typography
```css
Headings:   'Poppins', sans-serif
Body:       'Open Sans', sans-serif
```

### Design Philosophy
- **Trust & Professionalism** — Navy blue conveys stability and expertise
- **Premium Feel** — Gold accents create a sense of quality
- **Urgency** — Red used strategically for immediate action buttons
- **Accessibility** — High contrast text for readability

---

## 🚀 Quick Start

### Prerequisites
Any modern web browser. No build tools required.

### Running Locally

**Option 1: Direct browser open**
```bash
# Simply open index.html in your browser
open index.html          # macOS
xdg-open index.html      # Linux
start index.html         # Windows
```

**Option 2: Local server (recommended)**
```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js
npx http-server -p 8000
```

Then navigate to `http://localhost:8000`

---

## 📐 Project Structure

```
ultratax/
├── index.html              # Home page
├── services.html           # Services detailed page
├── about.html              # About company page
├── contact.html            # Contact & FAQ page
├── blog.html               # Blog/news page
├── css/
│   └── style.css          # Main stylesheet (~2KB minified)
├── js/
│   └── main.js            # Language switcher & interactions
├── images/
│   ├── logo.png           # Company logo
│   ├── hero*.avif         # Hero section images
│   └── 00*.png            # Team member photos
├── fonts/                  # Custom font files (if any)
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

---

## 🔧 Technical Details

### Technologies Used
- **HTML5** — Semantic markup for accessibility and SEO
- **CSS3** — Custom properties (CSS variables), Flexbox, Grid, animations
- **JavaScript (ES6+)** — Language switching, mobile menu, scroll animations
- **Google Fonts** — Poppins and Open Sans

### CSS Architecture
```css
:root {
  --primary-color: #1e3a5f;
  --secondary-color: #2c5f8a;
  --accent-color: #4a90d9;
  --gold-color: #d4af37;
  /* ... */
}
```

### Responsive Breakpoints
```css
Mobile:     < 480px
Tablet:     480px - 768px
Desktop:    768px - 1024px
Large:      > 1024px
```

### Bilingual Implementation
All text elements use data attributes for language switching:
```html
<h1 data-en="Welcome" data-es="Bienvenido">Welcome</h1>
```

JavaScript handles language toggling with localStorage persistence.

---

## 📊 Performance Metrics

| Metric | Target | Implementation |
|--------|--------|----------------|
| First Contentful Paint | < 1s | Minimal CSS/JS, optimized images |
| Time to Interactive | < 2s | No blocking resources |
| Cumulative Layout Shift | < 0.1 | Fixed image dimensions |
| Accessibility Score | 90+ | Semantic HTML, ARIA labels |

---

## 🛠️ Customization Guide

### Changing Brand Colors
Edit `css/style.css`:
```css
:root {
  --primary-color: #YOUR_COLOR;
  --secondary-color: #YOUR_COLOR;
  --accent-color: #YOUR_COLOR;
}
```

### Adding New Language
1. Add `data-XX` attributes to text elements
2. Update `js/main.js` with new language object
3. Add language button to header

### Replacing Images
```
images/logo.png     → 200×50px PNG (transparent)
images/hero*.avif   → 1920×1080px AVIF/JPG
images/00*.png      → 400×500px PNG (team photos)
```

---

## 📱 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest 2 | ✅ Full |
| Firefox | Latest 2 | ✅ Full |
| Safari | Latest 2 | ✅ Full |
| Edge | Latest 2 | ✅ Full |
| Mobile Safari | iOS 12+ | ✅ Full |
| Chrome Mobile | Android 6+ | ✅ Full |

---

## 🤝 Contributing

This is a sample portfolio project. Feel free to use it as a template or reference for your own projects!

---

## 📄 License

© 2026 Ultra Tax Services. All rights reserved.

---

## 📬 Connect

**Project Created by:** [Ashanya20](https://github.com/Ashanya20)

**Demo Contact:**
- 📧 Email: info@ultrataxservices.com
- 📞 Phone: (702) 735-0222
- 📍 Location: Las Vegas, NV

---

<p align="center">
  Built with ❤️ using pure HTML, CSS, and JavaScript
</p>