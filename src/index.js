// bake your code here
const carouselContainer = document.querySelector(".carousel-container");
const carouselImages = document.querySelectorAll(".carousel-slide img");
const dotsContainer = document.querySelector(".dotsContainer");
//Buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

function carousel({auto,duration,interval,enterClass,leaveClass}) {
	//-------------- Configurations ---------------//
	//Counter 
	let count = 0; // Dont Change this Otherwise Some images wont show up
	let animation_duration = duration; // Set this according to you css animation duration
	let Imagestay_duration = interval; //
	let animation_enter = enterClass; // Put animation css class name here
	let animation_leave = leaveClass;
	let autoplay = auto; //Boolean
	//-------------- Configurations ---------------//
	let Image = document.createElement("img"); //----------------Creating Element of image inside Container -----------//
	Image.src = carouselImages[count].currentSrc; //--------------- Adding Image src from the html images--------------//
	carouselContainer.appendChild(Image); //---------------- Inserting Image element inside Container-----------//
	Image.classList.add("brdr-rad-10", "animate__animated"); //---------------- Adding Animate.css Neccessary class-----------//
	
  
	for(let i = 0; i < carouselImages.length; i++) {
		dotsContainer.innerHTML += "<a class='dot'></a>";
	}
	const dots = document.querySelectorAll(".dot");
	dots.forEach((dot, index) => {
    //----------------- Dots click event -----------------------//
    if(!autoplay){
      dot.addEventListener('click', () => {
			dots[count].classList.remove('active');
			count = index;
			Image.classList.add(animation_leave);
			dots[count].classList.add('active');
			setTimeout(() => {
				Image.classList.remove(animation_leave);
			}, animation_duration);
			setTimeout(() => {
				Image.src = carouselImages[count].currentSrc;
			}, animation_duration);
			Image.classList.add(animation_enter);
			setTimeout(() => {
				Image.classList.remove(animation_enter);
			}, animation_duration * 2);
		})
    }
    
		
    //----------------- Dots click event -----------------------//
	});
	dots[count].classList.add('active');
  //----------------- Previous Button event -----------------------//
	prevBtn.addEventListener("click", () => {
		dots[count].classList.remove('active');
		if(count < 1) {
			count = carouselImages.length - 1;
			dots[count].classList.add('active');
		} else {
			count--;
			dots[count].classList.add('active');
		}
		Image.classList.add(animation_leave);
		setTimeout(() => {
			Image.classList.remove(animation_leave);
		}, animation_duration);
		setTimeout(() => {
			Image.src = carouselImages[count].currentSrc;
		}, animation_duration);
		Image.classList.add(animation_enter);
		setTimeout(() => {
			Image.classList.remove(animation_enter);
		}, animation_duration * 2);
	});
	//----------------- Previous Button event -----------------------//
	//----------------- Next Button event -----------------------//
	nextBtn.addEventListener("click", () => {
		dots[count].classList.remove('active');
		if(count > carouselImages.length - 2) {
			count = 0;
			dots[count].classList.add('active');
		} else {
			count++;
			dots[count].classList.add('active');
		}
		Image.classList.add(animation_leave);
		setTimeout(() => {
			Image.classList.remove(animation_leave);
		}, animation_duration);
		setTimeout(() => {
			Image.src = carouselImages[count].currentSrc;
		}, animation_duration);
		Image.classList.add(animation_enter);
		setTimeout(() => {
			Image.classList.remove(animation_enter );
		}, animation_duration * 2);
	});
	//----------------- Next Button event -----------------------//
	//----------------- Autoplay event -----------------------//
	if(autoplay) {
		count = 0;
		dots[count].classList.add('active');
		prevBtn.remove();
		nextBtn.remove();
		setInterval(() => {
			dots[count].classList.remove('active');
			if(count > carouselImages.length - 2) {
				count = 0;
				dots[count].classList.add('active');
			} else {
				count++;
				dots[count].classList.add('active');
			}
			Image.classList.add(animation_leave);
			setTimeout(() => {
				Image.classList.remove(animation_leave);
			}, animation_duration);
			setTimeout(() => {
				Image.src = carouselImages[count].currentSrc;
			}, animation_duration);
			Image.classList.add(animation_enter);
			setTimeout(() => {
				Image.classList.remove(animation_enter);
			}, animation_duration * 2);
		}, Imagestay_duration + animation_duration);
	}
	//----------------- Autoplay event -----------------------//
}

carousel({
  'auto':true,
  'interval':4000,
  'duration':1000,
  'enterClass':'animate__zoomInDown',
  'leaveClass':'animate__zoomOutDown',
});
