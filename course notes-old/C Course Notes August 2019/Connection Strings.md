# Connection Strings

# Connection Strings

AttachDbFilename=|DataDirectory|\database.mdb

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            {
                string path = System.IO.Path.Combine(System.Environment.CurrentDirectory, "../../../../data/Northwind.db");
                // use SQLite
                optionsBuilder.UseSqlite($"Filename={path}");
                // use SQL
                //optionsBuilder.UseSqlServer(@"Data Source=(localdb)\mssqllocaldb;" + "Initial Catalog=Northwind;" + "Integrated Security=true;" + "MultipleActiveResultSets=true;");
            }