const connectToMongo = require('./db');
const express = require('express')
const app = express()
const cors = require('cors');
const port = 5000

app.use(cors({
  origin: 'https://quickquill-1.netlify.app', // Allow requests from this origin
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"], //  Allow common HTTP methods
  allowedHeaders: ["Content-Type", "auth-token"], // Allow these headers
  credentials: true // Allow credentials to be sent with requests
}));

//middleware to parse JSON
app.use(express.json());

// Routes for endpoints
app.use("/api/auth", require('./routes/auth'));
app.use("/api/notes", require('./routes/notes'));

app.listen(port,'0.0.0.0', () => {
  console.log(`QuickQuill listening on port ${port}`)
})
connectToMongo();