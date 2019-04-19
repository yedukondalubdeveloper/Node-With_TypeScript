let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);

describe('Testing Api', () => {
    it('should be return status 200 for /index', function(done){
        chai
            .request('http://localhost:4000/users')
            .get('/')
            .then(function(res){
                expect(res).to.have.status(200);
                done();
            })
            .catch(function(err){
                throw(err);
            });
    });

    it('should be return status 201', function(done){
        chai
            .request('http://localhost:4000/users')
            .get('/abc')
            .then(function(res){
                expect(res).to.have.status(404);
                done();
            })
            .catch(function(err){
                throw(err);
            });
    });

    it('should be return status 200 for add user', function(done){
        chai
            .request('http://localhost:4000/users')
            .post('/add')
            .then(function(res){
                expect(res).to.have.status(200);
                done();
            })
            .catch(function(err){
                throw(err);
            });
    });

    it('should be return status 200 for edit user', function(done){
        chai
            .request('http://localhost:4000/users')
            .put('/update')
            .then(function(res){
                expect(res).to.have.status(200);
                done();
            })
            .catch(function(err){
                throw(err);
            });
    });
    
    it('should be return status 200 for delete user', function(done){
        chai
            .request('http://localhost:4000/users')
            .delete('/delete')
            .then(function(res){
                expect(res).to.have.status(200);
                done();
            })
            .catch(function(err){
                throw(err);
            });
    });
})