# Selenium, Gherkin, Specflow, Cucumber

[Selenium , 02, 02_core](Selenium%20Gherkin%20Specflow%20Cucumber/Selenium%2002%2002_core.md)

2019_04_C_Sharp_Labs Selenium 01 02 03

[CheatSheet](Selenium%20Gherkin%20Specflow%20Cucumber/CheatSheet.md)

1. Install latest version of Chrome.
2. Download and unzip the Selenium Chrome web driver from 

[http://chromedriver.chromium.org/downloads](http://chromedriver.chromium.org/downloads) 

3.    Move the driver file to Programsx86/Google/Chrome/Application folder where chrome.exe also lives

4.   Add  Programsx86/Google/Chrome/Application to the PATH System Environment Variable

5.   Create a new .NET Console Framework application.

6.   Add an existing item to the project and select this file 

7.   Install these Nuget packages

    install-package selenium.webdriver 
    install-package selenium.chrome.webdriver 
    install-package  nunit 
    install-package  nunittestadapter 

8. Run this code

    // 2019-04-c-sharp-labs
    
    using System;
    using OpenQA.Selenium;
    using OpenQA.Selenium.Chrome;
    
    namespace Selenium_01
    {
        class Program
        {
            static void Main(string[] args)
            {
                var driver = new ChromeDriver();
                driver.Url = "https://www.bbc.co.uk";
            }
        }
    }
    
    

[https://www.toolsqa.com/selenium-c-sharp/](https://www.toolsqa.com/selenium-c-sharp/) 

[https://www.toolsqa.com/selenium-webdriver/c-sharp/set-up-selenium-webdriver-with-visual-studio-in-c/](https://www.toolsqa.com/selenium-webdriver/c-sharp/set-up-selenium-webdriver-with-visual-studio-in-c/) 

Now upgrade the code to add NUnit testing

    
    using OpenQA.Selenium;
    using OpenQA.Selenium.Chrome;
    using NUnit.Framework;
    
    namespace Selenium_01
    {
        class NUnitTests
        {
            IWebDriver driver;
    
            [SetUp]
            public void Initialise()
            {
                driver = new ChromeDriver();
            }
    
            [Test]
            public void OpenAppTest()
            {
                driver.Url = "https://www.bbc.co.uk";
            }
    
            [TearDown]
            public void EndTest()
            {
                System.Threading.Thread.Sleep(2000);
                driver.Close();
            }
            public void TestApp()
            {
                var driver = new ChromeDriver();
                driver.Url = "https://www.bbc.co.uk";
                
            }
        }
    }

At this point the tests were still not working

After a lot of research I discovered that the fix is to ensure these libraries are installed

    Microsoft.CodeCoverage              {16.1.1}                                 
    Microsoft.NET.Test.Sdk              {16.1.1}                                 
    NUnit                               {3.12.0}                                 
    NUnit3TestAdapter                   {3.13.0}                                 
    NUnitTestAdapter                    {2.2.0}                                  
    Selenium.Chrome.WebDriver           {74.0.0}                                 
    Selenium.WebDriver                  {3.141.0}                                

So i tried again

     -
    install-package microsoft.codecoverage -projectname selenium_01;
    install-package microsoft.net.test.sdk -projectname selenium_01;
    install-package  nunit -projectname selenium_01;
    install-package nunit3testadapter -projectname selenium_01;
    install-package selenium.webdriver -projectname selenium_01;
    install-package selenium.chrome.webdriver -projectname selenium_01;
    

which installed the packages above

OK seems to be working now

OK so starting again from scratch before we proceed further

Create new project core Selenium_03

Add all the libraries

    install-package selenium.webdriver -projectname selenium_03;
    install-package selenium.chrome.webdriver -projectname selenium_03;
    
    // Then can run this code
    
    using OpenQA.Selenium;
    using OpenQA.Selenium.Chrome;
    
    var driver = new ChromeDriver();
    driver.Url = "https://www.bbc.co.uk";
    
    // Then create SeleniumTests.cs and install 
    
    install-package microsoft.codecoverage -projectname selenium_03;
    install-package microsoft.net.test.sdk -projectname selenium_03;
    install-package  nunit -projectname selenium_03;
    install-package nunit3testadapter -projectname selenium_03;
    
    // now remove Program.cs and build then add 
    
    using System;
    using System.Collections.Generic;
    using System.Text;
    using OpenQA.Selenium;
    using OpenQA.Selenium.Chrome;
    using NUnit.Framework;
    
    namespace Selenium_03
    {
        class Selenium_Tests
        {
            IWebDriver driver;
    
            [SetUp]
            public void Initialise()
            {
                driver = new ChromeDriver();
            }
    
            [Test]
            public void Selenium_Test_BBC_Website()
            {
                driver.Url = "https://www.bbc.co.uk";
            }
    
            [TearDown]
            public void EndTest()
            {
                System.Threading.Thread.Sleep(3000);
                driver.Close();
            }
        }
    }
    
    Which is all working
    
    // develop the code
    
    public void Selenium_Test_BBC_Website()
    {
        driver.Url = "https://www.bbc.co.uk";
        //  Console.WriteLine($"Page Source is {driver.PageSource}");
        Console.WriteLine($"Page Source is {driver.PageSource.Length}");
    
        Console.WriteLine($"Driver is {driver.Url}");
        Console.WriteLine($"Page Title is {driver.Title}");
    }
    
    [TearDown]
    public void EndTest()
    {
        System.Threading.Thread.Sleep(3000);
        driver.Close();
        driver.Quit(); // closes all windows regardless
    }
    
    
    
    
    driver.Navigate()....
    
    

    using System;
    using System.Collections.Generic;
    using System.Text;
    using OpenQA.Selenium;
    using OpenQA.Selenium.Chrome;
    using NUnit.Framework;
    using System.Threading;
    
    namespace Selenium_03
    {
        class Selenium_Tests
        {
            IWebDriver driver;
    
            [SetUp]
            public void Initialise()
            {
                driver = new ChromeDriver();
                
            }
    
            [Test]
            public void Selenium_Test_BBC_Website()
            {
                driver.Url = "https://www.bbc.co.uk";
                //  Console.WriteLine($"Page Source is {driver.PageSource}");
                Console.WriteLine($"Page Source is {driver.PageSource.Length}");
    
                Console.WriteLine($"Driver is {driver.Url}");
                Console.WriteLine($"Page Title is {driver.Title}");
                driver.Navigate().GoToUrl("https://www.intel.com");
                Thread.Sleep(1500);
                driver.Navigate().Back();
                Thread.Sleep(1500);
                driver.Navigate().Forward();
                Thread.Sleep(1500);
                driver.Navigate().Back();
                Thread.Sleep(1500);
                driver.Navigate().Refresh();
                Thread.Sleep(1500);
    
                driver.Url = "http://34.244.111.198/";
                // IWebElement element = driver.FindElement(By.Id(""));
                IWebElement element = driver.FindElement(By.Name("email"));
                element.Clear();
                element.SendKeys("admin@spartaglobal.com");
                Thread.Sleep(1500);
    
    
                element = driver.FindElement(By.Name("password"));
                element.Clear();
                element.SendKeys("Password1");
                Thread.Sleep(1500);
    
                element = driver.FindElement(By.ClassName("btn-primary"));
                element.Click();
                Thread.Sleep(1500);
            }
    
            [TearDown]
            public void EndTest()
            {
                System.Threading.Thread.Sleep(3000);
                driver.Close();
                driver.Quit(); // closes all windows regardless
            }
        }
    }

# Class Notes

## Selenium Web Testing

### Chrome Web Driver

We are going to link our C# to a library which will allow us to take control of our browser. The application will be called a 'Chrome Driver'.

C# ==> Selenium ==> Chrome Web Driver ==> manipulate web pages without touching them

Let's download the chrome driver

[http://chromedriver.chromium.org/downloads](http://chromedriver.chromium.org/downloads) v75 latest version

### Add Selenium To C# Project

    install-package selenium.webdriver -projectname lab_94_Selenium_01;
    install-package selenium.chrome.webdriver -projectname lab_94_Selenium_01;

    using Systemc#;
    using OpenQA.Selenium;
    using OpenQA.Selenium.Chrome;
    using System.Threading;
    
    namespace lab_94_Selenium_01
    {
        class Program
        {
            static void Main(string[] args)
            {
                IWebDriver driver = new ChromeDriver();
                driver.Url = "<https://www.bbc.co.uk>";
                Thread.Sleep(2000);
                driver.Close();  // one window
                driver.Quit();   // all 
            }
        }
    }

### Add Testing

We are going to use Selenium as part of our testing framework.

The idea is to build a website and have automated tests run and confirm the website is working as planned.

Let's add NUnit to our project.

    install-package microsoft.codecoverage -projectname lab_94_Selenium_01;
    install-package microsoft.net.test.sdk -projectname lab_94_Selenium_01;
    install-package nunit3testadapter -projectname lab_94_Selenium_01;
    install-package nunit -projectname lab_94_Selenium_01;

Check it has worked

    get-package -projectname lab_94_Selenium_01

Should show

    nunit                               {3.12.0}                                 lab
    nunit3testadapter                   {3.13.0}                                 lab
    selenium.chrome.webdriver           {74.0.0}                                 lab
    Microsoft.NETCore.App               {2.1}                                    lab
    microsoft.codecoverage              {16.1.1}                                 lab
    microsoft.net.test.sdk              {16.1.1}                                 lab
    selenium.webdriver                  {3.141.0}                                lab

Now convert our project from an application to a testing framework

    using System;
    using OpenQA.Selenium;
    using OpenQA.Selenium.Chrome;
    using System.Threading;
    using NUnit.Framework;
    using NUnit;
    
    namespace lab_94_Selenium_01
    {
        class Program
        {
            //static void Main(string[] args)
            //{
            //    IWebDriver driver = new ChromeDriver();
            //    driver.Url = "<https://www.bbc.co.uk>";
            //    Thread.Sleep(2000);
            //    driver.Close();  // one window
            //    driver.Quit();   // all 
            //}
        }
    
        class Selenium_Tests
        {
            IWebDriver driver;
    
            [SetUp]
            public void Initialise()
            {
                driver = new ChromeDriver();
            }
            [Test]
            public void Selenium_Test_BBC_Site()
            {
                driver.Url = "<https://www.bbc.co.uk>";
            }
    
            [TearDown]
            public void CleanUp()
            {
                Thread.Sleep(3000);
                driver.Close();   // one
                driver.Quit();  // all 
            }
    
        }
    }

### methods available

    public void Selenium_Test_BBC_Site()
    {
        driver.Url = "<https://www.bbc.co.uk>";
        // Console.WriteLine(driver.PageSource);
    
        Console.WriteLine($"Page Length {driver.PageSource.Length}");
        Console.WriteLine($"URL is {driver.Url}");
        Console.WriteLine($"Page Title is {driver.Title}");
    
        Thread.Sleep(1500);
        driver.Navigate().GoToUrl("<https://www.intel.com>");
        Thread.Sleep(1500);
        driver.Navigate().Back();
        Thread.Sleep(1500);
        driver.Navigate().Forward();
        Thread.Sleep(1500);
        driver.Navigate().Refresh();
        Thread.Sleep(1500);
        Thread.Sleep(1500);
    }

### Finding HTML elements by ID, name or other criteria

Let's get to some more exciting details of logging in to a website automatically.

We have to identify the HTML elements on the page using name, #id and .class and other css styles.

    Selenium
    
    New Project, Unit Test, .NET Framework
    
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
    
    
    
    INstasll specflow for visual studio 2017  (extension)
    
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

    # Not sure if this is good code or not!
    
    Selenium
    
    New Project, Unit Test, .NET Framework
    
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
    
    
    
    INstasll specflow for visual studio 2017  (extension)
    
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

# Gherkin, Specflow, Cucumber

[https://www.toolsqa.com/cucumber/behavior-driven-development/](https://www.toolsqa.com/cucumber/behavior-driven-development/)