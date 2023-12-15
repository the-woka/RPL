//active class starts

const navbar = document.querySelector(".navbar");

document.querySelector("#ham-menu").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
};

const searchForm = document.querySelector(".search-form");

document.querySelector(".search").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

//active class ends

//drag class starts

const carousel = document.querySelector(".carousel");
const pencarian = document.querySelector(".pencarian");
const cerita = document.querySelector(".carousel-cerita");

let isDragStart = false,
  prevPageX,
  prevScrollLeft;

const dragCarouselStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragPencarianStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = pencarian.scrollLeft;
};

const dragCeritaStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = cerita.scrollLeft;
};

const draggingCarousel = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
};

const draggingPencarian = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  let positionDiff = e.pageX - prevPageX;
  pencarian.scrollLeft = prevScrollLeft - positionDiff;
};

const draggingCerita = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  let positionDiff = e.pageX - prevPageX;
  cerita.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStop = () => {
  isDragStart = false;
};

carousel.addEventListener("mousedown", dragCarouselStart);
pencarian.addEventListener("mousedown", dragPencarianStart);
cerita.addEventListener("mousedown", dragCeritaStart);
carousel.addEventListener("mousemove", draggingCarousel);
pencarian.addEventListener("mousemove", draggingPencarian);
cerita.addEventListener("mousemove", draggingCerita);
carousel.addEventListener("mouseup", dragStop);
pencarian.addEventListener("mouseup", dragStop);
cerita.addEventListener("mouseup", dragStop);

// drag class ends
