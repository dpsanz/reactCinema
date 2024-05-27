import data from '../../artigos.json'

function Home() {
    console.log(data)
    return (
        <>
            <main>
                <input type="text" name="busca" id="busca" placeholder="Digite aqui sua busca"/>
                <div className="lista-filmes">
                    {
                        data.map(
                            filme => (
                                <div className="card" key={filme.title}>
                                    <h1>{filme.title}</h1>
                                    <img src={filme.image} alt={filme.image} />
                                    <div className="tag">
                                      {filme.tags.map(tag =>(
                                        <span key={tag} className='text purple-900'>
                                          {tag}
                                        </span>
                                      ))}
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
            </main>
        </>
    );
}

export default Home;