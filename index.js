/**
 * Renders app and returns remove method.
 * @param {function} app - Component you want to render.
 * @param {Object} node - DOM element you want to render to.
 * @param {function} renderMethod - Your chosen libraries render method.
 * @param {boolean = true} deleteNode - If you want to completely remove node.
 */
const createApp = (app, node, renderMethod, deleteNode = true) => {
    renderMethod(app, node);
    return () => {
        renderMethod(null, node);
        if(deleteNode){
            node.remove();
        }
    }
}

export default createApp;