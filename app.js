const express = require('express');
const frontendRoutes = require('./routes/frontendRoutes');
const path = require('path');
const routes = require('./routes/routes');
const sequelize = require('./config/db-connection');
const app = express();

require('./middlewares/midlewares')(app)
app.use(express.static(path.join(__dirname, './view')));
app.use(express.static(path.join(__dirname, '/view/public')));
app.use(express.static(path.join(__dirname, './view/src')));
app.use(express.static(path.join(__dirname, './view/src/pages')));

app.get("/", (req, res) => {
    res.redirect(`http://localhost:3000/homepage`)
});

routes(app);
frontendRoutes(app);

sequelize.sync()
.then(() => {
  app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
})
.catch (() => {
    console.log("Error syncing database!");
    process.exit(1);
})