// Script principal pour SciFiTube

// Variables globales
let currentEpisodeId = null;
let allChannels = [];
let allEpisodes = [];
let filteredEpisodes = [];
let selectedChannels = [];
let currentRating = 0;

// Initialisation de l'application
document.addEventListener('DOMContentLoaded', () => {
    // Charger les données
    allChannels = getAllChannels();
    allEpisodes = getAllEpisodes();
    filteredEpisodes = [...allEpisodes];
    
    // Initialiser l'interface
    initializeChannelFilter();
    displayAllEpisodes();
    setupEventListeners();
});

// Initialiser le filtre de chaînes
function initializeChannelFilter() {
    const filterContainer = document.createElement('div');
    filterContainer.className = 'channel-filter';
    filterContainer.innerHTML = `
        <h2>Filtrer par chaîne</h2>
        <div class="filter-options"></div>
    `;
    
    // Insérer le filtre avant la section des épisodes
    const episodesSection = document.querySelector('.episodes-section');
    document.querySelector('main').insertBefore(filterContainer, episodesSection);
    
    const filterOptions = document.querySelector('.filter-options');
    
    // Ajouter une option pour toutes les chaînes
    const allOption = document.createElement('div');
    allOption.className = 'filter-option active';
    allOption.textContent = 'Toutes les chaînes';
    allOption.dataset.channelId = 'all';
    filterOptions.appendChild(allOption);
    
    // Ajouter une option pour chaque chaîne
    allChannels.forEach(channel => {
        const option = document.createElement('div');
        option.className = 'filter-option';
        option.textContent = channel.name;
        option.dataset.channelId = channel.id;
        filterOptions.appendChild(option);
    });
}

// Afficher tous les épisodes
function displayAllEpisodes() {
    const episodesGrid = document.querySelector('.episodes-grid');
    episodesGrid.innerHTML = '';
    
    filteredEpisodes.forEach(episode => {
        const episodeCard = createEpisodeCard(episode);
        episodesGrid.appendChild(episodeCard);
    });
}

// Créer une carte d'épisode
function createEpisodeCard(episode) {
    const episodeCard = document.createElement('div');
    episodeCard.className = 'episode-card';
    episodeCard.dataset.id = episode.id;
    
    // Trouver la chaîne correspondante
    const channel = getChannelById(episode.channelId);
    
    // Formater la note avec des étoiles
    const rating = formatRating(episode.rating);
    
    episodeCard.innerHTML = `
        <img src="${episode.thumbnail}" alt="${episode.title}">
        <div class="episode-info">
            <h3>${episode.title}</h3>
            <p class="channel-name">${channel.name}</p>
            <div class="episode-meta">
                <span class="duration">${episode.duration}</span>
                <div class="rating">${rating}</div>
            </div>
        </div>
    `;
    
    return episodeCard;
}

// Formater la note avec des étoiles
function formatRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let stars = '';
    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }
    if (halfStar) {
        stars += '½';
    }
    for (let i = 0; i < emptyStars; i++) {
        stars += '☆';
    }
    
    return stars;
}

// Configurer les écouteurs d'événements
function setupEventListeners() {
    // Écouteur pour le filtre de chaînes
    const filterOptions = document.querySelectorAll('.filter-option');
    filterOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Retirer la classe active de toutes les options
            filterOptions.forEach(opt => opt.classList.remove('active'));
            
            // Ajouter la classe active à l'option cliquée
            option.classList.add('active');
            
            // Filtrer les épisodes
            const channelId = option.dataset.channelId;
            if (channelId === 'all') {
                filteredEpisodes = [...allEpisodes];
            } else {
                filteredEpisodes = allEpisodes.filter(episode => 
                    episode.channelId === parseInt(channelId)
                );
            }
            
            // Afficher les épisodes filtrés
            displayAllEpisodes();
        });
    });
    
    // Écouteur pour la recherche
    const searchInput = document.getElementById('search-input');
    const searchButton = document.querySelector('.search-container button');
    
    const performSearch = () => {
        const query = searchInput.value.trim();
        if (query) {
            const results = searchContent(query);
            filteredEpisodes = results.episodes;
            displayAllEpisodes();
        } else {
            // Si la recherche est vide, afficher tous les épisodes
            filteredEpisodes = [...allEpisodes];
            displayAllEpisodes();
        }
    };
    
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Écouteur pour les cartes d'épisodes
    document.querySelector('.episodes-grid').addEventListener('click', (e) => {
        const episodeCard = e.target.closest('.episode-card');
        if (episodeCard) {
            const episodeId = parseInt(episodeCard.dataset.id);
            showEpisodeDetails(episodeId);
        }
    });
    
    // Écouteur pour fermer la modal
    document.querySelector('.close-modal').addEventListener('click', () => {
        document.getElementById('episode-modal').style.display = 'none';
    });
    
    // Écouteur pour noter un épisode
    const stars = document.querySelectorAll('.stars i');
    stars.forEach(star => {
        star.addEventListener('mouseover', () => {
            const value = parseInt(star.dataset.value);
            updateStarsDisplay(value);
        });
        
        star.addEventListener('mouseout', () => {
            updateStarsDisplay(0);
        });
        
        star.addEventListener('click', () => {
            const value = parseInt(star.dataset.value);
            currentRating = value;
            updateStarsDisplay(value, true);
        });
    });
    
    document.getElementById('submit-rating').addEventListener('click', () => {
        if (currentEpisodeId && currentRating) {
            const updatedEpisode = rateEpisode(currentEpisodeId, currentRating);
            if (updatedEpisode) {
                // Mettre à jour l'affichage
                document.getElementById('episode-modal').style.display = 'none';
                // Rafraîchir la liste des épisodes
                allEpisodes = getAllEpisodes();
                filteredEpisodes = [...allEpisodes];
                displayAllEpisodes();
            }
        }
    });
}

// Mettre à jour l'affichage des étoiles
function updateStarsDisplay(value, clicked = false) {
    const stars = document.querySelectorAll('.stars i');
    
    stars.forEach((star, index) => {
        if (clicked && index < value) {
            star.className = 'fas fa-star';
        } else if (!clicked) {
            if (index < value) {
                star.className = 'fas fa-star';
            } else {
                star.className = 'far fa-star';
            }
        }
    });
}

// Afficher les détails d'un épisode
function showEpisodeDetails(episodeId) {
    const episode = getEpisodeById(episodeId);
    if (!episode) return;
    
    currentEpisodeId = episodeId;
    currentRating = 0;
    
    const episodeDetails = document.getElementById('episode-details');
    const channel = getChannelById(episode.channelId);
    
    episodeDetails.innerHTML = `
        <div class="modal-header">
            <h2>${episode.title}</h2>
            <p class="channel-name">${channel.name}</p>
        </div>
        <div class="modal-body">
            <div class="video-container">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/${episode.videoId}" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
            </div>
            <div class="episode-details">
                <p>${episode.description}</p>
                <div class="meta-info">
                    <span class="duration"><i class="far fa-clock"></i> ${episode.duration}</span>
                    <span class="publish-date"><i class="far fa-calendar-alt"></i> ${episode.publishDate}</span>
                    <span class="current-rating"><i class="far fa-star"></i> ${episode.rating.toFixed(1)} (${episode.ratingCount} votes)</span>
                </div>
            </div>
        </div>
    `;
    
    // Réinitialiser l'affichage des étoiles
    updateStarsDisplay(0);
    
    // Afficher la modal
    document.getElementById('episode-modal').style.display = 'block';
}