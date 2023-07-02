////////////////////////////////////// TITLE HEAD ///////////////////////////////////////////////////////

const title = document.getElementById("title");

const originalTitle = title.textContent;

// un array de frases para animar
let animWords = [
  "Explora sus paisajes impresionantes",
  "Sumérgete en la hospitalidad marroquí",
  "Saborea su exquisita gastronomía",
  "Embárcate en aventuras en el desierto",
  "Visita sus encantadores zocos",
  "Descubre la arquitectura tradicional",
  "Recorre sus ciudades vibrantes",
  "Disfruta de las playas y el sol",
  "Explora sus antiguas medinas",
  "Admira la artesanía local",
  "Sumérgete en la historia fascinante",
  "Experimenta la magia del té de menta",
  "Disfruta de festivales culturales vibrantes",
  "Explora los oasis en el sur",
  "Visita las montañas del Atlas",
  "Maravíllate con los jardines exuberantes",
  "Sumérgete en los baños tradicionales (hammams)",
  "Descubre la música y la danza tradicional",
  "Explora las ciudadelas históricas",
  "Sumérgete en el encanto de la cultura bereber"
];


// Definir la velocidad de animación en milisegundos
let animSpeed = 3000; // 3 segundos

// Función para cambiar dinámicamente el título
function animateTitle() {
  let currentIndex = 0;
  setInterval(function () {
    title.textContent = animWords[currentIndex];
    currentIndex = (currentIndex + 1) % animWords.length;
  }, animSpeed);
}

// Iniciar la animación después de que la página se haya cargado completamente
window.addEventListener("load", animateTitle);


/////////////////////////////////////// MODAL VIDEO ///////////////////////////////////////////////

$(document).ready(function () {
  $('#videoModal').modal('show');

  const videoElement = document.getElementById('videoPlayer');
  video.play();
  videoElement.addEventListener('ended', function () {
    videoElement.pause();
  });

});



///////////////////////////////////////// MODAL LATERAL DE PREGUNTAS //////////////////////////////////////////////

function mostrarModal() {
  let modal = document.getElementById("modalTab");
  modal.classList.remove("hidden");
  modal.classList.add("show");
}

function cerrarModal() {
  let modal = document.getElementById("modalTab");
  modal.classList.remove("show");
  modal.classList.add("hidden");
}


///MOSTRAR ALERTA BUTTON ENVIAR DEL FORMULARIO DE CONTACTO EN INDEX.HTML///

function mostrarAlerta() {
  alert("Salam Alikom, ¡Muchas gracias! Tu mensaje ha sido enviado con éxito.");
}


//ALERTA CON MI CORREO Y TELEFONO EN INDEX.HTML BUTTON CONTACTAME///

function mostrarInformacionContacto() {
  let correoElectronico = "moroccan-shop@example.com";
  let numeroTelefono = "00212688779290";
  let informacionContacto = "Correo electrónico: " + correoElectronico + "\nNúmero de teléfono: " + numeroTelefono;
  alert(informacionContacto);
}



///////////////////////////////////////// CHATBOT /////////////////////////////////////////////////



const button = document.querySelector("button");
const SpeechRecognition = window.SpeechRecognition;
const recognition = new SpeechRecognition();


recognition.onstart = function () {
  console.log("Speech Recognition started!");
};

recognition.onresult = function (event) {
  console.log(event);

  const spokenwords = event.results[0][0].transcript;

  console.log("spoken words are", spokenwords)

  computerSpeech(spokenwords);
};


function computerSpeech(words) {
  const speech = new SpeechSynthesisUtterance();
  speech.lang = "en-US"
  speech.pitch = 0.9;
  speech.volume = 1;
  speech.rate = 1;
  // speech.text = words;

  determineWords(speech, words);

  window.SpeechSynthesis.speak(speech);
};


if (navigator.getUserMedia) {
  navigator.getUserMedia({ audio: true },
    (stream) => {
      // Resto del código de reconocimiento de voz aquí

      let recognition = new recognition()

      ///// API Options
      recognition.lang = 'en-US';
      recognition.maxAlternatives = 1
      recognition.interimResults = true;

      ///////// Results callback
      recognition.onresult = (event) => console.log(event)

      recognition.start()
    },
    (error) => {
      console.error('Error al acceder al micrófono:', error);
    }
  );
} else {
  console.error('El navegador no admite getUserMedia.');
}



//////LLAMAR AL MICROFONO
// navigator.getUserMedia ({ audio: true },
//   (stream) => {
//      let recognition = new recognition()

//      ///// API Options
//      recognition.lang = 'en-US';
//      recognition.maxAlternatives = 1
//      recognition.interimResults = true;

//      ///////// Results callback
//      recognition.onresult = (event) => console.log(event)

//      recognition.start()
//   });


function determineWords(speech, words) {

  if (words.includes("hola")) {
    speech.text = "hola";
  }

  if (words.includes("cual es la capital de Marruecos")) {
    speech.text = "la capital es Rabat";
  }

  if (words.includes("es barato vivir en Marruecos")) {
    speech.text = "depende de la ciudad";
  }

  if (words.includes("que ciudad me recomendarias para empezar mi viaje")) {
    speech.text = "la ciudad roja Marrakech";
  }

  if (words.includes("como puedo llegar a Marrakech desde Bilbao")) {
    speech.text = "hay vuelos directos desde Santander y esta muy cerca de ti";
  }

  if (words.includes("como son los habitantes de Marruecos")) {
    speech.text = "Los marroquíes están muy apegados a su identidad, tradición y cultura";
  }

  if (words.includes("Qué idiomas hablan los marroquíes")) {
    speech.text = "Hay un total de 5 idiomas y dialectos por todo el pais";
  }

  if (words.includes("como se llama la ciudad azul de Marruecos")) {
    speech.text = "su nombre es Chefchaoun";
  }

  if (words.includes("es facil aprender el arabe")) {
    speech.text = "no para nada te puedes morir si lo intentas";
  }

  if (words.includes("Cuál es la comida tradicional de los marroquíes")) {
    speech.text = "el Cuscús";
  }

  if (words.includes("quien es la fundadora de este blog")) {
    speech.text = "Oumaima erraji y su hermano menor";
  }

  if (words.includes("me puedes abrir la pagina de google maps")) {
    speech.text = "si claro";
    window.open("https://maps.google.es");
  }
};


button.addEventListener('click', () => {
  recognition.start();

});

////** poner el chatbot como modal

document.addEventListener('DOMContentLoaded', () => {

  const botIcon = document.querySelector('.bot-icon');
  const botModal = document.querySelector('.bot-modal');
  const botClose = document.querySelector('.bot-close');
  const buttonBot = document.querySelector('.button_bot');

  botIcon.addEventListener('click', () => {
    botModal.style.display = 'block';
  });

  botClose.addEventListener('click', () => {
    botModal.style.display = 'none';
  });

  buttonBot.addEventListener('click', () => {
    recognition.start();
  });

});




