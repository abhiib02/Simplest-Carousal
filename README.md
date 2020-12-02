# Simplest-Carousel
A Simplest Carousel made with Vanilla JavaScript with Prev and next button with Autoplay and css animation class


Change Configration of Carousel in Carousel Function

```js
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
```
In the argument of Carousal function you can pass true or false to turn on or turn off autoplay 
```js
carousel(true); // default False;
```
