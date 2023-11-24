import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import {FaRegTimesCircle} from 'react-icons/fa'
import '../scss/Cadastro.scss'

function Cadastro() {

  useEffect(() => {
    // Recupera os dados do sessionStorage de forma assíncrona
    const usuarioLogadoData = JSON.parse(sessionStorage.getItem('usuarioLogado'));
    
  }, []);

  //Hook useParams
  let {id} =useParams();

  //Hook useState

  const [novo, setNovo]= useState({
    id,
    nome:'',
    email:'',
    senha:''
  })
  //criando a variavel metodo post

  let metodo ='post'
  if(id){
    metodo='put'
  }

  const handleChange = (e)=>{
    setNovo({...novo, [e.target.name]:e.target.value})
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    fetch(`http://localhost:5000/usuarios/${id ? id:''}`,{
      method:metodo,
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(novo),
    }).then(()=>{
        alert('Cadastro feito')

        window.location= '/';
    });
  }

  useEffect(()=>{
    if(id){
      fetch(`http://localhost:5000/usuarios/${id}`)
      .then((resp)=>{
        return resp.json();
      })
      .then((data)=>{
        setNovo(data)
      })
    }
  }, [id]);

  return(
  <>
    <div className='pedido'>
        <h1 className='titulocadastroPed'>Cadastro</h1>
        <form className='dados' onSubmit={handleSubmit}>
        <label htmlFor="idusuario">Usuário:</label>
            <input
            className='inputPed'
            type="text"
            name="nome"
            value={novo.nome}
            placeholder="Digite o nome"
            onChange={handleChange}
            required
            />
            <label htmlFor="idcpf">CPF:</label>
            <input
            className='inputPed'
            type="number"
            name="CPF"
            value={novo.CPF}
            placeholder="Digite seu CPF"
            onChange={handleChange}
            required
            />
            <label htmlFor="idemail">email:</label>
            <input
            className='inputPed'
            type="email"
            name="email"
            value={novo.email}
            placeholder="Digite seu email"
            onChange={handleChange}
            required
            />
            <label htmlFor="idsenha">senha:</label>
            <input
            className='inputPed'
            type="password"
            name="senha"
            value={novo.senha}
            placeholder="Digite uma senha"
            onChange={handleChange}
            required
            />
            <button className='botao'type="submit">Cadastrar</button>
            <Link to="/">
            <FaRegTimesCircle/>
            </Link>
        </form>
    </div>
    
  </>
  )
  
}

export default Cadastro;
