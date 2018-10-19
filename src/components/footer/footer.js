const {bootstrapComponents:bootstrap} = require('../bootstrapComponents/bootstrapComponents');
const footer = (()=>{
    let node = document.createElement('footer');

    let container = ((cssClasses, parentNode)=>{
        let node = document.createElement('div');
        cssClasses.forEach((cssClass)=>{node.classList.toggle(cssClass)});
        parentNode.appendChild(node);
        let row = bootstrap.Row(5,[],node);
        let columns = ((columns, headers)=>{
            columns.map((column, index)=>{
                let header = ((headerText, cssClasses, parentNode)=>{
                    let node = document.createElement('h6');
                    node.textContent = headerText.toUpperCase();
                    cssClasses.forEach((cssClass)=>{ node.classList.toggle(cssClass) });
                    parentNode.appendChild(node);
                })(headers[index], ['text-primary'], column.node);
                return {header}
            });
        })(row.columns, ['contact', 'products', 'technology', 'support', 'company']);

        return {columns,node,row}

    })(['container'], node);

    return {container, node}
})();

module.exports = {
    footer:footer
};