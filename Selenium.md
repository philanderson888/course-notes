Project from Scratch

New console

Add Nuget

Selenium.WebDriver
Selenium.Chrome.WebDriver
Selenium.Support

Then build the project

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

namespace Selenium
{
    class Program
    {
        static void Main(string[] args)
        {
            IWebDriver driver = new ChromeDriver();
            driver.Url = "https://www.bbc.co.uk";
           
        }
    }
}
```


This will open a new web page!!!




Now let's add testing

Add to our project

NUnit
NUnit3TestAdapter


Now right click on the project and add a new class NUnitTest

```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using NUnit.Framework;


namespace Selenium
{
    class NUnitTest
    {
        public void TestApp()
        {
            IWebDriver driver = new ChromeDriver();
            driver.Url = "https://www.bbc.co.uk";
            System.Threading.Thread.Sleep(5000);
            driver.Close();
        }
    }
}
```


Build the solution













Selenium

New Project, Unit Test, .NET Framework

Add Nunit3
Nunit.Runners
nunit3 test adapter
Specflow
Specflow.Nunit
specflow.Nunit.Runners
Selenium.webdriver




Download Chrome driver  http://chromedriver.storage.googleapis.com/index.html?path=72.0.3626.7/


```cs
using System;
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

namespace Selenium
{
    [TestFixture()]
    public class SeleniumBBCLoginTest
    {
        [Test()]
        public void SeleniumWalkthrough()
        {
            using (IWebDriver driver = new ChromeDriver())
            {
                // full screen
                driver.Manage().Window.Maximize();
                // download driver at 
                // http://chromedriver.storage.googleapis.com/index.html?path=72.0.3626.7/

                driver.Navigate().GoToUrl("http://bbc.co.uk");

                IWebElement loginButton = driver.FindElement(By.Id("idcta-link"));
                loginButton.Click();

                IWebElement usernameField = driver.FindElement(By.Id("user-identifier-input"));
                usernameField.SendKeys("testing@gurney.com");
                IWebElement passwordField = driver.FindElement(By.Id("password-input"));
                passwordField.SendKeys("12345678");

                System.Threading.Thread.Sleep(5000);

                IWebElement submitButton = driver.FindElement(By.Id("submit-button"));
                submitButton.Click();
                IWebElement passwordError = driver.FindElement(By.Id("form-message-password"));

                System.Threading.Thread.Sleep(5000);

                Assert.AreEqual("Sorry, that password isn't valid. Please include a letter.",passwordError.Text);


            }
        }
    }
}
```



Instasll specflow for visual studio 2017  (extension)

New project SpecFlow

Add Nunit3
Nunit.Runners
Specflow
Specflow.Nunit
specflow.Nunit.Runners
Selenium.webdriver
nunit3 test adapter



Add new item to project - spec flow feature file

Delete extra file???

Paste in this text

Gherkin Cucumber Syntax


```
Feature: BBCLogin
    In order to login to my account
    As a user
    I want to see my account page

@mytag
Scenario: Invalid password
	Given I am on the login page
	And I have entered a valid username
	And I have entered an invalid password
	When I press login
	Then I should see the appropriate error
```

Right click and generate 


using OpenQA.Selenium.Chrome;



```cs
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using TechTalk.SpecFlow;


namespace SeleniumSpecFlow
{
    [Binding]
    public class BBCLoginSteps
    {
        private IWebDriver _driver;

        [Given(@"I am on the login page")]
        public void GivenIAmOnTheLoginPage()
        {
            _driver = new ChromeDriver();
            // full screen
            _driver.Manage().Window.Maximize();
            // download driver at 
            // http://chromedriver.storage.googleapis.com/index.html?path=72.0.3626.7/

            _driver.Navigate().GoToUrl("http://bbc.co.uk");

            IWebElement loginButton = _driver.FindElement(By.Id("idcta-link"));
            loginButton.Click();




        }
        
