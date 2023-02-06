// $(document).ready(function () {
//   $(".btn").click(function () {
//     $(".text-container").toggleClass("show");
//   });
// });

// Dichiarazione variabili

let bottoneNavbar = document.querySelector(".icon-container img");
let dropdownDiv = document.querySelector(".dropdown");
let navItem = document.querySelectorAll(".nav-item, .close-icon");
// Dichairazione funzioni

gestoreTastoNavbar = () => (dropdownDiv.style.display = "flex");
gestoreTastoChiusuraNavbar = () => (dropdownDiv.style.display = "none");

// Main

navItem.forEach((item) =>
  item.addEventListener("click", () => gestoreTastoChiusuraNavbar())
);
bottoneNavbar.addEventListener("click", () => gestoreTastoNavbar());

// function dark_mode() {
//   let element = document.body;
//     element.classList.toggle("darkmode")
// }

// GALLERIA
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

// ANIMAZIONE TESTO
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// ANIMAZIONE LOGO
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("intro").style.height = "24px";
  } else {
    document.getElementById("intro").style.height = "100%";
    document.getElementById("intro").style.width = "100%";
  }
}

// var slideIndex = 1;
//imposta come valore della variabile di nome "slideIndex" il numero 1
// showSlides(slideIndex);
//applica la funzione "showSlides" all'immagine con valore "slideIndex" (all'inizio 1)

// function plusSlides(n) {
//   showSlides(slideIndex +=n);
// }
//assegnata alle frecce di navigazione, la funzione "plusSlides" prende il valore memorizzato in ogni momento come "slideIndex"
//e gli aggiunge il valore della variabile n, impostata nell'html come +1 o -1 (rispettivamente per la freccia per proseguire e per quella per tornare indietro),
//assegnando alla variabile della funzione il valore finale dell'operazione (slideIndex+n)

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
// definiamo che l'immagine che visualizziamo è quella definita dalla variabile n del momento

// function showSlides(n) {
// dichiariamo la variabile i
// var i;
// dichiariamo da dove vengono prese le nostre slide tutti gli elementi con classe "mySlides"
// var slides = document.getElementsByClassName("foto");
// se scorriamo avanti e siamo all'ultima fotografia la galleria ci mostrerà la prima slide (slideindex), slide.lenght = elenco di tutte le mie foto in galleria
//se n è maggiore dell'index dell'ultima immagine, riporta il valore "slideIndex" a 1
// if (n > slides.length) {slideIndex = 1}
// se la fotografia aperta è la prima e clicchiamo il pulsante che torna indietro la slide dopo sarà l'ultima infatti poniamo slideindex = slidelenght (ultima)
//se n è minore di 1, riporta il valore "slideIndex" a "slides.lenght", ossia il valore dell'index dell'ultima immagine
// if (n < 1) {slideIndex = slides.length}
// diamo un ordine crescente all'apparizione delle foto, questa lista parte da 0 e non da 1, creiamo un ciclo dove al primo giro i=0
// e poi incrementa i di 1, finchè i è compreso tra 0 e il massimo
//se la variabile i è uguale a 0, se è minore dell'index dell'ultima immagine o se è incrementata (+1), imposta lo stile di display della slide con valore i su none.
// for (i = 0; i < slides.length; i++)
//  {
// con questo comando permettiamo alle fotografie di sparire e apparire in un ordine sequenziale
// sceglie la slide : foto, quella foto setta lo style display none
// slides[i].style.display = "none";
// }
// grazie invece a questo comando la fotografia precedente (slideindex-1) rimane bloccato sotto la fotografia successiva in modo tale che il contenitore vada a eliminarsi tutte le volte
//   slides[slideIndex-1].style.display = "block";
// }

