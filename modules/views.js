// render HTML
export function renderHTML(data) {
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
        </tr>
        `
    }

    // Render generated results to ID HTML document
    results.innerHTML = text;
};