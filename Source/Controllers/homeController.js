class HomeController {
  RenderHomeView(req, res, next) {
    res.render("home", {
      layout: "main",
      function: "home",
      style: "home",
    });
  }
}

export default new HomeController();
