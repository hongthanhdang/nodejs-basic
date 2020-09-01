let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app");


// Assertion style
chai.should()
chai.use(chaiHttp)
describe('Users API ', () => {
    /**
     * Test the GET route
     */
    describe('Get /users/', () => {
        it('It should GET all users', (done) => {
            chai.request(server)
                .get("/users/")
                .set({'aut-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Imhvbmd0aGFuaGRhbmc4OCIsImlhdCI6MTU5ODk1MzczOCwiZXhwIjoxNTk5MjUzNzM4fQ.LrPR_IIvfRxHtpm3KeZ1xLQXVc2VKtDC3GxV8YR6T7w'})
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    response.body.length.should.eq(6);
                    done();
                })
        })
    })
    describe('Get /users/:id', () => {
        it('It should GET an user by ID', (done) => {
            const userId='5f487e9cfa1a6e0f1b91625d'
            chai.request(server)
                .get("/users/"+userId)
                .set({'aut-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Imhvbmd0aGFuaGRhbmc4OCIsImlhdCI6MTU5ODk1MzczOCwiZXhwIjoxNTk5MjUzNzM4fQ.LrPR_IIvfRxHtpm3KeZ1xLQXVc2VKtDC3GxV8YR6T7w'})
                .end((error, response) => {
                    response.should.have.status(200)
                    response.body.should.be.a('object')
                    response.body.should.have.property('_id')
                    response.body.should.have.property('userName')
                    response.body.should.have.property('firstName')
                    done()
                })
        })
    })
}
)