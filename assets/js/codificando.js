let text = document.querySelector('#content');
let btnCode = document.querySelector('#code');
let btnDecode = document.querySelector('#decode');
let box = document.querySelector('.box p');

btnCode.addEventListener('click', (e)=>{
  e.preventDefault();
  let code = new Codificacao(text.value);
  box.innerText = code.showCodificado();
});
btnDecode.addEventListener('click', (e)=>{
  e.preventDefault();
  let decode = new Codificacao(text.value);
  box.innerText = decode.showDecodificado();
})
class Codificacao {
  constructor (name) {
    this.name = name;
  }
  codificar() {
    const codeVetor = [];
    for(let i in this.name) {
      if(this.name.charCodeAt(i).toString().length < 3) {
        codeVetor.push('0'+ this.name.charCodeAt(i).toString());
      } else {
        codeVetor.push(this.name.charCodeAt(i).toString());
      }
    }
    return codeVetor;
  }
  decodificar() {
    const codigoDecodificado = [];
    const vetorClean = [];
    for(let i = 0; i < (this.name.toString().length / 6); i++) {
      vetorClean.push(this.name.substring(i*6,i*6+6));
      vetorClean[i] = vetorClean[i].substring(0,3);
    }
    console.log(vetorClean)
    for(let i = 0; i < vetorClean.length; i++) {
      if(vetorClean[i][0] === '0') {
        codigoDecodificado.push(String.fromCharCode(Number(vetorClean[i].substring(1))))
      } else {
        codigoDecodificado.push(String.fromCharCode(Number(vetorClean[i])))
      }
    }
    console.log(codigoDecodificado)
    return codigoDecodificado;
  }
  showCodificado() {
    let vetor = this.codificar();
    let nameCodificado = vetor.toString().replace(/,/g,'-0+');
    return nameCodificado;
  }
  showDecodificado () {
    let textoArray = this.decodificar();
    let texto = textoArray.join('');
    return texto;
  }
}