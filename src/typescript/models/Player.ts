export class Player {
  x = 'X';
  o = 'O';
  e = '';

  currentPlayer = '';

  resetCurrentPlayer = (): string => (this.currentPlayer = this.e);

  setPlayer = (cp: string): string => (this.currentPlayer = cp);
}

export const playerTurn = (p: Player): string => {
  if (p.currentPlayer === p.x) return p.setPlayer(p.o);
  else return p.setPlayer(p.x);
};
