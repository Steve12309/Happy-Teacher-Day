import HomeController from "../Controllers/homeController.js";

function Routes(app) {
  app.get("/", HomeController.RenderHomeView);
}

export default Routes;
