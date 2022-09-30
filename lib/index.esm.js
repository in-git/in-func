class InDom {
    /* 复制指定文本 */
    static copyText(text = '') {
        const tempdom = document.createElement('input');
        tempdom.value = text;
        document.body.appendChild(tempdom);
        tempdom.select();
        document.execCommand('Copy');
        tempdom.remove();
    }
    /* 打开一个链接 */
    static openLink(href) {
        var link = document.createElement("a");
        link.href = href;
        link.target = "_blank";
        document.body.append(link);
        link.click();
        setTimeout(() => document.body.removeChild(link));
    }
    ;
    /* 快速查dom */
    static query(el) {
        return document.querySelector(el);
    }
    /* 获取最大宽度 */
    static maxWidth() {
        return window.innerWidth;
    }
    /* 获取最大高度 */
    static maxHeight() {
        return window.innerHeight;
    }
    /* 获取位置 */
    static getPosition(el) {
        return document.querySelector(el)?.getBoundingClientRect();
    }
}

class InUtils {
    static randomHex = () => `#${Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padEnd(6, '0')}`;
}

class InMath {
    /* 获取随机整数 */
    static randomInt(max = 0, min = 10) {
        return Math.round((Math.random() * min) + max);
    }
    /* 角度转弧度 */
    static d2r = (deg) => (deg * Math.PI) / 180.0;
    /* 计算两个点的夹角 */
    static degreesAngle = (p1, p2) => (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI;
}

export { InDom, InMath, InUtils };
