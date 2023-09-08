import React from 'react'
function SeriesCard(props) {
   let SeriesCard = props.data.map(function(serie){
    let path = serie.poster_path
    let img = `https://image.tmdb.org/t/p/w500/${path}`
    return(
    props.data.map(serie => {
    <article class = "container">
        <a href="./detalle-pelis.html?movie_id=${id}">
        <img src="${img}"  alt="Foto ${pelicula.original_title}" className="foto-home" /></a>
        <p> ${serie.original_title} </p>
        <p>${serie.release_date}</p>
    </article>
    })
    )
   })
}
export default SeriesCard