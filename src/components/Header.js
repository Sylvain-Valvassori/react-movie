import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import '../styles/components/header.scss'


export default function Header() {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);


    return (
        <>
            <header>
                <div className="menu">
                    <div className="iconMenu" onClick={showSidebar}></div>
                        <nav className={sidebar ? 'navMenu active' : 'navMenu'}>
                            <ul onClick={showSidebar}>
                                <NavLink to="/react-movie"><li>Home</li></NavLink>
                                <NavLink to="/react-movie/Page2"><li>Page2</li></NavLink>
                            </ul>
                        </nav>
                </div>
            </header>
        </>
    )
}

