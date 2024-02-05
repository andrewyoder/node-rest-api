if (!customElements.get('product-form')) {
    customElements.define('product-form', class ProductForm extends HTMLElement {
        constructor() {
            super();

            this.form = this.querySelector('form');
            this.form.addEventListener('submit', this.onSubmitHandler.bind(this));
            this.submitButton = this.querySelector('[type="submit"]');
        }

        onSubmitHandler(evt) {
            evt.preventDefault();

            const formData = new FormData(this.form);
            var reqBody = {
                'product': `${formData.get("product-name")}`
            };

            const request = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Upgrade-Insecure-Requests': 0,
                    'Accept': `application/javascript`,
                    'X-Requested-With': 'XMLHttpRequest'
                },
                body: JSON.stringify(reqBody)
            };

            var api_url = 'restockAlert/add';

            fetch(api_url, request);
        }
    });
}