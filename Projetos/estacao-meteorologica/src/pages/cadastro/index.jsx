import Header from '../../components/header'

export default function Cadastro() {
  return (
    <>
      <Header />

      <div className="container mt-5">

        <div className="card shadow-lg p-4 rounded-4">
          <h3 className="text-primary mb-4 fw-bold">
            Cadastro de dados pessoais
          </h3>

          <form>
            <div className="row">

              <div className="col-md-6 mb-3">
                <label className="form-label">Nome</label>
                <input type="text" className="form-control" placeholder="Nome completo" />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Email" />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Endereço</label>
                <input type="text" className="form-control" placeholder="Endereço" />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Celular</label>
                <input type="text" className="form-control" placeholder="Celular" />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Documento</label>
                <input type="text" className="form-control" placeholder="Documento" />
              </div>

            </div>

            <div className="text-end mt-3">
              <button className="btn btn-primary px-4">
                Salvar
              </button>
            </div>

          </form>
        </div>

      </div>
    </>
  )
}