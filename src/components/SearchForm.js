import React from 'react'
import '../styles/components/searchForm.scss'
// import iconSearch from '../images/icons/icon-searchWhite.svg'



export default function SearchForm() {


    return (
        <>
            <form className="searchForm">
                <input type="text" placeholder="Search..." />
                <svg type="submit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.6 48.6"><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><path d="M40.43,36.89A11.18,11.18,0,0,1,37.61,25.5a19.32,19.32,0,0,0-32-19.85,19.32,19.32,0,0,0,19.85,32,11.18,11.18,0,0,1,11.39,2.82l7.44,7.44a2.5,2.5,0,0,0,3.53,0h0a2.5,2.5,0,0,0,0-3.53Zm-11-7.46a14.32,14.32,0,1,1,4.19-10.12A14.23,14.23,0,0,1,29.43,29.43Z"/></g></g></svg>
            </form>
        </>
    )
}