        [Given(@"I have entered a valid username")]
        public void GivenIHaveEnteredAValidUsername()
        {

            IWebElement usernameField = _driver.FindElement(By.Id("user-identifier-input"));
            usernameField.SendKeys("testing@gurney.com");
        }
        
        [Given(@"I have entered an invalid password")]
        public void GivenIHaveEnteredAnInvalidPassword()
        {
            IWebElement passwordField = _driver.FindElement(By.Id("password-input"));
            passwordField.SendKeys("12345678");
        }
        
        [When(@"I press login")]
        public void WhenIPressLogin()
        {
            IWebElement submitButton = _driver.FindElement(By.Id("submit-button"));
            submitButton.Click();
        }
        
        [Then(@"I should see the appropriate error")]
        public void ThenIShouldSeeTheAppropriateError()
        {
            IWebElement passwordError = _driver.FindElement(By.Id("form-message-password"));

            System.Threading.Thread.Sleep(5000);

            Assert.AreEqual("Sorry, that password isn't valid. Please include a letter.", passwordError.Text);
        }
    }
}



```

Add a pages folder and inside it a new class
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OpenQA.Selenium;


namespace SeleniumSpecFlow.pages
{
    class BbcLoginPage
    {
        private readonly IWebDriver _driver;
        private const string PageUri = @"http://www.bbc.co.uk/signin";

        public BbcLoginPage(IWebDriver driver)
        {
            _driver = driver;
        }
    }
}


```cs

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OpenQA.Selenium;


namespace SeleniumSpecFlow.pages
{
    class BbcLoginPage
    {
        private readonly IWebDriver _driver;
        private const string PageUri = @"http://www.bbc.co.uk/signin";

        public BbcLoginPage(IWebDriver driver)
        {
            _driver = driver;
        }

        public static BbcLoginPage NavigateTo(IWebDriver driver)
        {
            driver.Navigate().GoToUrl(PageUri);
            return new BbcLoginPage(driver);
        }
    }
}


```


Now altering code

```


using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using TechTalk.SpecFlow;
using SeleniumSpecFlow.pages;


namespace SeleniumSpecFlow
{
    [Binding]
    public class BBCLoginSteps
    {
        private IWebDriver _driver;
        private BbcLoginPage _bbcLoginPage;

        [Given(@"I am on the login page")]
        public void GivenIAmOnTheLoginPage()
        {
            _driver = new ChromeDriver();
            // full screen
            _driver.Manage().Window.Maximize();
            // download driver at 
            // http://chromedriver.storage.googleapis.com/index.html?path=72.0.3626.7/

            _bbcLoginPage = BbcLoginPage.NavigateTo(_driver);







        }
        
        [Given(@"I have entered a valid username")]
        public void GivenIHaveEnteredAValidUsername()
        {

            IWebElement usernameField = _driver.FindElement(By.Id("user-identifier-input"));
            usernameField.SendKeys("testing@gurney.com");
        }
        
        [Given(@"I have entered an invalid password")]
        public void GivenIHaveEnteredAnInvalidPassword()
        {
            IWebElement passwordField = _driver.FindElement(By.Id("password-input"));
            passwordField.SendKeys("12345678");
        }
        
        [When(@"I press login")]
        public void WhenIPressLogin()
        {
            IWebElement submitButton = _driver.FindElement(By.Id("submit-button"));
            submitButton.Click();
        }
        
        [Then(@"I should see the appropriate error")]
        public void ThenIShouldSeeTheAppropriateError()
        {
            IWebElement passwordError = _driver.FindElement(By.Id("form-message-password"));

            System.Threading.Thread.Sleep(5000);

            Assert.AreEqual("Sorry, that password isn't valid. Please include a letter.", passwordError.Text);

        }
    }
}


```


and pages code


```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OpenQA.Selenium;


namespace SeleniumSpecFlow.pages
{
    class BbcLoginPage
    {
        private readonly IWebDriver _driver;
        private const string PageUri = @"http://www.bbc.co.uk/signin";

        public BbcLoginPage(IWebDriver driver)
        {
            _driver = driver;
        }

