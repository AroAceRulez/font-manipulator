function setup(){
video=createCapture(VIDEO);
video.size(600,550);
video.position(20,100);

canvas= createCanvas(600,550);
canvas.position(800,100);

poseNet=ml5.poseNet(video,modelLoaded);         //initializing the posenet model and storing it in a variable//
poseNet.on('pose',gotPoses);                    //executing or running the model//
}

function gotPoses(results){
    if(results.length>0){
        console.log(results)
    }
    
}

function modelLoaded(){
    console.log("model is loaded");
}

function draw(){
background("#51a2e8")
}