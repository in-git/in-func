type pointer = {
    x: number,
    y: number
}
export class InMath {
    /* 获取随机整数 */
    static randomInt(max = 0, min = 10) {
        return Math.round((Math.random() * min) + max);
    }
    /* 角度转弧度 */
    static d2r = (deg: number) => (deg * Math.PI) / 180.0;

    /* 计算两个点的夹角 */
    static degreesAngle = (p1: pointer, p2: pointer) => (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI;

    
}