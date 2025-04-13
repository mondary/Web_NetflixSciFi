// Script pour la page des chaînes

// Initialisation de la page des chaînes
document.addEventListener('DOMContentLoaded', () => {
    // Charger les données des chaînes
    const allChannels = getAllChannels();
    
    // Afficher toutes les chaînes avec leurs descriptions
    displayAllChannels(allChannels);
    
    // Configurer les écouteurs d'événements
    setupEventListeners();
});

// Afficher toutes les chaînes
function displayAllChannels(channels) {
    const channelsGrid = document.getElementById('channels-grid');
    channelsGrid.innerHTML = '';
    
    channels.forEach(channel => {
        const channelCard = createChannelCard(channel);
        channelsGrid.appendChild(channelCard);
    });
}

// Créer une carte de chaîne avec description détaillée
function createChannelCard(channel) {
    const channelCard = document.createElement('div');
    channelCard.className = 'channel-detail-card';
    
    // Formater les catégories
    const categories = channel.category.join(', ');
    
    // Formater la note avec des étoiles
    const rating = formatRating(channel.rating);
    
    channelCard.innerHTML = `
        <div class="channel-header">
            <img src="${channel.thumbnail}" alt="${channel.name}" class="channel-avatar">
            <div class="channel-title">
                <h3>${channel.name}</h3>
                <div class="rating">${rating}</div>
            </div>
        </div>
        <div class="channel-body">
            <p class="channel-description">${channel.description}</p>
            <div class="channel-categories">
                <span class="category-label">Catégories:</span>
                <span class="categories">${categories}</span>
            </div>
        </div>
        <div class="channel-videos">
            <h4>Vidéos populaires</h4>
            <div class="channel-videos-grid">
                ${createChannelEpisodesHTML(channel.episodes.slice(0, 3))}
            </div>
        </div>
    `;
    
    return channelCard;
}

// Créer le HTML pour les épisodes d'une chaîne
function createChannelEpisodesHTML(episodes) {
    return episodes.map(episode => `
        <div class="channel-video-item" data-id="${episode.id}">
            <img src="${episode.thumbnail}" alt="${episode.title}">
            <div class="video-info">
                <h5>${episode.title}</h5>
                <span class="duration">${episode.duration}</span>
            </div>
        </div>
    `).join('');
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
    // Écouteur pour la recherche
    const searchInput = document.getElementById('search-input');
    const searchButton = document.querySelector('.search-container button');
    
    const performSearch = () => {
        const query = searchInput.value.trim();
        if (query) {
            const results = searchContent(query);
            displayAllChannels(results.channels);
        } else {
            // Si la recherche est vide, afficher toutes les chaînes
            displayAllChannels(getAllChannels());
        }
    };
    
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Écouteur pour les vidéos des chaînes
    document.getElementById('channels-grid').addEventListener('click', (e) => {
        const videoItem = e.target.closest('.channel-video-item');
        if (videoItem) {
            const episodeId = parseInt(videoItem.dataset.id);
            // Rediriger vers la page d'accueil avec l'ID de l'épisode
            window.location.href = `index.html?episode=${episodeId}`;
        }
    });
}