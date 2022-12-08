
var photos = ["image/1.jpeg","image/2.png", "image/3.jpg"];

var imgTag = document.querySelector("img");

var alok = 0;

function next() {

   alok++;
      if(alok >= photos.length) {
        alok = 0;
        imgTag.src = photos[alok];
      }else{
        imgTag.src = photos[alok];
      }

}

function prev() {

  alok--;
    if(alok < 0) {
      alok = photos.length -1;
      imgTag.src = photos[alok];
    }else{
      imgTag.src = photos[alok];
    }

}

// add style

var myVar = document.querySelector("#paraId");

function addStyle() {
  myVar.classList.add("p-style")
}

function removeStyle() {
    myVar.classList.remove("p-style")
}

// mySelect

function mySelect(){
  var x = document.getElementById("mySelect");

  var option = document.createElement("option");
  option.text = "alok";

  x.add(option);
}

// Event listener

var h1element = document.querySelector("h1");

h1element .addEventListener("mouseover", function() {
      h1element.classList.add("event-listener");
});

h1element .addEventListener("mouseout", function() {
  h1element.classList.remove("event-listener");
});

// Classlist all methods

function myFunction() {
  document.getElementById("myDIV").classList.toggle("allStyle");
}

//  Event Listeners with multiple elements

// document.querySelectorAll(".myButton")[0].addEventListener("click", function(){
//   var text = this.innerHTML;
//   document.getElementById("hh").innerHTML = text + " is clicked ";
// });


// document.querySelectorAll(".myButton")[1].addEventListener("click", function(){
//   var text = this.innerHTML;
//   document.getElementById("hh").innerHTML = text + " is clicked ";
// });

// document.querySelectorAll(".myButton")[2].addEventListener("click", function(){
//   var text = this.innerHTML;
//   document.getElementById("hh").innerHTML = text + " is clicked ";
// });




for (var i = 0; i < 3; i++) {
  document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
      var text = this.innerHTML;
      document.getElementById("hh").innerHTML = text + " is clicked ";
    });
}


// play audio

for (var i = 0; i < 3; i++) {
  document.querySelectorAll(".myAudio")[i].addEventListener("click", function() {
    var text = this.innerHTML;
    console.log(text);  
    audioPlay(text);
    playAnimation(text);

  
  });
}


function audioPlay(text){
  switch(text) {
    case "a":
      var audio = new Audio("sound/a.mp3");
      audio.play();
      break;

    case "b":
      var audio = new Audio("sound/b.mp3");
      audio.play();
      break;

    case "c":
      var audio = new Audio("sound/c.mp3");
      audio.play();
      break;
  }
}



function playAnimation(text){
  var selectedButton = document.querySelector("." + text);
  selectedButton.classList.add("anim");

  setTimeout(function() {
    selectedButton.classList.remove("anim");
  }, 1000);
}


// document.addEventListener("keypress", function (event) {

//     var text = event.key;
//      audioPlay(text);
//      playAnimation(text);

// })


var count = 0;
document.querySelector("textarea").addEventListener("keypress", function() {
  count++;
  var text = event.key;
  document.querySelector("p").innerHTML = "You have pressed " + text;
});


// play and pause

// let audio = new Audio();

// const letterButtons = document.querySelectorAll(".myAudio");
// Array.from(letterButtons).map((letterButton) =>
//   letterButton.addEventListener("click", (e) => {
//     playAudio(e.target.textContent);
//   })
// );

// const playAudio = (text) => {
//   console.log(text);
//   audio.pause();
//   audio.currentTime = 0.0;

//   switch (text) {
//     case "a":
//       audio = new Audio("./audio/a");
//       break;

//     case "b":
//       audio = new Audio("./audio/b");
//       break;

//     case "c":
//       audio = new Audio("./audio/c");
//       break;
//   }
//   audio.play();
// };

// DOM events 
//  1. Event Object 

// event type: change, submit, load,  unload, open, play, canplay, pause, playing,           progress, ended, resize, scroll, toggle etc
//           propertiez: type, target, preventDefault()

//     2. MouseEvent Object
//     3. KeyboardEvent Object
//     4. FocusEvent Object
//     5. ClipboardEvent Object
//     6. DragEvent Object 


// ata 3 ta vitor dea kora jay 

// <input/> = text, numver, password, email, color, radio, checkbox, search, time, date, datetime, week, month, url, tel, file,
// <select>
// <textarea>





// const input = document.querySelector("#input");
// input.addEventListener('change', changeHandler)

// function changeHandler(e) {
//     console.log(e.target.value);
// }


// const programs = document.querySelectorAll("input[name=program]");
// console.log(programs);


