function setup() {
    video = createCapture (VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);
}

function draw() {
    background("#ff0000");
}

function modelloaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses() {
    if(SpeechRecognitionResultList.length > 0)
    {
        console.log(results);
    }
}