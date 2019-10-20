//  var sansSerifText = document.getElementById("sans-serif-text");
//  sansSerifText.style.fontFamily = "sans-serif";
//  sansSerifText.style.fontSize = "24px";
// //  sansSerifText.style.color= "red";

//  var el = document.getElementById("mytext");
//  el.classList.add("cute");

//  var whatTheFuck = document.querySelectorAll("p");
//  console.log(whatTheFuck.length);
//  for(i=0; i < whatTheFuck.length; i+=2) {
//     whatTheFuck[i].classList.add("fuckingP");
// };

// var whatTheFuckIsThat = document.querySelectorAll("p");
// for(i=0; i < whatTheFuck.length; i++) {
// // console.log(whatTheFuckIsThat[i].textContent);
// }
 

/********
 * to increase i for 2 we have to use "i+=2" "i+=3" "i+=4" and so on
 */
//  var hrBlink = document.getElementsByTagName("hr");
 var el = document.getElementsByTagName("hr");
 for(i=0; i<el.length; i++) {

     el[i].classList.add("blink");
 }

// function blink() {
//   var blinks = document.getElementsByClassName('blink');
//   for (var i = blinks.length - 1; i >= 0; i--) {
//     var s = blinks[i];
//     s.style.visibility = (s.style.visibility === 'visible') ? 'hidden' : 'visible';
//   }
//   window.setTimeout(blink, 1000);
// }
// if (document.addEventListener) document.addEventListener("DOMContentLoaded", blink, false);
// else if (window.addEventListener) window.addEventListener("load", blink, false);
// else if (window.attachEvent) window.attachEvent("onload", blink);
// else window.onload = blink;

var elLink = document.getElementsByTagName("a");
 for (i = 0; i < elLink.length; i++) {
     elLink[i].classList.add("fuck");
     console.log(elLink[i].innerHTML);
 }

 

