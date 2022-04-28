img = "";
status = "";

function preload() {
    img = loadImage("desk.jpg");
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
}

function draw() {
    image(img, 0, 0, 500, 300);

}

function back3() {
    window.location = "index.html";
}