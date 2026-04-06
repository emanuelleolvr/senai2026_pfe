import { useState } from "react";
import { Link } from "react-router-dom";
import './index.css'


export default function Login() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    return(
    <section>
        <div>
            <div>
                {/* <img src={imgEstacao} alt="" /> */}
            </div>
            <div>
                <h2>Login</h2>
                <form action="">
                    <input type="text" id="usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                    <label htmlFor="usuario">Usuário</label>
                    <input type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                    <label htmlFor="senha">Senha</label>

                </form>
            </div>

        </div>
    </section>
    )
}
