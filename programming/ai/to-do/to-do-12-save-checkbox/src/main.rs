use druid::widget::{Button, Label, TextBox, List, Flex, WidgetExt, Either, Checkbox};
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

impl TodoItem {
    pub fn update_item_in_db(&self, conn: &Connection) -> rusqlite::Result<()> {
        conn.execute(
            "UPDATE todos2 SET text = ?1, done = ?2 WHERE id = ?3",
            (&self.text, self.done, self.id),
        )?;
        Ok(())
    }
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
        "CREATE TABLE IF NOT EXISTS todos2 (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            text TEXT NOT NULL,
            done BOOLEAN NOT NULL DEFAULT false
        )",
        [],
    )?;
    Ok(())
}

fn list_items(conn: &Connection) -> Result<Vec<TodoItem>> {
    let mut stmt = conn.prepare("SELECT id, text, done FROM todos2")?;
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
    conn.execute("INSERT INTO todos2 (text) VALUES (?)", params![text])?;
    Ok(())
}

fn edit_item(conn: &Connection, id: i32, new_text: String) -> Result<()> {
    conn.execute("UPDATE todos2 SET text = ? WHERE id = ?", params![new_text, id])?;
    Ok(())
}

fn delete_item(conn: &Connection, id: i32) -> Result<()> {
    conn.execute("DELETE FROM todos2 WHERE id = ?", params![id])?;
    Ok(())
}

fn mark_item_as_done(conn: &Connection, id: i32) -> Result<()> {
    conn.execute("UPDATE todos2 SET done = NOT done WHERE id = ?", params![id])?;
    Ok(())
}

fn build_ui() -> impl Widget<TodoList> {
    let list = List::new(|| {
        let item_done = TodoItem::done;
        let database_id = TodoItem::id.clone();
        let checkbox = Checkbox::new("")
            .on_click(|_ctx, item_done: &mut bool, _env| {
                println!("Checkbox clicked! done: {}", item_done);
                println!("... database id is {:?}", &database_id);
                //println!("... to do item is {}", TodoItem { id: database_id, text: "".to_string(), done: item_done.clone(), is_editing: false });
                //println!("... env is {:?}",_env);
                *item_done = !*item_done;
            })
            .fix_width(20.0)
            .center()
            .lens(TodoItem::done);

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
    
        // Dynamic button area: Edit -> Save/Cancel
        let dynamic_buttons = Either::new(
            |item: &TodoItem, _| item.is_editing,
            Flex::row()
                .with_child(
                    Button::new("Save").on_click(|_ctx, item: &mut TodoItem, _env| {
                        println!("Save button clicked for item: {}", item.text);
                        let conn = Connection::open("todos2.db").expect("Failed to connect to database");
                        if let Err(e) = item.update_item_in_db(&conn) {
                            eprintln!("Failed to update item in database: {}", e);
                        } else {
                            println!("Item successfully updated in the database");
                        }
                        item.is_editing = false;
                    })
                )
                .with_spacer(10.0)
                .with_child(
                    Button::new("Cancel").on_click(|_ctx, item: &mut TodoItem, _env| {
                        println!("Cancel button clicked for item: {}", item.text);
                        item.is_editing = false; // Exit edit mode
                    })
                ),
            Button::new("Edit").on_click(|_ctx, item: &mut TodoItem, _env| {
                println!("Edit button clicked for item: {}", item.text);
                item.is_editing = true; // Enter edit mode
            }),
        );
    
        Flex::row()
            .with_child(checkbox)
            .with_spacer(30.0)
            .with_child(dynamic_text)
            .with_spacer(10.0)
            .with_child(dynamic_buttons)
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

    log::error!("Starting app");

    let conn = Connection::open("todos2.db")?;
    init_db(&conn)?;

    let items = list_items(&conn)?;

    let main_window = WindowDesc::new(build_ui())
        .title("Todo List App")
        .window_size((400.0, 400.0));

    AppLauncher::with_window(main_window)
        .launch(TodoList { 
            items: Arc::new(items), 
            new_item_text: String::new(),
            editing_item: None,
        })?;

    Ok(())
}
