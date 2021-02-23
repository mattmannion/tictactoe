import { GameBoard } from '../models/GameBoard';
import { Player } from '../models/Player';

export const boardCheck = (gb: GameBoard, player: Player): boolean => {
  const c0 = gb.c0.innerText;
  const c1 = gb.c1.innerText;
  const c2 = gb.c2.innerText;
  const c3 = gb.c3.innerText;
  const c4 = gb.c4.innerText;
  const c5 = gb.c5.innerText;
  const c6 = gb.c6.innerText;
  const c7 = gb.c7.innerText;
  const c8 = gb.c8.innerText;

  if (
    //left to right   [top]
    (c0 === player.x && c1 === player.x && c2 === player.x) ||
    //left to right   [middle]
    (c3 === player.x && c4 === player.x && c5 === player.x) ||
    //left to right   [bottom]
    (c6 === player.x && c7 === player.x && c8 === player.x) ||
    //top left to bottom right [diagonal]
    (c0 === player.x && c4 === player.x && c8 === player.x) ||
    //bottom left to top right [diagonal]
    (c6 === player.x && c4 === player.x && c2 === player.x) ||
    //top to bottom   [left]
    (c0 === player.x && c3 === player.x && c6 === player.x) ||
    //top to bottom   [middle]
    (c1 === player.x && c4 === player.x && c7 === player.x) ||
    //top to bottom   [right]
    (c2 === player.x && c5 === player.x && c8 === player.x)
  ) {
    console.log(`
  /////////////////////////////
  ////////// X Wins! //////////
  /////////////////////////////
    `);
    return false;
  } else if (
    //left to right   [top]
    (c0 === player.o && c1 === player.o && c2 === player.o) ||
    //left to right   [middle]
    (c3 === player.o && c4 === player.o && c5 === player.o) ||
    //left to right   [bottom]
    (c6 === player.o && c7 === player.o && c8 === player.o) ||
    //top left to bottom right [diagonal]
    (c0 === player.o && c4 === player.o && c8 === player.o) ||
    //bottom left to top right [diagonal]
    (c6 === player.o && c4 === player.o && c2 === player.o) ||
    //top to bottom   [left]
    (c0 === player.o && c3 === player.o && c6 === player.o) ||
    //top to bottom   [middle]
    (c1 === player.o && c4 === player.o && c7 === player.o) ||
    //top to bottom   [right]
    (c2 === player.o && c5 === player.o && c8 === player.o)
  ) {
    console.log(`
    /////////////////////////////
    ////////// O Wins! //////////
    /////////////////////////////
    `);
    return false;
  } else if (
    c0 !== player.e &&
    c1 !== player.e &&
    c2 !== player.e &&
    c3 !== player.e &&
    c4 !== player.e &&
    c5 !== player.e &&
    c6 !== player.e &&
    c7 !== player.e &&
    c8 !== player.e
  ) {
    console.log(`
    /////////////////////////////
    ///////// Tie Game! /////////
    /////////////////////////////
    `);
    return false;
  } else return true;
};
