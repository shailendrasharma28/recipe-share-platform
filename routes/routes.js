const routes = [
    {path: "/api/user", module: "../backend_apis/routes/userRoutes"},
]

module.exports = (app) => {
  routes.forEach(({ path, module }) => {
    app.use(path, require(module));
  });
};