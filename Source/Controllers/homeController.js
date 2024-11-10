class HomeController {
  RenderHomeView(req, res, next) {
    res.render("home", {
      layout: "main",
      function: "home",
    });
  }
}

export default new HomeController();
