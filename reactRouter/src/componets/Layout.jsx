import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './componets/Header/Header'
import Footer from './componets/Footer/Footer'
function Layout() {
    return (
        <>
    <header/>
    <Outlet/>
    <footer/>
        </>
    )
}

export default Layout
