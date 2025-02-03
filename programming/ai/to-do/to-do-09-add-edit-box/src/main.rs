use druid::widget::{Button, Label, TextBox, List, Flex, WidgetExt, Either};
use druid::{AppLauncher, Data, Lens, Widget, WindowDesc};
use rusqlite::{params, Connection, Result};
use std::sync::Arc;

#[derive(Clone, Data, Lens)]
struct TodoItem {
    id: i32,
    text: String,
    done: bool,
    is_editing: bool,
}

#[derive(Clone, Lens)]
struct TodoList {
    items: Arc<Vec<TodoItem>>,
    new_item_text: String,
    editing_item: Option<TodoItem>,
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
            is_editing: false,
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
        let dynamic_text = Flex::row()
            .with_child(
                // Switch between Label and TextBox based on `is_editing`
                Either::new(
                    |item: &TodoItem, _| item.is_editing,
                    TextBox::new()
                        .lens(TodoItem::text) // Bind to the item's text
                        .fix_width(200.0), // Adjust width if needed
                    Label::new(|item: &TodoItem, _: &_| item.text.clone())
                )
            )
            .with_spacer(10.0);
    
        let edit_button = Button::new("Edit").on_click(|_ctx, item: &mut TodoItem, _env| {
            item.is_editing = true; // Set edit mode to true
        });
    
        Flex::row()
            .with_child(dynamic_text)
            .with_child(edit_button)
            .padding(5.0)
    })
    .lens(TodoList::items);

    let new_item_text = TextBox::new()
        .lens(TodoList::new_item_text)
        .padding(5.0);

    let add_button = Button::new("Add Todo")
        .on_click(|_ctx, data: &mut TodoList, _env| {
            println!("Adding new item: {}", data.new_item_text);
            let new_item = TodoItem {
                id: 0,
                text: data.new_item_text.clone(),
                done: false,
                is_editing: false,
            };
            data.new_item_text.clear();
            let conn = Connection::open("todos2.db").unwrap();
            add_item(&conn, new_item.text.clone()).unwrap();
            let items = list_items(&conn).unwrap();
            data.items = Arc::new(items);
        });

    Flex::column()
        .with_child(new_item_text.padding(5.0).center())
        .with_spacer(10.0)
        .with_child(add_button)
        .with_spacer(10.0)
        .with_child(list)
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let conn = Connection::open("todos2.db")?;
    init_db(&conn)?;

    let items = list_items(&conn)?;

    let main_window = WindowDesc::new(build_ui())
        .title("Todo List App")
        .window_size((400.0, 400.0));

    AppLauncher::with_window(main_window)
        .use_simple_logger()
        .launch(TodoList { 
            items: Arc::new(items), 
            new_item_text: String::new(),
            editing_item: None,
        })?;

    Ok(())
}
