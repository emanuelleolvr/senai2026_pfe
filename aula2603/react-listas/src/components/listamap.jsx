const estudantes = [
     {id: 1, nome: 'Emanuele', ra: 123456, idade: 17},
     {id: 2, nome: 'Vitória', ra: 112344, idade: 19},
     {id: 3, nome: 'Luiza', ra: 898978, idade: 16}
]

export default function ListaMap({titulo}){
    const listaEstudantes = estudantes.map((estudantes)=>{
        return <li key={estudantes.id}>
            
            <h3>{estudantes.nome}</h3>
            <p>{estudantes.ra}</p>
            <p>{estudantes.idade}</p>
        </li>
    })
    return(
        <>
        <h1>{titulo}</h1>
        <ul>
            {listaEstudantes}
        </ul>
        </>
    )
}