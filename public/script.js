$(document).ready(() => {

    // Using the XMLHttpRequest function to get JSON file
    var xhr = new XMLHttpRequest();
    // accessing local directory with the open method
    xhr.open('GET', 'https://raw.githubusercontent.com/PromiseFru/database/master/db.json');

    // giving commands when the JSON file is fetched and loaded
    xhr.onload = () => {
        // USING JSON.parse command to convert JSON text in Objects
        var data = JSON.parse(xhr.response);
        renderHTML(data);
    }
    // send response to client
    xhr.send();
});

// fetching table id in HTML
var results = document.getElementById('results');

// loop through creating table data for as many objects are present in JSON
function renderHTML(data){
    var text = '';

    for (i in data) {
        text += `
        <tr>
            <td scope="row">${data[i].meta_time}</td>
            <td>${data[i].meta_place}</td>
            <td>${data[i].meta_date}</td>
        </tr>
        `
    }

    // Render generated results to ID HTML document
    results.innerHTML = text;
}