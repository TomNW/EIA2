export interface Item {
    task: string;
    date: string;
    time: string;
    name: string;
    comment: string;
    status: boolean;
 }

 export interface Todo {
    [name: string]: Item[];
 }