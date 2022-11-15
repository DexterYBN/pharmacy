const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(require('./routes'));

mongoose.connect("mongodb+srv://into:code@cluster0.kejtoas.mongodb.net/pharmacy?retryWrites=true&w=majority")
  .then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

app.listen(4000, () => {
  console.log(`server has been started`);
})