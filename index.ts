import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number ;
    title: string ;
    completed: boolean; 
}

axios.get(url).then(response =>  {
    const todo = response.data as Todo

    const id = todo.id
    const title = todo.title
    const completed = todo.completed
    const userId = 10

    logTodo(id, title, completed, userId)
    
})

const logTodo = (id: number, title:string, completed:boolean, userId:number = 30) => {
    console.log(`
        the Todo with ID ${id}
        Has a title of: ${title}
        Is it finished? ${completed}
    `)
}