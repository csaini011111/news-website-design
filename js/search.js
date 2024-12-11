import { fetchNews } from './api.js';
import { getQueryParam } from './utils.js';
import { renderSearchResults } from './components/SearchResults.js';

async function initializeSearch() {
    const query = getQueryParam('q');
    if (!query) {
        showNoResults('Please enter a search term');
        return;
    }

    try {
        const results = await fetchNews('', query);
        const searchResultsContainer = document.getElementById('search-results');
        
        if (results.length === 0) {
            showNoResults(`No results found for "${query}"`);
            return;
        }

        searchResultsContainer.innerHTML = renderSearchResults(query, results);
        document.title = `Search: ${query} - CZUNews`;
    } catch (error) {
        console.error('Search error:', error);
        showNoResults('An error occurred while searching');
    }
}

function showNoResults(message) {
    document.getElementById('search-results').innerHTML = `
        <div class="no-results">
            <h3>${message}</h3>
            <p>Try adjusting your search terms or browse our categories</p>
            <div class="search-suggestions">
                <h3>Popular Searches</h3>
                <ul>
                    <li><a href="/search.html?q=quantum">Quantum Computing</a></li>
                    <li><a href="/search.html?q=mars">Mars Colony</a></li>
                    <li><a href="/search.html?q=ai">Artificial Intelligence</a></li>
                </ul>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', initializeSearch);