        public static BbcLoginPage NavigateTo(IWebDriver driver)
        {
            driver.Navigate().GoToUrl(PageUri);
            return new BbcLoginPage(driver);
        }
    }
}


```





```cs
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using TechTalk.SpecFlow;
using SeleniumSpecFlow.pages;


namespace SeleniumSpecFlow
{
    [Binding]
    public class BBCLoginSteps
    {
        private IWebDriver _driver;
        private BbcLoginPage _bbcLoginPage;

        [Given(@"I am on the login page")]
        public void GivenIAmOnTheLoginPage()
        {
            _driver = new ChromeDriver();
            // full screen
            _driver.Manage().Window.Maximize();
            // download driver at 
            // http://chromedriver.storage.googleapis.com/index.html?path=72.0.3626.7/

            _bbcLoginPage = BbcLoginPage.NavigateTo(_driver);







        }
        
        [Given(@"I have entered a valid username")]
        public void GivenIHaveEnteredAValidUsername()
        {
            _bbcLoginPage.Username = "user@username.com";
        }
        
        [Given(@"I have entered an invalid password")]
        public void GivenIHaveEnteredAnInvalidPassword()
        {
            _bbcLoginPage.Password = "12345677";
        }
        
        [When(@"I press login")]
        public void WhenIPressLogin()
        {
            _bbcLoginPage.ClickSignin();
        }
        
        [Then(@"I should see the appropriate error")]
        public void ThenIShouldSeeTheAppropriateError()
        {
           

            System.Threading.Thread.Sleep(5000);

            Assert.AreEqual("Sorry, that password isn't valid. Please include a letter.", _bbcLoginPage.ErrorText);

        }

        [AfterScenario]
        public void DisposeWebDriver()
        {
            _driver.Dispose();
        }
    }
}

```

and

```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OpenQA.Selenium;


namespace SeleniumSpecFlow.pages
{
    class BbcLoginPage
    {
        private readonly IWebDriver _driver;
        private const string PageUri = @"http://www.bbc.co.uk/signin";

        public BbcLoginPage(IWebDriver driver)
        {
            _driver = driver;
        }

        public static BbcLoginPage NavigateTo(IWebDriver driver)
        {
            driver.Navigate().GoToUrl(PageUri);
            return new BbcLoginPage(driver);
        }


        public string Username
        {
            set
            {
                _driver.FindElement(By.Id("user-identifier-input")).SendKeys(value);
            }
        }

        public string Password
        {
            set
            {
                _driver.FindElement(By.Id("password-input")).SendKeys(value);
            }
        }

        public void ClickSignin()
        {
            _driver.FindElement(By.Id("submit-button")).Click();
        }

        public string ErrorText =>
            _driver.FindElement(By.Id("form-message-password")).Text;



    }
}

```

Now moving on

Add selenium support

Steps

```cs
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using TechTalk.SpecFlow;
using SeleniumSpecFlow.pages;


namespace SeleniumSpecFlow
{
    [Binding]
    public class BBCLoginSteps
    {
        private IWebDriver _driver;
        private BbcLoginPage _bbcLoginPage;

        [Given(@"I am on the login page")]
        public void GivenIAmOnTheLoginPage()
        {
            _driver = new ChromeDriver();
            // full screen
            _driver.Manage().Window.Maximize();
            // download driver at 
            // http://chromedriver.storage.googleapis.com/index.html?path=72.0.3626.7/

            _bbcLoginPage = BbcLoginPage.NavigateTo(_driver);







        }
        
        [Given(@"I have entered a valid username")]
        public void GivenIHaveEnteredAValidUsername()
        {
            _bbcLoginPage.Username = "user@username.com";
        }
        
        [Given(@"I have entered an invalid password")]
        public void GivenIHaveEnteredAnInvalidPassword()
        {
            _bbcLoginPage.Password = "12345677";
        }
        
        [When(@"I press login")]
        public void WhenIPressLogin()
        {
            _bbcLoginPage.ClickSignin();
        }
        
