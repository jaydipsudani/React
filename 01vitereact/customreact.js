import { createElement } from "react"

function customReander(reactElement,conatiner)
{
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.childern
    // domElement.setAttribute("href",reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // conatiner.appendChild(domElement)
    for(const prop in reactElement.props)
    {
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    conatiner.appendChild(domElement)
}

const reactElement= {
    type: 'a',
    props:{
        href:"https:\\www.google.com",
        target:'_blank'
    },
    childern:'click me to visit google'
}

const mainContainer = document.querySelector("#root")

customReander(reactElement,mainContainer)