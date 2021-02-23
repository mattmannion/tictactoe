import 'regenerator-runtime';
import 'core-js/stable';
import { GameBoard } from './models/GameBoard';
import { Player } from './models/Player';

// Initial values
const gb = new GameBoard();
const player = new Player();

const state = {
  scoreX: 0,
  scoreO: 0,
  currentTurn: player.currentPlayer,
};

function handleEvent(cell: HTMLElement, state: string) {
  state = player.playerTurn();
  if (gb.checkSq(cell)) {
    gb.setSq(cell, state);
    console.log(state);
  } else return;
}

// Main IIFE
(() => {
  state.currentTurn = player.firstPlayer();
  console.log('first turn', state.currentTurn);

  gb.c0.addEventListener('click', () => handleEvent(gb.c0, state.currentTurn));
  gb.c1.addEventListener('click', () => handleEvent(gb.c1, state.currentTurn));
  gb.c2.addEventListener('click', () => handleEvent(gb.c2, state.currentTurn));
  gb.c3.addEventListener('click', () => handleEvent(gb.c3, state.currentTurn));
  gb.c4.addEventListener('click', () => handleEvent(gb.c4, state.currentTurn));
  gb.c5.addEventListener('click', () => handleEvent(gb.c5, state.currentTurn));
  gb.c6.addEventListener('click', () => handleEvent(gb.c6, state.currentTurn));
  gb.c7.addEventListener('click', () => handleEvent(gb.c7, state.currentTurn));
  gb.c8.addEventListener('click', () => handleEvent(gb.c8, state.currentTurn));
})();
