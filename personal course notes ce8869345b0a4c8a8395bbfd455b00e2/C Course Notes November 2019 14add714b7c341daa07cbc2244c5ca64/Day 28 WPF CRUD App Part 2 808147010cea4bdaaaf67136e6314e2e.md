# Day 28 - WPF CRUD App Part 2

## Day 28 - WPF Entity CRUD App .. Day 2 (continued)

We now have

ADD
EDIT
DELETE
LIST
SELECT
DOULBE CLICK => EDIT

```
all working.
```

We have CategoryID => DropDownBox with CategoryName all working

What's not working?

```
Checkbox (tick) Item DONE or NOT    ==> Class task 
Calendar for Date Item Completed    ==> Class task
DropDownBox SELECTION FIRST ==> UPDATE NUMERIC CategoryID  ??? Optional task ???
```

One more thing for Trainer to lead is TABBED PANELS

```
ONE PANEL : TASKS

UPGRADE TO TABBED PANEL WITH 3 TABS : TASKS, CATEGORIES, USERS
```

Also (forgot to mention) LISTVIEW !!!!!! LOOKS MUCH BETTER !!!!

Goal for the day

1. SQL Test (1 hour before lunch)
2. After lunch design and build your OWN APP : DEADLINE 9AM TOMORROW
a) RAW SQL => BUILD DATABASE WITH TABLES
b) DESIGN YOUR INTERFACE => THINK ABOUT WHAT YOU WANT TO DISPLAY !!!
c) BUILD AGILE ==> BUILD VERY SIMPLY FIRST TO GET THE VIEWS WORKING
d) EDIT
e) ADD
f) DELETE

Bonus if you add your own CHECKBOX AND CALENDAR AND WORKING DROPDOWN COMBOBOX !!!!

```
<Window x:Class="Lab_13_WPF_ToDo_Application.MainWindow"
        xmlns="<http://schemas.microsoft.com/winfx/2006/xaml/presentation>"
        xmlns:x="<http://schemas.microsoft.com/winfx/2006/xaml>"
        xmlns:d="<http://schemas.microsoft.com/expression/blend/2008>"
        xmlns:mc="<http://schemas.openxmlformats.org/markup-compatibility/2006>"
        xmlns:local="clr-namespace:Lab_13_WPF_ToDo_Application"
        mc:Ignorable="d"
        Title="MainWindow" Height="Auto" Width="Auto" FontSize="18" Background="#EEFAFF">
    <Grid>
        <!--#region SetGridRowAndColumnWidths-->
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
            <RowDefinition Height="*" />
            <RowDefinition Height="*" />
            <RowDefinition Height="3*" />
            <RowDefinition Height="3*" />
            <RowDefinition Height="*" />
        </Grid.RowDefinitions>
        <!--#endregion SetGridRowAndColumnWidths -->       
        <!--#region  CreateLabels -->
        <Label Grid.Row="0" Grid.Column="2" Grid.ColumnSpan="4" Content="To Do Application" 
               FontSize="25" FontWeight="Bold" Background="#D1E8DC" 
               HorizontalContentAlignment="Center" HorizontalAlignment="Stretch" 
               VerticalContentAlignment="Center"/>
        <Label x:Name="LabelId" Content="ID" Grid.Row="1" Grid.Column="4" />
        <Label x:Name="LabelDescription" Content="Description" Grid.Row="1" Grid.Column="5" />
        <Label x:Name="LabelCategory" Content="Category" Grid.Row="1" Grid.Column="6" />
        <Label x:Name="LabelDone" Content="Task Done?" Grid.Row="3" Grid.Column="4" />
        <Label x:Name="LabelDate" Content="Date Done" Grid.Row="3" Grid.Column="5" />
        <Label x:Name="LabelCategoryName" Content="Category" Grid.Row="3" Grid.Column="6" />
        <!--#endregion CreateLabels -->    
        <!--#region CreatePanels -->
        <TabPanel Grid.Row="5" Grid.Column="1" Grid.ColumnSpan="3" Grid.RowSpan="2" Background="#b6ffF9">
            <ListBox x:Name="ListBoxTasks" SelectionChanged="ListBoxTasks_SelectionChanged" 
                     MouseDoubleClick="ListBoxTasks_DoubleClick" />
        </TabPanel>
        <!--#region HiddenTabControl-->
        <!-- hide tab control 
        <TabControl Grid.Row="5" Grid.Column="4" Grid.ColumnSpan="3" Grid.RowSpan="2" Background="#b6ffF9" >
            <TabItem Header="Test1" Background="#ccc">
                <TabPanel>
                    <Label Content="Test1" Background="#ddd"/>
                </TabPanel>
            </TabItem>
            <TabItem Header="Test2" Background="#ccc">
                <TabPanel>
                    <Label Content="Test2" Background="#bbb" />
                </TabPanel>
            </TabItem>
            <TabItem Header="Test3" Background="#ccc">
                <TabPanel>
                    <Label Content="Test3" Background="#edc"/>
                </TabPanel>
            </TabItem>
        </TabControl>
        -->
        <!--#endregion-->
        <!--#endregion CreatePanels -->  
        <!-- #region TextBoxes -->
        <TextBox x:Name="TextBoxId" Grid.Row="2" Grid.Column="4" IsReadOnly="true" Background="#EEFAFF"/>
        <TextBox x:Name="TextBoxDescription" Grid.Row="2" Grid.Column="5" IsReadOnly="true" Background="#EEFAFF"/>
        <TextBox x:Name="TextBoxCategoryId" Grid.Row="2" Grid.Column="6" IsReadOnly="true" Background="#EEFAFF" />
        <!-- #endregion TextBoxes -->
        <!--#region  Buttons -->
        <Button x:Name="ButtonAdd" Content="Add" IsEnabled="True" 
                Grid.Row="1" Grid.Column="1" Background="#DADBFD" Click="ButtonAdd_Click"/>
        <Button x:Name="ButtonEdit" Content="Edit" IsEnabled="False" 
                Grid.Row="1" Grid.Column="2" Background="#DADBFD" Click="ButtonEdit_Click"/>
        <Button x:Name="ButtonDelete" Content="Delete" IsEnabled="False" 
                Grid.Row="1" Grid.Column="3" Background="#DADBFD" Click="ButtonDelete_Click"/>
        <!-- #endregion Buttons -->
        <!--#region InputItems -->
        <CheckBox x:Name="CheckBoxDone" Grid.Row="4" Grid.Column="4" Background="#b6ffF9" HorizontalAlignment="Center"
                  VerticalAlignment="Center" />
        <DatePicker x:Name="DatePickerDateDone" Grid.Row="4" Grid.Column="5" HorizontalContentAlignment="Stretch" />
        <ComboBox x:Name="ComboBoxCategory" Grid.Row="4" Grid.Column="6" />
        <!--#endregion InputItems -->
    </Grid>
</Window>
```

