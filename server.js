const http = require('http');
 
const dotenv = require('dotenv');
dotenv.config();

const app = require('./src/app'); 
const { mongoConnect } = require('./src/services/mongo');


const { loadUsersDataAndSave } = require('./src/models/users.model');
const { getLiquorByid } = require('./src/models/liquor.model');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);


async function startServer() {
  await mongoConnect();
  // let data = await getLiquorByid('63be9f0a891c7cbf8ab8057a');
  // await getLiquor();
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
