const carousalContainer = document.querySelector(".carousal-container");
const carousalImages = document.querySelectorAll(".carousal-slide img");

//Buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
console.log(carousalImages);
//Counter

function carousal() {
  //-------------- Configurations ---------------//
  let count = 0; // Dont Change this Otherwise Some images wont show up
  let animation_duration = 1000; // Set this according to you css animation duration
  let Imagestay_duration = 10;
  let animationClass = "animate__fadeInDown"; // Put animation css class name here
  let autoplay = false; //Boolean
  //-------------- Configurations ---------------//

  let Image = document.createElement("img"); //----------------Creating Element of image inside Container -----------//
  Image.src = carousalImages[count].currentSrc; //--------------- Adding Image src from the html images--------------//
  carousalContainer.appendChild(Image); //---------------- Inserting Image element inside Container-----------//
  Image.classList.add("animate__animated"); //---------------- Adding Animate.css Neccessary class-----------//

  //----------------- Previous Button event -----------------------//
  prevBtn.addEventListener("click", () => {
    if (count < 1) {
      count = carousalImages.length - 1;
    } else {
      count--;
    }
    Image.src = carousalImages[count].currentSrc;
    Image.classList.add(animationClass);
    setTimeout(() => {
      Image.classList.remove(animationClass);
    }, animation_duration);
  });
  //----------------- Previous Button event -----------------------//
  //----------------- Next Button event -----------------------//
  nextBtn.addEventListener("click", () => {
    if (count > carousalImages.length - 2) {
      count = 0;
    } else {
      count++;
    }
    Image.src = carousalImages[count].currentSrc;
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
      Image.src = carousalImages[count].currentSrc;
      count++;
      if (count > carousalImages.length - 2) {
        count = 0;
      }
      setTimeout(() => {
        Image.classList.remove(animationClass);
      }, animation_duration);
    }, Imagestay_duration + animation_duration);
  }
  //----------------- Autoplay event -----------------------//
}

carousal();
