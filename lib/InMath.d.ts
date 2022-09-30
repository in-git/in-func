declare type pointer = {
    x: number;
    y: number;
};
export declare class InMath {
    static randomInt(max?: number, min?: number): number;
    static d2r: (deg: number) => number;
    static degreesAngle: (p1: pointer, p2: pointer) => number;
}
export {};
