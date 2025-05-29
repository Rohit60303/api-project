document.addEventListener('DOMContentLoaded', function() 
{
    const API_KEY = '558eaf5433c0905394bdd759a900d1e0';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
    const categorySelector = document.getElementById('category-selector');
    const searchQuery = document.getElementById('search-query');
    const fetchBtn = document.getElementById('fetch-btn');
    const clearBtn = document.getElementById('clear-btn');
    const dataContainer = document.getElementById('data-container');
    const pagination = document.getElementById('pagination');
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    const pageInfo = document.getElementById('page-info');
    let currentPage = 1;
    let totalPages = 1;
    fetchBtn.addEventListener('click', function()
     {
        currentPage = 1;
        fetchMovies();
    });
    prevPageBtn.addEventListener('click', function() 
    {
        if (currentPage > 1) 
        {
            currentPage--;
            fetchMovies();
        }
    });
    nextPageBtn.addEventListener('click', function() 
    {
        if (currentPage < totalPages && currentPage < 2) 
        {
            currentPage++;
            fetchMovies();
        }
    });
    clearBtn.addEventListener('click', function()
    {
        dataContainer.innerHTML = '';
        pagination.style.display = 'none';
        currentPage = 1;
        searchQuery.value = '';
    });
    async function fetchMovies()
    {
        const category = categorySelector.value;
        const query = searchQuery.value.trim();
        dataContainer.innerHTML = '';
        pagination.style.display = 'none';
        try {
            let url;
            
            if (query) 
            {
                url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${currentPage}`;
            } else {
                url = `${BASE_URL}/movie/${category}?api_key=${API_KEY}&page=${currentPage}`;
            }
            
            const response = await fetch(url);
            const data = await response.json();
            
            // Limit to 2 pages maximum
            totalPages = Math.min(data.total_pages, 2);
            updatePagination();
            
            // Display the movies
            displayMovies(data.results);
        } 
        catch (error) {
            console.error('Error:', error);
        }
    }
    function updatePagination() 
    {
        if (totalPages > 1) 
        {
            pagination.style.display = 'flex';
            pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
            
            prevPageBtn.disabled = currentPage === 1;
            nextPageBtn.disabled = currentPage === totalPages;
        } 
        else 
        {
            pagination.style.display = 'none';
        }
    }
    function displayMovies(movies) 
    {
        dataContainer.innerHTML = '';
        
        if (!movies || movies.length === 0) 
        {
            dataContainer.innerHTML = '<div class="no-results">No cinemas found. Try a different search.</div>';
            return;
        }
        movies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.className = 'movie-card';
            const posterPath = movie.poster_path ? 
                `${IMAGE_BASE_URL}${movie.poster_path}` : 
                'https://via.placeholder.com/300x450?text=No+Poster';
            const releaseYear = movie.release_date ? 
                new Date(movie.release_date).getFullYear() : 
                'Unknown year';
            movieCard.innerHTML = `
                <img src="${posterPath}" alt="${movie.title}" class="movie-poster">
                <div class="movie-info">
                    <h3 class="movie-title">${movie.title} (${releaseYear})</h3>
                    <div class="movie-details">
                        <span class="rating">${movie.vote_average.toFixed(1)}</span>
                        <span> • ${movie.vote_count} votes</span>
                    </div>
                    <p class="movie-overview">${truncateText(movie.overview, 150)}</p>
                </div>
            `;
            
            dataContainer.appendChild(movieCard);
        });
    }
    function truncateText(text, maxLength) 
    {
        if (!text) return 'No overview available.';
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    }
});