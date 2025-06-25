document.addEventListener('DOMContentLoaded', () => {
  
  const botoesFiltro = document.querySelectorAll('#filtros button');
  const listaJogos = document.querySelectorAll('.lista-jogos .card-jogo');
  const categoriaSelecionada = document.getElementById('categoria-selecionada');

  botoesFiltro.forEach(botao => {
    botao.addEventListener('click', () => {
      botoesFiltro.forEach(btn => btn.classList.remove('active'));
      botao.classList.add('active');

      const categoria = botao.getAttribute('data-categoria');

      if (categoria === 'todas') {
        categoriaSelecionada.textContent = 'Todas';
        listaJogos.forEach(jogo => {
          jogo.style.display = 'flex';
        });
      } else {
        categoriaSelecionada.textContent = categoria.charAt(0).toUpperCase() + categoria.slice(1);
        listaJogos.forEach(jogo => {
          if (jogo.getAttribute('data-categoria') === categoria) {
            jogo.style.display = 'flex';
          } else {
            jogo.style.display = 'none';
          }
        });
      }
    });
  });

  const container = document.querySelector('.carrossel-container');
  const btnAnterior = document.querySelector('.anterior');
  const btnProximo = document.querySelector('.proximo');
  let slideAtual = 0;

  const totalSlides = container.children.length;

  function mostrarSlide(index) {
    const largura = container.clientWidth;
    container.style.transform = `translateX(-${index * largura}px)`;
  }

  btnAnterior.addEventListener('click', () => {
    slideAtual = (slideAtual - 1 + totalSlides) % totalSlides;
    mostrarSlide(slideAtual);
  });

  btnProximo.addEventListener('click', () => {
    slideAtual = (slideAtual + 1) % totalSlides;
    mostrarSlide(slideAtual);
  });

  window.addEventListener('resize', () => mostrarSlide(slideAtual));
});

const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});
