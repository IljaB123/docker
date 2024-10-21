// Подключаем Express
const express = require('express');
const app = express();
const port = 3000;

// Маршрут для динамического приветствия
app.get('/hello', (req, res) => {
  const name = req.query.name || 'World';  // Получаем параметр name из запроса, по умолчанию "World"
  res.send(`Hello, ${name}!`);  // Возвращаем сообщение с именем
});

// Запускаем сервер на порту 3000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
