import { sort } from "./sort.mjs";
import { search } from "./search.mjs";

// sort data when button clicked
export function sortBtnClicked(data) {
    // fetch btn-sort id from HTML
    var btnSort = document.getElementById('btn-sort');

    btnSort.addEventListener('click', () => {
        sort(data);
    });
}

export function searchbtnclicked(data) {
    var searchbtn = document.getElementById('searchbtn');
    var searchbox = document.getElementById('searchbox');

    searchbtn.addEventListener('click', () => {
        search(data, searchbox);
    })
}