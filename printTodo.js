import fs from 'fs';


function printTodo() {
    const jsonContent = fs.readFileSync('todos.json', 'utf-8');
    const jsonTodos = JSON.parse(jsonContent);
    let number = 1;
    if (jsonTodos.length > 0) {
        for (let i = 0; i < jsonTodos.length; i++) {
           console.log(number, jsonTodos[i].status, jsonTodos[i].todoName);
            number += 1;
        }
    } else if (!jsonTodos.length) {
        console.log("Nincs mára tennivalód! :)")
    }
}


export default printTodo

