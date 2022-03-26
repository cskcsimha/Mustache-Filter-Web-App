noseX=0
noseY=0

function preload(){
    Mustache_image=loadImage('https://i.postimg.cc/RC3Yn9C9/Mustache.png');
}

function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(Mustache_image, noseX, noseY, 40, 40);
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
        noseX=results[0].pose.nose.x-20
        noseY=results[0].pose.nose.y-2
        console.log("nosex="+noseX);
        console.log("nosey="+noseY);
    }
}