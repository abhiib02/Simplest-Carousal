const carouselContainer = document.querySelector(".carousel-container");
const carouselImages = document.querySelectorAll(".carousel-slide img");

//Buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
console.log(carousalImages);
//Counter

function carousel(auto) {
  //-------------- Configurations ---------------//
  let count = 0; // Dont Change this Otherwise Some images wont show up
  let animation_duration = 1000; // Set this according to you css animation duration
  let Imagestay_duration = 10;
  let animationClass = "animate__fadeInDown"; // Put animation css class name here
  let autoplay = auto; //Boolean
  //-------------- Configurations ---------------//

  let Image = document.createElement("img"); //----------------Creating Element of image inside Container -----------//
  Image.src = carousalImages[count].currentSrc; //--------------- Adding Image src from the html images--------------//
  carouselContainer.appendChild(Image); //---------------- Inserting Image element inside Container-----------//
  Image.classList.add("animate__animated"); //---------------- Adding Animate.css Neccessary class-----------//

  //----------------- Previous Button event -----------------------//
  prevBtn.addEventListener("click", () => {
    if (count < 1) {
      count = carouselImages.length - 1;
    } else {
      count--;
    }
    Image.src = carouselImages[count].currentSrc;
    Image.classList.add(animationClass);
    setTimeout(() => {
      Image.classList.remove(animationClass);
    }, animation_duration);
  });
  //----------------- Previous Button event -----------------------//
  //----------------- Next Button event -----------------------//
  nextBtn.addEventListener("click", () => {
    if (count > carouselImages.length - 2) {
      count = 0;
    } else {
      count++;
    }
    Image.src = carouselImages[count].currentSrc;
    Image.classList.add(animationClass);
    setTimeout(() => {
      Image.classList.remove(animationClass);
    }, animation_duration);
  });
  //----------------- Next Button event -----------------------//
  //----------------- Autoplay event -----------------------//
  if (autoplay) {
    count = 0;
    setInterval(() => {
      Image.classList.add(animationClass);
      Image.src = carouselImages[count].currentSrc;
      count++;
      if (count > carouselImages.length - 2) {
        count = 0;
      }
      setTimeout(() => {
        Image.classList.remove(animationClass);
      }, animation_duration);
    }, Imagestay_duration + animation_duration);
  }
  //----------------- Autoplay event -----------------------//
}

carousel();
