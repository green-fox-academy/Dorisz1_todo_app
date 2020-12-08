import fs from 'fs';

class Todo{
      constructor (todoName, status = "[ ]" ){
            this.status= status, 
            this.todoName = todoName
      }

}

function addNewTodo(todoName){
      const jsonContent = fs.readFileSync('todos.json', 'utf-8');
      const jsonTodos = JSON.parse(jsonContent);
      
      
      jsonTodos.push(new Todo(todoName));

      fs.writeFileSync('todos.json', JSON.stringify(jsonTodos, null, 4));
       return console.log("új tennivaló hozzáadva:", todoName)
}


export default addNewTodo

