/**
 * @property {HTMLElement} emailTarget
 * @property {HTMLElement} messageTarget
 * @property {HTMLElement} successTarget
 * @property {HTMLElement} formTarget
 */
export default class extends Stimulus.Controller {

    /**
     * @returns {string[]}
     */
    static get targets() {
        return ["email", "message", "success", "form"]
    }

    send(event) {
        event.preventDefault();
        let payload = {
            email: this.email,
            message: this.message
        };
        alert('Send message: ' + JSON.stringify(payload));
        this.success.classList.toggle('d-none');
        this.form.classList.toggle('d-none');
    }

    /**
     * @returns {string}
     */
    get email() {
        return this.emailTarget.value
    }

    /**
     * @returns {string}
     */
    get message() {
        return this.messageTarget.value
    }

    /**
     * @returns {HTMLElement}
     */
    get success() {
        return this.successTarget;
    }

    /**
     * @returns {HTMLElement}
     */
    get form() {
        return this.formTarget;
    }
}
