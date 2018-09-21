const navbar = (()=>{
    const _initContainer = ()=>{
        let navContainer = document.createElement('div');
        navContainer.classList.toggle('container');
        return navContainer;
    };
    const _setCss = (node, cssClassArray)=>{
        cssClassArray.forEach((cssClass)=>{ node.classList.toggle(cssClass) });
        return node
    };
    const _initNav = ()=>{
        let nav = document.createElement('nav');
        _setCss(nav, ["navbar", "navbar-expand-lg", "navbar-light", "bg-light", "justify-content-center"]);
        let containers = ((size, parentNode)=>{
            let containerArray = [];
            for(let i = 0; i < size; i++){
                let container = document.createElement('div');
                _setCss(container, ['mx-2']);
                containerArray.push(container);
                parentNode.appendChild(container);
            }
            return containerArray;
        })(3, nav);
        let linkContainer = containers[1];
        let buttonContainer = containers[2];

        const links = ((linkTextArray, parentNode) => {
            let unorderedList = document.createElement('ul');
            _setCss(unorderedList,["navbar-nav"]);
            let listElementArray = [];
            linkTextArray.forEach((linkText) => {
                let listElement = document.createElement('li');
                _setCss(listElement, ["nav-item"]);
                listElementArray.push(listElement);
                let hyperlink = document.createElement('a');
                hyperlink.href = '#';
                _setCss(hyperlink, ["nav-link"]);
                hyperlink.textContent = linkText;
                listElement.appendChild(hyperlink);
                unorderedList.appendChild(listElement);
                return listElementArray;
            });
            parentNode.appendChild(unorderedList);
        })(["Home", "Products", "Applications", "Features", "Technology", "Company"],linkContainer);

        const buttons = ((buttonTextArray, parentNode)=>{
            let buttonClasses = ["btn-primary", "btn-outline-primary"];
            for(let i = 0; i < buttonTextArray.length; i++){
                let button = document.createElement('button');
                _setCss(button, ['btn', buttonClasses[i % buttonClasses.length], 'mx-2']);
                button.textContent = buttonTextArray[i];
                parentNode.appendChild(button);
            }
        })(["Request Demo", "Login"], buttonContainer);

        return nav;
    };
    const render = ()=>{
        let container = _initContainer();
        container.appendChild(_initNav());
        return container;
    };
    return {render};
})();

module.exports = {
    navbar:navbar
};