export function foo() {}

export class Cell {
    isAlive: boolean = false;

  constructor (state:  boolean) {
    this.isAlive = state
    }

    next(neighbor: number) {
        if (neighbor === 3) {
            this.isAlive = true;
        } else if (neighbor === 0 || neighbor === 1) {
          this.isAlive = false;
        } else {
            this.isAlive = false
        }
    }
}
