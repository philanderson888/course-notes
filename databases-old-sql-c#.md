## Databases - old SQL

[SQL: Connection String, Reader.Read(), Stored Procedures, Dataadapter, DataSet, DataTable/Row/Column, DataGrid View](#sql-index)

[CRUD using SQL Query Direct](#sql)

[@ symbol in front of a string](#at-symbol-in-string)

[Connection String](#connection-string)

[Connection String Stored In App.Config](#connection-string-in-app-config)

[Connection State](#connection-state)

[Reading Data From A Database](#reading-data-from-a-database)

[Reading data with Reader.Read()](#read-data-with-reader-read)

[SQL Commands](#sql-commands)

[CRUD using SQL Direct And Stored Procedures](#stored-procedures)

[SQL Reader.Read() Parameters](#select-with-parameters)

[SQL Reader.Read() With Stored Procedure](#reader-read-with-stored-procedure)

[Reader.Read with Multiple Parameters](#reader-read-multiple-parameters)

[Stored Procedure - Update](#sp-update)

[Stored Procedure - Update 2](#sp-update2)

[Stored Procedure - Optional Parameters](#sp-optional-parameters)

[Stored Procedure - Insert New Record](#sp-insert)

[Data Grid View](#datagridview-index)[CRUD using DataSet/Adpater/Table/Row/Column](#dataset)

[Data Adapter](#data-adapter)

[Data Adapter Select Command](#data-adapter-select-command)

[Data Adapter Insert Command](#data-adapter-insert-command)

[Data Adapter Update Command](#data-adapter-update-command)

[DataTable](#datatable)

[DataRows And DataColumns](#datarow-datacolumn)

[Selecting One Data Row](#selecting-one-data-row)

[Selecting Several Rows](#selecting-several-rows)

[CRUD using DataSet and Stored Procedures](#dataset-dataadapter-datatable)

[LINQ](#selecting-one-data-row-with-linq)

[Selecting One Data Row With LINQ](#selecting-one-data-row-with-linq)

[Entity](#entity)

[Entity - Read Data](#entity-read-data)

[DataGrid](#datagridview-display-data)

[Data Binding - DataGridView.DataSource = DataSet.Table.ToList()](#datagridview-display-data)

[GridView - Get and set data for one cell](#gridview-get-and-set-data-for-one-cell)

[DataGridView - Set CSS](#datagrid-style)

[DataGridView - Update Via TableAdapter.Update()](#datagrid-update)

[GridView - Take Action On Row Click](#gridview-take-action-on-row-click)

[GridView - Delete A Row](#gridview-delete-row)

[GridView - Delete All Data](#gridview-delete-all)

[WPF GridView](#wpf-gridview)

[C# Database With AJAX - Walkthrough](#c-sharp-database-with-ajax-walkthrough)

[ASP Database with AJAX - Walkthrough](#asp-database-with-ajax-walkthrough) 

## CRUD using SQL Query Direct

## @ symbol in front of a string

<pre>
@ in front of a string means treat the string literally, and do not 'escape' (change or replace with any
other character) any of the characters within that string

@"\\servername\share\folder"   not    "\\\\servername\\share\\folder"

</pre>

## Connection String

<pre>
 string connectionString = @"Data Source=(localdb)\mssqllocaldb;" + "Initial Catalog=Northwind;Integrated Security=true";

 var connection = new SqlConnection(connectionString);

</pre>

## Connection String Stored In App.Config

<pre>
var connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["Northwind"].ConnectionString;

    (note : have to add reference to System.Configuration)

var connection = new SqlConnection(connectionString);

App.Config
    <connectionStrings>
      <add name="Northwind" connectionString="Data Source=(LocalDB)\v11.0;Initial Catalog=Northwind;Integrated Security=True" />
    </connectionStrings>

</pre>

## Connection State

<pre>
Once a connection object has been defined, you can read the state from 

var connection = new SqlConnection(connectionString);

string x = connection.State;

    will read 'open' or 'closed' normally depending if the connection is open or not

</pre>

## Reading Data From A Database

## Reading data with Reader.Read()

```csharp
var Customers = new List&lt;customer&gt;();
var connection = new SqlConnection(@"Data Source=(localdb)\mssqllocaldb;" + "Initial Catalog=Northwind;Integrated Security=true;")) 
connection.Open();
var command = new SqlCommand("select * from customers", connection);
SqlDataReader myReader = command.ExecuteReader();
while (myReader.Read())
{
    var customer = new Customer(myReader["CustomerID"].ToString(), myReader["CompanyName"].ToString(), myReader["ContactName"].ToString());
    Customers.Add(customer);
}
foreach (var customer in Customers)
{
    Console.WriteLine("{2} from {1} has ID {0}", customer.CustomerID, customer.CompanyName, customer.ContactName);
}
```

## SQL commands

```csharp
var command = new SqlCommand(query,con)  where query = "SELECT * from Customers" or simliar and con is the connection

command.CommandType = CommandType.StoredProcedure/Text
command.Parameters.AddWithValue("Name","some text here");       // note : Add is now deprecated
SqlDataReader reader = command.ExecuteReader()
or
command.ExecuteNonQuery();  
```

## Reading Data With DataSet And Data Adapter

## DataSet

In-memory representation of a database

var dataset = new DataSet();

## DataTable

A DataTable is a table in a dataset

```csharp
DataTable datatable = dataset.Tables[0];

DataTable table = new DataTable();
table.Columns.Add("Dosage", typeof(int));
table.Columns.Add("Drug", typeof(string));
table.Columns.Add("Patient", typeof(string));
table.Columns.Add("Date", typeof(DateTime));

// Here we add five DataRows.
table.Rows.Add(25, "Indocin", "David", DateTime.Now);
table.Rows.Add(50, "Enebrel", "Sam", DateTime.Now);
table.Rows.Add(10, "Hydralazine", "Christoff", DateTime.Now);
table.Rows.Add(21, "Combivent", "Janet", DateTime.Now);
table.Rows.Add(100, "Dilantin", "Melanie", DateTime.Now);
```

## Data Adapter

Go-between between the database and the dataset

Fill

    Fills the dataset from the database

    see Database_07

Update

    Saves any changes in the dataset permanently into the database

## DataRows And DataColumns

DataTables have DataRows and DataColumns

```csharp
var customerList = new List<customer>();
var dataset = new DataSet();
string connectionString = ConfigurationManager.ConnectionStrings["Northwind"].ConnectionString;
var query = "select * from customers";
var con = new SqlConnection(connectionString);
con.Open();
var adapter = new SqlDataAdapter();
adapter.SelectCommand = new SqlCommand(query, con);
adapter.Fill(dataset);
DataTable datatable = dataset.Tables[0];
foreach (DataColumn col in datatable.Columns)
{
    Console.WriteLine(col.ColumnName);
}
foreach (DataRow row in datatable.Rows)
{
    var c = new Customer();
    c.CustomerID = row["customerID"].ToString();
    c.ContactName = row["contactName"].ToString();
    c.CompanyName = row["companyName"].ToString();
    customerList.Add(c);
}
```

see Database_07

## Data Adapter Select Command

```csharp
var connectionString = ConfigurationManager.ConnectionStrings["Northwind"].ConnectionString;
var con = new SqlConnection(connectionString);
con.Open();
var dataset = new DataSet();
var adapter = new SqlDataAdapter();
var query = "select * from Customers";
adapter.SelectCommand = new SqlCommand(query, con);
adapter.Fill(dataset);
```

See Database_09

## Data Adapter Insert Command

```csharp
var connectionString = ConfigurationManager.ConnectionStrings["Northwind"].ConnectionString;
var con = new SqlConnection(connectionString);
con.Open();
var adapter = new SqlDataAdapter();
var command = new SqlCommand("INSERT INTO Customers (CustomerID, ContactName, CompanyName) VALUES ('Philh','Phil','Phils Company')", con);
adapter.InsertCommand = command;
adapter.InsertCommand.ExecuteNonQuery();
```
see Database_10 for worked example

## Data Adapter Update Command (Inserting A New Row)

```csharp
var connectionString = ConfigurationManager.ConnectionStrings["Northwind"].ConnectionString;
var con = new SqlConnection(connectionString);
con.Open();
var dataset = new DataSet();
var adapter = new SqlDataAdapter();
var query = "select * from Customers where 1 = 0";            // DON'T HAVE TO READ ENTIRE DATABASE !
adapter.SelectCommand = new SqlCommand(query, con);
adapter.Fill(dataset);
var datatable = dataset.Tables[0];

var newRow = datatable.NewRow();
newRow["CustomerID"] = "Phil7";
newRow["ContactName"] = "Philip";
newRow["CompanyName"] = "MyCompany";

datatable.Rows.Add(newRow);

var builder = new SqlCommandBuilder(adapter);                // don't have to script the whole of the INSERT statements
adapter.UpdateCommand = builder.GetUpdateCommand();
adapter.Update(dataset);
```
See Databse_09 and more complex example at Database_17

## DataAdapter Update Command

```csharp
DataRow[] selectedRows = datatable.Select("CustomerID = 'ALFKI'");

foreach (DataRow row in selectedRows)
{
    row["ContactName"] = "Phil";
}

var builder = new SqlCommandBuilder(adapter);
adapter.UpdateCommand = builder.GetUpdateCommand();
adapter.Update(dataset);
```
    see Database_08</customer> </customer></pre>

## Confirming Row Updated

```csharp
// add event handler
adapter.RowUpdated += new SqlRowUpdatedEventHandler(OnRowUpdated);

// add method
private static void OnRowUpdated(object sender, SqlRowUpdatedEventArgs e)
{
    Console.WriteLine("Row updated ");
}
```
    See Database_08

## DataTable Find() One Row

If the datatable has a PRIMARY KEY then the row can be selected by using FIND()
```csharp
DataRow selectOneRow = datatable.Rows.Find("ALFKI");
```
    ** worked example not working **

## DataTable Select() Many Rows

Otherwise the SELECT() method can be used to RETURN ALL ROWS THAT MEET THE CRITERIA
```csharp
DataRow[] selectedRows = datatable.Select("CustomerID = 'ALFKI'");
```
## DataRow Delete
```csharp
Console.WriteLine("Please choose CustomerID to delete");
var enteredCustomerID = Console.ReadLine();
DataRow[] rows = table.Select("CustomerID = '" + enteredCustomerID + "'");
foreach (DataRow row in rows) {
    row.Delete();
}
var commandBuilder = new SqlCommandBuilder(adapter);
adapter.DeleteCommand = commandBuilder.GetDeleteCommand();
adapter.Update(dataset);
```
## SQL Syntax - Selecting Several Rows

    Exact match

        select * from Customers where CustomerID = 'Phil'

    LIKE % - starts with

        select * from Customers where CustomerID LIKE 'Phil%'

## Stored Procedures

## SQLReader With Parameters
```csharp
var connectionString = ConfigurationManager.ConnectionStrings["Northwind"].ConnectionString;
var con = new SqlConnection(connectionString);
con.Open();
var adapter = new SqlDataAdapter();
var query = "Select * from Customers where CustomerID LIKE '%' + @Name + '%'";
var command = new SqlCommand(query, con);

command.Parameters.Add(new SqlParameter("Name", "Phil"));
SqlDataReader reader = command.ExecuteReader();
while (reader.Read())
{
    Console.WriteLine(reader[0].ToString());
}

command.Parameters.Clear();
reader.Close();
string inputCriteria = null;

while (true)
{
    Console.WriteLine();
    Console.WriteLine("Enter new search name");
    inputCriteria = Console.ReadLine();
    command.Parameters.Add(new SqlParameter("Name", inputCriteria));
    reader = command.ExecuteReader();
    while (reader.Read())
    {
        Console.WriteLine(reader[0].ToString());
    }
    command.Parameters.Clear();
    reader.Close();
}
```
    See Database_12

## Reader.Read() With Stored Procedure
```csharp
var connectionString = ConfigurationManager.ConnectionStrings["Northwind"].ConnectionString;
var con = new SqlConnection(connectionString);
con.Open();
var command = new SqlCommand("SearchWithinCustomerID", con);
command.CommandType = CommandType.StoredProcedure;
Console.WriteLine("Enter the search criteria");
string searchCriteria = Console.ReadLine();
command.Parameters.AddWithValue("CustomerID",searchCriteria);
command.Connection = con;
var reader = command.ExecuteReader();
while (reader.Read()) {
    Console.WriteLine(reader["CustomerID"].ToString());
}
reader.Close();
con.Close();
command.Parameters.Clear();
```
    See Database_13

## Reader.Read() with multiple parameters in a stored procedure
```sql
CREATE PROCEDURE SearchWithMultipleParameters
    @CustomerID nvarchar(5),
    @ContactName nvarchar(40)
AS
    SELECT CustomerID, ContactName, CompanyName 
    FROM Customers
    WHERE CustomerID LIKE '%' + @CustomerID + '%' AND ContactName LIKE '%' + @ContactName + '%'
```
```csharp
var connectionString = ConfigurationManager.ConnectionStrings["Northwind"].ConnectionString;
var con = new SqlConnection(connectionString);
con.Open();
var command = new SqlCommand("SearchWithMultipleParameters", con);
command.CommandType = CommandType.StoredProcedure;
string searchID = "P";
string searchName = "P";
command.Parameters.AddWithValue("CustomerID", searchID);
command.Parameters.AddWithValue("ContactName", searchName);
var reader = command.ExecuteReader();
while (reader.Read())
{
    Console.WriteLine(reader["CustomerID"].ToString() + reader["ContactName"].ToString() + reader["CompanyName"].ToString());
}
```
    See Database_14

## Stored Procedure - Update
```csharp
Console.WriteLine("Choose ID");
string CustomerIDChosen = Console.ReadLine();
Console.WriteLine("Choose New Name");
string CustomerNewName = Console.ReadLine();
command = new SqlCommand("UpdateCustomer", con);
command.CommandType = CommandType.StoredProcedure;
command.Parameters.AddWithValue("CustomerID", CustomerIDChosen);
command.Parameters.AddWithValue("ContactName", CustomerNewName);
command.ExecuteNonQuery();
```

See Database_15 for full code (only partial code above)

## Stored Procedure - Update 2

Open Server Explorer and find database, Programming, Stored Procedures 
and right click to create a new stored procedure

```sql
CREATE PROCEDURE [dbo].[UpdatePriceOfProduct]
    @ID int,
    @NewPrice money
AS
    UPDATE Products
    Set UnitPrice = @NewPrice
    Where ProductId = @ID

RETURN 0
```
```csharp
var connection = new SqlConnection(@"Data Source=(localdb)\mssqllocaldb;" +
"Initial Catalog=Northwind;Integrated Security=true;");

connection.Open();
var command = new SqlCommand("UpdatePriceOfProduct", connection);
command.CommandType = CommandType.StoredProcedure;
command.Parameters.AddWithValue("ID", int.Parse(textBox1.Text));
command.Parameters.AddWithValue("NewPrice", decimal.Parse(textBox2.Text));

int affected = command.ExecuteNonQuery();
connection.Close();
MessageBox.Show(affected + " rows were affected");
```
    see Database_01

## Stored Procedure Optional Parameters
```sql
CREATE PROCEDURE InsertCustomer
@CustomerID nvarchar(5),
@ContactName nvarchar(40) = "Test",
@CompanyName nvarchar(40) = "TestCompany"
```
## Stored Procedure - Insert New Record
```sql
CREATE PROCEDURE InsertCustomer
@CustomerID nvarchar(5),
@ContactName nvarchar(40) = "Test",
@CompanyName nvarchar(40) = "TestCompany"
AS
INSERT INTO Customers 
(CustomerID, ContactName, CompanyName)
Values
(@CustomerID,@ContactName, @CompanyName)
RETURN 0
```
```csharp
command = new SqlCommand("InsertCustomer", con);
command.CommandType = CommandType.StoredProcedure;
command.Parameters.AddWithValue("CustomerID", inputCustomerID);
command.Parameters.AddWithValue("ContactName", "test");
command.Parameters.AddWithValue("CompanyName", "Company02");
command.ExecuteNonQuery();
```

## Selecting One Data Row With LINQ

## Entity Read Data

```csharp
GemTrainingEntities DB = new GemTrainingEntities();
dataGridView1.DefaultCellStyle.BackColor = Color.Red;
dataGridView1.DefaultCellStyle.SelectionBackColor = Color.Red;
var abc = (from TblEx in DB.TB_Excercise select new { TblEx.Exercise }).ToList();
dataGridView1.DataSource = abc;
```
## DataGridView - Data Binding

Use this syntax : DataGridView.DataSource = DataSet.DataTable.ToList()

eg
```csharp
GemTrainingEntities DB = new GemTrainingEntities();
gvData.DataSource = DB.TB_Excercise.ToList();
```
## GridView - Get and set data for one cell

e will be the eventArgs e passed in as part of the DataGridViewCellMouseEventArgs e object

gvData.Rows[e.RowIndex].Cells[0].Value.ToString()

## DataGridView - Set CSS
```csharp
foreach (DataGridViewRow row in dataGridView1.SelectedRows)  {
  var abc = row.InheritedStyle.BackColor;
  if (abc.Name == "Red")
  {
      row.DefaultCellStyle.BackColor = Color.Green;
      row.DefaultCellStyle.SelectionBackColor = Color.Green;
  }
  else
  {
      row.DefaultCellStyle.BackColor = Color.Red;
      row.DefaultCellStyle.SelectionBackColor = Color.Red;
  }  
}
```
## DataGridView - Update Via TableAdapter.Update()
```csharp
private Northwind ds = new Northwind();
private NorthwindTableAdapters.ProductsTableAdapter ta = new NorthwindTableAdapters.ProductsTableAdapter();
ta.Fill(ds.Products);
dataGridView1.DataSource = ds.Products;
int rows = ta.Update(ds.Products);          
```
## GridView - Take Action On Row Click
```csharp
private void gvData_RowHeaderMouseClick(object sender, DataGridViewCellMouseEventArgs e) {
    id = Convert.ToInt32(gvData.Rows[e.RowIndex].Cells[0].Value.ToString());
    string Exercise = (gvData.Rows[e.RowIndex].Cells[1].Value.ToString());
    string Category = (gvData.Rows[e.RowIndex].Cells[3].Value.ToString());
    bool chk = Convert.ToBoolean(gvData.Rows[e.RowIndex].Cells[2].Value.ToString());
    txtExercise.Text = Exercise;
    txtCategory.Text = Category;
    if (chk == true)
    {
        ChkDone.Checked = true;
    }
    if(chk == false)
    {
        ChkDone.Checked = false;
    }
    btnSave.Text = "Update";
}
```
## GridView - Delete A Row

id is a global variable and has been set by clicking on the row
```csharp
    private void gvData_RowHeaderMouseClick(object sender, DataGridViewCellMouseEventArgs e) {
    id = Convert.ToInt32(gvData.Rows[e.RowIndex].Cells[0].Value.ToString());

GemTrainingEntities DB = new GemTrainingEntities();
if (id > 0)
{
int Excerciseid = id;
var UpdateRecord = DB.TB_Excercise.Where(x => x.ID == id).SingleOrDefault();
DB.TB_Excercise.Remove(UpdateRecord);
DB.SaveChanges();
MessageBox.Show("Record Deleted Successfully !");
Clear();
ShowData();
btnSave.Text = "Save";
}
else
{
MessageBox.Show("Please Select Record First From Grid !");
}
```
## GridView - Delete All Data
```csharp
GemTrainingEntities DB = new GemTrainingEntities();
var objCtx = ((System.Data.Entity.Infrastructure.IObjectContextAdapter)DB).ObjectContext;
objCtx.ExecuteStoreCommand("Truncate table TB_Excercise");
DB.SaveChanges();
```
