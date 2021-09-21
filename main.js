img=" ";
status= "";
object = [];

function setup(){
    canvas = createCanvas(640 , 420);
    canvas.center();

    objectDectection = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Dectecting Object" ;
}

function preload(){
    img = loadImage("dog_cat.jpeg");
}

function modelLoaded(){
    console.log("Model Loaded!!!");
    status = true ;
    objectDectection.detect(img , gotResult); 
}

function gotResult(results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        object = results ; 
    }
}

function draw(){
    image(img,0,0,640,420);

    if(status != ""){
        for(i = 0 ; i < object.length; i++){

            document.getElementById("status").innerHTML = "Status : detecting object";
            fill("#ff0000");
            percent = floor(object[i].confidence * 100);
            text(object[i].label + "  " + percent + "%", object[i].x + 15 , object[i].y + 15);
            noFill();
            stroke("#ff0000");
            rect(object[i].x , object[i].y , object[i].width , object[i].height);
        }
    }
}



