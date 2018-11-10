export default class extends Stimulus.Controller {
    load(event) {
        event.preventDefault();

        if (!'template' in event.target.dataset) {
            return;
        }

        let params = {};
        for (let key in event.target.dataset) {
            if (key.substr(0, 5) === 'param') {
                let filteredKey = key.charAt(5).toLowerCase() + key.substr(6);
                params[filteredKey] = event.target.dataset[key];
            }
        }

        let templateName = event.target.dataset.template;
        let url = './html/' + templateName + '.html';
        fetch(url)
            .then(response => response.text())
            .then(html => {
                let el = document.getElementById('content');
                el.innerHTML = html;

                let template = document.createElement('div');
                template.innerHTML = html.trim(); // Never return a text node of whitespace as the result

                let test = templateName.replace('/', '-');
                let selector = '[data-controller="' + templateName.replace('/', '-') + '"]';
                let elList = template.querySelectorAll(selector);
                if (elList.length === 1) {
                    for (let key in params) {
                        let kebabCased = test + '-' + key;
                        let camelCased = kebabCased.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
                        elList[0].dataset[camelCased] = params[key];
                    }
                }

                el.innerHTML = template.innerHTML;
            });
    }

}
