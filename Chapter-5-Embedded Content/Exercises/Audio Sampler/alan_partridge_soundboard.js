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
  const textToSpeechInput = document.getElementById("text-to-speech-input");
  const textToSpeechButton = document.getElementById("text-to-speech-button");
  const prevPageButton = document.getElementById("prev-page");
  const nextPageButton = document.getElementById("next-page");

  function renderSamples() {
    const start = currentPage * samplesPerPage;
    const end = start + samplesPerPage;
    soundboard.innerHTML = "";
    for (let i = start; i < end && i < samples.length; i++) {
      const sample = samples[i];
      const audio = new Audio(sample.audio);
      audio.addEventListener('loadedmetadata', function() {
        const duration = formatDuration(audio.duration);
        const sampleElement = document.createElement("div");
        sampleElement.classList.add("sample");
        sampleElement.innerHTML = `
          <p>${sample.name}</p>
          <p>${duration}</p>
        `;
        sampleElement.addEventListener("click", () => playSample(sample.audio));
        soundboard.appendChild(sampleElement);
      });
      audio.load(); 
    }
    prevPageButton.classList.toggle("hidden", currentPage === 0);
    nextPageButton.classList.toggle("hidden", end >= samples.length);
  }

  function playSample(audioFile) {
    const audio = new Audio(audioFile);
    audio.play();
  }

  function formatDuration(duration) {
    
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  textToSpeechButton.addEventListener("click", () => {
    const text = textToSpeechInput.value.trim();
    if (text !== "") {
      
      alert("Text to speech feature is not implemented yet!");
    }
  });

  prevPageButton.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      renderSamples();
    }
  });

  nextPageButton.addEventListener("click", () => {
    const maxPage = Math.ceil(samples.length / samplesPerPage) - 1;
    if (currentPage < maxPage) {
      currentPage++;
      renderSamples();
    }
  });

  renderSamples();
});
