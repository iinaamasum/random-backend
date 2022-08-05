const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

require('dotenv').config();
const cors = require('cors');

// middle_ware;
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.9q0ke.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  await client.connect();
  console.log('db running');
  try {
  } finally {
  }
}

run().catch(console.dir);

/**
 * root route
 * link: http://localhost:5000/
 */
app.get('/', (req, res) => {
  res.send('Running');
});

app.listen(port, () => {
  console.log(`app is listening at port: ${port}`);
});
