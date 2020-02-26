# Encoding, Streaming And Serialisation

Ecoding

Encoding means to 'lay down information in a certain format so that another computer program or application can understand the data inside'

    Files ==> Write to (hard) disk
    
    	SOF start of file
    	SIGNATURE at start which signifies the type of file
    		DOCX		Signature is same as ZIP   504b0304
    		JPG			Signature is  FFD8  (View with HEX EDITOR)
    		PNG
    		MOV
    
    	EOF end of file
    
    	HEXADECIMAL EDITOR ==> RAW VIEW OF ACTUAL BYTES OF A FILE
    
    		VISUAL STUDIO
    		NOTEPAD++
    		HEX EDITOR APPLICATION

Encoding
ASCII
UTF8
UTF16
UNICODE

    Americans first to create computers : EN-US is base computer language
    
    How to communicate simple letters????
    
    	H
    	h
    	2
    
    	ASCII American Standard Code For Information Interchange
    
    	0 to 127 for critical characters
    
    	0 to 31 : non printing
    	31 onwards : letters and numbers
    
    	J    74
    
    
    0 to 127 takes only 7 bits ie
    
    min 0000000   0
    max 1111111   127
    
    						64	32	16	8	4	2	1
    						1	1	1	1	1	1	1   = 127
    
    
    UTF-8 is simply ASCII with an extra (placholder) bit
    
    	ASCII    J   74    1	0	0	1	0	1	0
    	UTF8            0  1	0	0	1	0	1	0
    
    	Web is built on UTF8  (GetBootstrap.com => Starter => META TAG)
    
    UTF-16
    
    	The only problem with UTF-8 and ASCII is that they are focused on simple, 
    	American English.  
    
    	How then do we communicate other languages?  German, French, Russian all have
    		extra characters not in standard US English.
    
    	UTF8 is 8 BITS = 1 BYTE
    
    	UTF16 is 16 BITS = 2 BYTES (double the memory per character)

Streaming and Serialisation

    IKEA furniture										OOP
    
    	1. Build furniture (from instructions)    		Class Customer
    													==> Instantiate customer instance
    													(build object)
    	2. Assemble in store							
    
    	3. Customer View 								view object (instance)
    
    	4. Request for item sent to home address        Serialise customer instance into
    		((flat pack the furniture ready for 		series of 1's and 0's ready
    		sending ))									to send across internet (in order)
    
    	5. Posted 										Streaming  
    			single item -> one package 					small item => send as one packet
    															(TCP/IP)
    			large items -> multiple packages        	large item (movie) => send
    															as multiple items of 
    															consistent size "buffer"
    
    	6. Received	
    
    	7. Assembled (using instructions)				De-serialise our customer stream
    													back into customer again (using
    													customer class)

Serialisation

    class Customer {}
    
    instance c = new Customer();
    
    	c.Name...
    	c.Company..
    	c.City...
    
    serialise into 10101001010101010101010010111010010   (flat pack the data)
    
    send (stream) data in blocks of (buffer) size      
    
    receiving end
    
    deserialise 101010100110 back into instance again, using Class Customer so we know
    										which data goes in which field.

Streaming Types

    When we stream data we (in general) have 2 types of data
    
    1. Character stream
    
    	Text file "this is a text message"  ==> send as character stream
    	Http web
    	Config
    	Javascript
    	CSS
    	JSON ==> Javascript data              {"field":"value"}
    	XML  ==> text database with structure <root><sub>data</sub></root>
    
    2. Binary stream
    
    	Movie
    	Audio
    	Images 
    	.exe
    	.dll
    	.app  IOS
    	.apk  Android
    
    		Sending without conversion the exact replica of 1/0 from the binary file,
    		through internet.
    
    		Large files : split into units call 'buffer' size
    
    			var buffer = new byte[4096]
    
    	Binary is used also in Encryption
    	
    		Computer ===> Unlock keys stored in memory (RAM)
    
    		Code     ===> send data to RAM for unlocking     ==> MEMORY STREAM, fast RAW BYTES
    
    	File Streaming to filing system ==> can be either TXT or Binary depending on file

