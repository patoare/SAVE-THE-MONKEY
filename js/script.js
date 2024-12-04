window.onload = function () {
    const startButton = document.getElementById("start-Btn");
    const restartButton = document.getElementById("restart-Btn");

    let game
  
    
    startButton.addEventListener("click", function () {
        startGame();
      });
      restartButton.addEventListener("click", function () {
        startGame();
      });

    }
    function startGame() {
      console.log("start game");
      game = new Game();
      game.start()
    }
    document.addEventListener('keydown', (event) => {
        if(event.code === 'KeyA' || event.code === 'ArrowLeft') {
            game.player.directionX = -1.5;
        } if (event.code === 'KeyD' || event.code === 'ArrowRight') {
            game.player.directionX = 1.5;
        }
    } )

    document.addEventListener('keyup', (event) => {
        if(event.code === 'KeyA' || event.code === 'ArrowLeft' || event.code === 'KeyD' || event.code === 'ArrowRight') {
            game.player.directionX = 0;
        } 
        }
    ) 

