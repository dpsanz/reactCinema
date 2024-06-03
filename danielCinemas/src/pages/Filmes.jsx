import { useState } from 'react'

function Filmes() {
    
    const apiKey = 'b4f785e1aaf80eb1f9d3913d2e5e38d9'
    const urlBase = 'https://api.themoviedb.org/3/movie/'
    const urlImg = 'https://image.tmdb.org/t/p/w342/'

    fetch('https://api.themoviedb.org/3/movie/popular?api_key=b4f785e1aaf80eb1f9d3913d2e5e38d9')
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(erro => console.log(erro))


    return (
        <>
            <h1>Filmes</h1>
            {
                Filmes.map(filme => (
                    <div className='card-filme' key{filme.id}>
                    <h1>{filme.title}</h1>
                    </div>
                ))
            }
        </>
    );
}

export default Filmes;