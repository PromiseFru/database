import { dataholder } from "./dataholder.js";

// search through data for item that match
export function search(data, searchbox) {
    var search = data.filter(data => data.meta_place === searchbox.value);
    dataholder(search);
}
