// ===== CONFIGURAÇÃO ===== 
// EDITE ESSAS DATAS PARA SEU RELACIONAMENTO
const DATA_INICIO = new Date('2025-04-19'); // Mude para o dia que vocês ficaram juntos
const DATA_CELEBRACAO = new Date('2026-04-19'); // Mude para a data do seu aniversário de 1 ano

// ===== Função para calcular dias entre datas =====
function calcularTempo() {
    const agora = new Date();
    const diferenca = agora - DATA_INICIO;
    
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);
    
    return { dias, horas, minutos, segundos };
}

// ===== Atualizar contador a cada segundo =====
function atualizarContador() {
    const tempo = calcularTempo();
    
    document.getElementById('dias').textContent = tempo.dias;
    document.getElementById('horas').textContent = tempo.horas;
    document.getElementById('minutos').textContent = tempo.minutos;
    document.getElementById('segundos').textContent = tempo.segundos;
}

// Atualizar ao carregar a página
atualizarContador();

// Atualizar a cada segundo
setInterval(atualizarContador, 1000);

// ===== Efeito de confetes quando clicar no contador =====
function criarConfete() {
    const container = document.querySelector('.counter-box');
    
    for (let i = 0; i < 30; i++) {
        const confete = document.createElement('div');
        confete.innerHTML = ['❤️', '💕', '💖', '💝', '✨', '🌟', '💫'][Math.floor(Math.random() * 7)];
        confete.style.position = 'fixed';
        confete.style.left = Math.random() * window.innerWidth + 'px';
        confete.style.top = container.getBoundingClientRect().top + 'px';
        confete.style.fontSize = Math.random() * 20 + 20 + 'px';
        confete.style.pointerEvents = 'none';
        confete.style.zIndex = '9999';
        
        document.body.appendChild(confete);
        
        // Animação de queda
        let top = container.getBoundingClientRect().top;
        let left = parseFloat(confete.style.left);
        let velocidadeX = (Math.random() - 0.5) * 8;
        let velocidadeY = Math.random() * 3 + 2;
        let rotacao = 0;
        
        function animar() {
            top += velocidadeY;
            left += velocidadeX;
            rotacao += 5;
            
            confete.style.top = top + 'px';
            confete.style.left = left + 'px';
            confete.style.transform = `rotate(${rotacao}deg)`;
            confete.style.opacity = 1 - (top - container.getBoundingClientRect().top) / 300;
            
            if (top < window.innerHeight) {
                requestAnimationFrame(animar);
            } else {
                confete.remove();
            }
        }
        
        animar();
    }
}

// Adicionar evento de clique ao contador
document.addEventListener('DOMContentLoaded', () => {
    const counterBox = document.querySelector('.counter-box');
    counterBox.addEventListener('click', criarConfete);
    counterBox.style.cursor = 'pointer';
});

// ===== Galeria com zoom =====
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        const img = this.querySelector('img');
        const src = img.src;
        
        // Criar modal
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = '10000';
        modal.style.cursor = 'pointer';
        
        const img_grande = document.createElement('img');
        img_grande.src = src;
        img_grande.style.maxWidth = '90%';
        img_grande.style.maxHeight = '90%';
        img_grande.style.borderRadius = '10px';
        img_grande.style.animation = 'slideDown 0.3s ease';
        
        modal.appendChild(img_grande);
        document.body.appendChild(modal);
        
        // Fechar ao clicar
        modal.addEventListener('click', () => {
            modal.remove();
        });
    });
});

// ===== Smooth scroll para navegação =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Efeito de digitação nas mensagens especiais =====
const messageCards = document.querySelectorAll('.message-card p');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const texto = entry.target;
            const conteudo_original = texto.innerHTML;
            texto.innerHTML = '';
            
            let index = 0;
            function digitar() {
                if (index < conteudo_original.length) {
                    texto.innerHTML += conteudo_original[index];
                    index++;
                    setTimeout(digitar, 30);
                }
            }
            
            digitar();
            observer.unobserve(texto);
        }
    });
}, {
    threshold: 0.5
});

messageCards.forEach(card => observer.observe(card));

// ===== Adicionar animação ao scroll =====
const animatedElements = document.querySelectorAll('.timeline-item, .gallery-item, .message-card, .music-item');

const observerAnim = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'slideUp 0.6s ease';
        }
    });
}, {
    threshold: 0.1
});

animatedElements.forEach(el => {
    el.style.opacity = '0';
    observerAnim.observe(el);
});

// ===== Função para você customizar facilmente =====
// EDITE AQUI para mudar as datas da timeline
const timelineData = [
    {
        data: 'Abril 2025',
        titulo: 'O Começo',
        descricao: 'Aquele dia especial onde tudo começou... 💕'
    },
    {
        data: 'Sua Data Aqui',
        titulo: 'Um Momento Especial',
        descricao: 'Edite aqui com um momento importante para vocês! 🌟'
    },
    {
        data: 'Outra Data',
        titulo: 'Outro Momento',
        descricao: 'Mais um dia inesquecível escrito em nossas memórias 💫'
    },
    {
        data: 'Abril 2026',
        titulo: 'Um Ano de Felicidade',
        descricao: 'E a história continua... muitos mais anos a vir! 🎉'
    }
];

// ===== Console.log com inspiração =====
console.log('%c💕 Bem-vindo ao site de celebração do seu amor! 💕', 'color: #ff6b9d; font-size: 16px; font-weight: bold;');
console.log('%cEdite o arquivo script.js para customizar datas, mensagens e mais!', 'color: #c06c84; font-size: 12px;');
console.log('%cPara hospedar seu site gratuitamente, use: Netlify, Vercel ou GitHub Pages', 'color: #6b8fb9; font-size: 12px;');

// ===== PLAYER DE MÚSICA COM SPOTIFY =====
document.addEventListener('DOMContentLoaded', () => {
    const spotifyEmbed = document.getElementById('spotify-embed');
    const musicItems = document.querySelectorAll('.music-item');

    let currentTrackIndex = -1;

    // Função para carregar música do Spotify
    function loadTrack(index) {
        if (index < 0 || index >= musicItems.length) return;

        const item = musicItems[index];
        const spotifyUrl = item.dataset.spotify;

        if (!spotifyUrl) {
            alert('Adicione um link do Spotify para esta música!');
            return;
        }

        currentTrackIndex = index;
        spotifyEmbed.src = spotifyUrl;

        // Atualizar visual da playlist
        musicItems.forEach((item, i) => {
            item.classList.toggle('playing', i === index);
        });
    }

    // Clique nos itens da playlist
    musicItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            loadTrack(index);
        });
    });
});
