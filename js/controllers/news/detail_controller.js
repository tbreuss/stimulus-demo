/**
 * @property {HTMLElement} idTarget
 * @property {HTMLElement} titleTarget
 * @property {HTMLElement} bodyTarget
 * @property {HTMLElement} loadingTarget
 * @property {HTMLElement} loadedTarget
 */
export default class extends Stimulus.Controller {

    /**
     * @returns {string[]}
     */
    static get targets() {
        return ["id", "title", "body", "loading", "loaded"]
    }

    connect() {
        this.render();
    }

    render() {
        if (!this.data.has('id')) {
            throw "Parameter id is missing";
        }
        fetch('https://jsonplaceholder.typicode.com/posts/' + this.data.get('id'))
            .then(response => response.json())
            .then(data => {
                this.id = data.id;
                this.title = data.title;
                this.body = data.body;
                this.loading.classList.toggle('d-none');
                this.loaded.classList.toggle('d-none');
            });
    }

    /**
     * @param value {string}
     */
    set id(value) {
        this.idTarget.textContent = value;
    }

    /**
     * @param value {string}
     */
    set title(value) {
        this.titleTarget.textContent = value;
    }

    /**
     * @param value {string}
     */
    set body(value) {
        this.bodyTarget.textContent = value;
    }

    /**
     * @returns {HTMLElement}
     */
    get loading() {
        return this.loadingTarget;
    }

    /**
      * @returns {HTMLElement}
     */
    get loaded() {
        return this.loadedTarget;
    }
}
