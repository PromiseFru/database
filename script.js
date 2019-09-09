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
import {
    searchgen
} from './modules/search.js';

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