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
        _setCss(nav, ["navbar", "navbar-expand-lg", "navbar-light", "bg-light"]);
        let linkContainer = document.createElement('div');
        nav.appendChild(linkContainer);
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