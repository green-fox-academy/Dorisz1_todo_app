import fs from 'fs';


function completeTodo(todo){
    const jsonContent = fs.readFileSync('todos.json', 'utf-8');
    const jsonTodos = JSON.parse(jsonContent);
    let todoIndex = todo-1;
    jsonTodos[todoIndex].status = "[x]";
        

      /*for (var i=0; i < jsonTodos.length; i++) {
            if (jsonTodos[i].todoName === completedTodo) {
                jsonTodos[i].status = "[x]";
                jsonTodos[i]
            }
        }*/
        /*for (let i=0; i < jsonTodos.length; i++) {
        if (jsonTodos[i] === jsonTodos[todo-1]){*/
        
         
    fs.writeFileSync('todos.json', JSON.stringify(jsonTodos, null, 4)); ;
  
}
 
export default completeTodo
