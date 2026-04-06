import { Link } from "react-router-dom";
import './contato.css';
import { useState } from "react";

export default function Contato(){

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [assunto, setAssunto] = useState("");
    const [mensagem, setMensagem] = useState("");

    function enviarFormulario(e){
        e.preventDefault();

        if(!nome || !email || !mensagem){
            alert("Preencha os campos obrigatórios!");
            return;
        }

        alert("Mensagem enviada com sucesso!");
        
        // limpar campos
        setNome("");
        setEmail("");
        setTelefone("");
        setAssunto("");
        setMensagem("");
    }

    return(
        <>
        <section className="container">
            <h2 className="titulo">Contato</h2>

            <form className="formulario" onSubmit={enviarFormulario}>

                <label>Nome *</label>
                <input 
                    type="text" 
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Digite seu nome"
                />

                <label>Email *</label>
                <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite seu email"
                />

                <label>Telefone</label>
                <input 
                    type="tel" 
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    placeholder="Digite seu telefone"
                />

                <label>Assunto</label>
                <input 
                    type="text" 
                    value={assunto}
                    onChange={(e) => setAssunto(e.target.value)}
                    placeholder="Assunto da mensagem"
                />

                <label>Mensagem *</label>
                <textarea 
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    placeholder="Digite sua mensagem"
                />

                <button type="submit" className="botao-enviar">
                    Enviar
                </button>

            </form>

            <Link to='/' className="botao-voltar">Voltar</Link>
        </section>
        </>
    )
}