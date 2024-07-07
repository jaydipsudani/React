
function customRender(reactElement,container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement)
}
const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank',
    },
    children:'click me to visit google hhh'
}




function myCustomReact(myReactElement,container){
    const p = document.createElement(myReactElement.type);
    p.innerHTML = myReactElement.children;
    p.setAttribute('id',myReactElement.props.id)
    container.appendChild(p)
}

const myReactElement ={
    type:'p',
    props:{
        id:"pid"
    },
    children:"hello this is custom p tag"
}

const mainContainer = document.querySelector('#root');
customRender(reactElement,mainContainer)
myCustomReact(myReactElement,mainContainer)

