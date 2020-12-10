# Simplest-Carousel
### A Simplest Carousel made with Vanilla JavaScript with Prev and next button with Autoplay and css animation class


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

