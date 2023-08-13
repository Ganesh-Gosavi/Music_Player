 const music = document.querySelector('audio')
 const img = document.querySelector('img')
 const play = document.getElementById("play");
 const title = document.getElementById("title");
 const artist = document.getElementById("artist");
 const prev = document.getElementById("prev");
 const next = document.getElementById("next");

 const songs=[
    {
    name:"audio1",
    title:"Shape of You",
    artist:"Ed Sheeran"
    // img :"img1",
 },

 {
    name:"audio2lonely",
    title:"Im Mr Lonely",
    artist:"Lonely"
 },

 {
    name:"audio3",
    title:"Jay Shree Ram",
    artist:"Ram"
 },
 {
    name:"audio4",
    title:"Closer",
    artist:"Andrew Taggart"
 },
 {
    name:"audio5",
    title:"Darkhaast",
    artist:"Mithoon"
 },
 {
    name:"audio6",
    title:"Despacito",
    artist:"Andrés Torres"
 },
 
]

let isPlaying = false;

// for playing funtionality 
playMusic=() =>{
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play' ,'fa-pause');
    img.classList.add("anime");
    
 };

// for pause funtionality 
pauseMusic=() =>{
    isPlaying = false;
    music.pause();
    play.classList.replace( 'fa-pause','fa-play');
    img.classList.remove("anime");
    
 };

 play.addEventListener('click',()=>{
    // if(isPlaying){
    //     pauseMusic();
    // }else{
    //     playMusic();
    // }
    isPlaying ? pauseMusic() : playMusic();
 })
// //  changing music Data
// const loadSong =(songs)=>{
//     title.textContent = songs.title;
//     artist.textContent = songs.artist; 
//     music.src = "music/" + songs.name + ".mp3";
//     img.src = "images/"+songs.name + ".jpg";
    

// }
// // songIndex = 0;
// loadSong(songs[0]);

// // const nextSong = () =>{
// //     songIndex = (songIndex+1)%songs.length;
// //     loadSong(songs[songIndex]);
// // };
// // next.addEventListener('click ',nextSong);
// // next.addEventListener('click ',prevSong);



