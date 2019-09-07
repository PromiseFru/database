$(document).ready(() => {
    fileFetch();
});

// fetching file from source and display to client
function fileFetch() {
    // Using the XMLHttpRequest function to get JSON file
    var xhr = new XMLHttpRequest();
    // accessing local directory with the open method
    xhr.open('GET', 'https://raw.githubusercontent.com/PromiseFru/database/master/db.json');

    // giving commands when the JSON file is fetched and loaded
    xhr.onload = () => {
        // error handling
        if (xhr.status == 200) {
            // USING JSON.parse command to convert JSON text in Objects
            var data = JSON.parse(xhr.response);
            // render HTML with fetched data
            renderHTML(data);
            // sort fetched data
            sortBtnClicked(data);
            // generate search data
            searchgen(data);
            // search for input
            searchbtnclicked(data);
        } else {
            var main = document.getElementById('main');
            main.innerHTML = `<h4 class = "text-center mt-5" > An Error Occured ...</h4>`
        }
    }

    // send response to client
    xhr.send();
};

// render HTML
function renderHTML(data) {
    // fetching table id in HTML
    var results = document.getElementById('results');

    var text = '';

    // loop through creating table data for as many objects are present in JSON
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
};

//sort data by given data
function sort(data) {
    data.sort((a, b) => {
        // sort by meta_place alphabetically
        return a.meta_place.localeCompare(b.meta_place);
    });

    renderHTML(data);
}

// sort data when button clicked
function sortBtnClicked(data) {
    // fetch btn-sort id from HTML
    var btnSort = document.getElementById('btn-sort');

    btnSort.addEventListener('click', () => {
        sort(data);
    });
}

// generate search data
function searchgen(data) {
    var dbList = document.getElementById('dblist');
    var stuff = '';

    for (i in data) {
        stuff += `
        <option value="${data[i].meta_place}">
        `
    }
    dbList.innerHTML = stuff;
}

// search through data for item that match
function search(data, searchbox) {
    var search = data.filter(data => data.meta_place === searchbox.value);
    return search;
}

function searchbtnclicked(data) {
    var searchform = document.getElementById('searchform');
    var searchbox = document.getElementById('searchbox');

    searchform.addEventListener('submit', () => {
        var result = search(data, searchbox);
        renderHTML(result);
    })
}