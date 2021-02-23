import 'regenerator-runtime';
import 'core-js/stable';
import { GameBoard } from './models/GameBoard';
import { Player } from './models/Player';
import { playAgainBtn, resetBtn } from './models/Buttons';
import { BoardCheck } from './logic/BoardCheck';

// Initial values
const gb = new GameBoard();
const p = new Player();

// State
export const state = {
  scoreX: 0,
  scoreO: 0,
  ticker: p.playerStatus,
  bc: true,
};

// Game controllers
function game(sq: HTMLElement): void {
  if (state.bc) {
    if (gb.checkSq(sq)) {
      gb.setSq(sq, state.ticker);
      state.bc = BoardCheck(gb, p);
      state.ticker = p.playerTurn();
      p.t.innerText = `It's ${state.ticker}'s turn!`;
      p.sX.innerText = state.scoreX.toString();
      p.sO.innerText = state.scoreO.toString();
      BoardCheck(gb, p);
    } else return;
  }
}

function playAgainEvent() {
  gb.resetGB();
  state.bc = true;
  state.ticker = p.firstPlayer();
  p.t.innerText = `It's ${state.ticker}'s turn!`;
}

function resetGameEvent() {
  playAgainEvent();
  state.scoreX = 0;
  state.scoreO = 0;
  p.sX.innerText = state.scoreX.toString();
  p.sO.innerText = state.scoreO.toString();
}

// Main Game IIFE
(() => {
  gb.resetGB();
  state.ticker = p.firstPlayer();
  p.t.innerText = `It's ${state.ticker}'s turn!`;

  p.sX.innerText = state.scoreX.toString();
  p.sO.innerText = state.scoreO.toString();

  gb.c0.addEventListener('click', () => game(gb.c0));
  gb.c1.addEventListener('click', () => game(gb.c1));
  gb.c2.addEventListener('click', () => game(gb.c2));
  gb.c3.addEventListener('click', () => game(gb.c3));
  gb.c4.addEventListener('click', () => game(gb.c4));
  gb.c5.addEventListener('click', () => game(gb.c5));
  gb.c6.addEventListener('click', () => game(gb.c6));
  gb.c7.addEventListener('click', () => game(gb.c7));
  gb.c8.addEventListener('click', () => game(gb.c8));

  playAgainBtn.addEventListener('click', playAgainEvent);
  resetBtn.addEventListener('click', resetGameEvent);
})();
