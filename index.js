const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const autoresRoutes = require('./routes/autores');
const postsRoutes = require('./routes/posts');

app.use(bodyParser.json());
app.use('/api/autores', autoresRoutes);
app.use('/api/posts', postsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
