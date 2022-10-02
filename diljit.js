let songIndex = 0; //song name for which song is playing
let audioElement = new Audio('Music/0.mp3');
let masterplay = document.getElementById('masterPlay');
let masterSongName = document.getElementById('masterSongName');
let spotifyProgessBar = document.getElementById('ProgressBar');
let gif = document.getElementById('img3');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songItemPlays = Array.from(document.getElementsByClassName('songItemPlay'));

let songs = [
    { songName: 'Born To Shine', filePath: 'Music/Born To Shine.mp3', coverPath: 'Images/born to shine.jpg' },
    { songName: 'GOAT', filePath: 'Music/GOAT.mp3', coverPath: 'Images/GOAT cover.jpg' },
    { songName: 'Lover', filePath: 'Music/Lover.mp3', coverPath: 'Images/Lover cover.jpg' },
    { songName: 'Laembadgini', filePath: 'Music/Laembadgini.mp3', coverPath: 'Images/Laembadgini cover.jpg' },
    { songName: 'Do You Know', filePath: 'Music/Do You Know.mp3', coverPath: 'Images/Do you know cover.jpg' },
    { songName: 'Putt Jatt Da', filePath: 'Music/Putt Jatt Da.mp3', coverPath: 'Images/Putt Jatt Da cover.jpg' },
    { songName: 'Proper Patola', filePath: 'Music/Proper Patola.mp3', coverPath: 'Images/Proper Patola cover.jpg' },
    { songName: 'Soorma Anthem', filePath: 'Music/Soorma Anthem.mp3', coverPath: 'Images/Soorma Anthem cover.jpg' },
    { songName: 'Chauffeur', filePath: 'Music/Chauffeur.mp3', coverPath: 'Images/Chauffeur cover.jpg' },
    { songName: 'Sauda Khara Khara', filePath: 'Music/Sauda Khara Khara.mp3', coverPath: 'Images/Sauda Khara Khara cover.jpg' }
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

// let audioElement = new Audio('Born To Shine.mp3');
// audioElement.play();

// function togglehide(){
//     let audioElement = new Audio('Born To Shine.mp3');
//     audioElement.play();
//     document.getElementsByClassName('.SInfo img').innerCSS
// }


//handling the play pause click;
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})

//listen to the events
//(1)-->To update the song time
audioElement.addEventListener('timeupdate', () => {
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    //currentTime / Duration * 100 = percentage;
    spotifyProgessBar.value = progress;
})

spotifyProgessBar.addEventListener('change', () => {
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
        audioElement.src = `Music/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    })
})


document.getElementById('next').addEventListener('click', (element) => {
    if (songIndex>=9) {
        songIndex = 0;
        
    }
    else {
        songIndex = songIndex + 1;
        
    }
    audioElement.src = `Music/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
    gif.style.opacity = 1;
})


document.getElementById('previous').addEventListener('click', () => {
    if (songIndex<=0) {
        songIndex = 0;
    }
    else {
        songIndex = songIndex - 1;
    }
    audioElement.src = `Music/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
    gif.style.opacity = 1;
})

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.classList.remove('fa-pause');
    element.classList.add('fa-play');
})