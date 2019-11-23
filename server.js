const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ msg: 'hello world' });
});

//define routes

app.use('/api/users', require('./routes/users.js'));

app.use('/api/auth', require('./routes/auth.js'));
app.use('/api/contacts', require('./routes/contacts.js'));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
