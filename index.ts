// not to mouch typescript syntax

import axios from "axios";

const url = "http://jsonplaceholder.typicode.com/todos/1";

//async will get a promise in return
axios.get(url).then(response => {
  console.log(response.data);
});
