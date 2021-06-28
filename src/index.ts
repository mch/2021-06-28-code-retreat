export function foo() {}

export class Cell {
    isAlive: boolean = false;

    constructor (state: {alive: boolean, neighbor: number}) {
    }

    next(neighbor: number) {
        if (neighbor === 3) {
            isAlive = true;
        }
    }
}
