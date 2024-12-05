class Game {
    constructor () {
    this.welcomeScreen = document.getElementById('welcome-player');
    this.gameScreen = document.getElementById('playing-game');
    this.gameResult = document.getElementById('game-result');
    this.scorePlayer = document.getElementById('score');
    this.livesPlayer = document.getElementById('lives');
    this.finalScore = document.getElementById('final-score');
    this.audioGame = document.getElementById('gameAudio');
    this.bananaAudio = document.getElementById('bananaAudio');
    this.spiderAudio = document.getElementById('spiderAudio');
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
      this.gameResult.style.display = 'none';
      this.gameScreen.style.height = `${this.height}px`;
      this.gameScreen.style.width = `${this.width}px`;

      this.player = new Player(this.gameScreen)
      
      this.gameLoop()
    }

    gameLoop() {
        this.gameLoop1 = setInterval(() => {
        this.currentFrame += 1;
        this.scorePlayer.innerText = this.score;
        this.livesPlayer.innerText = this.lives;
        if(this.currentFrame % 45 === 0) {
          this.obstacles.push(new Obstacles(this.gameScreen))
        }

        this.player.move();
        const followingObs = [];
        this.obstacles.forEach(currentObstacle => {
        currentObstacle.move()
        
        if (this.player.didCollide(currentObstacle)) {
           currentObstacle.element.remove()
           
           if(currentObstacle.type === "good"){
            bananaAudio.currentTime = 0;
            bananaAudio.play();
            this.score += 100;
            
           }
           else if(currentObstacle.type === "bad") {
            this.spiderAudio.currentTime =0;
            this.spiderAudio.play();            
            this.lives -=1;
           }
           
           
           
           if(this.lives < 0) {
            this.gameIsOver = true
           }
        } 
        else if (currentObstacle.positionY < this.gameScreen.clientHeight) {
          followingObs.push(currentObstacle)
        } 
        })

        this.obstacles = followingObs

        if(this.gameIsOver) {
          gameAudio.pause();
          gameAudio.currentTime = 0;
          console.log(this.score)
          this.finalScore.innerText = this.score;
          clearInterval(this.gameLoop1);
          this.player.element.remove();

          this.obstacles.forEach(currentObstacle => {
           currentObstacle.element.remove()
          })
          
          this.gameScreen.style.display = 'display';
          this.gameResult.style.display = 'block';
        }
        }, 1000 / 60)
    }
}
