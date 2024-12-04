class Player {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.width = 130;
    this.height = 130;
    this.positionX = gameScreen.clientWidth / 2 - this.width / 2 + 20;
    this.positionY = gameScreen.clientHeight - this.height + 15;
    this.directionX = 0;
    this.directionY = 0;
    this.speed = 5;
    this.element = document.createElement("img");

    this.element.src = "images/monoUpdated png.png";
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.positionX}px`;
    this.element.style.top = `${this.positionY}px`;

    this.gameScreen.appendChild(this.element);
  }

  updatePosition() {
    this.positionX += this.speed * this.directionX;
    if (this.positionX < 0) {
      this.positionX = 0;
    }
    if (this.positionX > this.gameScreen.clientWidth - this.width) {
      this.positionX = this.gameScreen.clientWidth - this.width;
    }
  }

  move() {
    this.updatePosition();
    this.element.style.left = `${this.positionX}px`;
  }
  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    return (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    );
  }
}
