const {bootstrapComponents:bootstrap} = require('../bootstrapComponents/bootstrapComponents');
const {tabBar} = require('./components/tabBar/tabBar');
const featuresSection = (()=>{
    const node = document.createElement('section');
    const grid = ((parentNode)=>{
        const node = bootstrap.createComponent('container',[],parentNode);
        const row = bootstrap.createComponent('row',[],node.node);
        const col = bootstrap.createComponent('col',[],row.node);
        return {node,row,col}
    })(node);
    const init = (()=>{
        const setupNode = ((node)=>{
            node.id = 'features';
        })(node);

        const setupGrid = ((grid)=>{
            grid.col.node.appendChild(tabBar.node);
        })(grid);
    })();
    return {node};
})();

module.exports = {
    featuresSection:featuresSection
};