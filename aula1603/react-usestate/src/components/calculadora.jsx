import { useState } from "react";

export default function Calculadora({ titulo }) {

    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [resultado, setResultado] = useState("");
    const [erro, setErro] = useState("");

    function verificar(){
        if(num1 <= 0 || num2 <= 0){
            setErro("Digite números maiores que 0");
            setResultado("");
            return false;
        }
        setErro("");
        return true;
    }

    function calcular(e, operacao){
        e.preventDefault();
        if(!verificar()) return;

        const n1 = Number(num1);
        const n2 = Number(num2);

        if(operacao === "+") setResultado(n1 + n2);
        if(operacao === "-") setResultado(n1 - n2);
        if(operacao === "*") setResultado(n1 * n2);
        if(operacao === "/") setResultado(n1 / n2);
    }

    return (
        <div style={{
            background:"white",
            padding:"30px",
            borderRadius:"15px",
            width:"300px",
            margin:"50px auto",
            textAlign:"center",
            boxShadow:"0 10px 20px rgba(0,0,0,0.2)"
        }}>

            <h1 style={{
                fontSize:"28px",
                marginBottom:"20px"
            }}>{titulo}</h1>

            <form style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                gap:"10px"
            }}>

                <input
                    type="number"
                    placeholder="Número 1"
                    value={num1}
                    onChange={(e)=>setNum1(e.target.value)}
                    style={{
                        padding:"10px",
                        width:"90%",
                        borderRadius:"6px",
                        border:"1px solid #ccc"
                    }}
                />

                <input
                    type="number"
                    placeholder="Número 2"
                    value={num2}
                    onChange={(e)=>setNum2(e.target.value)}
                    style={{
                        padding:"10px",
                        width:"90%",
                        borderRadius:"6px",
                        border:"1px solid #ccc"
                    }}
                />

                <div style={{
                    display:"flex",
                    gap:"8px",
                    marginTop:"10px"
                }}>

                    <button type="button" onClick={(e)=>calcular(e,"+")}>+</button>
                    <button type="button" onClick={(e)=>calcular(e,"-")}>-</button>
                    <button type="button" onClick={(e)=>calcular(e,"*")}>×</button>
                    <button type="button" onClick={(e)=>calcular(e,"/")}>÷</button>

                </div>

                {erro && <p style={{color:"red"}}>{erro}</p>}

                <h2 style={{marginTop:"15px"}}>
                    Resultado: {resultado}
                </h2>

            </form>

        </div>
    );
}