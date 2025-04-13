// Données des chaînes YouTube SciFi et leurs épisodes
const channelsData = [
    {
        id: 1,
        name: "Kurzgesagt",
        description: "Vulgarisation scientifique et concepts futuristes",
        thumbnail: "https://yt3.googleusercontent.com/ytc/APkrFKaHMQYw_7lZgzFBkg5jQXOIYHGQYxTi0gOgSn7Bew=s176-c-k-c0x00ffffff-no-rj",
        category: ["Futurisme", "Hard SciFi"],
        rating: 4.5,
        episodes: [
            {
                id: 101,
                title: "La Limite de Fermi - Où sont tous les aliens?",
                description: "Pourquoi n'avons-nous pas encore rencontré d'extraterrestres? Cette vidéo explore le paradoxe de Fermi et les possibles explications à l'absence apparente de vie extraterrestre.",
                thumbnail: "https://i.ytimg.com/vi/sNhhvQGsMEc/maxresdefault.jpg",
                videoId: "sNhhvQGsMEc",
                duration: "9:25",
                publishDate: "2015-05-06",
                rating: 4.8,
                ratingCount: 1245
            },
            {
                id: 102,
                title: "Trous de ver expliqués - Raccourcis dans l'espace-temps",
                description: "Les trous de ver pourraient-ils nous permettre de voyager à travers l'espace et le temps? Cette vidéo explore la science et la fiction des trous de ver.",
                thumbnail: "https://i.ytimg.com/vi/9P6rdqiybaw/maxresdefault.jpg",
                videoId: "9P6rdqiybaw",
                duration: "8:47",
                publishDate: "2016-10-12",
                rating: 4.6,
                ratingCount: 987
            },
            {
                id: 103,
                title: "Dyson Sphere - Comment capturer l'énergie d'une étoile",
                description: "Comment une civilisation avancée pourrait-elle exploiter toute l'énergie de son étoile? Cette vidéo explore le concept de la sphère de Dyson.",
                thumbnail: "https://i.ytimg.com/vi/pP44EPBMb8A/maxresdefault.jpg",
                videoId: "pP44EPBMb8A",
                duration: "10:17",
                publishDate: "2018-03-28",
                rating: 4.9,
                ratingCount: 1532
            }
        ]
    },
    {
        id: 2,
        name: "Isaac Arthur",
        description: "Futurisme et science-fiction réaliste",
        thumbnail: "https://yt3.googleusercontent.com/ytc/APkrFKZJdGQNBOwMUOgNixF-QTvWB1zQAEez0Y5XusnmRw=s176-c-k-c0x00ffffff-no-rj",
        category: ["Hard SciFi", "Futurisme", "Space Opera"],
        rating: 4.8,
        episodes: [
            {
                id: 201,
                title: "Mégastructures: Anneaux Orbitaux",
                description: "Exploration des anneaux orbitaux, des habitats spatiaux gigantesques qui pourraient accueillir des milliards de personnes.",
                thumbnail: "https://i.ytimg.com/vi/yk-Ivm9MhYs/maxresdefault.jpg",
                videoId: "yk-Ivm9MhYs",
                duration: "32:41",
                publishDate: "2017-05-18",
                rating: 4.7,
                ratingCount: 856
            },
            {
                id: 202,
                title: "Civilisations Interstellaires",
                description: "Comment les civilisations pourraient-elles s'étendre à travers les étoiles et quelles formes pourraient-elles prendre?",
                thumbnail: "https://i.ytimg.com/vi/rDPj5zI66LA/maxresdefault.jpg",
                videoId: "rDPj5zI66LA",
                duration: "29:55",
                publishDate: "2016-11-24",
                rating: 4.9,
                ratingCount: 1123
            },
            {
                id: 203,
                title: "Voyage Interstellaire à Vitesse Subluminique",
                description: "Exploration des méthodes réalistes pour voyager entre les étoiles sans dépasser la vitesse de la lumière.",
                thumbnail: "https://i.ytimg.com/vi/s6BQSgidbmc/maxresdefault.jpg",
                videoId: "s6BQSgidbmc",
                duration: "35:08",
                publishDate: "2018-02-15",
                rating: 4.8,
                ratingCount: 945
            }
        ]
    },
    {
        id: 3,
        name: "DUST",
        description: "Courts-métrages de science-fiction",
        thumbnail: "https://yt3.googleusercontent.com/ytc/APkrFKYcYswt_UfcWcFBcUbXSrGGGiW_mORCQZGUkVIjGg=s176-c-k-c0x00ffffff-no-rj",
        category: ["Cyberpunk", "Post-Apocalyptique", "Space Opera"],
        rating: 4.3,
        episodes: [
            {
                id: 301,
                title: "FTL",
                description: "Un astronaute se retrouve seul dans l'espace après un accident lors d'un test de voyage plus rapide que la lumière.",
                thumbnail: "https://i.ytimg.com/vi/t8LD0iUYv80/maxresdefault.jpg",
                videoId: "t8LD0iUYv80",
                duration: "14:23",
                publishDate: "2017-08-30",
                rating: 4.5,
                ratingCount: 782
            },
            {
                id: 302,
                title: "Seam",
                description: "Dans un futur où les humains et les synthétiques coexistent, un agent traque les synthétiques qui se font passer pour des humains.",
                thumbnail: "https://i.ytimg.com/vi/36lE9BV0_0I/maxresdefault.jpg",
                videoId: "36lE9BV0_0I",
                duration: "17:52",
                publishDate: "2018-05-21",
                rating: 4.2,
                ratingCount: 654
            },
            {
                id: 303,
                title: "The Leap",
                description: "Une technologie permet de transférer la conscience humaine d'un corps à un autre, mais à quel prix?",
                thumbnail: "https://i.ytimg.com/vi/WhZt57Kr3qI/maxresdefault.jpg",
                videoId: "WhZt57Kr3qI",
                duration: "12:36",
                publishDate: "2018-11-14",
                rating: 4.6,
                ratingCount: 892
            }
        ]
    },
    {
        id: 4,
        name: "PBS Space Time",
        description: "Astrophysique et concepts spatiaux",
        thumbnail: "https://yt3.googleusercontent.com/ytc/APkrFKYSgP-ctXvtvbgXQUTteSqxJ1FPRxrMP0Wxpn3q=s176-c-k-c0x00ffffff-no-rj",
        category: ["Hard SciFi", "Voyage Temporel"],
        rating: 4.7,
        episodes: [
            {
                id: 401,
                title: "Les trous noirs expliqués",
                description: "Une exploration approfondie de la physique des trous noirs et de leurs propriétés étranges.",
                thumbnail: "https://i.ytimg.com/vi/e-P5IFTqB98/maxresdefault.jpg",
                videoId: "e-P5IFTqB98",
                duration: "15:47",
                publishDate: "2016-06-22",
                rating: 4.8,
                ratingCount: 1056
            },
            {
                id: 402,
                title: "Voyage dans le temps: est-ce possible?",
                description: "Une analyse scientifique des possibilités théoriques du voyage dans le temps selon la physique moderne.",
                thumbnail: "https://i.ytimg.com/vi/1YFrISfN7jo/maxresdefault.jpg",
                videoId: "1YFrISfN7jo",
                duration: "13:29",
                publishDate: "2017-09-13",
                rating: 4.7,
                ratingCount: 934
            },
            {
                id: 403,
                title: "L'équation de Drake: combien de civilisations extraterrestres existent?",
                description: "Une exploration de la célèbre équation qui tente d'estimer le nombre de civilisations intelligentes dans notre galaxie.",
                thumbnail: "https://i.ytimg.com/vi/UjtOGPJ0URM/maxresdefault.jpg",
                videoId: "UjtOGPJ0URM",
                duration: "18:12",
                publishDate: "2018-07-25",
                rating: 4.6,
                ratingCount: 876
            }
        ]
    },
    {
        id: 5,
        name: "Science Clic",
        description: "Vulgarisation scientifique en français",
        thumbnail: "https://yt3.googleusercontent.com/ytc/APkrFKbkSWvCwTHdvWeYbF-IM9n1c9Wd0X3bZEGEIz9W=s176-c-k-c0x00ffffff-no-rj",
        category: ["Hard SciFi", "Futurisme"],
        rating: 4.4,
        episodes: [
            {
                id: 501,
                title: "Qu'y a-t-il au centre d'un trou noir?",
                description: "Une exploration des théories sur ce qui pourrait se trouver au cœur d'un trou noir.",
                thumbnail: "https://i.ytimg.com/vi/rZPbSH7g7Kg/maxresdefault.jpg",
                videoId: "rZPbSH7g7Kg",
                duration: "12:18",
                publishDate: "2019-03-10",
                rating: 4.5,
                ratingCount: 723
            },
            {
                id: 502,
                title: "L'Univers est-il infini?",
                description: "Une analyse des théories cosmologiques sur la taille et la forme de notre univers.",
                thumbnail: "https://i.ytimg.com/vi/7C0PrR4Ym8U/maxresdefault.jpg",
                videoId: "7C0PrR4Ym8U",
                duration: "14:56",
                publishDate: "2018-11-28",
                rating: 4.3,
                ratingCount: 645
            },
            {
                id: 503,
                title: "La théorie des cordes expliquée simplement",
                description: "Une introduction accessible à la théorie des cordes et ses implications pour notre compréhension de l'univers.",
                thumbnail: "https://i.ytimg.com/vi/Jv2N9L3ZLxI/maxresdefault.jpg",
                videoId: "Jv2N9L3ZLxI",
                duration: "16:42",
                publishDate: "2020-01-15",
                rating: 4.6,
                ratingCount: 812
            }
        ]
    }
];

