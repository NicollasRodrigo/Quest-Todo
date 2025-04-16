// Funções que uma calculadora deve ter: somar, subtrair, multiplicar e dividir 
function soma(a,b){
    return  a + b 
}

function subtrair(a,b){
    return  a - b 
}

function multiplicar(a,b){
    return  a * b 
}

function dividir(a,b){
    return  a / b 
}
//Teste automatizado 
describe("Testando as funções da calculadora", () => {
    test("Testando a função soma", () => {
        expect(soma(5,8)).toBe(13)
    })
    test("Testando a função subtrair", () => {
        expect(subtrair(8,8)).toBe(0)
    })
    test("Testando a função multiplicar", () => {
        expect(multiplicar(5,8)).toBe(40)
    })
    test("Testando a função dividir", () => {
        expect(dividir(80,8)).toBe(10)
    })
})