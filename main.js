nosex=0
nosey=0
function preload() {
    clown_nose=loadImage('mustache.png')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function draw() {
    image(video, 0, 0, 450, 300);
    image(clown_nose, nosex, nosey, 50, 30);
}

function take_snapshot() {
    save('myFilterImage.png');
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    console.log(".poses called")
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " +results[0].pose.nose.x);
        console.log("nose y = " +results[0].pose.nose.y);
        nosex=results[0].pose.nose.x+40
        nosey=results[0].pose.nose.y
    }
}