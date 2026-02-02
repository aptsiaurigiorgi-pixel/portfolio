# Portfolio Website Architecture Plan

## Project Overview

A modern, minimalist portfolio website for Giorgi (GIO) - a Frontend Developer from Tbilisi, Georgia. The design takes heavy inspiration from mason-wong.com with bilingual text (English + Georgian), bold typography, and sophisticated editorial layout.

## Content Mapping (Based on User's Info)

### Personal Details

- **Name**: GIORGI [GIO] / გიორგი
- **Title**: FRONTEND DEVELOPER
- **Location**: BASED IN TBILISI, GEORGIA
- **Email**: afciaurigiorgi046@gmail.com
- **Phone**: +995 568 130 260

### Bio/Intro

"I partner with startups and established brands to create digital experiences that blend aesthetics with functionality. All projects crafted with clean code, responsive design, and user-friendly interfaces."

### Cultural Background

"A [cross-cultural] perspective shaped by Georgian heritage and European design influences"

### Design Philosophy

"A development approach led by curiosity, precision, and empathy. All digital experiences created are crafted to be intuitive, meaningful, and quietly delightful."

### Interests

"Frontend Developer, Photographer and Vintage Car Enthusiast"

### Social Links

- LinkedIn: https://www.linkedin.com/in/giorgi-afciauri-a2623b398/
- Instagram: https://www.instagram.com/afciaurigio_/
- GitHub: https://github.com/aptsiaurigiorgi-pixel

### Projects to Feature

1. **Space Tourism Website** (spacetourism-gules.vercel.app) - Multi-page space travel booking experience
2. **Additional Project** - Responsive web application (placeholder for future)

### Services/Expertise

- FRONTEND DEVELOPMENT
- RESPONSIVE WEB DESIGN
- UI IMPLEMENTATION
- ANGULARJS DEVELOPMENT
- WORDPRESS CUSTOMIZATION
- GIT & VERSION CONTROL

---

## Technical Architecture

### Tech Stack

- **Framework**: React 19 with functional components
- **Styling**: CSS Modules / Styled Components
- **Animation**: Framer Motion (already in package.json)
- **Scroll**: react-scroll (already in package.json)
- **Icons**: Lucide React or similar
- **Fonts**:
  - Primary: Inter or similar bold sans-serif
  - Accent: Playfair Display (for italic/script text)
  - Georgian: Noto Sans Georgian

### Color Palette

- **Background Primary**: #0a0a0a (near black)
- **Background Secondary**: #f5f5f0 (warm off-white)
- **Text Primary**: #ffffff (white on dark)
- **Text Secondary**: #1a1a1a (dark on light)
- **Accent**: #c4a35a (muted gold for Chinese/Georgian characters)
- **Muted Text**: #888888

### Typography Scale

- **Hero**: 120px+ (massive display text)
- **Section Headers**: 48-64px
- **Subheaders**: 24-32px
- **Body**: 16-18px
- **Small/Captions**: 12-14px

---

## Component Structure

```
src/
├── components/
│   ├── Navigation/
│   │   ├── Navigation.jsx
│   │   ├── Navigation.css
│   │   └── MobileMenu.jsx
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   └── AnimatedText.jsx
│   ├── FeaturedProjects/
│   │   ├── FeaturedProjects.jsx
│   │   ├── FeaturedProjects.css
│   │   └── ProjectCard.jsx
│   ├── About/
│   │   ├── About.jsx
│   │   └── About.css
│   ├── Services/
│   │   ├── Services.jsx
│   │   ├── Services.css
│   │   └── Ticker.jsx
│   └── Footer/
│       ├── Footer.jsx
│       └── Footer.css
├── hooks/
│   ├── useScrollAnimation.js
│   └── useInView.js
├── utils/
│   └── constants.js
├── App.jsx
├── App.css
└── index.css
```

---

## Section Specifications

### 1. Navigation

**Layout**: Fixed header, full-width
**Elements**:

- Logo: "GIO" (left)
- Nav links: HOME, WORK, ON THE SIDE, INFO (center-right)
- Year selector: [2026] (right)
- Mobile: Hamburger menu

**Styles**:

- Background: Transparent → blur on scroll
- Font: 12px uppercase, letter-spacing: 0.1em
- Active link: Bullet point indicator

### 2. Hero Section

**Layout**: Full viewport height, centered content
**Elements**:

