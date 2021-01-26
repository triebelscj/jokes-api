const express = require('express');
// const cors = require('cors');
require("./server/config/mongoose.config");
const port = 8040;

const app = express();

// app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

// require("./server/routes/joke.routes")(app);

const allRoutes = require("./server/routes/jokes.routes");
allRoutes(app);

app.listen(8050, () => console.log(`**connecting on port ${port}!`));