# Day 27 - WPF CRUD Application with Tasks, Categories And Users

#WPF CRUD App

    Goal to build a database application
    Use WPF .NET Framework
    SQL Raw
    Entity Framework
    ListView to display lists
    TextBox to update data
    Buttons to submit

CRUD ie list/select/update/delete items
Later on we can add some foreign keys and use drop-down boxes to select items

## SQL Create Users Categories and Tasks

    -- Day 27 - WPF CRUD APP
    USE MASTER
    GO
    
    DROP DATABASE IF EXISTS TasksDB 
    GO
    
    CREATE DATABASE TasksDB
    GO
    
    USE TasksDb
    GO
    
    DROP TABLE IF EXISTS Tasks 
    DROP TABLE IF EXISTS Categories
    DROP TABLE IF EXISTS Users 
    
    -- Categories with CategoryID and CategoryName
    CREATE TABLE Categories(
    	CategoryId INT IDENTITY PRIMARY KEY NOT NULL,
    	CategoryName VARCHAR(50) NULL
    )
    -- Users with UserID and UserName
    CREATE TABLE Users(
    	UserId INT IDENTITY PRIMARY KEY NOT NULL,
    	UserName VARCHAR(50) NULL
    )
    
    INSERT INTO USERS VALUES ('bob')
    INSERT INTO USERS VALUES ('bill')
    INSERT INTO USERS VALUES ('ben')
    INSERT INTO USERS VALUES ('alice')
    INSERT INTO CATEGORIES VALUES ('admin')
    INSERT INTO CATEGORIES VALUES ('programming')
    INSERT INTO CATEGORIES VALUES ('personal')
    
    -- TaskId, Description, CategoryId, UserId, Done(boolean), DateDone(date)
    CREATE TABLE Tasks(
    	TaskID INT IDENTITY NOT NULL PRIMARY KEY,
    	Description VARCHAR(50) NULL,
    	Done BIT NULL,
    	DateCompleted DATE NULL,
    	CategoryID INT NULL,
    	UserID INT NULL,
    	-- foreign keys
    	FOREIGN KEY (CategoryId) REFERENCES Categories (CategoryId),
    	FOREIGN KEY (UserId) REFERENCES Users (UserId)
    )
    GO
    
    INSERT INTO Tasks VALUES ('test',1,NULL,1,1)
    INSERT INTO Tasks VALUES ('test2',0,'2019-11-17',2,2)
    INSERT INTO Tasks VALUES ('test3',1,'2019-11-18',3,3)
    
    SELECT * FROM Categories
    SELECT * FROM Users
    SELECT * FROM Tasks

### Entity

Let's now pull in our new Database into our app.
Entity (Framework) ((EF6 for short)) makes this super easy.
There are two ways to pull in the database
1) DATABASE FIRST : Code has a read copy of the database entities
2) CODE FIRST : Code becomes a MASTER COPY from which we can
UPDATE THE DATABASE!
Nuget Console
add-migration <<name-of-change>>
update-database

    ==> CHANGE THE DATABASE FROM OUR CODE!

# Connection Instructions

    (localdb)\\mssqllocaldb    Server
    
    ((Where is your database located???
    	File called .....mdb Microsoft Database File
    	Path C:\\Users\\<<username>>\\ folder
    	))

## Simple ListBox

Reading data from database
In our LISTBOX we are LISTING STRINGS NOT OBJECTS

    namespace Lab_13_WPF_ToDo_Application
    {
        public partial class MainWindow : Window
        {
            List<string> items = new List<string>();
            List<Task> tasks = new List<Task>();
            public MainWindow()
            {
                InitializeComponent();
                Initialise();
            }
    
            void Initialise()
            {
                ListBoxTasks.ItemsSource = items;
                using (var db = new TasksDBEntities())
                {
                    tasks = db.Tasks.ToList();
                }
                // get description and add to list
                foreach(var item in tasks)
                {
                    items.Add($"{item.TaskID,-10}{item.Description,-40}{item.Done,-10}{item.DateCompleted}");
                }
            }
            private void ListBoxTasks_SelectionChanged(object sender, SelectionChangedEventArgs e)
            {
    
    
            }
        }
    }

