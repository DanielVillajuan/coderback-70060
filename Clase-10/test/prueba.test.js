import assert from 'node:assert'
import { suma } from '../src/utils/index.js'

describe('funcion suma', () => {

    it('deberia de sumar dos numeros enteros y devolver el resultado', () => {

        // funcion que suma(2, 3) => 5
        const resultado = suma(2, 5)
        assert.equal(resultado, 7) // este caso no paso.

    })

    it("deberia de dar un numero negativo si sumo un numero muy negativo con un numero positivo", () => {
         
         const resultado = suma(-10, 5)
         assert.equal(resultado, -5)
 
    })

    it("deberia de devolver un 0 si uno de los dos parametros no es un numero", () => {
        const resultado = suma("hola", 5) // 0
        assert.equal(resultado, 0)
    })

})
