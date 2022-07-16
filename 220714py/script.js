var request = new XMLHttpRequest();
request.open('GET', 'http://127.0.0.1:8001/', true);
request.responseType = 'json';

request.onload = function () {
    var data = this.response;
    console.log(data);
};
request.send();