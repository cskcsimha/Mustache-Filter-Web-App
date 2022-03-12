function preload(){
    
}

function setup(){
    canvas=createCanvas(640, 480);
    canvas.position(110.250);
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function draw(){
    image(video, 0, 0, 300, 300);
}

function take_snapshot(){
    save('Mypicture.png');
}

function modelLoaded(){
    console.log('modelLoaded')
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nosex="+results[0].pose.nose.x);
        console.log("nosey="+results[0].pose.nose.y);
    }
}