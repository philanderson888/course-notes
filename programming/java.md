# java

## contents

- [java](#java)
  - [contents](#contents)
  - [202410 update](#202410-update)
    - [terms](#terms)
  - [notes](#notes)
  - [Maven](#maven)
  - [Setup From Scratch](#setup-from-scratch)
  - [New Application](#new-application)
  - [Maven](#maven-1)
    - [Setup new projects](#setup-new-projects)
    - [Google Java Style Guide](#google-java-style-guide)
  - [syntax](#syntax)
    - [final](#final)
    - [equals](#equals)
    - [strings](#strings)
    - [numbers](#numbers)
    - [Collections](#collections)
    - [Tuples](#tuples)
    - [dates](#dates)
  - [IO](#io)
  - [Logging](#logging)
  - [JUnit](#junit)
  - [JDBC](#jdbc)
  - [Threading](#threading)
  - [glossary](#glossary)
    - [gradle](#gradle)
    

## 202410 update

### terms

gradle is a build tool with which we build the app from the source code

kotlin is refined java

groovy compiles to groovyc

groovy scripting

.java can have private classes but only one public class, the same as the file name   

javac java compile will compile myClass.java to myClass.class

run a java file with command `java myClass`

.class is byte code

jvm runs byte code

jar is java archive



## notes
    
apt code preprocessor (can generate code, also go through code to find information)

javah calls on non-Java code eg C

javadoc => produces documentation from /** comments

javap prints classes and methods

- APT is Maven WIKI documentation
- App → Module → Components which run in Container
    - Module (one or more per app) builds into JAR
        - Components run in a Container
            - Client App runs on client
            - Web - JSF or Servlets run in web container
            - Business EJB - runs in EJB Container
- Snapshot is a version
- POM Project Object Model
- Artifact is something produced by a software process eg a file
- Maven - Defines Dependencies and Build Java Apps with pom.xml and - mvn compile
    - Produces this folder structure
        
        ```java
        +---src
        |   +---main
        |   |   +---java
        |   |   |   \---com
        |   |   |       \---baeldung
        |   |   |           \---maven
        |   |   |                   HelloWorld.java
        |   |   |                   
        |   |   \---resources
        |   \---test
        |       +---java
        |       \---resources
        ```
        
    - Artifact is a reference to a library using 1) groupId 2) artifactId 3) version
- Container runs components
- iml is IntelliJ Module File
- .project is Eclipse
- .classpath


- Editions
    - ME Micro Edition for phones
    - FX screen UI
- Syntax
    - NPE Null Pointer Exception - handled by Kotlin well
    - POJO Plain Old Java Object
    - MOJO is a Java class which is part of a Java plugin
    - default access modifier is package scoped, same as internal in C#
    - package = namespace
    - once we import a package we can then import the class
    - Inheritance with extends
    - Equals and HashCode
        - Hashcode = hash of object as int
        - Equals checks if hashcodes match
        - If override equals then override hashcode!
    - Final variable = fixed
    - Final Class : Sealed
    - Final method : Sealed
    - String.format()
        - 
- Concurrency
    - notify()
    - notifyAll()
    - wait()
- DB
    - Hibernate is ORM mapper of class to DB
- SpEL  expression language
- Spring ORM
- OXM Object / XML
- Sevlet
- EE
    - Spring is modular framework in EE
        - Servlet
        - WebSocket
        - Concurrency
        - JSON
        - Bean Validation
        - JPA Persistence
        - JMS Messaging
        - JTA Transaction
        - JCA Connector Architecture
        - DI Dependency Injection
        - CA Common Annotations
        - XML Namespaces
        - AspectJ
        - Annotations
        - JMS Java Message Service
        - JPA Java Persistence API
        - JCache
        - IOC Container
        - Bean Factory is container for beans
        - AOP Aspect Oriented Programming uses `@Aspect` and aims to make it easier to introduce security across an application
            - <org.aspectj>  and <org.aspectjrt> also <aspectjweaver>
            - join point
            - pointcut
            - advice
        - ORM Object Relational Mapper for DB
        - DAO Data Access Object
    - Spring Boot starts up Spring quickly!
    - Bean (JavaBean) is a serializable class with public get/set, public no-argument constructor  <jsp:get/setProperty>
    - Spring Bean is managed by an IOC container which defines dependencies in abstract manner
    - Web Servers
        - Tomcat
        - 
    - servelets - services running on server
    - EJB Enterprise Java Bean is server-side class with `@EJB`in it and business logic
        - Permits scalable apps
        - Persistence
        - Transactional Integrity
        - Security
        - Concurrency
        - Async
        - Naming JNDI
        - Session Bean
            - Stateless
            - Stateful per user
            - Singleton per app
        - Message Driven Bean - process messages asynchronously
        - Backing bean is JSF JavaServer Faces bean injected with `@EJB`
    - Spring Boot allows web microservices
    - WebFlux application handles non-blocking concurrency
        - runs directly on Netty server
        - non blocking
        - small footprint so good for microservices
    - Reactive - streaming - react to change eg network or UI events
        - network components reacting to IO events
        - UI controller react to mouse events
        - Reactive systems are
            - Responsive - detects problems and lets users know
            - Resilient
                - Replication
                - Isolation
                - Delegation
            - Elastic under workload
            - Message drdiven
    - Reactive Stream - subscriber lets the publisher know how fast to produce data!
        - Uses non-blocking back pressure to inform publisher to slow down or speed up
        - Reactor is a `Reactive API` providing `Mono` and `Flux` to work on data sequences
    - Nonblocking server - waits for client to connect and then reads over non-blocking socket
        - Netty
        - Undertow
        - Servlet 3.1+
    - Asynchronous IO means clients are notified of waiting data so they are free to do other stuff in the meantime
    - OIDC OpenID Connect - security
    - JMS Java Message Service
    - JPA Java Persistence API
- Payara Web Server   https://www.payara.fish/
- gRPC
- GraphQL



- Old
    - Build tools : Ivy (for Ant), Grails(no longer), Gradle(now replaced), Jenkins
    - Ant
        - Another Neat Tool
        - Came from Apache Tomcat and replaced `Make` Unix build tool
        - build.xml  1) clean 2) clobber (also cleans) 3) compile .java to .class 4) jar creates jar file
    - Apache IVY dependency manager, works with Ant
    - History
        
        C 1972 Dennis Ritchie
        C++ 1979 Dennis
        Java 1995 - Invented by Sun and made available in 1995.
        1996 1.1
        Bought by Oracle.
        J2EE Extended Edition adds Servlet and JSP
        
    - IDE
        - IntelliJIdea
            - Shortcuts
                - Space Space opens up global search




## Maven


- Overview
    - Manages dependencies
    - Can build larger projects


- Terms
    
    Created 2002
    
    Creates pom.xml file to manage dependencies
    
    POM Project Object Model
    
    ```csharp
    Home
        src
            main
                java
                resources
            test
                java
                resources
        target
        pom.xml
    ```
    
    - ArtifactID = Project Name
    - 
## Setup From Scratch

1. Add the \bin folder to the path
2. Download and extract the mavern .bin download
3. Check mvn.cmd runs on command line (not powershell)
4. Add a POM.XML file from https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html
5. Run the setup command 

```csharp
"C:\Program Files\Java\apache-maven-3.6.3\bin\mvn.cmd" 
archetype:generate -DgroupId=com.mycompany.app 
-DartifactId=my-app -DarchetypeArtifactId=maven-archetype-quickstart 
-DarchetypeVersion=1.4 -DinteractiveMode=false
```

6. cd my-app
7. Add this to POM and find path to javac.exe compiler!
    
    ```csharp
    <plugin>
        <artifactId>maven-compiler-plugin</artifactId>
        <version>3.1</version>
        <configuration>
            <source>1.7</source>
            <target>1.7</target>
            <fork>true</fork>
            <executable>C:\Program Files\Java\jdk1.7.0_79\bin\javac.exe</executable>
        </configuration>
    </plugin>
    ```
    
8. mvn compile
9. mvn test
10. mvn package
    


## New Application

1. File, New Project, use Maven
2. File, Project - change from 12 to 14 in 'Project' and 'SDKs'
3. File, Settings, Build, Compiler, Java update bytecode to 14
4. Add this to pom.xml
    
    ```powershell
    <properties>
        <maven.compiler.source>1.7</maven.compiler.source>
        <maven.compiler.target>1.7</maven.compiler.target>
        </properties>
    ```
    
5. Right click on pom.xml and Maven, Reload Project
6. Add a class with Main() and run!


- Build lifecycle
    - validate, compile, unit tests, package into JAR, verify integration tests, install, deploy


## Maven

```csharp
mvn compile

mvn test

mvn package - compiles all java files and runs tests into target/my-app-1.0.jar
                if app name is my-app and version 1.0

mvn plugin-name : goal-name
```
        
### Setup new projects
    
IntelliJ setup https://www.youtube.com/watch?v=S_GLO5la_nI&ab_channel=Amigoscode
    
### Google Java Style Guide

https://google.github.io/styleguide/javaguide.htmlhttps://github.com/google/styleguide/blob/gh-pages/intellij-java-google-style.xml
        

## syntax

### final
    
final variable - can't be modified

final method - no override

final class - no inheritance
    
### equals
    
Use equals() to compare two objects.  Note: using ==
    
### strings

- String.format()
    
    String.format("<conditions>","string") can be used eg to format a number as $123,456.78
    
    String.format("%....",x)	% refers to the second variable x
    
    Format("I have %.2d items to spare",x)	% will insert the variable
    
    Format("%,",x) will add a comma into the formatted number
    
    % , (adds commas) length.decimals <input type eg f for decimal d for integer>
    
    % % % adds multiple
    
    % < < keeps referring just to one input value
        
### numbers
    - 
    
    BigInteger has to be defined how much space it is going to take
    BigDecimal can define the size of the number
    
### Collections
    - Set
        - no duplicates
        - SortedSet
    - List
        - LinkedList
    - Queue
    - Stack
    - Map 1-1
        - key/value pairs (no duplicate keys) stored in inner class called `Entry`
            - SortedMap
### Tuples
    - Tuple List
        
```java
    // is initial letter in the matrix?
    List<Map.Entry<Integer,Integer>> initialPositions = new ArrayList<>();
    for(Integer i=0;i<rows;i++){
        for(Integer j=0;j<columns;j++){
            if(board[i][j] == initialLetter) System.out.println("Initial letter " + initialLetter + " in row " + (i+1) + " column " + (j+1));
            var pair = new AbstractMap.SimpleEntry<>(i,j);
            initialPositions.add(pair);
        }
    }
    System.out.println("Initial position matches found at ");
    for(var match:initialPositions){
        System.out.print(match.toString() + ", ");
    }#

```
        
### dates

    - Date myDate = new Date()
    - Print with String.format
    - calendar

```java
    Calendar myCalendarDate = Calendar.getInstance(); invokes a recommended calendar date
    Calendar cal = Calendar.getInstance();
    System.out.println(cal);
    System.out.println(cal.getTime());
    cal.set(2015, 11,12,13,01,00);
    System.out.println(cal);
    System.out.println(cal.getTime());
```
            
## IO

  - Pipe is a connection between threads
  - Network using inputStream and outputStream
  - NIO
      - buffer is block of memory which can be read/written to
      - channel read/write to buffer , fileChannel or socketChannel
      - selector

## Logging

```csharp
import org.apache.log4j.Logger;
....
public class example{

static Logger log = Logger.getLogger(this.class);

.....
public void test(){
    String hello ="Hello World";
    log.trace(hello);
}
....
}

output will be :
TRACE:(<classname>){2011-10-38-06:644} Hello World 2011-05-10 08:38:06,644
```







## JUnit

- Terms

```csharp
@BeforeClass (once)

@Before

@Test @Ignore("Reason test is disabled")
void doThis(){}

@After

@AfterClass (once)
```

- Setup JUnit

Click on the class to test and go 'Alt Enter' or right click on the class or a method and choose 'Generate..Test'

We can also make sure Project Settings, Modules has the right folder flagged as 'Tests'

- First Test - just click on the 'play' button on the test!

```csharp
// class
public class Dog {
    private String name;

    public Dog(String name){
        this.name=name;
    }

    public String getName(){
        return name;
    }
}

// test
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class DogTest {

    @org.junit.jupiter.api.BeforeEach
    void setUp() {
    }

    @org.junit.jupiter.api.Test
    void getName() throws  Exception {
        var instance = new Dog("Fido");
        var actual = instance.getName();
        var expected = "Fido";
        assertEquals(actual,expected);
    }

    
    @Test
    void name() {
    }

    @org.junit.jupiter.api.AfterEach
    void tearDown() {
    }

}
```





## JDBC

- Driver in JAR
- Connection in DriverManager  var con = DriverManager.getConnection("connection_string");
- Connection in DataSource for larger applications (preferred)
- Statements
    - Statement - basic
    - Prepared - use this - can use parameters
    - Callable - can use with stored procedures
- Example
    
    ```csharp
    try(var con = DriverManager.getConnection(url)){
        var query = con.prepareStatement(SQLQUERY)
        // sql id starts at 1
        query.setString(id,name)
        var result = query.executeQuery();     // SELECT
        // query result
        while(result.next()){ sout("result.getString(1)) }
        or
        var result = query.executeUpdate();   // INSERT UPDATE DELETE
    }
    catch (SQLException e){  e.printStackTrace()}
        
    ```
    
- DAO Data Access Object - has CRUD objects to interact with DB
- DTO Data Transfer Object
- ORM to map class to DB eg Hibernate
- H2
    - Resources
        - http://www.h2database.com/
    - Setup
        - Install https://www.h2database.com/html/quickstart.html
        - Add C:\Program Files (x86)\H2\bin\h2*.jar to CLASSPATH
        - Add C:\Program Files (x86)\H2\bin to PATH then reboot
        - pom.xml
            
            ```java
            <dependency>
                        <groupId>com.h2database</groupId>
                        <artifactId>h2</artifactId>
                        <scope>runtime</scope>
            </dependency>
            ```
            
            ```java
            <?xml version="1.0" encoding="UTF-8"?>
            <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
                <modelVersion>4.0.0</modelVersion>
                <parent>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-starter-parent</artifactId>
                    <version>2.3.4.RELEASE</version>
                    <relativePath/> <!-- lookup parent from repository -->
                </parent>
                <groupId>com.example</groupId>
                <artifactId>demo</artifactId>
                <version>0.0.1-SNAPSHOT</version>
                <name>demo</name>
                <description>Demo project for Spring Boot</description>
            
                <properties>
                    <java.version>14</java.version>
                </properties>
            
                <dependencies>
                    <dependency>
                        <groupId>org.springframework.boot</groupId>
                        <artifactId>spring-boot-starter-jdbc</artifactId>
                    </dependency>
            
                    <dependency>
                        <groupId>com.h2database</groupId>
                        <artifactId>h2</artifactId>
                        <scope>runtime</scope>
                    </dependency>
                    <dependency>
                        <groupId>org.springframework.boot</groupId>
                        <artifactId>spring-boot-starter-test</artifactId>
                        <scope>test</scope>
                        <exclusions>
                            <exclusion>
                                <groupId>org.junit.vintage</groupId>
                                <artifactId>junit-vintage-engine</artifactId>
                            </exclusion>
                        </exclusions>
                    </dependency>
                </dependencies>
            
                <build>
                    <plugins>
                        <plugin>
                            <groupId>org.springframework.boot</groupId>
                            <artifactId>spring-boot-maven-plugin</artifactId>
                        </plugin>
                    </plugins>
                </build>
            
            </project>
            ```
            
        - Main()
            
            ```java
            package com.example.demo;
            import java.sql.DriverManager;
            import java.sql.SQLException;
            public class DemoApplication {
                public static void main(String[] args) throws SQLException {
                    var connection = DriverManager.getConnection("jdbc:h2:~/test","sa","");
                    System.out.println("connection is closed? " + connection.isClosed());
                    connection.close();
                }
            }
            ```
            
    - Order new project at [start.spring.io](http://start.spring.io) and choose JDBC and H2 plugins
    - Change all the libraries to use version 14 of java including in pom.xml
    - Use this code in the main() method
    
    ```java
    package com.example.demo;
    import java.sql.DriverManager;
    import java.sql.SQLException;
    public class DemoApplication {
        public static void main(String[] args) throws SQLException {
            var connection = DriverManager.getConnection("jdbc:h2:~/test","sa","");
            System.out.println("connection is closed? " + connection.isClosed());
            connection.close();
        }
    }
    ```
    

http://db.apache.org/derby/papers/DerbyTut/index.html 

## Threading

- Terms
    - Deadlock - 2 threads wait for ever
    - Starvation - thread unable to reach resources
    - volatile - add this keyword to shared resource so that the cached version is never used
    - Immutable classes are thread safe
- Only one thread executes at any one time on a CPU
- One process multiple threads
- Thread state - Runnable, Running, Blocked, Terminated
- Race condition - 2 threads on 1 item
- Examples
    - class MyThread extends Thread { public void run() {} }
    - class MyRunnable implements Runnable (preferred to do this)
    - thread.Start() will call run() method in thread
    - thread.run()
    - thread.sleep(1000);
    - object.wait() until another thread sends out notify() or notifyAll()
        
```csharp
synchronized(lock){
    while(!condition){ 
    lock.wait();
    }
    // do something after condition is met
}
```
        
- object.notify()/All()  wake up thread in wait() state
        
```csharp
synchronized(lock){
    // do some code which allows for release of resources
    // then notify waiting threads they can continue  
    lock.notifyAll();
}
        ```
        
    - thread.join() - allows one thread to wait for completion of another thread
    - synchronized
        - Method
            - synchronized void doThis(){}   // threads can take ownership of this lock and prevent other threads interacting with it
        - Object
            - 
            
            ```csharp
            synchronized(myObject){}
            ```
            
    - Memory Management
        - Heap
            - Young Generation
                1. Eden 
                2. Survivor S0 and S1 - items from Eden lasting a long time moved here
            - Old Generation - stuff which stays through 'Survivor'
            - Permanent


## Spring 


- Resources
    - https://www.tutorialspoint.com/spring/index.htm
    - https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#legal
- History - released 2003

- Terms
    - DI Dependency Injection
    - Inversion Of Control - depend on abstractions
    - Microservices
    - Async
    - Thymeleaf
    - EJB Jakarta Enterprise Beans. (was Enterprise Java Beans) subset of Java EE
        - Created 1997
        - EJB Handles
            - Transaction Processing
            - Persistence working with Persistence API
            - Concurrency
            - Events - Java Messaging Service
            - JNDI Java Naming And Directory
            - JCE Java Cryptography Extension
            - JAAS (Jazz) Java Authentication And Authorization Service
            - EB Entity Bean represtents a table in a database
- Getting Started
    - https://start.spring.io/ download and unzip, set version to 11 and run
    
    ```powershell
    # cmd (not powershell)
    mvn
    # add the maven wrapper
    mvn -N io.takari:maven:wrapper
    # now this command will run the web server
    mvnw spring-boot:run
    # update the code in main() from https://start.spring.io/, run then see a response at 
        http://localhost:8080/hello?name=bob
    ```
    

https://www.baeldung.com/learn-spring-course

https://www.tutorialspoint.com/spring/spring_overview.htm

https://www.youtube.com/watch?v=mln3_o6qlBo&ab_channel=VMwareTanzu 

- Spring Boot

- Web App

Use it with 

```csharp
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

@EnableAutoConfiguration
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}

or

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}

# Replace the code with
package com.example.demo;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@SpringBootApplication
@RestController
public class DemoApplication { 
    public static void main(String[] args) {
    SpringApplication.run(DemoApplication.class, args);
    }
    @GetMapping("/hello")
    public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
    return String.format("Hello %s!", name);
    }
}

# run the app at localhost:8080/hello?name=fred to see the output
```


## glossary


### gradle

Gradle - build Android apps!

```java

build.gradle.kts in Kotlin

build.gradle in Groovy


// example of build.gradle
apply plugin: 'java'
    
repositories {
    mavenCentral()
}
    
jar {
    baseName = 'gradleExample'
    version = '0.0.1-SNAPSHOT'
}
    
dependencies {
    testImplementation 'junit:junit:4.12'
}

// compile it with `gradle classes`

// Gradle has `tasks`
task copyDependencies(type: Copy) {
    from configurations.compile
    into 'dependencies'
}

// run task with `gradle copyDependencies`

```
   