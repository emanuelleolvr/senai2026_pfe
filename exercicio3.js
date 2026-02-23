class Bicicleta {
  #modelo = "Speed (Road)";
  #marca = "Sense";
  #cor = "preta";
  #velocidademax;

  setModelo(mod) {
    this.#modelo = mod;
  }
  getModelo() {
    return this.#modelo;
  }

  setMarca(marc) {
    this.#marca = marc;
  }
  getMarca() {
    return this.#marca;
  }

  setCor(corr) {
    this.#cor = corr;
  }
  getCor() {
    return this.#cor;
  }

  setVelomax(valor) {
    if (valor < 35) {
      this.#velocidademax = valor;
    } else {
      console.log("O valor não é possível de ser inserido!");
    }
  }

  getVelomax() {
    return this.#velocidademax;
  }
}

const veiculo = new Bicicleta();
veiculo.setModelo("MTB");
console.log("O modelo é: " + veiculo.getModelo());
veiculo.setMarca("Trek");
console.log("A marca é: " + veiculo.getMarca());
veiculo.setCor("Azul");
console.log("A cor é: " + veiculo.getCor());
veiculo.setVelomax(33);
console.log("A velocidade máxima é: " + veiculo.getVelomax());
