eyeX=0;
eyeY=0;

noseX=0;
noseY=0;

function preload(){
    eye=loadImage('https://i.postimg.cc/brNSW45Z/360-F-546888653-wx-NOVc-QXt-YXEp-Ad4-OKik-M9-Q0-Pz4-Jq-RDs-removebg-preview.png')
    nose=loadImage('https://i.postimg.cc/Wz3tXgDr/top-hat-png-clipart-picture-5a3c3582a57025-0281146015138952986776-removebg-preview.png')
}

function setup(){
    canvas = createCanvas(800, 800);
    canvas.center();
    video = createCapture(VIDEO);
     video.size(800,800);
     video.hide();

     poseNet = ml5.poseNet(video, modelLoaded);
     poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function draw() {
    image(video, 0 , 0, 800,800);
    image(nose, noseX-95, noseY-450, 200, 200);
    image(eye, eyeX-25, eyeY+35, 150, 150);
    
    
}

function take_snapshot(){
    save('myFilterImage.png')
}

function gotPoses(results){
    if(results.length> 0)
    {
        console.log(results);
        eyeX = results[0].pose.rightEye.x;
        eyeY = results[0].pose.rightEye.y;
        console.log("eye x = " + eyeX);
        console.log("eye x = " + eyeY);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose x = " + noseY);
    }
}