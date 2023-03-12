import axios from "axios"

interface Todo {
  userId: number
  id: string
  title: string
  completed: boolean
}

axios.get("https://jsonplaceholder.typicode.com/todos/1").then((data) => {
  const todo = data.data as Todo
  console.log(todo)
  displayTodo(todo.userId, todo.id, todo.title, todo.completed)
})

const displayTodo = (
  userId: number,
  id: string,
  title: string,
  completed: boolean
) => {
  console.log(`
    id: ${id}
    userId: ${userId}
    title: ${title}
    completed: ${completed}
  `)
}
