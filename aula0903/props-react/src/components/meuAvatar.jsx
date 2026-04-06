

export default function MeuAvatar(props){
    return(
        <>
        <h1>{props.titulo}</h1>
        <h3>{props.texto}<span>{props.nome}{props.idade}{props.estilomusical}{props.diciplina}</span></h3>
        <img src="https://musicfeeds.com.au/wp-content/uploads/sites/7/LanaDelRey.jpg" alt="" />
        </>
    )
}
