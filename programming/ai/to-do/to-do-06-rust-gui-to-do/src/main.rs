use druid::widget::{Label, List, TextBox, Padding, LensWrap};
use druid::{AppLauncher, Data, Lens, Widget, WindowDesc};
use im::Vector;
use rusqlite::{params, Connection, Result};
use dialoguer::{theme::ColorfulTheme, Select, Input};
use prettytable::{Table, row};
use std::sync::Arc; // Import Arc for wrapping the Vector

// Define the TodoItem struct
#[derive(Clone, Data, Lens)]
struct TodoItem {
    id: i32,
    text: String,
    done: bool,
}

#[derive(Clone, Lens)]
struct TodoList {
    items: Arc<Vec<TodoItem>>, // Use Arc<Vec<TodoItem>>
}

impl Data for TodoList {
    fn same(&self, other: &Self) -> bool {
        std::sync::Arc::<Vec<TodoItem>>::ptr_eq(&self.items, &other.items)
    }
}

fn init_db(conn: &Connection) -> Result<()> {
    conn.execute(
        "CREATE TABLE IF NOT EXISTS todos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            text TEXT NOT NULL,
            done BOOLEAN NOT NULL DEFAULT false
        )",
        [],
    )?;
    Ok(())
}

fn list_items(conn: &Connection) -> Result<Vec<TodoItem>> {
    let mut stmt = conn.prepare("SELECT id, text, done FROM todos")?;
    let rows = stmt.query_map([], |row| {
        Ok(TodoItem {
            id: row.get::<_, i32>(0)?,
            text: row.get::<_, String>(1)?,
            done: row.get::<_, bool>(2)?,
        })
    })?;

    let mut items = Vec::new();
    for row in rows {
        items.push(row?);
    }

    Ok(items)
}

fn add_item(conn: &Connection, text: String) -> Result<()> {
    conn.execute("INSERT INTO todos (text) VALUES (?)", params![text])?;
    Ok(())
}

fn edit_item(conn: &Connection, id: i32, new_text: String) -> Result<()> {
    conn.execute("UPDATE todos SET text = ? WHERE id = ?", params![new_text, id])?;
    Ok(())
}

fn delete_item(conn: &Connection, id: i32) -> Result<()> {
    conn.execute("DELETE FROM todos WHERE id = ?", params![id])?;
    Ok(())
}

fn mark_item_as_done(conn: &Connection, id: i32) -> Result<()> {
    conn.execute("UPDATE todos SET done = NOT done WHERE id = ?", params![id])?;
    Ok(())
}

fn build_ui() -> impl Widget<TodoList> {

    let list = List::new(|| {
        let label = Label::new(|item: &TodoItem, _: &_| item.text.clone());
        Padding::new(5.0, label)
    });
    LensWrap::new(list, TodoList::items)
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let conn = Connection::open("todos2.db")?;
    init_db(&conn)?;

    // Create some initial items (for testing)
    let items = list_items(&conn)?;

    // Create and configure the app's window
    let main_window = WindowDesc::new(build_ui())
        .title("Todo List App")
        .window_size((400.0, 400.0));

    AppLauncher::with_window(main_window)
        .use_simple_logger()
        .launch(TodoList { items: Arc::new(items) })?;

    Ok(())
}
