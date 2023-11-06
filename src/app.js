import express from 'express';
const app = express();

app.get('/shows', (req, res) => {
  res.send('vai ter show da Pitty ss');
});
app.get('/shows/:nome', (req, res) => {
  res.send({
    shows: req.params.nome,
  });
});

app.listen(4959, function () {
  console.log('Ta ok');
});
