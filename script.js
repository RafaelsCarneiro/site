let currentIndex = 0;
const totalSlides = document.querySelectorAll(".carousel-item").length;
const interval = 5000; // 5 seconds
let autoSlideInterval;

function showSlide(index) {
  const carouselInner = document.querySelector(".carousel-inner");
  const offset = -index * 100 + "%";
  carouselInner.style.transition = "transform 0.5s ease-in-out"; // Adiciona transição suave
  carouselInner.style.transform = "translateX(" + offset + ")";
}

function showText(index) {
  const currentText = document.querySelector(".carousel-text.show");
  if (currentText) {
    currentText.classList.remove("show");
  }

  const newText = document.querySelector(
    ".carousel-text:nth-child(" + (index + 1) + ")"
  );
  if (newText) {
    newText.classList.add("show");
  }
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
  showText(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
  showText(currentIndex);
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, interval);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

document.querySelector(".carousel-next").addEventListener("click", () => {
  nextSlide();
});

document.querySelector(".carousel-prev").addEventListener("click", () => {
  prevSlide();
});

// Iniciar o carrossel automático
startAutoSlide();

function mudarConteudo(secao) {
  var conteudo = "";
  var imagemSrc = "";

  switch (secao) {
    case "secao1":
      conteudo =
        "Sua cozinha é o coração da casa, onde os sabores se misturam e as histórias se compartilham. Na Móveis Destak Planejados, projetamos cozinhas que combinam funcionalidade e estilo, oferecendo soluções inteligentes de armazenamento e design moderno para inspirar suas aventuras culinárias.";
      imagemSrc = "imagens/cozinha_planejada1.jpg";
      break;
    case "secao2":
      conteudo =
        "Seu refúgio pessoal, onde o conforto encontra a elegância. Com móveis planejados da Móveis Destak, transformamos seu dormitório em um santuário de tranquilidade, combinando design ergonômico, materiais de qualidade e um toque personalizado para criar o ambiente perfeito para relaxar e recarregar.";
      imagemSrc = "imagens/quarto_planejado1.jpg";
      break;
    case "secao3":
      conteudo =
        "Onde a produtividade encontra o conforto. Em nosso home office, combinamos praticidade e estilo para criar um espaço de trabalho inspirador. Com móveis planejados da Móveis Destak, você pode personalizar seu escritório em casa para atender às suas necessidades específicas, desde armazenamento eficiente até um layout ergonômico.";
      imagemSrc = "imagens/home_office_planejado.jpg";
      break;
    case "secao4":
      conteudo =
        "Seu oásis pessoal de relaxamento e rejuvenescimento. Na Móveis Destak Planejados, projetamos banheiros que combinam funcionalidade e sofisticação, oferecendo soluções de armazenamento inteligentes e um design elegante para criar um espaço de tranquilidade e luxo.";
      imagemSrc = "imagens/banheiro_planejado.jpg";
      break;
    case "secao5":
      conteudo =
        " O ponto de encontro da família, onde os momentos preciosos são compartilhados. Com móveis planejados da Móveis Destak, transformamos seu living em um ambiente acolhedor e elegante, oferecendo opções versáteis de design e conforto incomparável para toda a família desfrutar.";
      imagemSrc = "imagens/living.jpg";
      break;
    default:
      conteudo = "Selecione uma seção para ver o conteúdo correspondente.";
      break;
  }

  document.getElementById("conteudo-dinamico").innerHTML =
    "<p>" + conteudo + "</p>";

  document.getElementById("imagem-dinamica").src = imagemSrc;
}

let btnMenu = document.getElementById("btn-menu");
let menu = document.getElementById("menu-mobile");
let overlay = document.getElementById("overlay-menu");
let btnFechar = document.querySelector(".btn-fechar");

btnMenu.addEventListener("click", () => {
  menu.classList.add("abrir-menu");
  overlay.classList.add("abrir-menu"); // Adiciona a classe ao overlay
});

btnFechar.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
  overlay.classList.remove("abrir-menu"); // Remove a classe do overlay
});

overlay.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
  overlay.classList.remove("abrir-menu");
});
