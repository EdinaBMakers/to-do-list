const app = require('./app');
const port = process.env.PORT || 3000;

app.listen(port);
console.log(`RESTful todo list API server is listening on port ${port}.`);