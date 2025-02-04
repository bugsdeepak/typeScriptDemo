//export keywaord used to export the module 
export class Point {
   private x: number;
   private y: number;
    
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }

    public setX(x: number): void {
        if (x < 0) {
            throw new Error('X value cannot be less than 0');
        } else {
            this.x = x;
        }
    }
    public setY(y: number): void {
        if (y < 0) {
            throw new Error('Y value cannot be less than 0');
        } else {
            this.y = y;
        }
    }

    public draw(): void {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}

