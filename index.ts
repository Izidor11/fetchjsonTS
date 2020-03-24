// not to mouch typescript syntax

import axios from "axios";

const url = "http://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

//async will get a promise in return
axios.get(url).then(response => {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  console.log(`
  The todo with ID: ${id}
  Has a title of: ${title}
  Is it finished: ${completed}
  `);
});
