// not to mouch typescript syntax

import axios from "axios";

const url = "http://jsonplaceholder.typicode.com/todos/1";

//async will get a promise in return
axios.get(url).then(response => {
  const todo = response.data;

  const ID = todo.id;
  const title = todo.title;
  const finished = todo.completed;

  console.log(`
  The todo with ID: ${ID}
  Has a title of: ${title}
  Is it finished: ${finished}
  `);
});
