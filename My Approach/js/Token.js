class Token {
    constructor(index, owner, played = false){
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.played = played;
    }
    drawHTMLToken() {
        const htmlToken = document.createElement('div');
        htmlToken.id = this.id;
        htmlToken.classList.add('token');
        htmlToken.style.backgroundColor = this.owner.color;
        document.getElementById('game-board-underlay').appendChild(htmlToken);
    }
    get htmlToken() {
        const tokenElement = document.getElementById(this.id);
        return tokenElement;
    }
}