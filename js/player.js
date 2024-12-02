class Player {
constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.width = 150;
    this.height = 150;
    this.positionX = gameScreen.clientWidth / 2 - this.width / 2 + 20 ;
    this.positionY = gameScreen.clientHeight - this.height + 15;
    this.directionX = 0;
    this.directionY = 0;
    this.speed = 5;
    this.element = document.createElement('img');
   
    this.element.src = "../images/monkey.png";
    this.element.style.position = 'absolute'; 
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.positionX}px`;
    this.element.style.top = `${this.positionY}px`;
    
    this.gameScreen.appendChild(this.element)
}     
 
updatePosition() {
    this.positionX += this.speed * this.directionX;
    
}

move() {
    this.updatePosition();
    this.element.style.left = `${this.positionX}px`;
}
}