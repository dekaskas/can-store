var products

var request = new XMLHttpRequest
request.open('GET', 'products.json')
request.responseType = 'json'
request.onload = function() {
    if(this.status == 200) {
        products = this.response
        initializ()
    } else {
        console.log('Network request for products.json failed with response ' + this.status + ': ' + this.statusText)
    }
}