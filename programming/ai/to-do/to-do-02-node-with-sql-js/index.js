import inquirer from 'inquirer';
import initSqlJs from 'sql.js';
import { printTable } from 'console-table-printer';
import { promises as fs } from 'fs';

let db;
let SQL;

async function initDB() {
  SQL = await initSqlJs();
  try {
    const data = await fs.readFile('todo.db');
    db = new SQL.Database(data);
  } catch {
    db = new SQL.Database();
  }
  
  // Create todos table if it doesn't exist
  db.run(`
    CREATE TABLE IF NOT EXISTS todos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      text TEXT NOT NULL
    )
  `);
}

async function saveDB() {
  const data = db.export();
  await fs.writeFile('todo.db', Buffer.from(data));
}

async function main() {
  await initDB();

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
        await saveDB();
        console.log('Goodbye!');
        process.exit(0);
    }
    
    // Save after each operation
    await saveDB();
  }
}

function listItems() {
  const todos = db.exec('SELECT * FROM todos');
  if (!todos.length || !todos[0].values.length) {
    console.log('No todos found.');
    return;
  }
  
  const formattedTodos = todos[0].values.map(([id, text]) => ({
    id,
    text
  }));
  
  printTable(formattedTodos);
}

async function addItem() {
  const { text } = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter the todo text:'
    }
  ]);

  db.run('INSERT INTO todos (text) VALUES (?)', [text]);
  console.log('Todo added successfully!');
}

async function editItem() {
  const todos = db.exec('SELECT * FROM todos');
  if (!todos.length || !todos[0].values.length) {
    console.log('No todos to edit.');
    return;
  }

  const formattedTodos = todos[0].values.map(([id, text]) => ({
    id,
    text
  }));
  printTable(formattedTodos);

  const { id } = await inquirer.prompt([
    {
      type: 'number',
      name: 'id',
      message: 'Enter the ID of the todo to edit:'
    }
  ]);

  const result = db.exec('SELECT * FROM todos WHERE id = ?', [id]);
  if (!result.length || !result[0].values.length) {
    console.log('Todo not found.');
    return;
  }

  const { text } = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter the new text:',
      default: result[0].values[0][1]
    }
  ]);

  db.run('UPDATE todos SET text = ? WHERE id = ?', [text, id]);
  console.log('Todo updated successfully!');
}

async function deleteItem() {
  const todos = db.exec('SELECT * FROM todos');
  if (!todos.length || !todos[0].values.length) {
    console.log('No todos to delete.');
    return;
  }

  const formattedTodos = todos[0].values.map(([id, text]) => ({
    id,
    text
  }));
  printTable(formattedTodos);

  const { id } = await inquirer.prompt([
    {
      type: 'number',
      name: 'id',
      message: 'Enter the ID of the todo to delete:'
    }
  ]);

  const stmt = db.prepare('DELETE FROM todos WHERE id = ?');
  stmt.run([id]);
  stmt.free();
  
  console.log('Todo deleted successfully!');
}

main().catch(console.error);