const estudantes = [
     {id: 1, nome: 'Emanuele', ra: 123456, disciplina:'Língua Portuguesa '},
     {id: 2, nome: 'Vitória', ra: 112344, disciplina:'Filosofia '},
     {id: 3, nome: 'Luiza', ra: 898978, disciplina: 'Matemática '}
]

export default function ListaFilter({titulo}){
    const lista = estudantes.filter(estudante => estudante.disciplina.trim() == 'Matemática')
    const listaEstudantes = lista.map((estudante)=>{
        return <li key={estudante.id}>
            <h3>{estudante.nome}</h3>
            <p>{estudante.ra}</p>
            <p>{estudante.disciplina}</p>
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