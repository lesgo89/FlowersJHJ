// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Como en la canción Yellow", time: 41 },
  { text: "mi amor por ti sigue brillando.", time: 47 },
  { text: "Te extraño y espero con ansias", time: 54 },
  { text: "el día en que estemos juntos de nuevo", time: 59 },
  { text: "Mi amor Nadia.", time: 67 },

];

//Como las flores que tanto te gustan, mi amor por ti ilumina cada día, aunque no estés aquí. 
  //    Te extraño profundamente, esperando el momento en que volvamos a florecer juntos
//"Como en la canción Yellow, mi amor por ti sigue brillando. Te extraño y espero con ansias el día en que estemos juntos de nuevo, Nadia.
//Atte; Jean C."
// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);