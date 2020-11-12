const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const server = require('../server');

const expect = chai.expect;
const apiAddress = 'http://localhost:3000';

describe('Weather station operations', function() {

  before(function() {
    server.start();
  })

  after(function() {
    server.stop();
  })

  describe('logging in', () => {
    it('should log in if the username and password are correct', async () => {
      await
      chai
        .request(apiAddress)
        .post('/login')
        .send({
          username: "testname",
          password: "1234"
        })
        .then(response => {
          expect(response.status).to.equal(200);
        })
        .catch(error => {
          expect.fail(error);
        })
    })

    it('should not log in if the username and password are incorrect', async () => {
      await
      chai
        .request(apiAddress)
        .post('/login')
        .send({
          username: "wrong username",
          password: "wrong password"
        })
        .then(response => {
          expect(response.status).to.equal(401);
        })
        .catch(error => {
          expect.fail(error);
        })
    })
  })

  describe('Add a new user', () => {
    it('should add a new user', async () => {
      await
        chai
          .request(apiAddress)
          .post('/users')
          .send({
            username: "test user",
            name: "test name",
            birthday: "1998-04-01",
            address: {
              street: "test street",
              country: "finland",
              postalCode: "90100",
              city: "oulu"
            },
            email: "testemail@test.com",
            password: "1234"
          })
          .then(response => {
            expect(response.status).to.equal(201);
            return chai.request(apiAddress).get('/users');
          })
          .then(readResponse => {
            expect(readResponse.body.users[readResponse.body.users.length - 1].username).to.equal("test user");
            expect(readResponse.body.users[readResponse.body.users.length - 1].name).to.equal("test name");
            expect(readResponse.body.users[readResponse.body.users.length - 1].birthday).to.equal("1998-04-01");
            expect(readResponse.body.users[readResponse.body.users.length - 1].address).to.deep.equal({
              street: "test street",
              country: "finland",
              postalCode: "90100",
              city: "oulu"
            });
            expect(readResponse.body.users[readResponse.body.users.length - 1].email).to.equal("testemail@test.com");
            expect(readResponse.body.users[readResponse.body.users.length - 1].password).to.equal("1234");
          })
          .catch(error => {
            expect.fail(error);
          })
    })
    
    it('should not add a new user if empty strings', async () => {
      await
      chai
        .request(apiAddress)
        .post('/users')
        .send({
          username: "",
          name: "test name",
          birthday: "",
          address: {
            street: "test street",
            country: "",
            postalCode: "90100",
            city: "oulu"
          },
          email: "",
          password: "1234"
        })
        .then(response => {
          expect(response.status).to.equal(400);
        })
        .catch(error => {
          expect.fail(error);
        })
    })

    it('should not add a new user if null', async () => {
      await
      chai
        .request(apiAddress)
        .post('/users')
        .send({
          username: "test user",
          name: null,
          birthday: "1998-04-01",
          address: {
            street: "test street",
            country: "finland",
            postalCode: null,
            city: "oulu"
          },
          email: "",
          password: "1234"
        })
        .then(response => {
          expect(response.status).to.equal(400);
        })
        .catch(error => {
          expect.fail(error);
        })
    })
  })

  describe('Add a new device', () => {
    it('should add a new device', async () => {
      await
       chai
      .request(apiAddress)
      .post('/devices')
      .send({
        type: 'Raspberry PI 2',
        description: 'device in my roof',
        location: {
          latitude: 46.231234,
          longitude: 45.213134
        },
        sensorTypes: {
          humidity: false,
          temperature: false,
          rainfall: true,
          wind: false,
          cloudCoverage: false
        }
      })
      .then(newResponse => {
        expect(newResponse.status).to.equal(201);
        return chai.request(apiAddress).get('/devices');
      })
      .then(readResponse => {
        expect(readResponse.body.devices[readResponse.body.devices.length -1].type).to.equal('Raspberry PI 2');
        expect(readResponse.body.devices[readResponse.body.devices.length -1].description).to.equal('device in my roof');
        expect(readResponse.body.devices[readResponse.body.devices.length -1].location).to.deep.equal({
          latitude: 46.231234,
          longitude: 45.213134
        })
        expect(readResponse.body.devices[readResponse.body.devices.length -1].sensorTypes).to.deep.equal({
          humidity: false,
          temperature: false,
          rainfall: true,
          wind: false,
          cloudCoverage: false
        })
      })
      .catch(error => {
        expect.fail(error);
      })
    })

    it('should not add new device is a field is empty', async () => {
      await
       chai
      .request(apiAddress)
      .post('/devices')
      .send({
        type: 'Raspberry PI 2',
        description: 'device in my roof',
        location: {
          latitude: 46.231234,
          longitude: 45.213134
        },
        sensorTypes: {
          humidity: false,
          temperature: false,
          rainfall: "string",
          wind: false,
          cloudCoverage: false
        }
      })
      .then(newResponse => {
        expect(newResponse.status).to.equal(400);
      })
      .catch(error => {
        expect.fail(error);
      })
    })
  })
})