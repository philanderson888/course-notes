# php

## contents

- [php](#php)
  - [contents](#contents)
  - [php query sql](#php-query-sql)

## php query sql

```xml
### query mysql
require('C:\xampp\htdocs\log\assets\php\connect-db-mysqli.php'); 

$q="UPDATE tasks SET redgreen='$color' WHERE taskid=$taskid"; 
$q="SELECT date, redgreen FROM tasks WHERE taskid=$taskid";

$result = mysqli_query($q) or die (mysql_error()); 
$row = mysqli_fetch_array($result);
```