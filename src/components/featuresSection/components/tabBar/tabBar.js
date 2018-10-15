const {bootstrapComponents:bootstrap} = require('../../../bootstrapComponents/bootstrapComponents');
const tabText = ['control suite', 'tracker', 'showcase', 'monetizer'];
const tabBar = ((tabText)=>{
    const node = bootstrap.createComponent('container').node;

    const init = ((mainNode)=>{

        const tabButtons = ((tabText)=>{
            const buttonClasses = ['btn-outline-primary','btn-outline-success','btn-outline-danger','btn-outline-warning'];
            const buttons = [];
            tabText.forEach((header,index)=>{
                let button = document.createElement('button');
                let cssClasses = ['btn'];
                cssClasses.push(buttonClasses[index % buttonClasses.length]);
                cssClasses.forEach((cssClass)=>{button.classList.toggle(cssClass)});
                button.textContent = header.toUpperCase();
                buttons.push(button);
            });
            return buttons;
        })(tabText);

        const buttonGroup = ((tabButtons)=>{
            const container = bootstrap.createComponent('btn-group');
            tabButtons.forEach((tabButton)=>{container.node.appendChild(tabButton)});
            return container.node;
        })(tabButtons);

        const setupMainNode = ((mainNode,children)=>{
            mainNode.id = 'tabBar';
            children.forEach((child)=>{mainNode.appendChild(child)})
        })(mainNode,[buttonGroup]);

    })(node);
    return {node};
})(tabText);

module.exports = {
    tabBar:tabBar
};