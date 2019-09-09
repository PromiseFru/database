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

    //ajax call from ./module/ajax,js
    mydata('https://raw.githubusercontent.com/PromiseFru/database/master/db.json',
        data => {
            // dataholder call from ./module/dataholder.js
            dataholder(data);
            // buttons calls from ./modules/buttons.js
            sortBtnClicked(data);
            searchbtnclicked(data);
            // searchgen call from scipts.js
            searchgen(data);
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