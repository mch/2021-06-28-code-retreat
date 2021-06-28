import { expect } from "chai";
import { Cell } from '../src'

describe("something", () => {
  it('one living cell dies', () => {
    const alive = true
    const cell = new Cell(alive)
    cell.next(0)
    expect(cell.isAlive).equal(false)
  })

  it('makes a cell alive if it has three living neighbours', () => {
    const dead = false
    const cell = new Cell(dead)
    cell.next(3)
    expect(cell.isAlive).is.true
  })

  it('dead cell stay dead', () => {
    const dead = false
    const cell = new Cell(dead)
    cell.next(0)
    expect(cell.isAlive).is.false
  })

    it('alive cell with 2 neighbours stay alive', () => {
    const dead = false
    const cell = new Cell(dead)
    cell.next(0)
    expect(cell.isAlive).is.false
  })

});
