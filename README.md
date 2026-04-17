<<<<<<< HEAD
# 💕 Site de Celebração - Primeiro Ano Juntos 💕

Parabéns! Você criou um site incrível para comemorar o primeiro ano do seu relacionamento! 🎉

## 🚀 Como Usar

### 1. **Abrir o Site Localmente**
   - Abra o arquivo `index.html` no seu navegador
   - Pronto! O site já funciona!

### 2. **Customizar as Datas**

   **No arquivo `script.js`, no topo, mude essas linhas:**
   ```javascript
   const DATA_INICIO = new Date('2025-04-14'); // Mude para o dia que vocês ficaram juntos
   const DATA_CELEBRACAO = new Date('2026-04-14'); // Data do aniversário de 1 ano
   ```

   E no `index.html`, procure por:
   ```html
   <p class="data-inicio">Desde <span id="dataInicio">14 de abril de 2025</span></p>
   ```

### 3. **Adicionar Suas Fotos**

   Você pode:
   
   **Opção A: Usar URLs de fotos online**
   - Tire print das fotos e guarde em algum lugar online (Google Drive, Imgur, etc)
   - No `index.html`, procure por:
   ```html
   <img src="https://via.placeholder.com/300x300?text=Foto+1" alt="Momento especial">
   ```
   - Substitua o `src` pela URL da sua foto

   **Opção B: Colocar fotos na mesma pasta**
   - Coloque as fotos `.jpg` ou `.png` na pasta do site
   - Mude o `src` para algo como: `<img src="foto1.jpg" alt="Nossa foto">`

### 4. **Editar as Mensagens Especiais**

   No `index.html`, procure pela seção `<!-- Seção Mensagens Especiais -->` e mude os textos dentro dos cards `.message-card`. Exemplo:

   ```html
   <div class="message-card card-pink">
       <h3>O que significas para mim</h3>
       <p>Escreva aqui algo bem especial para ela/ele...</p>
       <span class="message-emoji">💕</span>
   </div>
   ```

### 5. **Editar a Timeline**

   Procure por `<!-- Seção Timeline -->` e mude o conteúdo de cada `.timeline-item`:

   ```html
   <div class="timeline-item">
       <div class="timeline-marker">
           <span class="marker-circle"></span>
       </div>
       <div class="timeline-text">
           <h3>Seu Momento</h3>
           <p>Descrição do momento...</p>
       </div>
   </div>
   ```

### 6. **Adicionar Músicas**

   Na seção `<!-- Seção Músicas -->`, você pode:
   
   - Mudar o título e artista
   - Adicionar links do YouTube, Spotify ou SoundCloud
   
   ```html
   <div class="music-item">
       <div class="music-cover">🎵</div>
       <div class="music-info">
           <h4>Nome da Música</h4>
           <p>Artista - Detalhes</p>
           <small><a href="link-do-youtube-aqui" target="_blank">Ouça aqui</a></small>
       </div>
   </div>
   ```

## 🎨 Mudança de Cores

Se quiser mudar as cores do site, edite o `style.css`:

- **Rosa/Pink principal**: `#ff6b9d` 
- **Rosa/Pink escuro**: `#c06c84`
- **Rosa claro**: `#ffc0cb`
- **Azul**: `#6b8fb9`
- **Amarelo**: `#ffc857`

Procure por essas cores no arquivo e substitua pelas que você quer!

## 🌍 Como Hospedar (Publicar na Internet)

Você tem 3 opções fáceis:

### **Opção 1: Netlify (Recomendado - Grátis) ⭐**

1. Vá para [Netlify.com](https://netlify.com)
2. Clique em "Sign up"
3. Crie uma conta
4. Arraste e solte a pasta do seu site (ou conecte seu GitHub)
5. Pronto! Seu site está online com um link tipo: `seu-site-123.netlify.app`

### **Opção 2: Vercel (Grátis)**

1. Vá para [Vercel.com](https://vercel.com)
2. Clique em "Sign Up"
3. Conecte seu GitHub ou faça upload direto
4. Seu site fica online automaticamente

### **Opção 3: GitHub Pages (Grátis)**

1. Crie uma conta em [GitHub.com](https://github.com)
2. Crie um repositório chamado `seu-username.github.io`
3. Faça upload dos seus arquivos
4. Seu site fica em: `seu-username.github.io`

## 📱 Dicas Extras

- **Clique no contador de dias** para ver confetes caírem! 🎉
- **Clique nas fotos da galeria** para ver em tamanho grande
- O site é **responsivo** - funciona em celular, tablet e PC!
- As **animações** são automáticas quando você faz scroll

## 📝 Estrutura de Arquivos

```
Surpresa/
├── index.html      (Estrutura do site - edite aqui!)
├── style.css       (Estilo e cores - edite aqui!)
├── script.js       (Lógica e interatividade - edite aqui!)
└── README.md       (Este arquivo)
```

## 🛠️ Customizações Avançadas (Opcional)

Se quiser adicionar mais coisas:

1. **Adicionar mais fotos na galeria**: Copie um bloco `gallery-item` inteiro
2. **Mudar fontes**: Edite o `@import` no topo do `style.css`
3. **Adicionar seções novas**: Copie uma seção inteira e mude o conteúdo

## ❓ Dúvidas Frequentes

**P: Posso mudar o nome do arquivo?**
R: Sim, mas `index.html` deve ficar assim (é o padrão dos navegadores)

**P: Preciso saber programação para customizar?**
R: Não! Você só vai trocar textos, datas e URLs no HTML

**P: As animações vão funcionar em celular?**
R: Sim! O site é totalmente responsivo

**P: Posso mudar o layout completamente?**
R: Sim, mas vai precisar aprender CSS. Comece pelo `style.css`

---

**Aproveite cada segundo juntos! 💕✨**

Se tiver dúvidas, peça ajuda ao seu assistente preferido! 😊
=======
# Surpresa
Sitezinho para o aniversario de 1 Ano de namoro 
>>>>>>> acf0ca521f4a364e5883966f623914df55ee1583
