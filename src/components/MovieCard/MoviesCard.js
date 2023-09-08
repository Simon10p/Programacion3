import React from 'react'
function MovieCard(props) {
   let movieCard = props.data.map(function(pelicula){
    let path = pelicula.poster_path
    let img = `https://image.tmdb.org/t/p/w500/${path}`
    return(
    props.data.map(pelicula => {
    <article class = "container">
        <a href="./detalle-pelis.html?movie_id=${id}">
        <img src="${img}"  alt="Foto ${pelicula.original_title}" className="foto-home" /></a>
        <p> ${pelicula.original_title} </p>
        <p>${pelicula.release_date}</p>
    </article>
    })
    )
   })
}
export default MovieCard