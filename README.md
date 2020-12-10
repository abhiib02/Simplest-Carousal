# Simplest-Carousel
### A Simplest Carousel made with Vanilla JavaScript with Prev and next button with Autoplay and css animation class

##Installation

### CDN 

### animate.css is necessary if you are not using your custom css animation
### iconify is necessary for the previous and next Button You can change it inside carousel function but you might need to use rehosting of cdn files

```html
<head>
    <title>Simplest Carousel</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/abhiib02/Simplest-Carousal@latest/styles.css"/>
    <script src="https://code.iconify.design/1/1.0.6/iconify.min.js"></script>
  </head>
<body>
  
  <div class="wrapper"> <!-- This is just to wrap the carousel elements inside it -->
      <div class="carousel-container">  
          <!-- This is main container where carousel elements will append 
(you can change the name of class and pass it but keep in mind you also need to change that in css )-->
            <div class="carousel-slide no-show"> <!-- This is just a div to organize all slides 
and no-show class is important otherwise all slides with show up above carousel simutanously -->
              <img class="slide"  src="https://source.unsplash.com/random/350x351"/> <!--this is main slide of the carousel 
(you can change the name of class and pass it but keep in mind you also need to change that in css )-->
            </div>
      </div>
  </div>
  ...
  ...
  
  ...
  
  ...
  ...
  <script src="https://cdn.jsdelivr.net/gh/abhiib02/Simplest-Carousal@latest/src/index.js"></script>
</body>
```


Change Configration of Carousel by passing object with these key value pairs

```js
carousel({
  'container':".carousel-container",
  'slides':'.slide',
  'auto': getParam(),
  'interval':4000,
  'duration':1000,
  'enterClass':'animate__zoomInDown',
  'leaveClass':'animate__zoomOutDown',
});


```
# Vue Component (is not updated as vanilla js version)
### Just add Carousel.Vue file to your Components Directory
inside vue file where you Used component
for Example : App.vue
```html
 <Carousel :carousalImages="carousalImages"></Carousel>
 // for autoplay Carousel
 <Carousel :carousalImages="carousalImages" autoplay></Carousel>
```
```js
  import Carousel from "./components/Carousel";
export default {
  data() {
    return {
      carousalImages: [
        {image:""},
        {image:""},
        {image:""},
        {image:""},
        {image:""},
        ]
      }
    
   ...

```
Carousel.vue
```js
export default {
  props: {
    carousalImages: Array,
    autoplay: Boolean,
  },

  data() {
    return {
      count: 0,
      active: Boolean,
      active2: Boolean,
      animation_duration: 1000,
      Imagestay_duration: 1000,
      autoplay: false,
    };
  },
  ...
```

