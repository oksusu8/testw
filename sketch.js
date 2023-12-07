let video;
let capturedImage;

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(width, height * 0.66);
  video.hide();
  
  captureBtn = select('#captureBtn');
  
  captureBtn.mousePressed(talk);
  
}

function draw() {
  background(0);
  image(video, 0, height * 0.08);
  
}

function talk() {
  console.log('촬영');
}
