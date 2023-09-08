import React from 'react'
// falta linkear al detalle


function MovieCard(props) {
    return(
    props.data.map(pelicula => {
  
    <article class = "container">
        <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"  alt="Foto ${pelicula.original_title}" className="foto-home" />
        <p> ${pelicula.original_title} </p>
        <p>${pelicula.release_date}</p>
    </article>
    })
    )
}
export default MovieCard