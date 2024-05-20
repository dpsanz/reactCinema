function Home() {
  console.log(data)
    return(
      <main>
        <input type="text" name="busca" id="busca" placeholder="Digite aqui sua "></input>
          <div className="lista-filmes">
          {data.map( filme =>(
            <h1>{filme.title}</h1>
            ))}
          </div>
      </main>
    );
}

export default Home

<div className='card'>
  <h1> Título do filme</h1>


</div>