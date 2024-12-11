const header = document.getElementById('main-header');

// Create mobile search overlay
const mobileSearchOverlay = document.createElement('div');
mobileSearchOverlay.className = 'mobile-search-overlay';
mobileSearchOverlay.innerHTML = `
    <form class="mobile-search-form">
        <input type="search" placeholder="Search news..." autocomplete="off">
        <button type="button" class="close-search">✕</button>
    </form>
`;
document.body.appendChild(mobileSearchOverlay);

header.innerHTML = `
    <div class="header-top">
        <div class="logo">
            <a href="/">CZUNews</a>
        </div>
        <div class="mobile-controls">
            <button class="search-toggle">🔍</button>
            <button class="hamburger-menu">☰</button>
        </div>
        <form class="search-form">
            <input type="search" placeholder="Search news...">
            <button type="submit">Search</button>
        </form>
    </div>
    <nav class="main-nav">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/category.html?category=technology">Technology</a></li>
            <li><a href="/category.html?category=science">Science</a></li>
            <li><a href="/category.html?category=business">Business</a></li>
            <li><a href="/voting.html">Election Results</a></li>
            <li><a href="/subscription.html">Subscribe</a></li>
            <li><a href="/about.html">About Us</a></li>
        </ul>
    </nav>
    <div class="menu-overlay"></div>
`;

// Mobile menu functionality
const hamburgerMenu = header.querySelector('.hamburger-menu');
const mainNav = header.querySelector('.main-nav');
const menuOverlay = header.querySelector('.menu-overlay');
const searchToggle = header.querySelector('.search-toggle');
const searchForm = header.querySelector('.search-form');
const mobileSearchForm = mobileSearchOverlay.querySelector('.mobile-search-form');
const closeSearchButton = mobileSearchOverlay.querySelector('.close-search');

// Toggle mobile menu
hamburgerMenu.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking overlay
menuOverlay.addEventListener('click', () => {
    mainNav.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
});

// Toggle search form
searchToggle.addEventListener('click', () => {
    mobileSearchOverlay.classList.add('active');
    const searchInput = mobileSearchOverlay.querySelector('input');
    searchInput.focus();
    document.body.style.overflow = 'hidden';
});

// Close search when clicking close button
closeSearchButton.addEventListener('click', () => {
    mobileSearchOverlay.classList.remove('active');
    document.body.style.overflow = '';
});

// Handle search for both desktop and mobile
[searchForm, mobileSearchForm].forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = e.target.querySelector('input').value;
        if (query.trim()) {
            window.location.href = `/search.html?q=${encodeURIComponent(query)}`;
        }
    });
});

// Close menu and search when clicking links
mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close search when pressing Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        mobileSearchOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
});