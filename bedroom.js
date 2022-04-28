objectDetector = "";
img = "";
status = "";
objects = [];

function preload() {
    img = loadImage("bedroom.jpg");
}

function setup() {
    canvas = createCanvas(500, 300);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, result) {
    if (error) {
        console.log(error);
    }
    console.log(result);
    objects = result;
}

function draw() {
    if (status != undefined) {
        image(img, 0, 0, 500, 300);
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status - Objects Detected";
            fill("red");
            accuracy = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + accuracy + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("red");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function back1() {
    window.location = "index.html";
}