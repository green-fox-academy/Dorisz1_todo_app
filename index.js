import fs from 'fs';
import minimist from "minimist";
import printManual from "./printManual.js";
import printTodo from "./printTodo.js";
import addNewTodo from "./addNewTodo.js";
import completeTodo from "./completeTodo.js";
import removeTask from "./removeTodo.js"

const args = minimist(process.argv);
console.log(args)





if (args.l === true) {
    printTodo();
} else if (args.hasOwnProperty('a')) {
    addNewTodo(args.a);
} else if (args.hasOwnProperty('r')) {
    removeTask(args.e);
} else if (args.hasOwnProperty('c')) {
    completeTodo(args.c);
} else {
    printManual();
}

