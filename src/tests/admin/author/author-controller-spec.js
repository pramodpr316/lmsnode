const chai = require('chai');
const chaiHttp = require('chai-http');
var server = require('../../../../bin/www');
chai.use(chaiHttp);

var should = chai.should();
var expect = chai.expect;

describe("Authors test", function(){
    it('should return list of authors', function(done){
        chai
            .request('http://localhost:3000/lms')
            .get('/viewAllAuthors')
            .end(function(req, res){
                res.should.have.status(200);
                expect(res.body).to.be.an('array');
                done();
            })
    })
    it('should return list of authors', function(done){
        chai
            .request('http://localhost:3000/lms')
            .get('/blah')
            .end(function(req, res){
                res.should.have.status(404);
                done();
            })
    })
    // it('should error out', function(done){
    //     chai
    //         .request('http://localhost:3000/lms')
    //         .get('/viewAllAuthor')
    //         .end(function(req, res){
    //             res.should.have.status(404);
    //             done();
    //         })
    // })
    // it('should error out', function(done){
    //     chai
    //         .request('http://localhost:3000/lms')
    //         .get('/viewAllAuthorsByName/updated')
    //         .end(function(req, res){
    //             res.should.have.status(200);
    //             done();
    //         })
    // })
})