Streaming Summary
Characters
http://
https://
ftp://
smtp:// email
pop://
imap://
dns
dhcp
File
.txt => character
.exe => binary
Memory
binary (encryption)

Notes

    1.   Passwords  ==> SecureString     (partially secure)
    
    2.   Sending binary files across internet ==> CAN CONVERT TO CHARACTERS FIRST, THEN SEND, THEN ON RECEIPT 
    												CONVERT BACK.
    
    			binary 1010101010   ==>   base64   dci3diasfrew     ==>  binary 1010101010

    using System;
    using System.IO;
    using System.Diagnostics;
    using System.Text;
    
    namespace lab_62_streaming
    {
        class Program
        {
            static void Main(string[] args)
            {
                var s = new Stopwatch();
                s.Start();
    
    
    
                // stream to WRITE A FILE
                using (var writer = new StreamWriter("output.txt"))
                {
                    for (int i = 0; i < 10000; i++)
                    {
             //           writer.WriteLine($"Line {i} - adding some text {DateTime.Now} : elapsed time {s.ElapsedTicks}");
                    }
                }
                s.Stop();
                // 19ms
                // 24ms
                // 38ms
                // 0.013_349_2
    
    
                var t = new Stopwatch();
                t.Start();
                // see if string builder a bit faster???
                var stringbuilder = new StringBuilder();
                for (int i = 0; i < 10000; i++)
                {
                    stringbuilder.Append($"Line {i} - adding some text {DateTime.Now} : elapsed time {t.ElapsedTicks}\n");
                }
                using (var writer = new StreamWriter("output2.txt"))
                {
              //      writer.WriteLine(stringbuilder);
                }
                t.Stop();
    
                // 9ms
                // 16ms
                // 20
                // 0.007_407_4   7ms
    
    
                var u = new Stopwatch();
                u.Start();
                string nextline;
                var stringbuilder2 = new StringBuilder();
                using (var reader = new StreamReader("output.txt"))
                {
                    // two operations 1) read next line and assign into string 'nextline'   2) check has not returned null
                    while ((nextline = reader.ReadLine()) != null)
                    {
                        stringbuilder2.AppendLine(nextline);
                    }
                }
                Console.WriteLine($"read file to memory {u.ElapsedTicks}");
    
                Console.WriteLine(stringbuilder2);
                Console.WriteLine($"output file to console {u.ElapsedTicks}");
                u.Stop();
                    // 0.000_900_0    0.9 milliseconds
                    //  1.3ms
                    //  4
                 Console.ReadLine();
    
    
    
                // stream reader async
    
    
    
    
    
    
            }
        }
    }

# Streaming From Http Web

    using System;
    using System.Net;
    using System.Diagnostics;
    
    namespace lab_63_web_streaming
    {
        class Program
        {
            static void Main(string[] args)
            {
                // read a web page
                Uri bbcNews01 = new Uri("https://www.bbc.co.uk/sport");
    
                // URI Uniform resource IDENTIFIER     - more general pointer        
                // URL Uniform resource LOCATOR        - more specific
    
                Console.WriteLine(bbcNews01.Host);
                Console.WriteLine(bbcNews01.Port);
                Console.WriteLine(bbcNews01.AbsolutePath);
    
                // download this file 
    
    
                var s = new Stopwatch();
                s.Start();
                GetWebPageSync();
                s.Stop();
                Console.WriteLine(s.ElapsedMilliseconds);
    
                var t = new Stopwatch();
                t.Start();
                GetWebPageAsync();
                t.Stop();
                Console.WriteLine(t.ElapsedMilliseconds);
    
                Console.ReadLine();
    
            }
    
            static void GetWebPageSync()
            {
                var downloadWebPage01 = new WebClient { Proxy = null };
                var albarahi = new Uri("http://www.albahari.com/nutshell/code.aspx");
                downloadWebPage01.DownloadFile(albarahi, "albahari.html");
                Process.Start
    (@"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe", "albahari.html");
            }
    
            async static void GetWebPageAsync()
            {
                var downloadWebPage01 = new WebClient { Proxy = null };
                var albarahi = new Uri("http://www.albahari.com/nutshell/code.aspx");
                await downloadWebPage01.DownloadFileTaskAsync(albarahi, "albahari.html");
                Process.Start(@"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe", "albahari.html");
            }
    
    
    
            // NOTE : WEBCLIENT
            // NOTE : HTTPWEBREQUEST/RESPONSE GIVE MORE DETAIL / PREFFERED TO USE 
    
    
    
        }
    }
    
    /

