// ====== ELEMENTS ======
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const exitBtn = document.getElementById('exitBtn');
const overlay = document.getElementById('overlay');
const closeOverlay = document.getElementById('closeOverlay');
const detailsBtn = document.getElementById('detailsBtn');
const detailsOverlay = document.getElementById('detailsOverlay');
const closeDetails = document.getElementById('closeDetails');
const suggestBtn = document.getElementById('suggestBtn');
const yayOverlay = document.getElementById('yayOverlay');
const closeYay = document.getElementById('closeYay');

let yesFontSize = 16;
let yesPadding = 10;

// Show main overlay
yesBtn.addEventListener('click', () => {
  overlay.classList.remove('hidden');
});

// Close main overlay
closeOverlay.addEventListener('click', () => {
  overlay.classList.add('hidden');
});

// Show details overlay
detailsBtn.addEventListener('click', () => {
  detailsOverlay.classList.remove('hidden');
});

// Close details overlay
closeDetails.addEventListener('click', () => {
  detailsOverlay.classList.add('hidden');
});

// Grow YES button when clicking NO or Exit
function growYes() {
  yesFontSize += 5;
  yesPadding += 3;
  yesBtn.style.fontSize = yesFontSize + "px";
  yesBtn.style.padding = yesPadding + "px " + (yesPadding * 2) + "px";
}
noBtn.addEventListener('click', growYes);
exitBtn.addEventListener('click', growYes);

// Suggest Outfit button behavior
suggestBtn.addEventListener('click', () => {
  // Open Google Form in new tab
  window.open("https://docs.google.com/forms/d/e/1FAIpQLSeg4gWKN9QeRRxeMXIuncqj-9V1BFgRrgeEwKB5MQ0DwKneEg/viewform?usp=dialog", "_blank");
});

// Close Yay popup
closeYay.addEventListener('click', () => {
  yayOverlay.classList.add('hidden');
});

// ====== SHOW YAY POPUP IF URL HAS ?yay=1 ======
window.addEventListener('load', () => {
  const params = new URLSearchParams(window.location.search);
  if (params.get('yay') === '1') {
    yayOverlay.classList.remove('hidden');
  }
});
