import React from 'react'
// falta linkear al detalle


function MovieCard(props) {
    return(
    props.data.map(pelicula => {
  
    <article class = "container">
        <img src={props.data.img}  alt="Foto ${pelicula.original_title}" className="foto-home" />
        <p> ${props.data.original_title} </p>
        <p>${props.data.descripcion}</p>
    </article>
    })
    )
}
export default MovieCard