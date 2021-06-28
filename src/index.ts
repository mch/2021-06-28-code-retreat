export function foo() {}

export class Cell {
    isAlive: boolean = false;

  constructor (state:  boolean) {
    this.isAlive = state
    }

    next(neighbor: number) {
        if (neighbor === 3) {
            this.isAlive = true;
        } else if (neighbor === 0) {
          this.isAlive = false;
        }
    }
}
