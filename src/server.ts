import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(3000, () => {
  console.log('Server is running in port 3000!');
});