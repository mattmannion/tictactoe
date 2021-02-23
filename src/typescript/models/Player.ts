export class Player {
  sX = <HTMLElement>document.getElementById('scoreX');
  sO = <HTMLElement>document.getElementById('scoreO');
  t = <HTMLElement>document.getElementById('player-turn');
  x = 'X';
  o = 'O';
  e = '';

  playerStatus = '';

  // Player Methods
  resetCurrentPlayer = (): string => (this.playerStatus = this.e);

  setPlayer = (cp: string): string => (this.playerStatus = cp);

  playerTurn = (): string =>
    this.playerStatus === this.x
      ? this.setPlayer(this.o)
      : this.setPlayer(this.x);

  firstPlayer = (): string =>
    Math.trunc(Math.random() * 2) === 1
      ? this.setPlayer(this.x)
      : this.setPlayer(this.o);
}
