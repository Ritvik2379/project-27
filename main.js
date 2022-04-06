music=music.mp3;
music2=music2.mp3;

function preload(){
    song = loadSound(music);
    song1= loadSound(music2);
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,600,500);
}