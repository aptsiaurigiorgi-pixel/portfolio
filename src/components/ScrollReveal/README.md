# Scroll Reveal System - Fog/Darkness Emergence

A sophisticated scroll-linked animation system that creates a "fog emerging" effect where content progressively reveals from a blurred, darkened state as the user scrolls.

## Features

- **Smooth scrubbed animations** with GSAP ScrollTrigger
- **Multiple reveal variants** for different content types
- **Performance optimized** with GPU acceleration and `will-change`
- **Mobile-friendly** with reduced effects on smaller screens
- **Accessibility support** with `prefers-reduced-motion` media query
- **Japanese-inspired PageLoader** with elegant character animations

## Components

### 1. SectionReveal

Wraps entire sections to reveal them from fog/darkness as they enter the viewport.

```jsx
import { SectionReveal } from "./components/ScrollReveal/ScrollReveal";

<SectionReveal
  blurStart={25} // Initial blur in px (default: 25)
  blurEnd={0} // Final blur in px (default: 0)
  opacityStart={0.4} // Initial opacity (default: 0.4)
  opacityEnd={1} // Final opacity (default: 1)
  brightnessStart={0.5} // Initial brightness (default: 0.5)
  brightnessEnd={1} // Final brightness (default: 1)
  start="top 90%" // Animation start trigger
  end="top 40%" // Animation end trigger
  scrub={true} // Smooth scroll-linked animation
  fogGradient={true} // Enable fog overlay
  overlay={true} // Show darkness overlay
>
  <YourSectionContent />
</SectionReveal>;
```

### 2. ContentReveal

For revealing content within sections with staggered child animations.

```jsx
import { ContentReveal } from "./components/ScrollReveal/ScrollReveal";

<ContentReveal
  blurStart={15}
  blurEnd={0}
  opacityStart={0.6}
  opacityEnd={1}
  yStart={40} // Initial Y offset for children
  yEnd={0} // Final Y offset
  stagger={0.1} // Stagger delay between children
  childClassName="reveal-child" // Class for staggered children
>
  <div className="reveal-child">Item 1</div>
  <div className="reveal-child">Item 2</div>
  <div className="reveal-child">Item 3</div>
</ContentReveal>;
```

### 3. ImageReveal

Specialized for images with vignette effect and scale animation.

```jsx
import { ImageReveal } from "./components/ScrollReveal/ScrollReveal";

<ImageReveal
  src="/path/to/image.jpg"
  alt="Description"
  blurStart={30}
  blurEnd={0}
  scaleStart={1.1} // Initial scale
  scaleEnd={1} // Final scale
  vignette={true} // Enable vignette overlay
/>;
```

### 4. TextReveal

Staggered text animation with character or word splitting.

```jsx
import { TextReveal } from "./components/ScrollReveal/ScrollReveal";

// Word by word
<TextReveal splitBy="words" stagger={0.05}>
  This text reveals word by word
</TextReveal>

// Character by character
<TextReveal splitBy="chars" stagger={0.02}>
  Character animation
</TextReveal>
```

### 5. useBlurReveal Hook

For custom implementations using the blur reveal logic.

```jsx
import { useBlurReveal } from "./components/ScrollReveal/ScrollReveal";

const MyComponent = () => {
  const ref = useBlurReveal({
    blurStart: 20,
    blurEnd: 0,
    opacityStart: 0.5,
    opacityEnd: 1,
    start: "top 85%",
    end: "top 35%",
  });

  return <div ref={ref}>Content</div>;
};
```

## PageLoader

Japanese-inspired loading animation that mirrors the scroll reveal effect.

```jsx
import PageLoader from "./components/PageLoader/PageLoader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <PageLoader onComplete={() => setIsLoading(false)} />}
      {/* Your app content */}
    </>
  );
}
```

## Integration Examples

### Basic Section Integration

```jsx
// About.jsx
import { SectionReveal } from "../ScrollReveal/ScrollReveal";

const About = () => (
  <SectionReveal
    id="about"
    className="about section-dark"
    blurStart={25}
    blurEnd={0}
    opacityStart={0.4}
    opacityEnd={1}
    start="top 90%"
    end="top 40%"
    fogGradient={true}
  >
    <div className="about-container">{/* Section content */}</div>
  </SectionReveal>
);
```

### Staggered Content Integration

```jsx
// Projects.jsx
import { SectionReveal, ContentReveal } from "../ScrollReveal/ScrollReveal";

const Projects = () => (
  <SectionReveal id="work" blurStart={20} opacityStart={0.5} fogGradient={true}>
    <ContentReveal stagger={0.1} childClassName="project-card">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          {/* Project content */}
        </div>
      ))}
    </ContentReveal>
  </SectionReveal>
);
```

## CSS Classes

### Utility Classes

- `.scroll-reveal` - Base reveal container
- `.scroll-reveal-section` - Section-level reveal
- `.scroll-reveal-fog` - Fog gradient overlay
- `.scroll-reveal-vignette` - Radial vignette effect
- `.reveal-child` - Child element for stagger

### Performance Classes

- `.no-reveal` - Disable reveal effect
- `.reveal-fast` - Faster animation
- `.reveal-slow` - Slower animation

## Performance Tips

1. **Use `will-change` sparingly** - Already applied to animated elements
2. **Limit blur values** - Higher blur = more GPU load
3. **Use `contain: paint`** - Applied automatically where supported
4. **Reduce on mobile** - Effects automatically reduce on smaller screens
5. **Respect user preferences** - Automatically respects `prefers-reduced-motion`

## Browser Support

- Chrome/Edge 80+
- Firefox 75+
- Safari 13.1+
- iOS Safari 13.4+

## Accessibility

The system automatically:

- Disables animations when `prefers-reduced-motion: reduce` is set
- Maintains content visibility even without animations
- Uses semantic HTML structure
- Supports keyboard navigation
