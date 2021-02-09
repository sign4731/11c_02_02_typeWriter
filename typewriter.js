"use strict";

let text = document.querySelector(".typewritten").textContent;
function init() {
  console.log("init");
  // get the text from somewhere

  console.log(text);

  //clear the HTML area
  document.querySelector(".typewritten").textContent = null;

  //   //start loop
  loop();
}

let N = "0";
function loop() {
  console.log("loop");

  //show the N'th letter

  //- set textContent to substring of 0 to N
  let letter = text.substring(0, N);
  let space = letter.endsWith(" ");

  //sounds

  if (space == true) {
    document.querySelector("#typespace").play();
    console.log("play");
  } else if (Math.random() > 0.5) {
    document.querySelector("#typekey1").play();
    console.log("play1");
  } else {
    document.querySelector("#typekey2").play();
    console.log("play2");
  }

  document.querySelector(".typewritten").textContent = letter;

  //increment N
  N++;
  console.log(N);
  console.log(letter);

  //   wait before calling loop again
  let length = text.length;

  if (N <= length) {
    setTimeout(loop, 500);
  }
}
