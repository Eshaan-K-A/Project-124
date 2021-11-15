function setup(){
    video = createCapture(VIDEO);
    video.size(550,600);
    video.position(150, 160)
    canvas = createCanvas(550, 430);
    canvas.position(770, 240);
    

    posenet = ml5.poseNet(video, function(){
        console.log("Posenet is Initialised!")
    })
    posenet.on("pose", gotPoses)
}


function draw(){
    
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
    nosex = results[0].pose.nose.x;
    nosey = results[0].pose.nose.y;
    rightWristx = results[0].pose.rightWrist.x;
    leftWristx = results[0].pose.leftWrist.x;
    sizeOfDSquare = floor(leftWristx - rightWristx);
}