- Massive "GIO" typography with vertical Georgian text "გიორგი"
- Headline: "GIO is the folio of giorgi [afciauri] ↓"
- Subheadline: "frontend developer, photographer and vintage car enthusiast"
- Role tag: "FRONTEND DEVELOPER BASED IN TBILISI, GEORGIA"
- Intro paragraph
- CTAs: "[NICE TO MEET YOU]" / "[SCROLL DOWN]" / Georgian text

**Animations**:

- Staggered text reveal on load
- Subtle parallax on scroll
- Arrow bounce animation

### 3. Featured Projects

**Layout**: Light background section
**Header**: "FEATURED [PROJECTS]" with vertical Georgian "პროექტები"
**Grid**: 2-column layout
**Project Cards**:

- Large image
- Title (uppercase)
- Category tag
- Hover: Scale image, show overlay

**CTA**: "VIEW ALL WORK" button

### 4. About/Info Section

**Layout**: Dark background, full-width image
**Header**: "IN[FO]" with vertical Georgian "ინფო"
**Image**: Portrait/feature photo with overlay
**Text Overlay**:

- "A [cross-cultural] perspective shaped by Georgian heritage and European design influences"
- "A development approach led by curiosity, precision, and empathy..."
- "Quietly powerful Digital Experiences"

**CTA**: "READ MY STORY" button

### 5. Services/Expertise

**Layout**: Dark background, two columns
**Left**: Image + "Quietly powerful Digital Experiences" text
**Right**: Scrolling ticker of services
**Services List**:

- FRONTEND DEVELOPMENT
- RESPONSIVE WEB DESIGN
- UI IMPLEMENTATION
- ANGULARJS DEVELOPMENT
- WORDPRESS CUSTOMIZATION
- GIT & VERSION CONTROL

**Footer Note**: "[FUELED BY CURIOSITY, SHAPED BY INSIGHT]"

### 6. Footer

**Layout**: Dark with background image
**Header**: "COME say HELLO [HELLO]" with Georgian "გამარჯობა"
**Elements**:

- "Currently on repeat" music widget (placeholder)
- Social links: LINKEDIN →, INSTAGRAM →, GITHUB →
- Back to top arrow
- Copyright: "[GIO] [COPYRIGHT 2026]"

---

## Animation Specifications

### Page Load

1. Navigation fades in (0.3s delay)
2. Hero letters stagger in from bottom (0.5s each)
3. Georgian text slides in from top
4. Supporting text fades in (1s delay)

### Scroll Animations

- Sections fade in + translate Y when entering viewport
- Parallax on hero background
- Project cards scale up slightly on scroll into view

### Hover Effects

- Nav links: Opacity change + bullet indicator
- Project cards: Image scale 1.05, overlay appears
- Buttons: Background fill animation
- Social links: Arrow moves right

### Continuous Animations

- Services ticker: Infinite horizontal scroll (20s loop)
- Scroll indicator: Bouncing arrow

---

## Responsive Breakpoints

- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 1199px (adjusted typography, 2-col → 1-col where needed)
- **Mobile**: < 768px (single column, hamburger menu, stacked layout)

### Mobile Adaptations

- Hero text: 48px (down from 120px)
- Navigation: Hamburger menu
- Project grid: Single column
- Services: Stacked layout
- Footer: Centered content

---

## Georgian Text Integration

### Characters to Use

- გიორგი (Giorgi - name)
- პროექტები (Projects)
- ინფო (Info)
- გამარჯობა (Hello)
- ტექნიკა (Technique/Skills)
- ნახვა (View/See)

### Placement

- Vertical text between English headers
- Smaller font size (14-18px)
- Gold/accent color (#c4a35a)
- Writing mode: vertical-rl

---

## Performance Considerations

1. **Images**: Use WebP format, lazy loading
2. **Fonts**: Preload critical fonts, use font-display: swap
3. **Animations**: Use transform/opacity only, add will-change
4. **Code Splitting**: Lazy load below-fold sections
5. **Accessibility**: Proper heading hierarchy, alt text, focus states

---

## Implementation Order

1. Set up global styles, fonts, CSS variables
2. Build Navigation component
3. Build Hero section with animations
4. Build Featured Projects section
5. Build About section
6. Build Services section with ticker
7. Build Footer
8. Add scroll animations
9. Implement responsive design
10. Polish and optimize
