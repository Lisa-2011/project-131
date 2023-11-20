modelStatus=""
objects=[];
function preload(){
    img=loadImage("bedroom.jpeg");
}

function draw(){
if(modelStatus!=false){
    for(i=0 ;i<objects.length ;i++){

        document.getElementById("status").innerHTML="status : Object Detected";
        document.getElementById("number_of_objects").innerHTML="The cocossd model has detected "+objects.length+" objects."
        fill(red);
        percent = floor(objects[i].confidence*100);
        text(objects[i].label +" "+percent+"%",objects[i].x+15,objects[i].y+15);
        noFill();
        stroke(red);
        rect(objects[i].x, objects[i].y, objects[i].width,objects[i].height);
    }
}
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
    objects=results;
}