// Fonction pour obtenir toutes les chaînes
function getAllChannels() {
    return channelsData;
}

// Fonction pour obtenir une chaîne par son ID
function getChannelById(id) {
    return channelsData.find(channel => channel.id === id);
}

// Fonction pour obtenir tous les épisodes
function getAllEpisodes() {
    let allEpisodes = [];
    channelsData.forEach(channel => {
        channel.episodes.forEach(episode => {
            allEpisodes.push({
                ...episode,
                channelId: channel.id,
                channelName: channel.name
            });
        });
    });
    return allEpisodes;
}

// Fonction pour obtenir un épisode par son ID
function getEpisodeById(id) {
    for (const channel of channelsData) {
        const episode = channel.episodes.find(ep => ep.id === id);
        if (episode) {
            return {
                ...episode,
                channelId: channel.id,
                channelName: channel.name
            };
        }
    }
    return null;
}

// Fonction pour obtenir les épisodes par catégorie
function getEpisodesByCategory(category) {
    const episodes = [];
    channelsData.forEach(channel => {
        if (channel.category.includes(category)) {
            channel.episodes.forEach(episode => {
                episodes.push({
                    ...episode,
                    channelId: channel.id,
                    channelName: channel.name
                });
            });
        }
    });
    return episodes;
}

