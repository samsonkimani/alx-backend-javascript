const express = require('express');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];

const app = express();
const port = 1245;

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', async (request, response) => {
  try {
    const data = await countStudents(database);
    if (data) {
      const formatedData = data.join('\n');
      response.send(`This is the list of our students\n${formatedData}`);
    } else {
      response.status(500).send('No student data available.');
    }
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    response.status(500).send('There was an error.');
  }
});

app.listen(port, () => {});

module.exports = app;
