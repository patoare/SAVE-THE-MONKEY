class Game {
    constructor () {
    this.welcomeScreen = document.getElementById('welcome-player');
    this.gameScreen = document.getElementById('playing-game');
    this.gameResult = document.getElementById('game-result');
    this.height = 600;
    this.width = 500;
    this.player =
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameLoop1 
    this.currentFrame = 0;
    this.obstacles = [];
    }
    start(){
      this.welcomeScreen.style.display = 'none';
      this.gameScreen.style.display = 'flex';
    
      this.gameScreen.style.height = `${this.height}px`;
      this.gameScreen.style.width = `${this.width}px`;

      this.player = new Player(this.gameScreen)
      
      this.obstacles.push(new Obstacles(this.gameScreen))
      
      this.gameLoop()
    }

    gameLoop() {
        this.gameLoop1 = setInterval(() => {
        this.currentFrame += 1;
        this.player.move();

        this.obstacles.forEach(currentObstacle => {
        currentObstacle.move()
        })

        }, 1000 / 60)
    }
}
