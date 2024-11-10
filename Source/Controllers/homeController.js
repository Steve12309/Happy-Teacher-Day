class HomeController {
  RenderHomeView(req, res, next) {
    res.render("home", {
      layout: "main",
    });
  }
}

export default new HomeController();
