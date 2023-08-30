const express = require('express');
const app = express();
const mochaAppController = require('./controllers/mochaAppController.js')

const port = 3000;

// handle parsing request body;
app.use(express.json());


app.get('/hello', (req, res) => {
    res.send('Hello World');
});

app.get('/mochas', mochaAppController.getMocha, (req, res) => {
    res.send(res.locals.mochas);
});

//global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error ocurred' },
    }
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
})

// start server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});