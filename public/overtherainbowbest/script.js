document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const gamesContainer = document.getElementById('games');
    const heroContainer = document.querySelector('.hero-grid');
    
    // 从 games-data.json 加载游戏数据
    fetch('games-data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (!data || !data.games) {
                throw new Error('Invalid data format');
            }
            const gamesData = data.games;
            
            // 渲染热门游戏
            function renderHeroGames() {
                try {
                    const featuredGames = [
                        'vex3', 'vex4', 'vex5', '1v1lol', 'moto-x3m',
                        '2048', 'retro-bowl', 'drive-mad', 'slope', 'bob-the-robber-2'
                    ];

                    const selectedGames = featuredGames
                        .map(id => gamesData.find(game => game.id === id))
                        .filter(game => game);

                    heroContainer.innerHTML = selectedGames.map(game => `
                        <a href="${game.path}" class="hero-card">
                            <img src="${game.image}" alt="${game.title}" loading="lazy" 
                                onerror="this.onerror=null; console.error('Failed to load image: ${game.image}');">
                            <div class="hero-title">${game.title}</div>
                        </a>
                    `).join('');
                } catch (error) {
                    console.error('Error in renderHeroGames:', error);
                }
            }

            // 渲染所有游戏
            function renderGames(games) {
                gamesContainer.innerHTML = games.length ? games.map(game => `
                    <a href="${game.path}" class="game-card">
                        <img src="${game.image}" alt="${game.title}" loading="lazy">
                        <div class="game-title">${game.title}</div>
                    </a>
                `).join('') : '<p>No games found</p>';
            }

            // 初始渲染
            renderHeroGames();
            renderGames(gamesData);

            // 搜索功能
            searchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                const filteredGames = gamesData.filter(game => 
                    game.title.toLowerCase().includes(searchTerm)
                );
                renderGames(filteredGames);
            });
        })
        .catch(error => {
            console.error('Error loading games:', error);
            gamesContainer.innerHTML = `<p>Error loading games: ${error.message}</p>`;
        });
});