// ANIMAZIONE COORDINATA
$(document).ready(function () {
  var $randomnbr = $(".nbr");
  var $timer = 10;
  var $it;
  var $data = 0;
  var index;
  var change;
  var letters = [
    "4",
    "5",
    "°",
    "3",
    "0",
    "'",
    "1",
    "9",
    ".",
    "0",
    "0",
    "0",
    '"',
    "N",
    "&nbsp",
    "9",
    "°",
    "1",
    "0",
    "'",
    "0",
    "3",
    ".",
    "0",
    "0",
    "0",
    '"',
    "E",
  ];

  $randomnbr.each(function () {
    change = Math.round(Math.random() * 100);
    $(this).attr("data-change", change);
  });

  function random() {
    return Math.round(Math.random() * 9);
  }

  function select() {
    return Math.round(Math.random() * $randomnbr.length + 1);
  }

  function value() {
    $(".nbr:nth-child(" + select() + ")").html("" + random() + "");
    $(".nbr:nth-child(" + select() + ")").attr("data-number", $data);
    $data++;

    $randomnbr.each(function () {
      if (
        parseInt($(this).attr("data-number")) >
        parseInt($(this).attr("data-change"))
      ) {
        index = $(".ltr").index(this);
        $(this).html(letters[index]);
        $(this).removeClass("nbr");
      }
    });
  }

  $it = setInterval(value, $timer);
});

// ANIMAZIONE WAVEFORM
// var WaveSurfer = require("wavesurfer.js");
//
// var wavesurfer = WaveSurfer.create({
//   container: "#waveform",
//   scrollParent: true,
//   waveColor: 'violet',
// progressColor: 'purple'
// });
//
// wavesurfer.load("./words_suoni/Words_Plant.wav");
//
// wavesurfer.on("ready", function () {
//   wavesurfer.play();
// });
//
// let wavesurfer = WaveSurfer.create({
//     container: document.querySelector('#waveform'),
//     plugins: [
//         WaveSurfer.cursor.create({
//             showTime: true,
//             opacity: 1,
//             customShowTimeStyle: {
//                 'background-color': '#000',
//                 color: '#fff',
//                 padding: '2px',
//                 'font-size': '10px'
//             }
//         })
//     ]
// });

// MOSTRARE BOTTONE DI PLAY
// function buttonreveal() {
//   if (mouseover.document.querySelectorAll(".word")) {
//     button.document.querySelectorAll(".controls")
//   }
// }

//CAMBIO IMMAGINE
var wImage = false;
function AceJSswapper() {
  wImage = !wImage;
  if (wImage == true) {
    document.AceJSimage.src = "./img/stop.png";
  }
  if (wImage == false) {
    document.AceJSimage.src = "./img/play.png";
  }
}

//PARTENZA RANDOM DEL BOTTONE PLAY

/* <html>
  <head>
    <style>
      #player {
        position: fixed;
        bottom: 0;
        left: 0;
      }

      #playButton, #pauseButton {
        cursor: pointer;
      }
    </style>
    <script> */

// var audio;
// function playAudio() {
//   if (!audio) {
//     audio = new Audio("./words_suoni/Fungus_RADIO 2bis.mp3");
//   }
//   audio.currentTime = Math.random() * audio.duration * 0.85;
//   audio.addEventListener(
//     "ended",
//     function () {
//       this.currentTime = 0;
//       this.play();
//     },
//     false
//   );
//   audio.play();
// }

// function pauseAudio() {
//   audio.pause();
// }
//   </script>
// </head>
// <body onload="playAudio()">
//   <div id="player">
//     <img id="playButton" src="path/to/your/play/button/image.png" alt="Play">
//     <img id="pauseButton" src="path/to/your/pause/button/image.png" alt="Pause">
//   </div>
// <script>
// var playButton = document.getElementById("playButton");
// playButton.addEventListener("click", playAudio, true);
// playButton.addEventListener("click", pauseAudio, true);
// </script>
//   </body>
// </html>

// var myAudio = new Audio("./words_suoni/Fungus_RADIO 2bis.mp3");
// var isPlaying = false;

// function playpauseAudio() {
//   setInterval(function () {
//     myAudio.play();
//   }, Math.random() * audio.duration * 0.85);
//   isPlaying ? myAudio.pause() : myAudio.play();
// }

// myAudio.onplaying = function () {
//   isPlaying = true;
// };
// myAudio.onpause = function () {
//   isPlaying = false;
// };
