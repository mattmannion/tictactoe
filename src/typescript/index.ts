import 'regenerator-runtime';
import 'core-js/stable';
import { GameBoard } from './models/GameBoard';

const gb = new GameBoard();

gb.c0.addEventListener('click', e => console.log('c0:', e.x));

(function game() {
  console.log('c0: ', gb.getSq(gb.c0));
})();
