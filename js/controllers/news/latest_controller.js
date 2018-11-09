export default class extends Stimulus.Controller {

    connect() {
        this.render()
    }

    render() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                data = data.slice(0, 5);
                let listGroup = this.element.querySelector('.list-group');
                data.forEach((item) => {
                    let tmpl = this.element.querySelector('template').content.cloneNode(true);
                    tmpl.querySelector('a').dataset.paramId = item.id;
                    tmpl.querySelector('a').innerText = item.title;
                    listGroup.appendChild(tmpl);
                });
            })
    }

}
