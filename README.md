# Simplest-Carousel
A Simplest Carousel made with Vanilla JavaScript with Prev and next button with Autoplay and css animation class


Change Configration of Carousel in Carousel Function

```js
function carousel() {
 //-------------- Configurations ---------------//
    let count = 0; // Dont Change this Otherwise Some images wont show up
    let animation_duration = 1000; // Set this according to you css animation duration
    let Imagestay_duration = 10;
    let animationClass = "animate__fadeInDown"; // Put animation css class name here
    let autoplay = false; //Boolean
    //-------------- Configurations ---------------//
   ...
```
In the argument of Carousal function you can pass true or false to turn on or turn off autoplay 
```js
carousel(true); // default False;
```
