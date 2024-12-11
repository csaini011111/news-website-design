# Czech University of Life Sciences Prague
## Faculty of Economics and Management
## Department of Information Technologies

# Project Documentation - Web Design
## CZUNews

### Authors
- Chirag
- Sai
- Anbscd

© 2024

## Table of Contents
1. [Introduction](#1-introduction)
2. [Implementation Requirements](#2-implementation-requirements)
3. [Leveraging Generative AI](#3-leveraging-generative-ai)
4. [Meet Project Requirements](#4-meet-project-requirements)

## 1. Introduction

CZUNews is an innovative news platform that presents news from the year 2070, created as a student project for the Web Design course at Czech University of Life Sciences Prague. The website combines futuristic content with modern web design principles to deliver an engaging user experience.

Our platform features a comprehensive news ecosystem with categories including Technology, Science, and Business, each presenting forward-looking articles that imagine the world of 2070. The website includes features such as article recommendations, user comments, social sharing, and a premium subscription model.

The design emphasizes usability and accessibility, with a responsive layout that works seamlessly across all devices. We've implemented modern UI elements like glass-morphism and gradient effects while maintaining readability and navigation clarity. The project demonstrates our understanding of contemporary web development practices while showcasing creative storytelling through a futuristic lens.

## 2. Implementation Requirements

### Homepage
![Homepage](screenshots/homepage.png)

The homepage features:
- Hero section with featured articles
- Latest news grid
- Most read section with distinct styling
- Category navigation
- Search functionality
- Responsive design for all screen sizes

Behavior:
- Dynamic content loading
- Smooth transitions between sections
- Interactive article cards with hover effects
- Search overlay for mobile devices

### Article Pages
![Article Detail](screenshots/article.png)

Features:
- Full article content with images
- Author information
- Related articles
- Social sharing buttons
- Comment section
- Reading time estimate
- Audio version toggle

Behavior:
- Lazy loading of images
- Progressive loading of content
- Dynamic comment submission
- Social share functionality
- Breadcrumb navigation

### Category Pages
![Category Page](screenshots/category.png)

Features:
- Category-specific article listings
- Category statistics
- Filtering options
- Category description
- Article count

Behavior:
- Dynamic article loading
- Filter application
- Sort functionality
- Responsive grid layout

### Search Results
![Search Results](screenshots/search.png)

Features:
- Search input with suggestions
- Results grid
- Filter options
- No results handling
- Search statistics

Behavior:
- Real-time search suggestions
- Dynamic results updating
- Filter application
- Mobile-optimized search interface

### Technology Stack

Frontend:
- HTML5/CSS3 for structure and styling
- Vanilla JavaScript for interactivity
- CSS Grid and Flexbox for layouts
- CSS Custom Properties for theming
- Mobile-first responsive design

Backend (Proposed):
- Node.js with Express for API
- MongoDB for content management
- Redis for caching
- JWT for authentication
- AWS S3 for media storage

Production Environment:
- Hosting: AWS or Netlify
- CDN: Cloudflare
- SSL: Let's Encrypt
- Analytics: Google Analytics
- Monitoring: New Relic

Maintenance:
- Automated testing with Jest
- CI/CD with GitHub Actions
- Regular security audits
- Performance monitoring
- Content backup strategy

Marketing:
- SEO optimization
- Social media integration
- Newsletter campaigns
- Content partnerships
- Analytics-driven improvements

## 3. Leveraging Generative AI

### Tools Used
1. GitHub Copilot
   - Code completion
   - Documentation generation
   - Bug fixing suggestions

2. ChatGPT
   - Content generation
   - Design patterns
   - Problem-solving assistance

### Benefits and Limitations

Benefits:
- Increased development speed
- Consistent code patterns
- Quick problem resolution
- Creative content ideas

Limitations:
- Need for code review
- Context understanding
- Security considerations
- Dependency on training data

### Critical Evaluation

Accuracy:
- 90% for code suggestions
- 75% for complex logic
- 95% for documentation
- 85% for content generation

Reliability:
- High for standard patterns
- Medium for custom solutions
- High for documentation
- Variable for security-critical code

## 4. Meet Project Requirements

### Clickable Prototype
✅ Full-featured website
```html
<!-- Example of semantic HTML structure -->
<main id="main-content">
    <section class="hero">
        <h1>Breaking News from 2070</h1>
        <div class="featured-article"></div>
    </section>
</main>
```

✅ Responsive design
```css
/* Mobile-first approach */
.articles-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

@media (min-width: 768px) {
    .articles-grid {
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    }
}
```

### HTML/CSS Implementation
✅ Semantic elements
```html
<article class="article-card">
    <header>
        <h2>Article Title</h2>
    </header>
    <section class="content">
        <p>Article content...</p>
    </section>
    <footer>
        <time datetime="2070-03-15">March 15, 2070</time>
    </footer>
</article>
```

✅ CSS Grid Layout
```css
.featured-section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto;
    gap: 2rem;
}
```

### Accessibility
✅ WCAG Level AA Compliance
```html
<button 
    aria-label="Search articles"
    role="button"
    class="search-toggle">
    🔍
</button>
```

### Documentation
✅ Comprehensive documentation
- Project structure
- Implementation details
- Technology choices
- Accessibility features

### Additional Requirements
✅ Student project notice
```html
<footer>
    <p>© 2070 CZUNews. This is a student project created at Czech University of Life Sciences Prague.</p>
</footer>
```

✅ Functional links
```javascript
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', handleNavigation);
});
```