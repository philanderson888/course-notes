use rusqlite::{params, Connection, Result};
use dialoguer::{theme::ColorfulTheme, Select, Input};
use prettytable::{Table, row};

fn init_db(conn: &Connection) -> Result<()> {
    conn.execute(
        "CREATE TABLE IF NOT EXISTS todos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            text TEXT NOT NULL
        )",
        [],
    )?;
    Ok(())
}

fn list_items(conn: &Connection) -> Result<()> {
    let mut stmt = conn.prepare("SELECT id, text FROM todos")?;
    let rows = stmt.query_map([], |row| {
        Ok((row.get::<_, i32>(0)?, row.get::<_, String>(1)?))
    })?;

    let mut table = Table::new();
    table.add_row(row!["ID", "Text"]);
    let mut found = false;

    for row in rows {
        let (id, text) = row?;
        table.add_row(row![id, text]);
        found = true;
    }

    if found {
        table.printstd();
    } else {
        println!("No todos found.");
    }
    Ok(())
}

fn add_item(conn: &Connection) -> Result<(), Box<dyn std::error::Error>> {
    let text: String = Input::with_theme(&ColorfulTheme::default())
        .with_prompt("Enter the todo text")
        .interact_text()?;
    conn.execute("INSERT INTO todos (text) VALUES (?)", params![text])?;
    println!("Todo added successfully!");
    Ok(())
}

fn edit_item(conn: &Connection) -> Result<(), Box<dyn std::error::Error>> {
    // Retrieve all todos from the database
    let mut stmt = conn.prepare("SELECT id, text FROM todos")?;
    let todos: Vec<(i32, String)> = stmt
        .query_map([], |row| Ok((row.get(0)?, row.get(1)?)))?
        .filter_map(Result::ok) // Ignore any rows that fail to map
        .collect();

    if todos.is_empty() {
        println!("No todos to edit.");
        return Ok(());
    }

    // Display the todos
    println!("Current todos:");
    for (id, text) in &todos {
        println!("{}: {}", id, text);
    }

    // Prompt the user to select a todo ID to edit
    let id: i32 = Input::with_theme(&ColorfulTheme::default())
        .with_prompt("Enter the ID of the todo to edit")
        .interact_text()
        .map_err(|err| Box::new(err) as Box<dyn std::error::Error>)?; // Map dialoguer error to Box<dyn Error>

    // Check if the ID exists
    if !todos.iter().any(|(todo_id, _)| *todo_id == id) {
        println!("Todo with ID {} not found.", id);
        return Ok(());
    }

    // Prompt for the new text
    let new_text: String = Input::with_theme(&ColorfulTheme::default())
        .with_prompt("Enter the new text")
        .interact_text()
        .map_err(|err| Box::new(err) as Box<dyn std::error::Error>)?; // Map dialoguer error to Box<dyn Error>

    // Update the database
    conn.execute(
        "UPDATE todos SET text = ? WHERE id = ?",
        params![new_text, id],
    )?;
    println!("Todo updated successfully!");

    Ok(())
}

fn delete_item(conn: &Connection) -> Result<(), Box<dyn std::error::Error>> {
    // Retrieve all todos from the database
    let mut stmt = conn.prepare("SELECT id, text FROM todos")?;
    let todos: Vec<(i32, String)> = stmt
        .query_map([], |row| Ok((row.get(0)?, row.get(1)?)))?
        .filter_map(Result::ok) // Ignore any rows that fail to map
        .collect();

    if todos.is_empty() {
        println!("No todos to delete.");
        return Ok(());
    }

    // Display the todos
    println!("Current todos:");
    for (id, text) in &todos {
        println!("{}: {}", id, text);
    }

    // Prompt the user to select a todo ID to delete
    let id: i32 = Input::with_theme(&ColorfulTheme::default())
        .with_prompt("Enter the ID of the todo to delete")
        .interact_text()
        .map_err(|err| Box::new(err) as Box<dyn std::error::Error>)?; // Map dialoguer error to Box<dyn Error>

    // Check if the ID exists
    if !todos.iter().any(|(todo_id, _)| *todo_id == id) {
        println!("Todo with ID {} not found.", id);
        return Ok(());
    }

    // Delete the todo from the database
    conn.execute("DELETE FROM todos WHERE id = ?", params![id])?;
    println!("Todo deleted successfully!");

    Ok(())
}


fn main() -> Result<(), Box<dyn std::error::Error>> {
    let conn = Connection::open("todo.db")?;
    init_db(&conn)?;

    let options = vec![
        "List all items",
        "Add new item",
        "Edit item",
        "Delete item",
        "Exit",
    ];

    loop {
        let selection = Select::with_theme(&ColorfulTheme::default())
            .with_prompt("What would you like to do?")
            .items(&options)
            .interact()
            .map_err(|err| Box::new(err) as Box<dyn std::error::Error>)?; // Map dialoguer error to Box<dyn Error>

        match selection {
            0 => list_items(&conn)?, // List all items
            1 => add_item(&conn)?,   // Add new item
            2 => edit_item(&conn)?,  // Edit an item
            3 => delete_item(&conn)?, // Delete an item
            4 => {
                println!("Goodbye!");
                break;
            }
            _ => unreachable!(), // Should never occur because of controlled inputs
        }
    }

    Ok(())
}

