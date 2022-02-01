import React from 'react'
import { NavLink } from 'react-router-dom'

import '../styles/components/header.scss'


export default function Header() {
    return (
        <>
            <header>
                <div className="menu">
                    <img src="http://placehold.it/" alt="place" />
                        <nav className="nav">
                            <ul>
                                <NavLink to="/"><li>Home</li></NavLink>
                                <NavLink to="/Page2"><li>Page2</li></NavLink>
                            </ul>
                        </nav>
                </div>
            </header>
        </>
    )
}