// AJAX
import {
    mydata
} from './modules/Ajax.mjs';
import {
    dataholder
} from './modules/dataholder.mjs';
import {
    sortBtnClicked,
    searchbtnclicked
} from './modules/buttons.mjs';
import {
    searchgen
} from './modules/search.mjs';

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