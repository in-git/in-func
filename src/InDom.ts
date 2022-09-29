export class InDom {
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
    static openLink(href: string) {
        var link = document.createElement("a");
        link.href = href;
        link.target = "_blank";
        document.body.append(link);
        link.click();
        setTimeout(() => document.body.removeChild(link));
    };
    /* 快速查dom */
    static query(el: string) {
        return document.querySelector(el)
    }
    /* 获取最大宽度 */
    static maxWidth() {
        return window.innerWidth;
    }
    /* 获取最大高度 */
    static maxHeigth() {
        return window.innerHeight;
    }
    /* 获取位置 */
    static getPosition(el: string) {
        return document.querySelector(el)?.getBoundingClientRect()
    }
}