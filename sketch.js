let video;
let canvas;

function setup() {
  const canvasContainer = select('.camera-container');
  //canvas = createCanvas(600, 400);
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

function windowResized() {
  // 윈도우 크기가 변경되면 canvas와 video 크기를 다시 조정
  resizeCanvas(windowWidth, windowHeight);
  video.size(width, height);
}

