const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;
app.use(express.json())

const connection = mysql.createConnection({
  host: 'database',
  user: 'root',
  password: 'test',
  database: 'project'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    throw err;
  }
  console.log('Connected to database');
});

app.get('/cars', (req, res) => {
  connection.query('SELECT * FROM Car', (error, results, fields) => {
    if (error) {
      console.error('Error executing SQL query: ' + error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  });
});

app.post('/addCar', (req, res) => {
  const { model, year, details } = req.body;
  if (!model || !year || !details) {
    res.status(400).json({ error: 'Missing parameters' });
    return;
  }

  connection.query('INSERT INTO Car (model, year, details) VALUES (?, ?, ?)', [model, year, details], (error, results, fields) => {
    if (error) {
      console.error('Error executing SQL query: ' + error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.status(201).json({ message: 'Success', data: req.body, service: 'express' });
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Application listening at http://0.0.0.0:${port}`);
});
