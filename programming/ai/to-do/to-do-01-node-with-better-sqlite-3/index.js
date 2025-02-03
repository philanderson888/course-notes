import inquirer from 'inquirer';
import Database from 'better-sqlite3';
import { printTable } from 'console-table-printer';

// Initialize database
const db = new Database('todo.db');

// Create todos table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT NOT NULL
  )
`);

async function main() {
  while (true) {
    const { choice } = await inquirer.prompt([
      {
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: [
          '1. List all items',
          '2. Add new item',
          '3. Edit item',
          '4. Delete item',
          '5. Exit'
        ]
      }
    ]);

    switch (choice[0]) {
      case '1':
        await listItems();
        break;
      case '2':
        await addItem();
        break;
      case '3':
        await editItem();
        break;
      case '4':
        await deleteItem();
        break;
      case '5':
        console.log('Goodbye!');
        process.exit(0);
    }
  }
}

async function listItems() {
  const todos = db.prepare('SELECT * FROM todos').all();
  if (todos.length === 0) {
    console.log('No todos found.');
    return;
  }
  printTable(todos);
}

async function addItem() {
  const { text } = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter the todo text:'
    }
  ]);

  db.prepare('INSERT INTO todos (text) VALUES (?)').run(text);
  console.log('Todo added successfully!');
}

async function editItem() {
  const todos = db.prepare('SELECT * FROM todos').all();
  if (todos.length === 0) {
    console.log('No todos to edit.');
    return;
  }

  printTable(todos);

  const { id } = await inquirer.prompt([
    {
      type: 'number',
      name: 'id',
      message: 'Enter the ID of the todo to edit:'
    }
  ]);

  const todo = db.prepare('SELECT * FROM todos WHERE id = ?').get(id);
  if (!todo) {
    console.log('Todo not found.');
    return;
  }

  const { text } = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter the new text:',
      default: todo.text
    }
  ]);

  db.prepare('UPDATE todos SET text = ? WHERE id = ?').run(text, id);
  console.log('Todo updated successfully!');
}

async function deleteItem() {
  const todos = db.prepare('SELECT * FROM todos').all();
  if (todos.length === 0) {
    console.log('No todos to delete.');
    return;
  }

  printTable(todos);

  const { id } = await inquirer.prompt([
    {
      type: 'number',
      name: 'id',
      message: 'Enter the ID of the todo to delete:'
    }
  ]);

  const result = db.prepare('DELETE FROM todos WHERE id = ?').run(id);
  if (result.changes > 0) {
    console.log('Todo deleted successfully!');
  } else {
    console.log('Todo not found.');
  }
}

main().catch(console.error);