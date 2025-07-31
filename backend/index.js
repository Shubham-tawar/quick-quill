const connectToMongo = require('./db');
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
//middleware to parse JSON
app.use(express.json());

// Routes for endpoints
app.use("/api/auth", require('./routes/Auth'));
app.use("/api/notes", require('./routes/notes'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
connectToMongo();