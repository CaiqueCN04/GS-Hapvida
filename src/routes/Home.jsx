import {} from 'react'
import '../scss/Home.scss'



function Home() {


    

    return (
        <>
            <main className='mainHome'>
            
                <section>
                    <header>
                        <img src="/src/imagens/chatbot.webp" alt="" className='img-home'/>
                    </header>
                    <article>
                        <div className='tituloSolucao'>
                            <h1>
                                TITULO DA SOLUÇÃO
                            </h1>
                        </div>
                        
                        <div className="banner">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos unde porro am.
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            </p>
                            <a href="#">Mais informação</a>
                        </div>
                    </article>
                </section>
                
                <aside>
                    <div>
                        <h2>O que é a solução</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente suscipit, perferendis dignissimos esse quibusdam temporibus, nobis sit corporis nisi officia mollitia accusantium maiores illo laudantium. Impedit sunt minus quisquam dignissimos!
                        </p>
                    </div>
                    <hr/>
                    <div>
                        <h2>O que ela fará</h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore sequi esse alias omnis repellat tempora incidunt? Eius rem corrupti esse perferendis nihil quam voluptatibus adipisci? Quae animi dicta consequuntur? Sint?
                        </p>
                    </div>
                    <hr/>
                    <div>
                        <h2>Como Funcionara</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ducimus suscipit quidem fugiat alias necessitatibus accusantium molestias, aspernatur libero ipsa soluta eius vero, omnis nihil obcaecati sequi harum corporis consectetur.
                        </p>
                    </div>
                </aside>                
            </main>
            <section className=''>
                <h2>
                    Vantagens 
                </h2>
                <section className="vantagens">
                    <article className='card'>
                    <img src="http://lorempixel.com.br/150/250/?1" alt="" />
                    <div className='textos'>
                        <h1>Loren</h1>
                        <h2>Loren Ipsun</h2>
                        <p>
                        Lorem, ipsum dolor sit amet. Lorem, ipsum dolor sit amet.
                        Lorem, ipsum dolor sit amet. Lorem, ipsum dolor sit amet.
                        </p>
                    </div>
                    </article>

                    <article className='card'>
                        <img src="http://lorempixel.com.br/150/250/?2" alt="" />
                        <div className='textos'>
                            <h1>Loren</h1>
                            <h2>Loren Ipsun</h2>
                            <p>
                            Lorem, ipsum dolor sit amet. Lorem, ipsum dolor sit amet.
                            Lorem, ipsum dolor sit amet. Lorem, ipsum dolor sit amet.
                            </p>
                        </div>
                    </article>

                    <article className='card'>
                    <img src="http://lorempixel.com.br/150/250/?3" alt="" />
                    <div className='textos'>
                        <h1>Loren</h1>
                        <h2>Loren Ipsun</h2>
                        <p>
                        Lorem, ipsum dolor sit amet. Lorem, ipsum dolor sit amet.
                        Lorem, ipsum dolor sit amet. Lorem, ipsum dolor sit amet.
                        </p>
                    </div>
                    </article>
                </section>
            </section>
            
            
            
        </>
    )
}

export default Home