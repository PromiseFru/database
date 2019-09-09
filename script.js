import {
    mydata
} from './modules/Ajax.js';
import {
    dataholder
} from './modules/dataholder.js';
import {
    sortBtnClicked,
    searchbtnclicked
} from './modules/buttons.js';

$(document).ready(() => {

    mydata('db.json',
        data => {
            dataholder(data);
            sortBtnClicked(data);
            searchgen(data);
            searchbtnclicked(data);
        });
});

// generate search data
function searchgen(data) {
    var dbList = document.getElementById('dblist');
    var stuff = '';

    for (let i in data) {
        stuff += `
        <option value="${data[i].meta_place}">
        `
    }
    dbList.innerHTML = stuff;
}