function getEmailsForm() {
    var productName = document.getElementById('product_name');

    console.log("getEmailsForm() - product: " + productName);

    var request = new Request('/restockAlert/get', {
        method: "POST",
        body: {
            product: productName
        }
    });

    console.log("request: " + request);

    fetch(request);
}