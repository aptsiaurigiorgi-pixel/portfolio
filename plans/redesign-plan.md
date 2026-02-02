# Portfolio Redesign Plan - Matching mason-wong.com

## Reference Site Analysis (mason-wong.com)

### Key Design Elements Observed:

1. **Dark Theme**: Pure black (#0a0a0a) background with cream/beige accents
2. **Typography**: Bold, condensed sans-serif for headings, monospace for body
3. **Vertical Chinese Characters**: Gold/bracketed vertical text as decorative elements
4. **Custom Cursor**: Custom cursor that changes on hover
5. **Large Hero Typography**: Massive letters spanning full width
6. **Section Dividers**: Horizontal lines with centered Chinese characters
7. **Parallax Images**: Full-width images with overlay text
8. **Film Grain**: Subtle noise texture overlay
9. **Smooth Scroll**: Fluid scroll animations between sections
10. **Minimal Navigation**: Clean nav with bracketed year [2026]

### Color Palette:

- Background Primary: #0a0a0a (near black)
- Background Secondary: #e8e4dc (warm cream/beige)
- Text Primary: #f5f5f0 (off-white)
- Accent: #b8a070 (muted gold)
- Text Muted: #666666

### Typography:

- Headings: Bold, uppercase, condensed
- Body: Monospace or clean sans-serif
- Chinese: Serif, gold color, vertical orientation

---

## Implementation Plan

### Phase 1: Core Setup & Global Styles

1. **Update CSS Variables** - Match exact colors from reference
2. **Add Custom Cursor Component** - Circle cursor that expands on hover
3. **Film Grain Overlay** - CSS noise animation
4. **Global Animations** - Page load, scroll behaviors

### Phase 2: Navigation

1. **Minimal Header** - Logo left, nav center, year right
2. **Active State** - Square indicator for current section
3. **Smooth Scroll** - Navigation links with smooth scroll

### Phase 3: Hero Section

1. **Massive Typography** - "GIO" letters spanning full width
2. **Vertical Text** - Georgian text or decorative brackets between letters
3. **Animated Headline** - "GIO IS THE FOLIO OF GIORGI [DEV] AFCI AURI"
4. **Tagline** - "Frontend Developer | React" with cursive "and"
5. **Role Info** - "Frontend Developer / Based in Tbilisi, Georgia"
6. **Bio Text** - Short description paragraph
7. **Footer Bar** - "[NICE TO MEET YOU] [SCROLL ↓ DOWN] [GEORGIAN TEXT]"

### Phase 4: Featured Projects Section

1. **Section Header** - "FEATURED 作品 PROJECTS" with vertical Chinese/Georgian
2. **Project Cards** - 4-5 cards with:
   - Large image
   - Title
   - 1-sentence description
   - Tech tags
   - GitHub/Live buttons
3. **Projects to Include**:
   - Animated Landing Page
   - Task Manager App
   - 3D Product Showcase
   - Personal Blog Starter
   - E-commerce UI Clone

### Phase 5: About Section (INFO)

1. **Section Header** - "IN 簡介 FO" with vertical text
2. **Full-width Image** - Parallax effect with overlay
3. **Overlay Text** - "A [CROSS-CULTURAL] PERSPECTIVE..."
4. **Bio Content** - Full bio text with "Read My Story" button

### Phase 6: Skills Section (技術)

1. **Section Header** - Horizontal lines with "技術" in center
2. **Left Side** - Image with text overlay
3. **Right Side** - Skills list with horizontal dividers:
   - React
   - Next.js
   - TypeScript
   - Tailwind CSS
   - JavaScript
   - Framer Motion
   - Git
   - Responsive Design
   - HTML/CSS
   - Animations
   - Performance

### Phase 7: Footer

1. **Background Image** - Full width with dark overlay
2. **Top Bar** - "[GIO] [COPYRIGHT 2026]"
3. **Main Content** - "COME SAY HELLO" with vertical text
4. **Music Widget** - "[CURRENTLY ON REPEAT]" album art placeholder
5. **Social Links** - LinkedIn →, GitHub →, Instagram →
6. **Scroll to Top** - Up arrow button

---

## Animation Specifications

### Page Load Sequence:

1. Background fade in (0ms)
2. Navigation slide down (200ms delay)
3. Hero letters stagger in (400ms delay, 150ms stagger)
4. Vertical text fade in (1200ms delay)
5. Content fade up (1400ms delay)
6. Info section fade in (1800ms delay)

### Scroll Animations:

1. **Parallax Images** - Slower scroll rate than content
2. **Section Headers** - Fade up when entering viewport
3. **Project Cards** - Stagger fade up
4. **Skill Items** - Line draw + text fade
5. **Text Reveal** - Clip-path or mask reveal

### Hover Effects:

1. **Custom Cursor** - Expand on interactive elements
2. **Navigation Links** - Underline or highlight
3. **Project Cards** - Scale image, show overlay
4. **Buttons** - Background fill animation
5. **Social Links** - Arrow movement

### Continuous Animations:

1. **Film Grain** - Subtle noise movement
2. **Scroll Indicator** - Bouncing arrow
3. **Background Elements** - Subtle float

---

## Component Structure

```
src/
├── components/
│   ├── Navigation/
│   │   ├── Navigation.jsx
│   │   └── Navigation.css
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   └── Hero.css
│   ├── Projects/
│   │   ├── Projects.jsx
│   │   └── Projects.css
│   ├── About/
│   │   ├── About.jsx
│   │   └── About.css
│   ├── Skills/
│   │   ├── Skills.jsx
│   │   └── Skills.css
│   ├── Footer/
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   └── CustomCursor/
│       ├── CustomCursor.jsx
│       └── CustomCursor.css
├── hooks/
│   └── useMousePosition.js
├── App.js
├── App.css
└── index.css
```

---

## Personal Information (EXACT - DO NOT MODIFY)

- **Full display name**: Giorgi Afciauri
- **Age/location**: 19 • Tbilisi, Georgia
- **Headline/tagline**: "Frontend Developer | React"
- **Short bio**: "19-year-old frontend enthusiast from Tbilisi building clean, fast, and interactive web experiences. Obsessed with React, smooth animations, pixel-perfect UIs, and dark themes. Currently learning more advanced patterns and open to cool projects, collabs, or remote opportunities"
- **Skills**: React, Next.js, TypeScript, Tailwind CSS, JavaScript, Framer Motion, Git, Responsive Design, HTML/CSS, Animations, Performance
- **Projects**:
  1. Animated Landing Page – Smooth scroll animations and interactive hero section for a creative agency
  2. Task Manager App – React + TypeScript todo app with drag & drop and dark mode
  3. 3D Product Showcase – Interactive 3D model viewer using React Three Fiber basics
  4. Personal Blog Starter – Next.js MDX blog with syntax highlighting and SEO
  5. E-commerce UI Clone – Responsive product grid + cart with Tailwind & Framer Motion hovers
