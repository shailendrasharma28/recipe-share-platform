const path = require("path");

const routes = [
    {url: "/homepage", file: "../view/index.html"},
    {url: "/auth", file: "../view/src/pages/auth.html"},
];

module.exports = (app) => {
    routes.forEach(({ url, file }) => {
      app.get(url, (req, res) => {
        res.sendFile(path.join(__dirname, file));
      });
    });
}