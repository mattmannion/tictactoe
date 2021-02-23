export class Player {
  x = 'X';
  o = 'O';
  e = '';

  currentPlayer = '';

  // Player Methods
  resetCurrentPlayer = (): string => (this.currentPlayer = this.e);

  setPlayer = (cp: string): string => (this.currentPlayer = cp);

  playerTurn = (): string =>
    this.currentPlayer === this.o
      ? this.setPlayer(this.x)
      : this.setPlayer(this.o);

  firstPlayer = (): string =>
    Math.trunc(Math.random() * 2) === 1
      ? this.setPlayer(this.x)
      : this.setPlayer(this.o);
}
