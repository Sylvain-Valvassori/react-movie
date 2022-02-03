import React from 'react'
import '../styles/components/movieCard.scss'

export default function MovieCard() {
    return (
        <>
            <div className="movie-card">
                <span className="movie-grade">9.5</span>
                <footer className="movie-title">
                    <h2>Titre</h2>
                </footer>
            </div>  
        </>
    )
}

