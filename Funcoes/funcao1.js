//Funcao sem retorno
function immprimirSoma(a, b) {
    console.log(a + b)
}

immprimirSoma(6, 3)
immprimirSoma(9)
immprimirSoma(9, 2, 4, 6, 7)
immprimirSoma()

//Funcao com retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(7, 7))
console.log(7)
console.log(soma())

//Funcao soma tratada
function soma2(a = 0, b = 0) {
    return a + b
}

console.log(soma2())