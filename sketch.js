let buttonX, buttonY;

let video;

let autoBtn, captureBtn, poseBtn, screenBtn;

let isVisible = true;

let images = [];
let scrollX = 0;
let scrollSpeed = 2; // 필요에 따라 스크롤 속도를 조절하세요

function preload() {
  for (let i = 1; i <= 2; i++) {
    images.push(loadImage(`image${i}.JPG`));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  buttonX = width / 2;
  buttonY = height / 2;

  video = createCapture(VIDEO);
  video.size(width, height * 0.66);
  video.hide();
  layoutDraw();

  rectMode(CENTER);

  autoBtn = select('#autoBtn');
  captureBtn = select('#captureBtn');
  poseBtn = select('#poseBtn');
  screenBtn = select('#screenBtn');
  screenBtn.mousePressed(toggleFullscreen);

  poseBtn.mousePressed(posetab);

  // 모바일 터치 이벤트를 등록합니다.
  createTouchListeners();
}

function draw() {
  image(video, 0, height * 0.04);

  if (!isVisible) {
    // 이미지를 가로로 나열하여 표시합니다.
    for (let i = 0; i < images.length; i++) {
      image(images[i], i * width - scrollX, 0, width, height);
    }
  }
}

function layoutDraw() {
  fill(255);
  noStroke();
  rect(0, 0, width, height * 0.04);

  fill(0);
  noStroke();
  rect(0, height * 0.7, width, height * 0.3);
}

function toggleFullscreen() {
  let fs = fullscreen();
  fullscreen(!fs);
}

function posetab() {
  isVisible = !isVisible;
  fill(0);
  noStroke();
  circle(buttonX, height * 0.88, height * 0.14);
  screenBtn.hide();
  captureBtn.hide();
  poseBtn.hide();
}

function createTouchListeners() {
  // 터치 시작 이벤트 등록
  canvas.ontouchstart = touchStarted;
  // 터치 이동 이벤트 등록
  canvas.ontouchmove = touchMoved;
  // 터치 종료 이벤트 등록
  canvas.ontouchend = touchEnded;
}

function touchStarted() {
  // 터치 시작 이벤트 처리
}

function touchMoved(event) {
  // 터치 이동 이벤트 처리
  // 터치 이벤트의 변위 값을 사용하여 스크롤 위치를 업데이트합니다.
  scrollX += event.touches[0].movementX * scrollSpeed;
  
  // 이미지의 너비를 넘어갈 때 스크롤 위치를 초기화합니다.
  if (scrollX > images.length * width) {
    scrollX = images.length * width;
  } else if (scrollX < 0) {
    scrollX = 0;
  }

  // 터치 이벤트의 기본 동작을 막습니다.
  event.preventDefault();
}

function touchEnded() {
  // 터치 종료 이벤트 처리
}


