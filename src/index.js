const carouselContainer = document.querySelector(".carousel-container");
const carouselImages = document.querySelectorAll(".carousel-slide img");

//Buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
console.log(carouselImages);
//Counter

function carousel(auto) {
                                                        //-------------- Configurations ---------------//
  let count = 0;                                       // Dont Change this Otherwise Some images wont show up
  let animation_duration = 1000;                      // Set this according to you css animation duration
  let Imagestay_duration = 1000;                     //
  let animationClass_enter = "animate__fadeInLeft";       // Put animation css class name here
  let animationClass2_enter = "animate__fadeInRight"
   let animationClass_leave = "animate__fadeOutLeft";       // Put animation css class name here
  let animationClass2_leave = "animate__fadeOutRight"
  let autoplay = auto;                             //Boolean
                                                  //-------------- Configurations ---------------//
  let Image = document.createElement("img");     //----------------Creating Element of image inside Container -----------//
  Image.src = carouselImages[count].currentSrc; //--------------- Adding Image src from the html images--------------//
  carouselContainer.appendChild(Image);        //---------------- Inserting Image element inside Container-----------//
  Image.classList.add("animate__animated");   //---------------- Adding Animate.css Neccessary class-----------//
                                             //----------------- Previous Button event -----------------------//
  prevBtn.addEventListener("click", () => {
    if (count < 1) {
      count = carouselImages.length - 1;
    } else {
      count--;
    }
    Image.classList.add(animationClass_leave);
    
    setTimeout(()=>{
      Image.classList.remove(animationClass_leave);
    },animation_duration)
    setTimeout(()=>{
      Image.src = carouselImages[count].currentSrc;  
    },animation_duration)
  
    Image.classList.add(animationClass_enter);
    setTimeout(() => {
      Image.classList.remove(animationClass_enter);
    }, animation_duration*2);
  });
  //----------------- Previous Button event -----------------------//
  //----------------- Next Button event -----------------------//
  nextBtn.addEventListener("click", () => {
    if (count > carouselImages.length - 2) {
      count = 0;
    } else {
      count++;
    }
    Image.classList.add(animationClass2_leave);
    
    setTimeout(()=>{
      Image.classList.remove(animationClass2_leave);
    },animation_duration)
    setTimeout(()=>{
      Image.src = carouselImages[count].currentSrc;  
    },animation_duration)
    
    Image.classList.add(animationClass2_enter);
    setTimeout(() => {
      Image.classList.remove(animationClass2_enter);
    }, animation_duration*2);
  });
  //----------------- Next Button event -----------------------//
  //----------------- Autoplay event -----------------------//
  if (autoplay) {
    count = 0;
    setInterval(() => {
      Image.classList.add(animationClass);
      
      Image.src = carouselImages[count].currentSrc;
      count++;
      console.log(Image.src);
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
