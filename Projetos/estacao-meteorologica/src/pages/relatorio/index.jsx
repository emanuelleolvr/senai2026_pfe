import GraficoBarra from '../../components/graficobarra'
import Header from '../../components/header'
import './index.css'

export default function Relatorio(){
    const leituras = [
        {horario: "12:00", qualidadeAr: "Boa", iqa: 42, temperatura: '26°C', umidade:'68%'},
        {horario: "11:00", qualidadeAr: "Moderada", iqa: 55, temperatura: '50°C', umidade:'50%'},
        {horario: "18:00", qualidadeAr: "Boa", iqa: 60, temperatura: '20°C', umidade:'75%'},
        {horario: "10:00", qualidadeAr: "Ruim", iqa: 20, temperatura: '39°C', umidade:'40%'}
    ]

    return(
        <>
        <div className="container">
            <Header/>
            <h3>Relátorio Estação Meteorológica</h3>
            <p>Monitoramento da temperatura e umidade em tempo real</p>

        </div>

        <section className="graficos">
            <GraficoBarra />
        </section>

        <section className="tabela-leituras">
            <table>
                <thead>
                    <tr>
                        <th>Horário</th>
                        <th>Qualidade do ar</th>
                        <th>IQA</th>
                        <th>Temperatura</th>
                        <th>Umidade</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        leituras.map((item, index) => (
                            <tr key={index}>

                                <td> {item.horario}
                                </td>
                                <td>{item.qualidade}</td>
                                <td>{item.iqa}</td>
                                <td>{item.temperatura}</td>
                                <td>{item.umidade}</td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>
        </>
    )

}