
namespace A05 {

export interface Item {
    task: string;
    name: string;
    date: string;
    comment: string;
 }

 export interface Todo {
    [name: string]: Item[];
 }

}