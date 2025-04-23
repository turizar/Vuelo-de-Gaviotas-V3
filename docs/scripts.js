// Toggle menú para móviles
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav").querySelector("ul");

toggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});




// Carrousel
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');

let autoSlideInterval;
const slideIntervalTime = 5000; // 5 segundos

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(nextSlide, slideIntervalTime);
}

// Event listeners
nextBtn.addEventListener('click', () => {
  nextSlide();
  resetAutoSlide();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetAutoSlide();
});

// Inicializar
showSlide(currentSlide);
autoSlideInterval = setInterval(nextSlide, slideIntervalTime);


const cabinData = [
  {
    "name": "Cabaña Familiar 0",
    "capacity": 4,
    "description": "Ideal para familias con niños.",
    "image": "images/cabin 0 - living room.jpg",
    "link": "cabin0.html"
  },
  {
    "name": "Cabaña Familiar 1",
    "capacity": 8,
    "description": "Primera línea de playa, ideal para adultos mayores.",
    "image": "images/cabin 1 - living room.jpg",
    "link": "cabin1.html"
  },
  {
    "name": "Cabaña Familiar 2",
    "capacity": 6,
    "description": "Comodidad y funcionalidad garantizadas.",
    "image": "images/cabin 2 - living room.jpg",
    "link": "cabin2.html"
  },
  {
    "name": "Cabaña Familiar 3",
    "capacity": 7,
    "description": "Ideal para grupos grandes o familias extensas.",
    "image": "images/cabin 3 - living room kitchen.jpg",
    "link": "cabin3.html"
  },
  {
    "name": "Cabaña Familiar 4",
    "capacity": 7,
    "description": "La mejor vista al mar desde el segundo piso.",
    "image": "images/cabin 4 - living room.jpg",
    "link": "cabin4.html"
  },
  {
    "name": "Cabaña Familiar 6",
    "capacity": 2,
    "description": "Vista panorámica de 180° al océano.",
    "image": "images/cabin 6 - terrace.jpg",
    "link": "cabin6.html"
  }
];

// Aquí se podrían agregar funciones que manipulen el DOM para mostrar los datos de las cabañas dinámicamente

