import React from 'react'
import {outlet} from 'react-router-dom'
import Header from '.'
function Layout() {
    return (
        <>
       <Header/>
       <outlet/>
       <Footer />
       </>
    )
}

export default Layout
