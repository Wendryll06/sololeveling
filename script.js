document.querySelectorAll('.personagem').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.3)';
    card.style.transition = '0.3s';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = 'none';
  });
});
const imagens = [
  "https://images6.alphacoders.com/132/thumb-1920-1320541.png",
  "https://images4.alphacoders.com/138/thumb-1920-1389937.jpg",
  "https://images4.alphacoders.com/134/thumb-1920-1347881.jpeg"
];

const imgIntro = document.querySelector('.intro img');
let i = 0;

setInterval(() => {
  i = (i + 1) % imagens.length;
  imgIntro.src = imagens[i];
}, 4000);