// Array.from(programs).map((program) => {
//       program.addEventListener("change", programHandler)
// });

// function programHandler(e) {
//     if (e.target.checked) {
//       console.log(e.target.value);
//     }
// }



// const department = document.querySelector("#department");



// department.addEventListener('change', handleDepartment);

// function handleDepartment(e) {
//       console.log(e.target.value)


  
// }


// Finding the elements of forms


const form = document.querySelector("form");

const name =form.querySelector("div #name");



const email = form.querySelector("div #email");

const password = form.querySelector("div #password");

form.addEventListener("submit", formHandler);

function formHandler(e) {
  e.preventDefault();

  const userInfo = {
    name: name.value,
    email: email.value,
    password: password.value,
  };

  console.log(userInfo);
  name.value = '';
  email.value = '';
  password.value = '';
}


// video tag 

const video = document.querySelector("video");

video.addEventListener("canplay", function() {
  console.log("canplay");
});


video.addEventListener("play", function() {
  console.log("play");
});

video.addEventListener("playing", function() {
  console.log("playing");
});

video.addEventListener("pause", function() {
  console.log("pause");
});

video.addEventListener("ended", function() {
  console.log("Thanks for watching");
});

video.addEventListener("volumechange", function() {
  console.log("volumechange");
});


// FontFaceSetLoadEvent, unload,
// scroll
// resize
// toggle kaj kora Details ar satay

 

window.addEventListener("load", function() {
  console.log("load");
});


window.addEventListener("unload", function() {
  console.log("unload");
});

window.addEventListener("scroll", function() {
  console.log("scroll");
});

window.addEventListener("resize", function() {
  const width = window.outerWidth;
  const height = window.outerHeight;
  const txt = "window size: width = " + width + " & " + "height = " + height;
  document.getElementById("dsd").innerHTML = txt;
});

// toggle 

const details = document.querySelector("details");

details.addEventListener("toggle", function(e) {
  console.log(e.target.open);
})




// MouseEvent - <html>,<head>,<meta>,<title>,<br>,<style>,<script>,<iframe>,<param>,<base>,<bdo>


// 1. onclick 
// 2. ondblclick
// 3. onmousedown 
// 4. onmouseup
// 5. onmouseenter
// 6. onmouseleave 
// 7. onmousemove
// 8. onmouseover


const div = document.querySelector("#mouseevent");

div.addEventListener("click", function() {
  console.log("click is occurred");
});


const buttons = document.querySelectorAll(".btn");

Array.from(buttons).map((button) => {
  button.addEventListener("click", function(e) {
    console.log(e.target.innerText)
  });
});

// div.addEventListener("dblclick", function() {
//   console.log("dblclick is occurred");
// });

// div.addEventListener("mousedown", function() {
//   console.log("mousedown is occurred");
// });

// div.addEventListener("mouseup", function() {
//   console.log("mouseup is occurred");
// });

// div.addEventListener("mouseenter", function() {
//   console.log("mouseenter is occurred");
// });

// div.addEventListener("mouseleave ", function() {
//   console.log("mouseleave  is occurred");
// });

// div.addEventListener("mousemove", function() {
//   console.log("mousemove is occurred");
// });

// div.addEventListener("mouseover", function() {
//   console.log("mouseover is occurred");
// });


// div.addEventListener("mouseover", function(e) {
//   // console.log("clientX = "  + e.clientX + ", clientY = " + e.clientY);

//   console.log("offsetX = "  + e.offsetX + ", offsetY = " + e.offsetY);
// });


// FocusEvent Object

// MouseEvent - <html>,<head>,<meta>,<title>,<br>,<style>,<script>,<iframe>,<param>,<base>,<bdo>

// 1. onblur 
// 2. onfocus
// 3. onfocusin
// 4. onfocusout


const input = document.querySelector("#in");

input.addEventListener("blur", function(e) {
  // console.log(e.target.value);

  input.value = e.target.value.toUpperCase()
});

input.addEventListener("focus", function() {
  console.log("focus is occurred");
});

input.addEventListener("focusin", function() {
  console.log("focusin is occurred");
});

input.addEventListener("focusout", function() {
  console.log("focusout is occurred");
});


// ClipboardEvent Object
// oncopy 
// oncut 
// onpaste

const input2 = document.querySelector("#inp2");

input2.addEventListener("copy", function() {
  console.log("You have copied");
});

input2.addEventListener("cut", function() {
  console.log("You have cut");
});

input2.addEventListener("paste", function() {
  console.log("You have pasted");
});



// DragEvent Object
// ondragstart 
// ondrag 
// ondragend
// ondragenter
// ondragleave 
// ondragover 
// ondrop 