        [Then(@"I should see the appropriate error")]
        public void ThenIShouldSeeTheAppropriateError()
        {
           

            System.Threading.Thread.Sleep(5000);

            Assert.AreEqual("Sorry, that password isn't valid. Please include a letter.", _bbcLoginPage.ErrorText);

        }

        [AfterScenario]
        public void DisposeWebDriver()
        {
            _driver.Dispose();
        }
    }
}


```




```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.PageObjects;


namespace SeleniumSpecFlow.pages
{
    class BbcLoginPage
    {
        private readonly IWebDriver _driver;
       // PageFactory Objects
        [FindsBy(How=How.Id,Using = "user-identifier-input")]
        private IWebElement _username;
        [FindsBy(How = How.Id, Using = "password-input")]
        private IWebElement _password;
        [FindsBy(How = How.Id, Using = "form-message-password")]
        private IWebElement _errortext;
        [FindsBy(How = How.Id, Using = "submit-button")]
        private IWebElement _submitbutton;

        private const string PageUri = @"http://www.bbc.co.uk/signin";

        public BbcLoginPage(IWebDriver driver)
        {
            _driver = driver;
            PageFactory.InitElements(_driver, this);
        }

        public static BbcLoginPage NavigateTo(IWebDriver driver)
        {
            driver.Navigate().GoToUrl(PageUri);
            return new BbcLoginPage(driver);
        }


        public string Username
        {
            set
            {
                _username.SendKeys(value);
            }
        }

        public string Password
        {
            set
            {
                _password.SendKeys(value);
            }
        }
        public void ClickSignin()
        {
            _submitbutton.Click();
        }

        public string ErrorText =>
            _driver.FindElement(By.Id("form-message-password")).Text;
    }
}
```


Now alter Gherkin



```
Feature: BBCLogin
    In order to login to my account
    As a user
    I want to see my account page

@mytag
Scenario Outline: Invalid password
	Given I am on the login page
	And I have entered a valid <username>
	And I have entered an invalid <password>
	When I press login
	Then I should see the appropriate <error>

	Examples:
	| username         | password | error                                                      |
	| user@testing.com | 12345678 | Sorry, that password isn't valid. Please include a letter. |
    | user@testing.com | 123      | Sorry, that password is too short. It needs to be eight characters or more. |
    | user@testing.com | @@@@@@@@ | Sorry, that password isn't valid. Please include a letter.                  |
```

and the c sharp

```
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using TechTalk.SpecFlow;
using SeleniumSpecFlow.pages;


namespace SeleniumSpecFlow
{
    [Binding]
    public class BBCLoginSteps
    {
        private IWebDriver _driver;
        private BbcLoginPage _bbcLoginPage;

        [Given(@"I am on the login page")]
        public void GivenIAmOnTheLoginPage()
        {
            _driver = new ChromeDriver();
            // full screen
            _driver.Manage().Window.Maximize();
            // download driver at 
            // http://chromedriver.storage.googleapis.com/index.html?path=72.0.3626.7/

            _bbcLoginPage = BbcLoginPage.NavigateTo(_driver);







        }
        
        [Given(@"I have entered a valid (.*)")]
        public void GivenIHaveEnteredAValidUsername(string username)
        {
            _bbcLoginPage.Username = username;
        }
        
        [Given(@"I have entered an invalid (.*)")]
        public void GivenIHaveEnteredAnInvalidPassword(string password)
        {
            _bbcLoginPage.Password = password;
        }
        
        [When(@"I press login")]
        public void WhenIPressLogin()
        {
            _bbcLoginPage.ClickSignin();
        }
        
        [Then(@"I should see the appropriate (.*)")]
        public void ThenIShouldSeeTheAppropriateError(string error)
        {
           

            System.Threading.Thread.Sleep(5000);

            Assert.AreEqual(error, _bbcLoginPage.ErrorText);

        }

        [AfterScenario]
        public void DisposeWebDriver()
        {
            _driver.Dispose();
        }
    }
}

```



