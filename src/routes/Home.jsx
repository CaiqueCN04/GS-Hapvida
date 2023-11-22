import { } from 'react'
import '../scss/Home.scss'



function Home() {




    return (
        <>
            <main className='mainHome'>

                <section>
                    <header>
                        <img src="/src/imagens/chatbot.webp" alt="" className='img-home' />
                    </header>
                    <article>
                        <div className='tituloSolucao'>
                            <h1 className='titulo'>
                                INOVAÇÃO E TECNOLOGIA MOLDANDO O FUTURO DA SAÚDE
                            </h1>
                        </div>
                        <div className='prebanner'>
                            <div className="banner">
                                <p>
                                    Propomos uma solução inovadora para agilizar o atendimento médico, incluindo um site com chatbot para pré-triagem e diagnóstico por IA
                                    <br />
                                    , facilitando a interação paciente-médico e reduzindo filas.
                                </p>

                            </div>
                            <button type="button" className="maisinfo btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                Mais informações
                            </button>


                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            Introduzimos uma plataforma com chatbot para pré-diagnóstico, agendamento e telemedicina, visando otimizar o atendimento médico, reduzir filas e melhorar eficiência hospitalar.
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Understood</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </article>

                </section>

                <aside>
                    <div>
                        <h2>O que é a solução</h2>
                        <p>
                            A solução proposta é uma plataforma de saúde inovadora que visa reduzir o tempo de espera em filas de hospitais, proporcionando uma triagem eficiente por meio de um site com chatbot e inteligência artificial IA.
                        </p>
                    </div>
                    <hr />
                    <div>
                        <h2>O que ela fará</h2>
                        <p>
                            A plataforma permitirá que os usuários realizem um cadastro e, após login, acessem funcionalidades como agendamento de exames e telemedicina. A seção com chatbot coletará informações sobre os sintomas do paciente, conduzindo a uma pré-triagem e diagnóstico por IA. O paciente receberá um diagnóstico prévio imediato, validado por um médico, conferindo um "selo" de confiança. Em caso de discordância, o médico pode ajustar o diagnóstico, mantendo a confiabilidade do sistema.
                        </p>
                    </div>
                    <hr />
                    <div>
                        <h2>Como Funcionara</h2>
                        <p>
                            Ao optar por atendimento em tempo real, o paciente poderá escolher entre telemedicina ou atendimento presencial em um hospital. Para a primeira opção, as informações da pré-triagem serão enviadas ao médico, agilizando a consulta. Na segunda opção, os dados serão armazenados para facilitar a entrada no hospital, seja pela secretaria tradicional ou por meio de totens do projeto. A adesão de hospitais e sistemas de saúde ao software é crucial para a implementação bem-sucedida da solução.
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
                            <h2>Redução de Filas e Tempo de Espera:</h2>
                            <p>
                                A implementação da nossa solução proporciona uma significativa redução nas filas e no tempo de espera em hospitais. Ao realizar uma pré-triagem por meio de um chatbot e IA, o paciente recebe um diagnóstico prévio rapidamente, agilizando o processo e permitindo que os profissionais de saúde concentrem seus esforços nas situações mais críticas.
                            </p>
                        </div>
                    </article>

                    <article className='card'>
                        <img src="http://lorempixel.com.br/150/250/?2" alt="" />
                        <div className='textos'>
                            <h2>Otimização do Trabalho Médico:</h2>
                            <p>
                                A plataforma não apenas beneficia os pacientes, mas também otimiza o trabalho dos profissionais de saúde. A integração da inteligência artificial agiliza a coleta de informações e propõe diagnósticos preliminares, permitindo que os médicos concentrem seus esforços em casos mais complexos. Isso aumenta a eficiência e a capacidade de atendimento, garantindo uma distribuição mais equitativa dos recursos.
                            </p>
                        </div>
                    </article>

                    <article className='card'>
                        <img src="http://lorempixel.com.br/150/250/?3" alt="" />
                        <div className='textos'>
                            <h2>Acesso Facilitado à Telemedicina e Atendimento Presencial:</h2>
                            <p>
                                A solução oferece aos pacientes a opção de acessar atendimento médico em tempo real por meio de telemedicina ou optar pelo atendimento presencial no hospital. Essa flexibilidade não apenas atende às necessidades individuais, mas também contribui para a descentralização da assistência médica, abordando as disparidades geográficas na distribuição de profissionais de saúde.
                            </p>
                        </div>
                    </article>
                </section>
            </section>



        </>
    )
}

export default Home