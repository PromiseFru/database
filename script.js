$(document).ready(() => {

    //ajax call
    mydata('https://raw.githubusercontent.com/PromiseFru/database/master/db.json',
        data => {
            // dataholder call
            dataholder(data);
            // buttons calls
            sortBtnClicked(data);
            searchbtnclicked(data);
            // searchgen call
            searchgen(data);
        });
});

// AJAX
function getJSON(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        callback(this.responseText)
    };
    xhr.open('GET', url, true);
    xhr.send();
}

function mydata(url, callback) {
    getJSON(url, data => callback(JSON.parse(data)));
}

// DATAHOLDER
// databoard pre-previewed data
function dataholder(inputdata) {
    let container = inputdata;
    renderHTML(container);
}

// BUTTONS
// sort data when button clicked
function sortBtnClicked(data) {
    // fetch btn-sort id from HTML
    var btnSort = document.getElementById('btn-sort');

    btnSort.addEventListener('click', () => {
        sort(data);
    });
}

function searchbtnclicked(data) {
    var searchbtn = document.getElementById('searchbtn');
    var searchbox = document.getElementById('searchbox');

    searchbtn.addEventListener('click', () => {
        search(data, searchbox);
    })
  
}

// SEARCH
// search through data for item that match
function search(data, searchbox) {
    var search = data.filter(data => {
        return (data.meta_place === searchbox.value || data.meta_time === searchbox.value || data.meta_date === searchbox.value);
    });
    dataholder(search);
    sortBtnClicked(search);
}

// generate search data
function searchgen(data) {
    var dbList = document.getElementById('dblist');
    var stuff = '';

    for (let i in data) {
        stuff += `
        <option value="${data[i].meta_place}">
        `
    }

    for (let i in data) {
        stuff += `
        <option value="${data[i].meta_time}">
        `
    }

    for (let i in data) {
        stuff += `
        <option value="${data[i].meta_date}">
        `
    }
    dbList.innerHTML = stuff;
}

// SORT
//sort data by given data
function sort(data) {
    data.sort((a, b) => {
        // sort by meta_place alphabetically
        return a.meta_place.localeCompare(b.meta_place);
    });
    dataholder(data);
}

// VIEWS
// render HTML
function renderHTML(data) {
    // fetching table id in HTML
    var results = document.getElementById('results');

    var text = '';

    // loop through creating table data for as many objects are present in JSON
    for (let i in data) {
        text += `
        <tr>
            <td scope="row">${data[i].meta_time}</td>
            <td>${data[i].meta_place}</td>
            <td>${data[i].meta_date}</td>
            <td scope="row">${data[i].meta_time}</td>
            <td>${data[i].meta_place}</td>
            <td>${data[i].meta_date}</td>
            <td scope="row">${data[i].meta_time}</td>
            <td>${data[i].meta_place}</td>
        </tr>
        `
    }

    // Render generated results to ID HTML document
    results.innerHTML = text;
};