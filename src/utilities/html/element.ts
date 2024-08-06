export type Element = {
    id: string;
    html: HTMLHtmlElement;
    style: CSSStyleDeclaration;
}

/**
 * @description Creates an element object with the given id
 *
 * @param {string} id - The id of the element
 *
 * @returns {Element} - The element object
 */
export function createElement(id: string): Element {
    return {
        id: id,
        html: document.getElementById(id) as HTMLHtmlElement,
        style: (document.getElementById(id) as HTMLHtmlElement).style as CSSStyleDeclaration,
    };
}