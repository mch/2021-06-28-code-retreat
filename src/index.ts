export function foo() {}

export class Cell {
    isAlive: boolean = false;

    constructor (state:  boolean) {
    }

    next(neighbor: number) {
        if (neighbor === 3) {
            this.isAlive = true;
        }
    }
}
