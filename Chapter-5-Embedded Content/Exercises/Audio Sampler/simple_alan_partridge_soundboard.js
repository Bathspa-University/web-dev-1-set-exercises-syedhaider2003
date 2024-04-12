const samplesPerPage = 9;
let currentPage = 0;
const samples = [
  { name: "Ah ha",  audio: "Audio/ah-ha.mp3" },
  { name: "Back of the net",  audio: "Audio/back-of-the-net.mp3"},
  { name: "Back of the net",  audio: "Audio/back-of-the-net.mp3"},
  { name: "Bang out of the order",  audio: "Audio/bangoutoforder.mp3"},
  { name: "Dan",  audio: "Audio/dan.mp3"},
  { name: "Email of the evening",  audio: "Audio/emailoftheevening.mp3"},
];

document.addEventListener("DOMContentLoaded", () => {
  const soundboard = document.querySelector(".soundboard");

  function renderSamples() {
    const start = currentPage * samplesPerPage;
    const end = start + samplesPerPage;
    soundboard.innerHTML = "";
    const soundboardGrid = document.createElement("div");
    soundboardGrid.classList.add("soundboard-grid");
    for (let i = start; i < end && i < samples.length; i++) {
      const sample = samples[i];
      const audio = new Audio(sample.audio);
      const sampleElement = document.createElement("div");
      sampleElement.classList.add("sample");
      sampleElement.innerHTML = `
        <p>${sample.name}</p>
      `;
      sampleElement.addEventListener("click", () => playSample(audio));
      soundboardGrid.appendChild(sampleElement);
    }
    soundboard.appendChild(soundboardGrid);
  }

  function playSample(audio) {
    audio.currentTime = 0; 
    audio.play();
  }

  renderSamples();
});
