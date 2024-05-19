const textInput = document.getElementById("text");
const speed = document.getElementById("speed");
const play = document.getElementById("play-button");
const pause = document.getElementById("pause-button");
const stop = document.getElementById("stop-button");
const cot = document.getElementById("cot");
const restartBtn = document.getElementById("restartBtn");

play.addEventListener("click", () => {
  playText(textInput.value);
});
pause.addEventListener("click", () => {
  pauseText();
});
stop.addEventListener("click", () => {
  stopText();
});

function playText(text) {
  if (speechSynthesis.pause && speechSynthesis.speaking) {
    speechSynthesis.resume();
  }
  const utterance = new SpeechSynthesisUtterance(text);

  utterance.addEventListener("end", () => {
    textInput.disabled = false;
  });
  textInput.disabled = true;
  speechSynthesis.speak(utterance);
}
function pauseText() {
  if (speechSynthesis.speaking) {
    speechSynthesis.pause();
  }
}
function stopText() {
  speechSynthesis.resume();
  speechSynthesis.cancel();
  textInput.disabled = false;
  textInput.value = "";
}
cot.addEventListener("click", () => {
  textInput.value = "write something";
  textInput.focus();
});
restartBtn.addEventListener("click", () => {
  textInput.value = "";
  textInput.focus();
}); //