// Fonction pour noter un épisode
function rateEpisode(episodeId, rating) {
    for (const channel of channelsData) {
        const episodeIndex = channel.episodes.findIndex(ep => ep.id === episodeId);
        if (episodeIndex !== -1) {
            const episode = channel.episodes[episodeIndex];
            const newRatingCount = episode.ratingCount + 1;
            const newRating = ((episode.rating * episode.ratingCount) + rating) / newRatingCount;
            
            channel.episodes[episodeIndex] = {
                ...episode,
                rating: parseFloat(newRating.toFixed(1)),
                ratingCount: newRatingCount
            };
            
            // Recalculer la note moyenne de la chaîne
            const channelRating = channel.episodes.reduce((sum, ep) => sum + ep.rating, 0) / channel.episodes.length;
            channel.rating = parseFloat(channelRating.toFixed(1));
            
            return channel.episodes[episodeIndex];
        }
    }
    return null;
}

// Fonction pour rechercher des chaînes ou des épisodes
function searchContent(query) {
    query = query.toLowerCase();
    const results = {
        channels: [],
        episodes: []
    };
    
    // Recherche dans les chaînes
    channelsData.forEach(channel => {
        if (channel.name.toLowerCase().includes(query) || 
            channel.description.toLowerCase().includes(query) ||
            channel.category.some(cat => cat.toLowerCase().includes(query))) {
            results.channels.push(channel);
        }
        
        // Recherche dans les épisodes
        channel.episodes.forEach(episode => {
            if (episode.title.toLowerCase().includes(query) || 
                episode.description.toLowerCase().includes(query)) {
                results.episodes.push({
                    ...episode,
                    channelId: channel.id,
                    channelName: channel.name
                });
            }
        });
    });
    
    return results;
}