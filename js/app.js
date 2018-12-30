const game = new Game();

document.getElementById('begin-game').addEventListener('click', function (event) {
    game.startGame();
    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
});