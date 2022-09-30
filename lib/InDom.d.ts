export declare class InDom {
    static copyText(text?: string): void;
    static openLink(href: string): void;
    static query(el: string): Element | null;
    static maxWidth(): number;
    static maxHeight(): number;
    static getPosition(el: string): DOMRect | undefined;
}
