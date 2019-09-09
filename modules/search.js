import { dataholder } from "./dataholder.js";
import { sortBtnClicked } from "./buttons.js";

// search through data for item that match
export function search(data, searchbox) {
    var search = data.filter(data => {
        return (data.meta_place === searchbox.value || data.meta_time === searchbox.value || data.meta_date === searchbox.value);
    });
    dataholder(search);
    sortBtnClicked(search);
}

// generate search data
export function searchgen(data) {
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
