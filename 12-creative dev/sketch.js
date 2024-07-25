let flowers = [];
let particles = [];
let num = 15;
let rotationSpeed = 1;
let flowerSize = 140;
let bgColor = '#000000';
let flowerColor = '#ffffff';
let pulse = 0;
let pulseDirection = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  updateFlowers();

  let numFlowersSlider = document.getElementById('numFlowers');
  numFlowersSlider.addEventListener('input', function() {
    num = this.value;
    updateFlowers();
  });

  let rotationSpeedSlider = document.getElementById('rotationSpeed');
  rotationSpeedSlider.addEventListener('input', function() {
    rotationSpeed = this.value;
    updateFlowerSpeeds();
  });

  let flowerSizeSlider = document.getElementById('flowerSize');
  flowerSizeSlider.addEventListener('input', function() {
    flowerSize = this.value;
    updateFlowers();
  });

  let bgColorPicker = document.getElementById('bgColor');
  bgColorPicker.addEventListener('input', function() {
    bgColor = this.value;
  });

  let flowerColorPicker = document.getElementById('flowerColor');
  flowerColorPicker.addEventListener('input', function() {
    flowerColor = this.value;
  });

  for (let i = 0; i < 200; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(bgColor);
  translate(width / 2, height / 2);

  pulse += pulseDirection * 0.1;
  if (pulse > 5 || pulse < -5) pulseDirection *= -1;

  for (let i = 0; i < num; i++) {
    flowers[i].display();
  }

  for (let particle of particles) {
    particle.update();
    particle.show();
  }

  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Picard", 0, height / 2 - 40);
}

function updateFlowers() {
  flowers = [];
  for (let i = 0; i < num; i++) {
    let size = flowerSize - i * 10;
    if (i % 2 == 0) {
      flowers[i] = new Flower(size, 100, 15, 7, (i + 1) * 0.1 * rotationSpeed);
    } else {
      flowers[i] = new Flower(size, 100, 15, 7, (i + 1) * -0.1 * rotationSpeed);
    }
  }
}

function updateFlowerSpeeds() {
  for (let i = 0; i < num; i++) {
    if (i % 2 == 0) {
      flowers[i].speed = (i + 1) * 0.1 * rotationSpeed;
    } else {
      flowers[i].speed = (i + 1) * -0.1 * rotationSpeed;
    }
  }
}
