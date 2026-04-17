# 🎵 Como Adicionar Músicas do Spotify ao Player

## Agora o player usa músicas diretamente do Spotify! 🎶

Em vez de arquivos .mp3 locais, agora você adiciona links de embed do Spotify.

## Passo 1: Encontre o link do Spotify
1. Abra o Spotify (app ou web)
2. Procure a música que você quer
3. Clique com o botão direito > "Compartilhar" > "Copiar link da música"

## Passo 2: Converta para link de embed
Pegue o link normal do Spotify e converta para embed:

**Link normal:** `https://open.spotify.com/track/4iV5W9uYEdYUVa79Axb7Rh`
**Link embed:** `https://open.spotify.com/embed/track/4iV5W9uYEdYUVa79Axb7Rh`

Basta adicionar `/embed/` no URL!

## Passo 3: Edite o `index.html`
No arquivo `index.html`, procure pela seção de músicas e edite os `data-spotify`:

```html
<div class="music-item" data-spotify="https://open.spotify.com/embed/track/SEU_TRACK_ID_AQUI" data-title="Nome da Música" data-artist="Artista">
    <div class="music-cover">🎵</div>
    <div class="music-info">
        <h4>Nome da Música</h4>
        <p>Artista</p>
        <small>Descrição da música</small>
    </div>
</div>
```

## Exemplos de músicas românticas:
- **Perfect - Ed Sheeran:** `https://open.spotify.com/embed/track/0tgVpDi06FyKpA1z0VMD4v`
- **All of Me - John Legend:** `https://open.spotify.com/embed/track/4iV5W9uYEdYUVa79Axb7Rh`
- **Thinking Out Loud - Ed Sheeran:** `https://open.spotify.com/embed/track/3n3Ppam7vgaVa1iaRUc9LP`

## Dicas:
- **Funciona com:** Músicas, álbuns, playlists e podcasts do Spotify
- **Para playlists:** Use `/embed/playlist/` em vez de `/embed/track/`
- **Para álbuns:** Use `/embed/album/`
- **Controles:** O player do Spotify tem seus próprios controles de play/pause, volume, etc.
- **Sem anúncios:** Se você tiver Spotify Premium, não há anúncios

## Como adicionar mais músicas:
1. Copie um dos `music-item` existentes
2. Cole abaixo dos outros
3. Mude o `data-spotify`, `data-title`, `data-artist` e o texto dentro

Exemplo completo:
```html
<div class="music-item" data-spotify="https://open.spotify.com/embed/track/SEU_ID_AQUI" data-title="Minha Música Favorita" data-artist="Artista Romântico">
    <div class="music-cover">💕</div>
    <div class="music-info">
        <h4>Minha Música Favorita</h4>
        <p>Artista Romântico</p>
        <small>Essa música me lembra de você</small>
    </div>
</div>
```
cover: 'https://i.imgur.com/exemplo.jpg'
```

## 🎵 Funcionalidades do Player
- ▶️ Play/Pause
- ⏮️ Música anterior
- ⏭️ Próxima música
- 📊 Barra de progresso (clique para avançar)
- 🔊 Controle de volume
- ⌨️ Atalhos de teclado (espaço, setas)

Divirta-se criando a trilha sonora do seu amor! 💕🎶