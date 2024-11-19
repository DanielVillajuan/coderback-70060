import { expect } from "chai";
import supertest from "supertest";

const requester = supertest('http://localhost:8080')


describe('Test mascotas',() => {
    it('deberia de crear correctamente una mascota en /api/pets [POST]', async () => {
        const mockPet = {
            name: 'Firulai',
            specie: 'Caniche',
            birthDate: new Date("19-03-2023")
        }
       const { statusCode, ok, _body } = await requester.post('/api/pets/').send(mockPet)

       expect(statusCode).to.be.eq(200)
       expect(ok).to.be.eq(true)
       expect(_body.payload).to.have.property('_id')
    })
})
