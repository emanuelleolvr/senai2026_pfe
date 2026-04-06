export default function Footer(){
    return(
        <footer>
            <p>
                ©
                <script>
                    const data_atual=new Date()
                    documente.write(data_atual.getFullYear())
                </script>
                Academia Fofitness. Todos os diereitos reservados.
            </p>
        </footer>
    )
}