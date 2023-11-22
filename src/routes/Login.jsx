import { useState } from "react"; 
import '../scss/Login.scss'

function Login() { 

  const [usuario, setUsuario] = useState({ 
    usuario: "", 
    senha: "", 
  });

  const handleChange = async (e) => { 
    const { name, value } = e.target; 
    setUsuario({ ...usuario, [name]: value }); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    let user; 

    try { 
      const response = await fetch("http://localhost:5000/usuarios"); 
      if (response.ok) {
        const users = await response.json();
        for (let i = 0; i < users.length; i++) {
          const use = users[i]; 
          user = use; 
          if (use.usuario == usuario.usuario && use.senha == usuario.senha) { 
            user = use;
            break; 
          }
        }
        if (user) { 
          sessionStorage.setItem('usuarioLogado', JSON.stringify(user)); 
          setTimeout(() => {
            window.location = "/"; 
          }, 3000);
        } else { 
            alert("Usuário/senha inválidos"); 
            setUsuario({
            usuario: "", 
            senha: "", 
          });
          window.location = "/login"; 
        }
      }
    } catch (error) { 
      console.log(error);
    }
  };


  return (
    <>
      <main className="mainLogin">
        <h1>Login</h1> 
          <form onSubmit={handleSubmit} className="bg-warning"> 
            <div className="usuario"> 
              <label htmlFor="idusuario">Usuário:</label>
              <input
                type="name"
                name="usuario"
                value={usuario.usuario}
                placeholder="Digite seu usuario"
                onChange={handleChange}
                required
              /> 
            </div>
            <div className="senha"> 
              <label htmlFor="idSenha">Senha:</label> 
              <input
                type="password"
                name="senha"
                value={usuario.senha}
                placeholder="Digite sua senha"
                onChange={handleChange}
                required
              /> 
            </div>
            <button type="submit" className="btn btn-primary">Logar</button> 
          </form>
      </main>
      
    </>
  );
}

export default Login