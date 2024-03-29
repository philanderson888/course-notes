# code

## contents

- [code](#code)
  - [contents](#contents)
  - [sql](#sql)
  - [sqlite in browser](#sqlite-in-browser)
  - [php mysqli](#php-mysqli)
  - [rust](#rust)
  - [ruby](#ruby)
  - [ruby overview](#ruby-overview)



## sql


```sql
ALTER TABLE tbl_personnel MODIFY COLUMN ID INT AUTO_INCREMENT PRIMARY KEY
```



## sqlite in browser

sqlite in browser uses `wasm`

https://github.com/sql-js/sql.js

```html
<html>
  <script src='/dist/sql-wasm.js'></script>
  <script>
    config = {
      locateFile: filename => `/dist/${filename}`
    }
    // The `initSqlJs` function is globally provided by all of the main dist files if loaded in the browser.
    // We must specify this locateFile function if we are loading a wasm file from anywhere other than the current html page's folder.
    initSqlJs(config).then(function(SQL){
      //Create the database
      const db = new SQL.Database();
      // Run a query without reading the results
      db.run("CREATE TABLE test (col1, col2);");
      // Insert two rows: (1,111) and (2,222)
      db.run("INSERT INTO test VALUES (?,?), (?,?)", [1,111,2,222]);

      // Prepare a statement
      const stmt = db.prepare("SELECT * FROM test WHERE col1 BETWEEN $start AND $end");
      stmt.getAsObject({$start:1, $end:1}); // {col1:1, col2:111}

      // Bind new values
      stmt.bind({$start:1, $end:2});
      while(stmt.step()) { //
        const row = stmt.getAsObject();
        console.log('Here is a row: ' + JSON.stringify(row));
      }
    });
  </script>
  <body>
    Output is in Javascript console
  </body>
</html>
```




## php mysqli

```
require('C:\xampp\htdocs\log\assets\php\connect-db-mysqli.php'); 

$q="UPDATE tasks SET redgreen='$color' WHERE taskid=$taskid"; 
$q="SELECT date, redgreen FROM tasks WHERE taskid=$taskid";

$result = mysqli_query($q) or die (mysql_error()); 
$row = mysqli_fetch_array($result);
```




## rust

https://docs.microsoft.com/en-us/learn/paths/rust-first-steps/









## ruby 


## ruby overview

Every class has one parent only

Every class may have several modules

Modules can add new methods

Modules can overload old methods

Metasploit modules overload Msf::Module 

Mixins include one class into another

  Mixins can override a class methods

    eg connect() TCP but connect() overloaded by SMB, FTP

Example of Ruby mixin with overloading

```ruby
class MyParent
     def woof
          puts “woof!”
     end
end

class MyClass > MyParent
end

object = MyClass.new
object.woof() => “woof!”


module MyMixin
     def woof
          puts “hijacked the woof method!”
     end
end

class MyBetterClass > MyClass
     include MyMixin
end
```
