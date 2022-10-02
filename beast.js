console.log("This is clone client site of spotify");

//Initializing the variables
let songIndex = 0;
let audioElement = new Audio('Beast Mode/songs/0.mp3')
let masterplay = document.getElementById('masterPlay');
let masterSongName = document.getElementById('masterSongName');
let gif = document.getElementById('img3');
let spotifyProgessBar = document.getElementById('ProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));



let songs = [
    { songName: 'Creed Track Song', filePath: 'Harrdy Sandhu/songs/Backbone - Harrdy Sandhu.mp3', coverPath: 'Beast Mode/images/creed.jpg'},
    { songName: 'Enemy', filePath: 'Harrdy Sandhu/songs/Backbone - Harrdy Sandhu.mp3', coverPath: 'Beast Mode/images/enemy.jpg'},
    { songName: 'Payback', filePath: 'Harrdy Sandhu/songs/Backbone - Harrdy Sandhu.mp3', coverPath: 'Beast Mode/images/payback.jpg'},
    { songName: 'Rise of Sultan', filePath: 'Harrdy Sandhu/songs/Backbone - Harrdy Sandhu.mp3', coverPath: 'Beast Mode/images/rise.jpg'},
    { songName: 'Unstoppable - Sia', filePath: 'Harrdy Sandhu/songs/Backbone - Harrdy Sandhu.mp3', coverPath: 'Beast Mode/images/sia.jpg'},
    { songName: 'Six Days', filePath: 'Harrdy Sandhu/songs/Backbone - Harrdy Sandhu.mp3', coverPath: 'Beast Mode/images/sixdays.jpg'},
    { songName: 'Venom', filePath: 'Harrdy Sandhu/songs/Backbone - Harrdy Sandhu.mp3', coverPath: 'Beast Mode/images/venom.jpg'},
    { songName: 'Go Hard or Go Home', filePath: 'Harrdy Sandhu/songs/Backbone - Harrdy Sandhu.mp3', coverPath: 'Beast Mode/images/gohard.jpg'},
]

//setting up the songs names and song template by logic
songItems.forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

//handling the play-pause click of masterplay
masterplay.addEventListener('click', () =>{
    if(audioElement.paused || audioElement.current)
    {
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else
    {
        audioElement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    spotifyProgessBar.value = progress;
})

spotifyProgessBar.addEventListener('change', () =>{
    audioElement.currentTime = spotifyProgessBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        gif.style.opacity = 1;
        audioElement.src = `Beast Mode/songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    })
})

document.getElementById('next').addEventListener('click', (element) => {
    if (songIndex>=7) {
        songIndex = 0;
        
    }
    else {
        songIndex = songIndex + 1;
        
    }
    audioElement.src = `Beast Mode/songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
    gif.style.opacity = 1;
})

document.getElementById('previous').addEventListener('click', (element) => {
    if (songIndex<=0) {
        songIndex = 0;
        
    }
    else {
        songIndex = songIndex - 1;
        
    }
    audioElement.src = `Beast Mode/songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
    gif.style.opacity = 1;
})


