const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('.'));

app.post('/ask', (req, res) => {
  const { question } = req.body;
  const answer = `Вы спросили: "${question}". Я здесь, чтобы поддержать вас!`;
  res.json({ answer });
});

app.listen(3000, () => console.log('Сервер запущен на порту 3000'));
