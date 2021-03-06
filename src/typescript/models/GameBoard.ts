export class GameBoard {
  // GameBoard Cells
  c0 = <HTMLElement>document.getElementById('c0');
  c1 = <HTMLElement>document.getElementById('c1');
  c2 = <HTMLElement>document.getElementById('c2');
  c3 = <HTMLElement>document.getElementById('c3');
  c4 = <HTMLElement>document.getElementById('c4');
  c5 = <HTMLElement>document.getElementById('c5');
  c6 = <HTMLElement>document.getElementById('c6');
  c7 = <HTMLElement>document.getElementById('c7');
  c8 = <HTMLElement>document.getElementById('c8');

  // GameBoard Methods
  getSq = (e: HTMLElement): HTMLElement => e;

  setSq = (e: HTMLElement, value: string): string => (e.innerHTML = value);

  checkSq = (sq: HTMLElement): boolean =>
    this.getSq(sq).innerText.length === 0 ? true : false;

  resetGB = () => {
    this.c0.innerText = '';
    this.c1.innerText = '';
    this.c2.innerText = '';
    this.c3.innerText = '';
    this.c4.innerText = '';
    this.c5.innerText = '';
    this.c6.innerText = '';
    this.c7.innerText = '';
    this.c8.innerText = '';
  };
}