# Serialisation

Class eg Customer

    Instantiate 10 customer objects cust01, cust02 etc
    
    	Data now held as 10 instances.
    
    	Send data across world
    
    		USE XML      web - Microsoft 
    		OR  JSON     web 
    
    1) decide which fields are SERIALIZABLE (we are going to send)
    
    		(may be some fields are private; don't wish to send)
    
    2) SERIALISE INTO A STREAM (LINEAR FLOW OF INFORMATION IN A SET ORDER)
    
    3) SEND DATA USING STREAMING
    
    		Streaming : let OS and Networking 'stack' of protocols handle
    		the tough bits of keeping track of which packets sent in which order
    
    4) RECEIVE STREAM AT OTHER END
    
    5) DE-SERIALIZE STREAM BACK INTO CLASS INSTANCE OBJECTS

Serialize to
1) BINARY .BIN .EXE
2) XML
3) JSON

[.....] => Data Annotations (meta-data above a class for internal use)
Class X

[Serializable] ==> can serialize and send
Class Customer{
CustomerID
ContactName

    [NonSerialized]  		==> opt-out 
    private string NINO;

}

First example : Serialize to XML

    using System;
    using System.Runtime.Serialization.Formatters.Soap;
    using System.IO;
    
    namespace lab_64_serialize_xml
    {
        class Program
        {
            static void Main(string[] args)
            {
                var c01 = new Customer(01, "fred", "3 the high st", "NT213B57");
    
                // XML Serialise into FILE STREAM 
                var formatter = new SoapFormatter();
    
                using (var filestream = new FileStream("data.xml",FileMode.Create,
                    FileAccess.Write,FileShare.None))
                {
                    // send data to file stream
                    formatter.Serialize(filestream, c01);
                }
    
                Console.WriteLine(File.ReadAllText("data.xml"));
    
    
                // imagine on another computer : can we reconstruct instance???
    
                Customer customerFromXML;
    
                using (var streamreader = File.OpenRead("data.xml"))
                {
                    // deserialize back into instance of class
                    customerFromXML = formatter.Deserialize(streamreader) as Customer;
                }
    
    
                Console.WriteLine($"Reconstructed customer : {customerFromXML.CustomerID}" +
                    $"{customerFromXML.CustomerName}{customerFromXML.Address}");
                Console.WriteLine($"NINO is blank !!! {customerFromXML.GetNINO()}");
    
    
    
                
            }
        }
    
    
    
        [Serializable]
        class Customer
        {
            public int CustomerID { get; set; }
            public string CustomerName { get; set; }
    
            public string Address { get; set; }
    
            [NonSerialized]
            private string NINO;
    
            // constructor
            public Customer(int customerid, string name, string address, string nino)
            {
                this.CustomerID = customerid;
                this.CustomerName = name;
                this.Address = address;
                this.NINO = nino;
            }
    
            // GetNINO(){}
            public string GetNINO()
            {
                return this.NINO;
            }
    
        }
    
    
    }

## Serialise To JSON

JSON has SEVERAL LIBRARIES which can be used

System.Runtime.Serialization.Json

    DataContractJsonSerializer

There are others as well

But actually what has taken off is a 3rd party library called 'NEWTONSOFT' to use for JSON

