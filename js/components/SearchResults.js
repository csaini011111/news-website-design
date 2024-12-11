export function renderSearchResults(query, results) {
    return `
        <div class="search-results">
            <h2>Search Results for "${query}"</h2>
            <div class="results-count">Found ${results.length} results</div>
            <div class="articles-grid">
                ${results.map(article => `
                    <article class="article-card">
                        <img src="${article.urlToImage}" alt="${article.title}">
                        <div class="content">
                            <h3><a href="/article.html?id=${encodeURIComponent(article.url)}">${article.title}</a></h3>
                            <p>${article.description}</p>
                            <div class="meta">
                                <span class="date">${new Date(article.publishedAt).toLocaleDateString()}</span>
                                <span class="author">${article.author}</span>
                            </div>
                        </div>
                    </article>
                `).join('')}
            </div>
        </div>
    `;
}