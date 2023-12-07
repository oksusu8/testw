let video;
let canvas;

function setup() {
  const canvasContainer = select('.camera-container');
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent(canvasContainer);

  video = createCapture(VIDEO);
  video.hide();
  video.size(windowWidth, windowHeight);
}

function draw() {
  background(0);
  image(video, 0, 0, width, height);
}


