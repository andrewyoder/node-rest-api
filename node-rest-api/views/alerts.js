function getEmailsForm() {
    var productName = document.getElementById('product_name');

    var request = new Request('/restockAlert/get', {
        method: "POST",
        body: {
            product: productName
        }
    });

    fetch(request);
}