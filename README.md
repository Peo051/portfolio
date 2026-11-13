# Trần Dương Gia Bảo — Software Engineering Portfolio

Personal portfolio website built with **HTML5, modular CSS3, and ES Module Vanilla JavaScript** (hash-routed Single Page Application), designed for static hosting on **GitHub Pages** (`https://peo051.github.io/portfolio/`).

## 1. Architecture & Project Structure

```text
portfolio/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   ├── tokens.css          # Color, typography, spacing & motion tokens (Dark/Light)
    │   ├── base.css            # Reset, layout shell, typography & accessibility helpers
    │   ├── components.css      # Header, navigation, buttons, cards, footer & lightbox modal
    │   └── pages.css           # Page-specific responsive layouts
    ├── js/
    │   ├── app.js              # Hash router, theme/language state, View Transitions & handlers
    │   ├── components/
    │   │   ├── hero-canvas.js  # Theme-aware 2D interactive hero constellation canvas
    │   │   └── lightbox.js     # Accessible certificate/project gallery modal with crossfade
    │   ├── data/
    │   │   ├── i18n.js         # Bilingual UI copy (VI / EN)
    │   │   ├── projects.js     # 11 synchronized projects (6 Featured + 5 Explorer)
    │   │   ├── skills.js       # Domain-grouped technical skills
    │   │   ├── certifications.js # 17 Google/Coursera programs, 110 courses & 3 partner certs
    │   │   ├── achievements.js # HUIT academic awards, 4 HUIT S&T research topics & FAIR 2026 conference papers
    │   │   └── education.js    # Resume profile, 4 skill groups, education, work experience (Deep Pro & Tri Nghia Pharma) & CV projects
    │   ├── pages/              # Modular page renderers (home, projects, skills, certifications, etc.)
    │   └── utils/
    │       ├── dom.js          # HTML escaping & inline SVG icon helpers
    │       └── motion.js       # WAAPI choreography, 3D tilt, spotlights, timeline scroll & cleanup
    ├── documents/
    │   └── TranDuongGiaBao_ITIntern_CV.pdf
    └── img/
        ├── favicon.png
        ├── profile/avatar-main.png
        ├── projects/<slug>/    # cover.webp (1600x900), screen-*.webp, architecture.svg & architecture.mmd
        ├── achievements/       # HUIT award certificates & research visuals
        └── certificates/
            ├── coursera/
            │   ├── programs/   # 17 WebP program certificates
            │   └── courses/    # 110 WebP individual course certificates
            └── ...             # Non-Coursera partner/training certificates
```

## 2. Routes

- `#/` — Home (Hero, Highlights, Technical Expertise, Featured Projects, Featured Certifications, Achievements)
- `#/project` — Project Portfolio (6 Featured Showcase + 5 Project Explorer with search & category filters)
- `#/project/:slug` — Project Case Study Detail (10-section breakdown, Lightbox gallery & SVG architecture viewer)
- `#/skill` — Technical Skills by Engineering Domain
- `#/certifications` — Full Certification Library (Search, Domain Filters, Dynamic Stats, Interactive Sub-Course Modal)
- `#/achievement` — Academic Awards, 4 HUIT S&T Research Topics & FAIR 2026 Conference Presentations
- `#/education` — Education Overview
- `#/resume` — Two-Column Interactive Resume (Profile Sidebar + 01–07 Numbered Sections) & PDF Download
- `#/contact` — Contact Channels

## 3. Local Development & Verification

Serve statically from the repository root (required for ES modules):

```bash
python -m http.server 5500
```

Open `http://localhost:5500` in a browser.

## Synchronized Projects (11)

### Featured Showcase (6)
- `codesense-ai` — CodeSense AI — Adaptive C# OOP Programming Tutor
- `tram25h-coffee` — Trạm 25H — Multi-Branch Coffee E-Commerce & Web Platform
- `uniwallet` — UniWallet — Multi-Wallet Financial Platform (`https://uniwallet.site/`)
- `tri-nghia-pharma` — Tri Nghia Pharma — Zalo Mini App E-Commerce
- `greenbite-ai` — GreenBite AI — Surplus Food Rescue Platform
- `coffee-shop-management` — Coffee Shop Management System (WPF + SQL Server)

### Project Explorer (5)
- `yolov8-sign-language` — YOLOv8 Hand Sign Language Digit Detection
- `fake-news-detection` — Vietnamese Fake News Detection & Fact-Check Verifier
- `high-utility-itemset-mining` — HUI-Miner & CLH-Miner — High-Utility Itemset Mining Suite
- `calculator-wpf` — Modern WPF Calculator (.NET 8 MVVM)
- `parking-dsa` — Smart Parking Lot Management System (C++ DSA)