# Code at end of day 27

    <Window x:Class="Lab_13_WPF_ToDo_Application.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:Lab_13_WPF_ToDo_Application"
        mc:Ignorable="d"
        Title="MainWindow" Height="Auto" Width="Auto" FontSize="18" Background="#EEFAFF">
    <Grid>
        <Grid.ColumnDefinitions>
            <ColumnDefinition Width="*" />
            <ColumnDefinition Width="*" />
            <ColumnDefinition Width="*" />
            <ColumnDefinition Width="*" />
            <ColumnDefinition Width="*" />
            <ColumnDefinition Width="*" />
            <ColumnDefinition Width="*" />
            <ColumnDefinition Width="*" />
        </Grid.ColumnDefinitions>
        <Grid.RowDefinitions>
            <RowDefinition Height="*" />
            <RowDefinition Height="*" />
            <RowDefinition Height="*" />
            <RowDefinition Height="3*" />
            <RowDefinition Height="3*" />
            <RowDefinition Height="*" />
        </Grid.RowDefinitions>
        <Label Grid.Row="0" Grid.Column="2" Grid.ColumnSpan="4" Content="To Do Application" 
               FontSize="25" FontWeight="Bold" Background="#D1E8DC" 
               HorizontalContentAlignment="Center" HorizontalAlignment="Stretch" 
               VerticalContentAlignment="Center"/>
        <TabPanel Grid.Row="3" Grid.Column="1" Grid.ColumnSpan="3" Grid.RowSpan="2" Background="#b6ffF9">
            <ListBox x:Name="ListBoxTasks" SelectionChanged="ListBoxTasks_SelectionChanged" 
                    />
        </TabPanel>
        <TextBox x:Name="TextBoxId" Grid.Row="2" Grid.Column="4" IsReadOnly="true" Background="#EEFAFF"/>
        <TextBox x:Name="TextBoxDescription" Grid.Row="2" Grid.Column="5" IsReadOnly="true" Background="#EEFAFF"/>
        <TextBox x:Name="TextBoxCategoryId" Grid.Row="2" Grid.Column="6" IsReadOnly="true" Background="#EEFAFF" />
        <Label x:Name="LabelId" Content="ID" Grid.Row="1" Grid.Column="4" />
        <Label x:Name="LabelDescription" Content="Description" Grid.Row="1" Grid.Column="5" />
        <Label x:Name="LabelCategory" Content="Category" Grid.Row="1" Grid.Column="6" />
        <Button x:Name="ButtonEdit" Content="Edit" IsEnabled="False" 
                Grid.Row="1" Grid.Column="2" Background="#DADBFD" Click="ButtonEdit_Click"/>
        <Button x:Name="ButtonAdd" Content="Add" IsEnabled="True" 
                Grid.Row="1" Grid.Column="1" Background="#DADBFD" Click="ButtonAdd_Click"/>
        <ComboBox x:Name="ComboBoxCategory" Grid.Row="3" Grid.Column="6" />
    </Grid>
    </Window>
    
    
    
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using System.Windows;
    using System.Windows.Controls;
    using System.Windows.Data;
    using System.Windows.Documents;
    using System.Windows.Input;
    using System.Windows.Media;
    using System.Windows.Media.Imaging;
    using System.Windows.Navigation;
    using System.Windows.Shapes;
    
    namespace Lab_13_WPF_ToDo_Application
    {
        /// <summary>
        /// Interaction logic for MainWindow.xaml
        /// </summary>
        public partial class MainWindow : Window
        {
            List<string> items = new List<string>();
            List<Task> tasks = new List<Task>();
            Task task;
            List<Category> categories = new List<Category>();
    
            public MainWindow()
            {
                InitializeComponent();
                Initialise();
            }
    
            #region //OriginalOldCodeWhereWeListDataAsStringsNotOOP
            //void InitialiseListBoxOfStrings()
            //{
            //    ListBoxTasks.ItemsSource = items;
            //    using (var db = new TasksDBEntities())
            //    {
            //        tasks = db.Tasks.ToList();
            //    }
            //    // get description and add to list
            //    foreach(var item in tasks)
            //    {
            //        items.Add($"{item.TaskID,-10}{item.Description,-40}{item.Done,-10}{item.DateCompleted}");
            //    }
            //}
            #endregion
    
            void Initialise()
            {
                using (var db = new TasksDBEntities())
                {
                    tasks = db.Tasks.ToList();
                    categories = db.Categories.ToList();
                }
                ListBoxTasks.ItemsSource = tasks;
                ListBoxTasks.DisplayMemberPath = "Description";
                ComboBoxCategory.ItemsSource = categories;
                ComboBoxCategory.DisplayMemberPath = "CategoryName";
            }
            private void ListBoxTasks_SelectionChanged(object sender, SelectionChangedEventArgs e)
            {
           
                // print out details of selected item
                // instance = (convert to Task) the item selected in listbox by user
                task = (Task)ListBoxTasks.SelectedItem;
                if (task != null)
                {
                    TextBoxId.Text = task.TaskID.ToString(); ;
                    TextBoxDescription.Text = task.Description;
                    TextBoxCategoryId.Text = task.CategoryID.ToString();
                    ButtonEdit.IsEnabled = true;
                    if (task.CategoryID != null)
                    {
                        ComboBoxCategory.SelectedIndex = (int)task.CategoryID-1;
                    }
                    else
                    {
                        ComboBoxCategory.SelectedItem = null;
                    }
    
                }
            }
    
            private void ButtonEdit_Click(object sender, RoutedEventArgs e)
            {
                if (ButtonEdit.Content.ToString() == "Edit")
                {
                    TextBoxDescription.IsReadOnly = false;
                    TextBoxCategoryId.IsReadOnly = false;
                    ButtonEdit.Content = "Save";
                    TextBoxDescription.Background = Brushes.White;
                    TextBoxCategoryId.Background = Brushes.White;
                }
                else
                {
                    using (var db = new TasksDBEntities())
                    {
                        var taskToEdit = db.Tasks.Find(task.TaskID);
                        // update description & categoryid
                        taskToEdit.Description = TextBoxDescription.Text;
                        // converting category id to integer from text box (string)
                        // tryparse is a safe way to do conversion : null if fails
                        int.TryParse(TextBoxCategoryId.Text, out int categoryid);
                        taskToEdit.CategoryID = categoryid;
                        // update record in database
                        db.SaveChanges();
                        // update list box !!
                        ListBoxTasks.ItemsSource = null; // reset list box
                        tasks = db.Tasks.ToList();  // get fresh list
                        ListBoxTasks.ItemsSource = tasks;  // re-link the list box to new list
                    }
                    ButtonEdit.Content = "Edit";
                    ButtonEdit.IsEnabled = false;
                    TextBoxDescription.IsReadOnly = true;
                    TextBoxCategoryId.IsReadOnly = true;
                    var brush = new BrushConverter();
                    TextBoxDescription.Background = (Brush)brush.ConvertFrom("#EEFAFF");
                    TextBoxCategoryId.Background = (Brush)brush.ConvertFrom("#EEFAFF");
                }
    
            }
    
            private void ButtonAdd_Click(object sender, RoutedEventArgs e)
            {
                if (ButtonAdd.Content.ToString() == "Add")
                {
                    ButtonAdd.Content = "Confirm";
                    // set boxes to editable
                    TextBoxDescription.Background = Brushes.White;
                    TextBoxCategoryId.Background = Brushes.White;
                    TextBoxDescription.IsReadOnly = false;
                    TextBoxCategoryId.IsReadOnly = false;
                    // clear out boxes
                    TextBoxId.Text = "";
                    TextBoxDescription.Text = "";
                    TextBoxCategoryId.Text = "";
                }
                else
                {
                    ButtonAdd.Content = "Add";
                    // set boxes back to read only
                    TextBoxDescription.IsReadOnly = true;
                    TextBoxCategoryId.IsReadOnly = true;
                    var brush = new BrushConverter();
                    TextBoxDescription.Background = (Brush)brush.ConvertFrom("#EEFAFF");
                    TextBoxCategoryId.Background = (Brush)brush.ConvertFrom("#EEFAFF");
                    // add record to database
                    int.TryParse(TextBoxCategoryId.Text, out int categoryID);
    
                    var taskToAdd = new Task()
                    {
                        Description = TextBoxDescription.Text,
                        CategoryID = categoryID
    
                    };
                    using (var db = new TasksDBEntities())
                    {
                        db.Tasks.Add(taskToAdd);
                        db.SaveChanges();
                    }
    
                }
            }
        }
    }