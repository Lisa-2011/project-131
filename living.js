modelStatus=""

function preload(){
    img=loadImage("living_room.jpeg");
}

function setup(){
    canvas=createCanvas(380,380);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model is Loaded!");
    modelStatus=true;
    objectDetector.detect(img,gotResult);

}

function gotResult(error,results){

    console.log(results);
}