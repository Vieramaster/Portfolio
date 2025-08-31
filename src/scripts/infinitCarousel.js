export const infinitCarousel = ({ carousel, leftButton, rightButton }) => {
  //cartas en el carrousel
  const cards = carousel.children;
  //cantidad de ellas
  const totalCards = cards.length;

  const step = 100 / totalCards;

  //ancho del carrousel
  carousel.style.width = `${totalCards * 100}%`;

  //se establece el primer card
  document.addEventListener("DOMContentLoaded", () => {
    if (!totalCards) return;

    // fijar posición inicial SIN animación
    carousel.style.transition = "none";
    carousel.style.transform = `translateX(-${step}%)`;
    carousel.offsetHeight; // reflow

    // volver a usar clases de transición
    carousel.style.transition = "";
  });

  // bloquea o activa los botones
  const disabledBtns = (boolean) => {
    leftButton.disabled = boolean;
    rightButton.disabled = boolean;
  };

  const reset = () => {
    carousel.style.transition = "none";
    carousel.style.transform = `translateX(-${step}%)`;
    carousel.offsetHeight; // forzar el reflow
    carousel.style.transition = ""; // vuelve a las clases
    disabledBtns(false);
  };

  const nextCard = () => {
    disabledBtns(true);
    let firstCard = carousel.children[0];
    if (!carousel) return;

    //  se multiplica para llegar al siguiente
    carousel.style.transform = `translateX(-${step * 2}%)`;

    // reordenar
    setTimeout(() => {
      carousel.insertAdjacentElement("beforeend", firstCard);
      reset();
    }, 500);
  };

  const prevCard = () => {
    disabledBtns(true);
    let cards = carousel.children;
    let lastCard = cards[cards.length - 1];
    if (!carousel) return;

    //animar a 0%
    carousel.style.transform = "translateX(0%)";

    // reordenar
    setTimeout(() => {
      carousel.insertAdjacentElement("afterbegin", lastCard);
      reset();
    }, 500);
  };

  rightButton.addEventListener("click", nextCard);
  leftButton.addEventListener("click", prevCard);
};
