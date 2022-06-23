import { Item } from "./Item.model";

export class Order {
    
    name : string;
    tableNo: number;
    items: Item[];
    total: number;
    constructor(name?: string, tableNo?: number, items?: Item[], total?: number){
        this.name = name;
        this.tableNo = tableNo;
        this.items = items;
        this.total = total;
    }
}