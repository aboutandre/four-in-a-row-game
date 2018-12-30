const game = new Game();

document.getElementById('begin-game').addEventListener('click', function (event) {
    game.startGame();
    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
});

/**
 * Listen to keyboard presses
 */
document.addEventListener('keydown', function (e) {
    game.handleKeydown(e);
});