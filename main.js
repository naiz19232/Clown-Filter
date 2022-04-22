function preload(){
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
}
function draw(){
}
function take_snapshot(){
    save('myFilterImage.png');
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCanvas(VIDEO);
    video.size(300,300);
    video.hide();

    posenet = ml5.posenet(video.modelLoaded);
}
function draw(){
    image(video,0,300,300);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x = "+results[0].pose.nose.x);
        console.log("nose y = "+results[0].pose.nose.y);
    }
}