import './App.css';
import logoSesi from'./assets/img/logooo.png';
import logoSenai from'./assets/img/login.png';



export default function App() {
  
  return (
    <>
    <div className="container">
      <img src={logoSesi} alt="" className='Logo'></img>
      <img src={logoSenai} alt="" className='Logo'></img>
      <h1 className='titulo'>Login</h1>
      <span className='subtitulo'>para continuar</span>
      <label htmlFor='nome' className='label'> Nome </label>
      <input type='text' className='campo' id='nome' placeholder='Seu nome'/>
      <label htmlFor='senha' className='label'> Senha </label>
      <input type='text' className='campo' id='senha' placeholder='***'/>
      <button className='botao'> Log in </button>
      <a className="textoFooter"> Esqueceu a senha? </a>
      <a className="textoFooter"> Cadastre-se </a>

      
    </div>
    </>
  )

  
}

//export default App
