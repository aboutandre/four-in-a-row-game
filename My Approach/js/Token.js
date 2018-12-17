class Token {
    constructor(index, owner, played = false){
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.played = played;
    }
}