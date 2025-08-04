const connectToMongo = require('./db');
const express = require('express')
const app = express()
const cors = require('cors');
const port = 5000

app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!')
})
//middleware to parse JSON
app.use(express.json());

// Routes for endpoints
app.use("/api/auth", require('./routes/Auth'));
app.use("/api/notes", require('./routes/notes'));

app.listen(port, () => {
  console.log(`QuickQuill listening on port ${port}`)
})
connectToMongo();