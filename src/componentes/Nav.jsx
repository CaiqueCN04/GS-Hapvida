import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../scss/Nav.scss';

function Nav() {
  const [userLogado, setUserLogado] = useState(null);

  useEffect(() => {
    // Recupera os dados do sessionStorage de forma assíncrona
    const usuarioLogadoData = JSON.parse(sessionStorage.getItem('usuarioLogado'));
    setUserLogado(usuarioLogadoData);
  }, []); // O array vazio assegura que o useEffect seja executado apenas uma vez, sem depender de variáveis

  const handleLogout = () => {
    sessionStorage.removeItem('usuarioLogado');
    window.location.reload();
  };

  return (
    <>
      <nav className='d-md-flex'>
        <Link to="/" className='text-decoration-none text-dark'>
          <img className="img-nav" src="./src/imagens/OSV_logo1.png" alt="" />
        </Link>

        <div className='usuarioNav' style={userLogado === null ? { display: "none" } : { display: "block" }}>
          <p className='usuario'>{userLogado !== null ? `Usuario Logado: ${userLogado.nome}` : ""}</p>
        </div>

        <div className='ul'>
          <ul className='d-md-flex'>
            <li className='btn btn-warning'><Link to="/" className='text-decoration-none text-light'>Home</Link></li>
            <li className='btn btn-warning'><Link to="/Login" className='text-decoration-none text-light'>Login</Link></li>
            <li className='btn btn-warning'><Link to="/cadastro" className='text-decoration-none text-light'>Cadastro</Link></li>
            <li className='btn btn-warning text-decoration-none text-light' onClick={handleLogout}>Logout</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
