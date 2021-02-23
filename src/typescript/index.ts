import 'regenerator-runtime';
import 'core-js/stable';
import { GameBoard } from './models/GameBoard';
import { Player } from './models/Player';

// Initial values
const gb = new GameBoard();
const p = new Player();

const state = {
  scoreX: 0,
  scoreO: 0,
  currentTurn: p.currentPlayer,
};

function handleEvent(cell: HTMLElement) {
  if (gb.checkSq(cell)) {
    gb.setSq(cell, state.currentTurn);
  } else return;
  state.currentTurn = p.playerTurn();
  p.pt.innerText = `It's ${state.currentTurn}'s turn!`;
}

// Main IIFE
(() => {
  gb.resetGB();
  state.currentTurn = p.firstPlayer();
  p.pt.innerText = `It's ${state.currentTurn}'s turn!`;

  p.sX.innerText = `X: ${state.scoreX} | `;
  p.sO.innerText = `O: ${state.scoreO}`;

  gb.c0.addEventListener('click', () => handleEvent(gb.c0));
  gb.c1.addEventListener('click', () => handleEvent(gb.c1));
  gb.c2.addEventListener('click', () => handleEvent(gb.c2));
  gb.c3.addEventListener('click', () => handleEvent(gb.c3));
  gb.c4.addEventListener('click', () => handleEvent(gb.c4));
  gb.c5.addEventListener('click', () => handleEvent(gb.c5));
  gb.c6.addEventListener('click', () => handleEvent(gb.c6));
  gb.c7.addEventListener('click', () => handleEvent(gb.c7));
  gb.c8.addEventListener('click', () => handleEvent(gb.c8));
})();
