// Tracks data

const tracks = [
  { src: 'music/Ve_Kamleya-Lyrical___Rocky_Aur_Rani_Kii_Prem_Kahaani___Ranveer___Alia___Arijit,Shreya,Pritam,Amitabh(256k).mp3', title: 'Song 1', artist: 'Arjit Singh' },
  { src: 'music/Vaaste_Song__Dhvani_Bhanushali,_Tanishk_Bagchi___Nikhil_D___Bhushan_Kumar___Radhika_Rao,_Vinay_Sapru(256k).mp3', title: 'Song 2', artist: 'Dhvani Bhanushali' },
  { src: 'music/mashup.mp3', title: 'Song 3', artist: 'Unknown' },
  { src: 'music/Mahiye_Jinna_Sohna_Bass_Boosted_।_Mahiye_Jinna_Sohna_Bass(256k).mp3', title: 'Song 4', artist: 'Darshan Raval' },
  { src: 'music/Dil_Diyan_Gallan_Song___Tiger_Zinda_Hai___Salman_Khan,_Katrina_Kaif___Atif_Aslam___Vishal___Shekhar(256k).mp3', title: 'Song 5', artist: 'Atif Aslam' }
];

let currentTrackIndex = 0;
let isFavorite = false;

const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const favBtn = document.getElementById('favBtn');
const seekSlider = document.getElementById('seekSlider');
const trackTitle = document.getElementById('trackTitle');
const trackArtist = document.getElementById('trackArtist');

// Load the first track
function loadTrack(index) {
  const track = tracks[index];
  audioPlayer.src = track.src;
  trackTitle.textContent = track.title;
  trackArtist.textContent = track.artist;
}
loadTrack(currentTrackIndex);

// Play/Pause functionality
playPauseBtn.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.textContent = '⏸️'; // Switch to Pause icon
  } else {
    audioPlayer.pause();
    playPauseBtn.textContent = '▶️'; // Switch to Play icon
  }
});

// Previous song functionality
prevBtn.addEventListener('click', () => {
  currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
  loadTrack(currentTrackIndex);
  audioPlayer.play();
  playPauseBtn.textContent = '⏸️'; // Switch to Pause icon
});

// Next song functionality
nextBtn.addEventListener('click', () => {
  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  loadTrack(currentTrackIndex);
  audioPlayer.play();
  playPauseBtn.textContent = '⏸️'; // Switch to Pause icon
});

// Favorite functionality
favBtn.addEventListener('click', () => {
  isFavorite = !isFavorite;
  favBtn.textContent = isFavorite ? '🤍':'❤️'; // Switch between filled and empty heart
});

// Seek functionality
audioPlayer.addEventListener('timeupdate', () => {
  const value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  seekSlider.value = value || 0;
});

seekSlider.addEventListener('input', () => {
  const newTime = (seekSlider.value / 100) * audioPlayer.duration;
  audioPlayer.currentTime = newTime;
});