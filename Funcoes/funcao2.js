//Armazenando uma funcao em uma variavel
const imprimeSoma = function(a = 0, b = 0) {
    console.log(a + b)
}

imprimeSoma(5, 9)

//Armazena uma funcao arrow em uma variavel
const soma = (a, b) => { return a + b }

console.log(soma(4, 5))

//retorno implicito
const soma2 = (a, b) => a + b

console.log(soma2(4, 3))


//retorno implicito
const nQuadrado = a => a * a

console.log(nQuadrado(10.9))