declare type pointer = {
    x: number;
    y: number;
};
export declare class InMath {
    static getMaxWidth(): number;
    static getMaxHeight(): number;
    static randomInt(max?: number, min?: number): number;
    static degs2Rads: (deg: number) => number;
    static degreesAngle: (p1: pointer, p2: pointer) => number;
}
export {};
