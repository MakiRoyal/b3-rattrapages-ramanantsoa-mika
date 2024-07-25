class Particle {
    constructor() {
      this.reset();
    }
  
    reset() {
      this.x = random(-width / 2, width / 2);
      this.y = random(-height, 0);
      this.size = random(2, 5);
      this.speed = random(1, 3);
    }
  
    update() {
      this.y += this.speed;
      if (this.y > height / 2) {
        this.reset();
      }
    }
  
    show() {
      noStroke();
      fill(255);
      ellipse(this.x + (mouseX - width / 2) * 0.1, this.y + (mouseY - height / 2) * 0.1, this.size);
    }
  }
  