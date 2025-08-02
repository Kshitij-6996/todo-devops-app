const express = require('express');
const app = express();
const PORT = 3000;

let todos = [];

app.use(express.json());
app.use(express.static('public'));  // <-- serve HTML files

// ... rest of your code remains same


app.get('/', (req, res) => {
  res.send('Welcome to the To-Do API!');
});

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const { task } = req.body;
  todos.push({ task, id: todos.length + 1 });
  res.json({ message: 'Task added', todos });
});

app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(todo => todo.id !== id);
  res.json({ message: 'Task deleted', todos });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