So we are going to do the NEWTONSOFT lab

    using System;
    using Newtonsoft.Json;
    using System.IO;
    using System.Collections.Generic;
    
    namespace lab_65_serialise_JSON
    {
        class Program
        {
            static void Main(string[] args)
            {
                var c01 = new Customer(01, "fred", "3 the high st", "NT213B57");
                var c02 = new Customer(01, "fred", "3 the high st", "NT213B57");
                var c03 = new Customer(01, "fred", "3 the high st", "NT213B57");
                var customers = new List<Customer>() { c01, c02, c03 };
    
                var JSONinstance01 = JsonConvert.SerializeObject(c01);
                File.WriteAllText("data.json", JSONinstance01);
    
                Console.WriteLine(File.ReadAllText("data.json"));
    
                var customerListAsJSON = JsonConvert.SerializeObject(customers);
                File.WriteAllText("customers.json", customerListAsJSON);
                Console.WriteLine(File.ReadAllText("customers.json"));
    
                // send data round world
                // at other end imagine now on different computer
                // read ONE CUSTOMER
    
                var customerFromJson =
                        JsonConvert.DeserializeObject<Customer>(File.ReadAllText("data.json"));
    
                Console.WriteLine($"Reconstructed customer : {customerFromJson.CustomerID}" +
                     $"{customerFromJson.CustomerName}{customerFromJson.Address}");
                Console.WriteLine($"NINO is blank !!! {customerFromJson.GetNINO()}");
    
    
                Console.WriteLine("\\n\\n== READ ARRAY OF CUSTOMERS ==\\n\\n");
                var customerArray =
                    JsonConvert.DeserializeObject<List<Customer>>(File.ReadAllText("customers.json"));
                foreach (var c in customerArray)
                {
                    Console.WriteLine($"Reconstructed customer : {c.CustomerID}" +
                                      $"{c.CustomerName}{c.Address}");
                }
    
            }
    
        }
    
        [Serializable]
        class Customer
        {
            public int CustomerID { get; set; }
            public string CustomerName { get; set; }
    
            public string Address { get; set; }
    
            [NonSerialized]
            private string NINO;
    
            // constructor
            public Customer(int customerid, string name, string address, string nino)
            {
                this.CustomerID = customerid;
                this.CustomerName = name;
                this.Address = address;
                this.NINO = nino;
            }
    
            // GetNINO(){}
            public string GetNINO()
            {
                return this.NINO;
            }
    
        }
    
    
    
    }

# Serialise To Binary

    using System;
    using System.Collections.Generic;
    using System.Runtime.Serialization.Formatters.Binary;
    using System.IO;
    
    namespace lab_66_serialize_binary
    {
        class Program
        {
            static void Main(string[] args)
            {
                var c01 = new Customer(01, "fred", "4 the high st", "NT213B57");
                var c02 = new Customer(02, "bob", "5 the high st", "NT213B57");
                var c03 = new Customer(03, "pat", "6 the high st", "NT213B57");
                var customers = new List<Customer>() { c01, c02, c03 };
    
                // performs the serialization
                var binaryformatter = new BinaryFormatter();
    
                // stream serialized data - to a File in this case but could be web or RAM (Memory)
                using (var binarystream = new FileStream("data.bin",
                      FileMode.Create,FileAccess.Write,
                    FileShare.None))
                {
                    // write data to file
                    binaryformatter.Serialize(binarystream, customers);
                }
    
                Console.WriteLine(File.ReadAllText("data.bin"));
    
    
                // send data across world and de-serialize at the other end
                var customersFromBinary = new List<Customer>();
                using (var reader = File.OpenRead("data.bin"))
                {
                    customersFromBinary = binaryformatter.Deserialize(reader) as List<Customer>;
                }
    
                // iterate and print out
                foreach (var c in customersFromBinary)
                {
                    Console.WriteLine($"Reconstructed customer : {c.CustomerID}" +
                                      $"{c.CustomerName}{c.Address}");
                }
    
    
            }
        }
    
    
    
    
        [Serializable]
        class Customer
        {
            public int CustomerID { get; set; }
            public string CustomerName { get; set; }
    
            public string Address { get; set; }
    
            [NonSerialized]
            private string NINO;
    
            // constructor
            public Customer(int customerid, string name, string address, string nino)
            {
                this.CustomerID = customerid;
                this.CustomerName = name;
                this.Address = address;
                this.NINO = nino;
            }
    
            // GetNINO(){}
            public string GetNINO()
            {
                return this.NINO;
            }
    
        }
    
    }