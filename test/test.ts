import { expect } from "chai";
import { Cell } from '../src'

describe("something", () => {
  it('one living cell dies', () => {
    const alive = true
    const cell = new Cell(alive)
    cell.next()
    expect(cell.isAlive).equal(false)
  })
});
