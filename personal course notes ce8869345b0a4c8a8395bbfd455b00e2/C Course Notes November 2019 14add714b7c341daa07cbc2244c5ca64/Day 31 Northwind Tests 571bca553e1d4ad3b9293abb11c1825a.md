# Day 31 - Northwind Tests

Tests to see for example how many Northwind customers exist

```csharp
#region TestNumberOfNorthwindCustomers
  /* Create a class to read in Northwind customers and return the total
   * Then repeat for just London customers
   * */
  [TestCase(null,91)]    // how many customers total?
  [TestCase("London",6)] // how many customers in London?
  [TestCase("Berlin",1)]  // how many in berlin
  public void TestNumberOfNorthwindCustomers(string city,int expected)
  {
      // arrange
      var testInstance = new Lab_14_LINQ.NorthwindCustomers();
      // act
      var actual = testInstance.NumberOfNorthwindCustomers(city);
      // assert
      Assert.AreEqual(expected, actual);
  }
  #endregion

// Solution

public class NorthwindCustomers
{
    public int NumberOfNorthwindCustomers(string city)
    {
        using (var db = new Northwind())
        {
            if (city == null || city == "")
            {
                return db.Customers.Count();
            }
            else
            {
                return db.Customers.Where(c => c.City == city).Count();
            }
        }
    }
}

static void Main(string[] args)
    {
        var testInstance = new NorthwindCustomers();
        var actual = testInstance.NumberOfNorthwindCustomers(null);
        Console.WriteLine(actual);
        var actualLondon = testInstance.NumberOfNorthwindCustomers("London");
        Console.WriteLine(actualLondon);
    }
```