# Entity Seeding

## Defaults When Creating A New Database

When creating a new database or modifying an existing database here are the defaults :

CreateDatabaseIfNotExists This is the default

DropCreateDatabaseIfModelChanges If there is a change, drop database then create new one

DropCreateDatabaseAlways Always drop and recreate database from scratch, so always clean db with known parameters

We can set these defaults also in the DbContext constructor

    public class SchoolContext: DbContext 
    {
        public SchoolContext(): base("StudentDatabase01") 
        {
            Database.SetInitializer<SchoolContext>
                            (new CreateDatabaseIfNotExists<SchoolContext>());
            //Database.SetInitializer<SchoolDBContext>
                            (new DropCreateDatabaseIfModelChanges<SchoolDBContext>());
            //Database.SetInitializer<SchoolDBContext>
                            (new DropCreateDatabaseAlways<SchoolDBContext>());
            //Database.SetInitializer<SchoolDBContext>
                            (new SchoolDBInitializer());
        }
    
        public DbSet<Student> Students { get; set; }
        public DbSet<Standard> Standards { get; set; }
    }