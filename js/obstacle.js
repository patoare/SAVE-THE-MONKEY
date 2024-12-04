class Obstacles {
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.width = 50;
        this.height = 50;
        this.positionX = Math.round(Math.random() * (gameScreen.clientWidth - this.width)) + 20;
        this.positionY = 0;
        this.speed = 7;
        this.element = document.createElement('img');

        if (Math.random() > 0.5) {
            this.type = "good";
        } else {
            this.type = "bad";
        }
       
        if (this.type === "good") {
            this.element.src = "images/finalBanana.png";
        } 
        else {
            this.element.src = "images/Arana_vector_png.png";
        }

        this.element.style.position = 'absolute'; 
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.positionX}px`;
        this.element.style.top = `${this.positionY}px`;
        
        this.gameScreen.appendChild(this.element) 
    }     

    updatePosition() {
     this.positionY += this.speed   
    }

    move() {
        this.updatePosition();
        this.element.style.top = `${this.positionY}px`;
        
        if(this.positionY > this.gameScreen.clientHeight - 40) {
            this.element.remove()
        }
    }
}