```
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
        List<TaskWithCategory> taskswithcategories = new List<TaskWithCategory>();

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
        #region InitialiseApplication
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

            // Inner Join 
            using (var db = new TasksDBEntities())
            {
                // task but it has a CATEGORYID.  INNER JOIN => CATEGORYNAME
                var taskList =
                    from task in db.Tasks
                    join category in db.Categories on
                        task.CategoryID equals category.CategoryId
                    // HAVE TO CREATE A NEW OUTPUT OBJECT (CUSTOM)
                    //select new
                    //{
                    //    taskID = task.TaskID,
                    //    description = task.Description,
                    //    category = category.CategoryName.
                    //};
                    // make new instance of our custom class
                    select new TaskWithCategory()
                    {
                        TaskId=task.TaskID
                    };
                // add to list
                taskswithcategories = taskList.ToList();
                // PRINT LIST
                foreach (var task in taskList.ToList())
                {
                    //System.Diagnostics.Trace.WriteLine($"{task.taskID,-10}{task.description,-20}{task.category}");
                }
            }
        }
        #endregion InitialiseApplication
        #region SelectATaskInTheListBox
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
                ButtonDelete.IsEnabled = true;
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
        #endregion SelectATask
        #region OpenATaskForEditingByDoubleClickingTaskInListBox
        private void ListBoxTasks_DoubleClick(object sender, MouseButtonEventArgs e)
        {
            // get object
            task = (Task)ListBoxTasks.SelectedItem;
            if (task != null)
            {
                // set the boxes for edit conditions
                TextBoxId.Text = task.TaskID.ToString(); ;
                TextBoxDescription.Text = task.Description;
                TextBoxCategoryId.Text = task.CategoryID.ToString();
                ButtonEdit.IsEnabled = true;
                if (task.CategoryID != null)
                {
                    ComboBoxCategory.SelectedIndex = (int)task.CategoryID - 1;
                }
                else
                {
                    ComboBoxCategory.SelectedItem = null;
                }
                TextBoxDescription.IsReadOnly = false;
                TextBoxCategoryId.IsReadOnly = false;
                ButtonEdit.Content = "Save";
                TextBoxDescription.Background = Brushes.White;
                TextBoxCategoryId.Background = Brushes.White;
            }
        }
        #endregion OpenATaskForEditingByDoubleClickingTaskInListBox

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
            else  // ie we are in 'Save' mode
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
                    if (task.CategoryID != null)
                    {
                        ComboBoxCategory.SelectedIndex = (int)taskToEdit.CategoryID - 1;
                    }
                    else
                    {
                        ComboBoxCategory.SelectedItem = null;
                    }
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
                    ListBoxTasks.ItemsSource = null;
                    tasks = db.Tasks.ToList();
                    ListBoxTasks.ItemsSource = tasks;
                }

            }
        }

        private void ButtonDelete_Click(object sender, RoutedEventArgs e)
        {
            if (ButtonDelete.Content.ToString() == "Delete")
            {
                ButtonDelete.Content = "Are You Sure?";
                TextBoxId.Background = Brushes.OrangeRed;
                TextBoxDescription.Background = Brushes.OrangeRed;
                TextBoxCategoryId.Background = Brushes.OrangeRed;
            }
            else
            {
                if (task != null)
                {
                    using (var db = new TasksDBEntities())
                    {
                        var taskToRemove = db.Tasks.Find(task.TaskID);
                        db.Tasks.Remove(taskToRemove);
                        db.SaveChanges();
                        // update list
                        ListBoxTasks.ItemsSource = null;
                        tasks = db.Tasks.ToList();
                        ListBoxTasks.ItemsSource = tasks;
                    }
                }
                ButtonDelete.Content = "Delete";
                TextBoxDescription.IsReadOnly = true;
                TextBoxCategoryId.IsReadOnly = true;
                var brush = new BrushConverter();
                TextBoxId.Background = (Brush)brush.ConvertFrom("#EEFAFF");
                TextBoxDescription.Background = (Brush)brush.ConvertFrom("#EEFAFF");
                TextBoxCategoryId.Background = (Brush)brush.ConvertFrom("#EEFAFF");
                // clear out boxes
                TextBoxId.Text = "";
                TextBoxDescription.Text = "";
                TextBoxCategoryId.Text = "";
            }
        }
    }

    public class TaskWithCategory
    {
        //1 2 3 
        public int TaskId { get; set; }
    }
}
```