import { GameBoard } from '../models/GameBoard';
import { Player } from '../models/Player';
import { state } from '../index';

export let result = '';

export const BoardCheck = (gb: GameBoard, p: Player): boolean => {
  const c0 = gb.c0.innerText;
  const c1 = gb.c1.innerText;
  const c2 = gb.c2.innerText;
  const c3 = gb.c3.innerText;
  const c4 = gb.c4.innerText;
  const c5 = gb.c5.innerText;
  const c6 = gb.c6.innerText;
  const c7 = gb.c7.innerText;
  const c8 = gb.c8.innerText;

  if (state.bc) {
    if (
      //left to right   [top]
      (c0 === p.x && c1 === p.x && c2 === p.x) ||
      //left to right   [middle]
      (c3 === p.x && c4 === p.x && c5 === p.x) ||
      //left to right   [bottom]
      (c6 === p.x && c7 === p.x && c8 === p.x) ||
      //top left to bottom right [diagonal]
      (c0 === p.x && c4 === p.x && c8 === p.x) ||
      //bottom left to top right [diagonal]
      (c6 === p.x && c4 === p.x && c2 === p.x) ||
      //top to bottom   [left]
      (c0 === p.x && c3 === p.x && c6 === p.x) ||
      //top to bottom   [middle]
      (c1 === p.x && c4 === p.x && c7 === p.x) ||
      //top to bottom   [right]
      (c2 === p.x && c5 === p.x && c8 === p.x)
    ) {
      state.scoreX += 1;
      console.log(
        `
  /////////////////////////////
  ////////// X Wins! //////////
  /////////////////////////////
    `,
        `X: ${state.scoreX} | O: ${state.scoreO}`
      );
      result = 'x';
      return false;
    } else if (
      //left to right   [top]
      (c0 === p.o && c1 === p.o && c2 === p.o) ||
      //left to right   [middle]
      (c3 === p.o && c4 === p.o && c5 === p.o) ||
      //left to right   [bottom]
      (c6 === p.o && c7 === p.o && c8 === p.o) ||
      //top left to bottom right [diagonal]
      (c0 === p.o && c4 === p.o && c8 === p.o) ||
      //bottom left to top right [diagonal]
      (c6 === p.o && c4 === p.o && c2 === p.o) ||
      //top to bottom   [left]
      (c0 === p.o && c3 === p.o && c6 === p.o) ||
      //top to bottom   [middle]
      (c1 === p.o && c4 === p.o && c7 === p.o) ||
      //top to bottom   [right]
      (c2 === p.o && c5 === p.o && c8 === p.o)
    ) {
      state.scoreO += 1;
      console.log(
        `
  /////////////////////////////
  ////////// O Wins! //////////
  /////////////////////////////
    `,
        `X: ${state.scoreX} | O: ${state.scoreO}`
      );
      result = 'o';
      return false;
    } else if (
      c0 !== p.e &&
      c1 !== p.e &&
      c2 !== p.e &&
      c3 !== p.e &&
      c4 !== p.e &&
      c5 !== p.e &&
      c6 !== p.e &&
      c7 !== p.e &&
      c8 !== p.e
    ) {
      console.log(
        `
  /////////////////////////////
  ///////// Tie Game! /////////
  /////////////////////////////
    `,
        `X: ${state.scoreX} | O: ${state.scoreO}`
      );
      result = 'tie';
      return false;
    } else return true;
  } else {
    if (result === 'x') p.t.innerText = 'X Wins!';
    else if (result === 'o') p.t.innerText = 'O Wins!';
    else p.t.innerText = "It's a tie...";
    return false;
  }
};
