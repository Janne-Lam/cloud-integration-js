const express = require('express')
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const app = express()
const port = 3000

app.use(bodyParser.json());

let sensorTypes = {
        humidity: true,
        temperature: false,
        rainfall: true,
        wind: true,
        cloudCoverage: false
    };

let sensorValues = {
    temperature: 15.4, //as celsius
    wind: 5.4, //as m/s
    cloudCoverage: 0.8, //convert to percent
    humidity: 0.5, //convert to percent
    rainfall: 3 //as mm/h
}

let sensorDatas = [
    {
        timestamp: '1598476354',
        sensorValue: sensorValues
    }
];

let users = [
    { 
        uid: uuidv4(),
        username: 'testname',
        name: 'John',
        birthday: '2020-15-09',
        address: {
            street: 'myStreet',
            country: 'Finland',
            postalCode: '90100',
            city: 'Oulu'
        },
        email: 'test@test.com',
        password: '1234'
    },
];

let locations = { 
        latitude: 45.213213,
        longitude: 45.312324
    };

let devices = [
    {
        deviceId: uuidv4(),
        type: 'Raspberry PI 3',
        description: 'At my house, sensors outside',
        location: locations,
        sensorTypes: sensorTypes
    }
]

let isLogged;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//login
app.post('/login', (req, res) => {
  let isLogged = false;
  for(let i in users) {
    if(users[i].username === req.body.username && 
        users[i].password === req.body.password) {
      isLogged = true;
    }
  }
  if(isLogged) {
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }
})

//Create new user
app.post('/users', (req, res) => {
    const newUser = {
        uid: uuidv4(),
        username: req.body.username,
        name: req.body.name,
        birthday: req.body.birthday,
        address: req.body.address,
        email: req.body.email,
        password: req.body.password
    };

    if(typeof newUser.uid === 'string' && typeof newUser.username === 'string' && typeof newUser.name === 'string' && typeof newUser.birthday === 'string'
      && typeof newUser.address === 'object' && typeof newUser.address.street === 'string' && typeof newUser.address.country === 'string' 
      && typeof newUser.address.postalCode === 'string' && typeof newUser.address.city === 'string' && typeof newUser.email === 'string' 
      && typeof newUser.password === 'string' && newUser.uid.length > 0 && newUser.username.length > 0 && newUser.name.length > 0 && newUser.birthday.length > 0 
      && newUser.address.street.length > 0 && newUser.address.street.length > 0 && newUser.address.country.length > 0 && newUser.address.postalCode.length > 0 
      && newUser.address.city.length > 0 && newUser.email.length > 0 && newUser.password.length > 0){
        users.push(newUser);
        res.sendStatus(201); //created
      } else {
        res.sendStatus(400); //Bad Request
      }
})

//Get all users
app.get('/users', (req, res) => {
    res.json({
      users
    });
})

//Get info from specific user
app.get('/users/:uid', (req, res) => {
    const result = users.find(t => t.uid === req.params.uid)
    if(result !== undefined) {
        res.json(result);
    } else {
        res.sendStatus(404); //not found
    }
})

//Update a user
app.put('users/:uid', (req, res) => {
    const result = users.find(t => t.uid === req.params.uid);
    if(result !== undefined) {
        for(const key in req.body) {
            result[key] = req.body[key];
        }
        res.sendStatus(200); //OK
    } else {
        res.sendStatus(404); //not found
    }
})

//Deleve a specific user
app.delete('users/:uid', (req, res) => {
    const result = users.find(t => t.uid === req.params.uid);
    if(result !== -1) {
        users.splice(result, 1);
        res.sendStatus(200); //OK
    } else if(result === unauthorized) {
        res.sendStatus(401);
    } else {
        res.sendStatus(404); //not found
    }
})

//Get information on all sensors
app.get('/devices', (req, res) => {
    if(devices !== undefined) {
        res.json( {devices} );
    } else {
        res.sendStatus(404); //not found
    }
})

//Create new device
app.post('/devices', (req, res) => {
  isLogged = true;
  if(isLogged) {
    const newDevice = {
        deviceId: uuidv4(),
        type: req.body.type,
        description: req.body.description,
        location: req.body.location,
        sensorTypes: req.body.sensorTypes
    };

    if(typeof newDevice.deviceId === 'string' && typeof newDevice.type === 'string' && typeof newDevice.description === 'string' && typeof newDevice.location.latitude === 'number' 
      && typeof newDevice.location.longitude === 'number' && typeof newDevice.sensorTypes.humidity === 'boolean' && typeof newDevice.sensorTypes.temperature === 'boolean'
      && typeof newDevice.sensorTypes.rainfall === 'boolean' && typeof newDevice.sensorTypes.wind === 'boolean' && typeof newDevice.sensorTypes.cloudCoverage === 'boolean'
      && newDevice.deviceId.length > 0 && newDevice.type.length > 0 && newDevice.description.length > 0) {
      devices.push(newDevice);
      res.sendStatus(201); //created
    } else {
      res.sendStatus(400);
    }
  } else {
    res.sendStatus(401);
  }
})

//Get specific device
app.get('/devices/:deviceId', (req, res) => {
    const result = devices.find(t => t.deviceId === req.params.deviceId);
    if(result !== undefined) {
        res.json(result);
    } else {
        res.sendStatus(404); //not found
    }
})

//Modify a device
app.put('/devices/:deviceId', (req, res) => {
    const result = devices.find(t => t.deviceId === req.params.deviceId);
    if(result !== undefined) {
        for(const key in req.body) {
            result[key] = req.body[key];
        }
        res.sendStatus(200); //OK
    } else {
        res.sendStatus(404); //not found
    }
})

//Delete a specific device
app.delete('/devices/:deviceId', (req, res) => {
    const result = devices.find(t => t.deviceId === req.params.deviceId);
    if(result !== -1) {
        devices.splice(result, 1);
        res.sendStatus(200); //OK
    } else if(result === unauthorized) {
        res.sendStatus(401);
    } else {
        res.sendStatus(404); //not found
    }
})

//Get data from device
app.get('/devices/:deviceId/data', (req, res) => {
    const result = devices.find(t => t.deviceId === req.params.deviceId);
    if(result !== undefined) {
        if(sensorDatas !== undefined) {
            res.json( {sensorDatas} );
        } else {
            res.sendStatus(404); //not found
        }
    } else {
        res.sendStatus(404); //not found
    }
})

//post new data from specific sensor
app.post('/devices/:deviceId/data', (req, res) => {
    const newSensorData = {
        timestamp: req.body.timestamp,
        sensorValues: req.body.sensorValues
    };

    sensorDatas.push(newSensorData);
    res.sendStatus(201); //created
    //TODO res.sendStatus(400); //bad request
    //TODO res.sendStatus(401); //unauthorized
    //TODO res.sendStatus(404); //not found (deviceId)
})

//TODO
app.get('/devices/search', (req, res) => {
    res.sendStatus(200);
})

//implementation for test and running server
let apiInstance = null;

exports.start = () => {
  apiInstance = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  })
}

exports.stop = () => {
  apiInstance.close();
}