const express = require('express')
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const app = express()
const port = 3000

app.use(bodyParser.json());

let todos = [
    { 
        id: uuidv4(),
        description: 'Buy some milk',
        dueDate: '2020-16-09',
        isDone: false
    }
];

app.get('/', (req, res) => {
  res.send('Hello world!')
});

app.get('/todos', (req, res) => {
    res.json({ todos });
});

app.get('/todos/:id', (req, res) => {
    const result = todos.find(t => t.id === req.params.id);
    if(result !== undefined) {
        res.json(result);
    } else {
        res.sendStatus(404);
    }
});

app.post('/todos', (req, res) => {
    const newTodo = {
        id: uuidv4(),
        description: req.body.description,
        dueDate: req.body.dueDate,
        isDone: req.body.isDone
    };
    todos.push(newTodo);

    res.sendStatus(200);
});

app.put('/todos/:id', (req, res) => {
    const result = todos.find(t => t.id === req.params.id);
    if(result !== undefined) {
        for(const key in req.body) {
            result[key] = req.body[key];
        }
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
});

app.delete('/todos/:id', (req, res) => {
    const result = todos.findIndex(t => t.id === req.params.id);
    if(result !== -1) {
        todos.splice(result, 1);
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})