export default class extends Stimulus.Controller {

    connect() {
        this.render()
    }

    render() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                data.forEach((item) => {
                    let news = this.element.querySelector('.news');
                    let tmpl = this.element.querySelector('template').content.cloneNode(true);
                    tmpl.querySelector('.news-item__link').dataset.paramId = item.id;
                    tmpl.querySelector('.news-item__title').innerText = item.title;
                    tmpl.querySelector('.news-item__body').innerHTML = item.body;
                    news.appendChild(tmpl);
                });
            })
    }

}
