import mongoose from "mongoose"
import Pets from "../src/dao/Pets.dao.js"
import { expect } from "chai"

mongoose.connect(`mongodb+srv://danielvillajuan:qpCcWENKy5dp6gRi@coderback.dkldvkl.mongodb.net/?retryWrites=true&w=majority&appName=Coderback`,() => {
    console.log('Base de datos conectada')
})

describe('Pets Dao', () => {
    before(function(){
        this.petsDao = new Pets()
    })

    it('Deberia de retornar un array de mascotas', async function(){
        const result = await this.petsDao.get()
        // assert.equal(Array.isArray(result), true) 
        expect(Array.isArray(result)).to.be.equal(true)
        // expect(Array.isArray(result)).to.be.gt(1)
    })

    it('Deberia de retornar una mascota por mail', async function(){
        
        const name = 'firulai'
        const result = await this.petsDao.getBy({ name })

        expect(result.name).to.be.equal('firulai') 
        // expect(result.owner).to.be.equal(false) 
        // jest
    })

})
