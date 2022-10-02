console.log("This is clone client site of spotify");

//Initializing the variables
let songIndex = 0;
let audioElement = new Audio('Harrdy Sandhu/songs/0.mp3')
let masterplay = document.getElementById('masterPlay');
let masterSongName = document.getElementById('masterSongName');
let gif = document.getElementById('img3');
let spotifyProgessBar = document.getElementById('ProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));



let songs = [
    { songName: 'Backbone', filePath: 'Harrdy Sandhu/songs/Backbone - Harrdy Sandhu.mp3', coverPath: 'Harrdy Sandhu/Images/backbone.jpg'},
    { songName: 'Bijlee Bijlee', filePath: 'Harrdy Sandhu/songs/Backbone - Harrdy Sandhu.mp3', coverPath: 'Harrdy Sandhu/Images/bijlee.jpg'},
    { songName: 'Dance Like', filePath: 'Harrdy Sandhu/songs/Backbone - Harrdy Sandhu.mp3', coverPath: 'Harrdy Sandhu/Images/dancelike.jpg'},
    { songName: 'Horn Blow', filePath: 'Harrdy Sandhu/songs/Backbone - Harrdy Sandhu.mp3', coverPath: 'Harrdy Sandhu/Images/hornblow.jpg'},
    { songName: 'Kudiyan Lahore Diya', filePath: 'Harrdy Sandhu/songs/Backbone - Harrdy Sandhu.mp3', coverPath: 'Harrdy Sandhu/Images/kudiyalahore.jpg'},
    { songName: 'Kya Baat Ay', filePath: 'Harrdy Sandhu/songs/Backbone - Harrdy Sandhu.mp3', coverPath: 'Harrdy Sandhu/Images/kyabaataye.jpg'},
    { songName: 'Naah', filePath: 'Harrdy Sandhu/songs/Backbone - Harrdy Sandhu.mp3', coverPath: 'Harrdy Sandhu/Images/naah.jpg'},
    { songName: 'Titliaan', filePath: 'Harrdy Sandhu/songs/Backbone - Harrdy Sandhu.mp3', coverPath: 'Harrdy Sandhu/Images/titliyaan.jpg'},
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
        audioElement.src = `Harrdy Sandhu/songs/${songIndex}.mp3`;
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
    audioElement.src = `Harrdy Sandhu/songs/${songIndex}.mp3`;
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
    audioElement.src = `Harrdy Sandhu/songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
    gif.style.opacity = 1;
})


