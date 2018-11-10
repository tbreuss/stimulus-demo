import HtmlController from "./controllers/html_controller.js";
import ContactController from "./controllers/contact_controller.js";
import NewsIndexController from "./controllers/news/index_controller.js";
import NewsDetailController from "./controllers/news/detail_controller.js";
import NewsLatestController from "./controllers/news/latest_controller.js";

(() => {
    const app = Stimulus.Application.start();
    app.register("html", HtmlController);
    app.register("contact", ContactController);
    app.register("news-index", NewsIndexController);
    app.register("news-detail", NewsDetailController);
    app.register("news-latest", NewsLatestController);
})();

// next tick
setTimeout(function(){
    let el = document.querySelector('[data-template="home"]');
    el.click();
}, 1);
