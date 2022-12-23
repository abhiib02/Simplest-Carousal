
function getParam(){
	console.log(document.URL);
	 let url_string = document.URL
	 let url = new URL(url_string);
	 let qs = url.searchParams.get("autoplay");
	return qs;
  }
  
  function carousel({
	container,
	slides,
	auto,
	duration,
	interval,
	enterClass,
	leaveClass,
}) 
  



  {
	
	
	  //-------------- Configurations ---------------//
  const carouselContainer = document.querySelector(container);
  const carouselImages = document.querySelectorAll(slides);
  
	  //Counter 
	  let count = 0; // Dont Change this Otherwise Some images wont show up
	  let animation_duration = duration; // Set this according to you css animation duration
	  let Imagestay_duration = interval; //
	  let animation_enter = enterClass; // Put animation css class name here
	  let animation_leave = leaveClass;
	  let autoplay = auto; //Boolean
	  //-------------- Configurations ---------------//
	let prevBtn = document.createElement("a"); 
	let nextBtn = document.createElement("a"); 
	  let Image = document.createElement("img"); 
	let dotswrapper = document.createElement("div"); 
	
	//----------------Creating Element of image inside Container -----------//
	prevBtn.setAttribute('class','btn');
	prevBtn.setAttribute('id','prevBtn');
	prevBtn.innerHTML='<span class="iconify" data-inline="false" data-icon="carbon:previous-outline"></span>';
	nextBtn.setAttribute('class','btn');
	nextBtn.setAttribute('id','nextBtn');
	nextBtn.innerHTML='<span class="iconify" data-inline="false" data-icon="carbon:next-outline"></span>';
	dotswrapper.setAttribute('class','dotsContainer');
	  Image.src = carouselImages[count].currentSrc; //--------------- Adding Image src from the html images--------------//
	carouselContainer.appendChild(prevBtn);
	carouselContainer.appendChild(nextBtn);
	  carouselContainer.appendChild(Image);
	carouselContainer.appendChild(dotswrapper);//---------------- Inserting Image element inside Container-----------//
	const dotsContainer = document.querySelector(".dotsContainer");
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
	}
	  //----------------- Autoplay event -----------------------//
  
 
  