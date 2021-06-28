import { expect } from "chai";
import { Cell } from '../src'

describe("something", () => {
  it('one living cell dies', () => {
    const alive = true
    const cell = new Cell(alive)
    cell.next()
    expect(cell.isAlive).equal(false)
  })

  it('makes a cell alive if it has three living neighbours', () => {
    const dead = false
    const cell = new Cell(dead)
    cell.next()
    expect(cell.isAlive).is.true
  })
});
