const images = [
    "image/1.jpg",
    "image/2.jpg",
    "image/3.jpg",
    "image/4.jpg",
    "image/5.jpg"
  ];
 
let currentIndex = 0;

const currentImage = document.getElementById("current-image");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const thumbnails = document.querySelectorAll(".thumbnail");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

// Function to update main image
function updateImage(index) {
  currentImage.src = images[index];
}

// Navigate through images
prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
  updateImage(currentIndex);
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
  updateImage(currentIndex);
});

// Click thumbnails to change main image
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (e) => {
    currentIndex = parseInt(e.target.getAttribute("data-index"));
    updateImage(currentIndex);
  });
});

// Open image in lightbox when clicked
currentImage.addEventListener("click", () => {
  lightbox.style.display = "flex";
  lightboxImg.src = currentImage.src;
});

// Close lightbox
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});