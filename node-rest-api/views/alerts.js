var productName = document.getElementById('product_name');

var request = new Request('/restockAlert/get', {
    method: "POST",
    body: {
        product: productName
    }
});

document.getElementById('submitBtn').onClick();