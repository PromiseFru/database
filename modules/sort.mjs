import { dataholder } from "./dataholder.mjs";

//sort data by given data
export function sort(data) {
    data.sort((a, b) => {
        // sort by meta_place alphabetically
        return a.meta_place.localeCompare(b.meta_place);
    });
    dataholder(data);
}