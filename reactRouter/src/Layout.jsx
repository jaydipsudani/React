import React from 'react'
import Home from './componets/Home/Home.jsx'
import About from './componets/About/About.jsx'
import { Outlet } from 'react-router-dom'
import Header from './componets/Header/Header.jsx'
import Footer from './componets/Footer/Footer.jsx'
function Layout() {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}

export default Layout
