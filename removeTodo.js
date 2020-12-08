import fs from 'fs';


function removeTodo(todo){
    const jsonContent = fs.readFileSync('todos.json', 'utf-8');
    const jsonTodos = JSON.parse(jsonContent);
    let todoIndex = todo-1;
    jsonTodos.splice(todoIndex, 1); 


    fs.writeFileSync('todos.json', JSON.stringify(jsonTodos, null, 4)); ;
  
}



export default removeTodo