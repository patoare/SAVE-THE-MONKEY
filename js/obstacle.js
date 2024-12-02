class Obstacles {
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.width = 75;
        this.height = 75;
        this.positionX = gameScreen.clientWidth / 2 - this.width / 2 + 20 ;
        this.positionY = 0;
        this.speed = 5;
        this.element1 = document.createElement('img');
        this.element2 = document.createElement('img');
       
        this.element1.src = "../images/finalBanana.png";
        this.element2.src = "../images/arana_Vector_png.png";
        this.element1.style.position = 'absolute'; 
        this.element1.style.width = `${this.width}px`;
        this.element1.style.height = `${this.height}px`;
        this.element1.style.left = `${this.positionX}px`;
        this.element1.style.top = `${this.positionY}px`;

        this.element2.style.position = 'absolute'; 
        this.element2.style.width = `${this.width}px`;
        this.element2.style.height = `${this.height}px`;
        this.element2.style.left = `${this.positionX}px`;
        this.element2.style.top = `${this.positionY}px`;
        
        this.gameScreen.appendChild(this.element1)
        this.gameScreen.appendChild(this.element2)
    }     

    updatePosition() {
     this.positionY += this.speed   
    }

    move() {
        this.updatePosition();
        this.element1.style.left = `${this.positionY}px`;
    }
}