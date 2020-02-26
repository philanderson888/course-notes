# Collections

Summary : Arrays and Collections

Arrays : super fast because fixed and each data item has a predicatable memory address. This
means that when data is to be read/written the computer can instantly find the
memory location by going direct to that point.

    Arrays : super fast but fixed in size

Collection : variable-size structure

    Great for data sets of unpredictable size
    
    		List<T>  best as it has INDEX [i]  like an array  ((IEnumerable  ))
    												((enumerate means to count))
    
    	Dictionary<TKey,TValue>  unique key
    
    	Queue<T>  FIFO  polite bus stop queue     Enqueue, Dequeue, Contains, Peek
    
    	Stack<T>  LIFO   rugby scrum              Push     Pop      Contains  Peek
    
    		<T> means any data type can go there ((GENERIC which means a general type,
    													not specified))

Array : Immutable : Fixed structures in memory. Can CLONE TO NEW ARRAY but can't alter
Collection : Variable in size : LIST, DICTIONARY, QUEUE, STACK

List single items eg <int> or <string> or <Cat>
10
100
50
17
Lists, like arrays, are accessible via list01[5] syntax ie [5] means 6th item

Dictionary INDEX eg <int> plus data eg <int> or <string> or ..
1	"fred"
3	"bob"
7	"sam"
12 "rob"

    index has to be unique

# Dictionary<TKey,TValue>

Tkey can be any type

Tvalue can be any type

but key has to be unique

    Console.WriteLine("\n\nDictionary\n\n");
    var dictionary01 = new Dictionary<int, string>();
    var dictionary02 = new Dictionary<int, int>();
    var dictionary03 = new Dictionary<string, int>();
    
    dictionary01.Add(10, "hi");
    dictionary01.Add(20, "there");
    dictionary01.Add(30, "spartans");
    dictionary01.Add(40, "spartans2");
    dictionary01.TryAdd(40, "some value");
    dictionary02.TryAdd(40, 40);
    dictionary03.TryAdd("this is a key", 40);
    
    
    // ITERATE ==> LOOP OVER DICTIONARY
    foreach(var key in dictionary01.Keys)
    {
        Console.WriteLine($"Key {key,-15} Value {dictionary01[key]}");
    }

# Queue

Queues are using in computing a lot

Email is a QUEUED SYSTEM WHERE THE SERVER PROCESSES EMAILS IN ORDER OF RECEIPT

Printer has a QUEUE to PRINT

Batch jobs at night typically work on a QUEUED SYSTEM

Think of  a POLITE BUS STOP QUEUE IN THE COUNTRY where everyone is waiting for a bus

FIFO : First person to arrive at the queue is first person to leave queue and get on bus

    // queue
    var queue = new Queue<int>();
    queue.Enqueue(10); // add first item
    queue.Enqueue(20);  // second
    queue.Enqueue(30);  // third
    
    //.....................................30......20.....10....BUS STOP
    
    var itemWhichJustGotOnTheBus = queue.Dequeue();  // first item get on bus
    
    //.....................................30......20......BUS STOP      
    
    Console.WriteLine($"item which just got on bus is {itemWhichJustGotOnTheBus}");
    
    Console.WriteLine($"Queue contains number 50? {queue.Contains(50)}");
    Console.WriteLine($"Queue contains number 20? {queue.Contains(20)}");
    
    Console.WriteLine($"Check out who is first in line {queue.Peek()}");
    
    // iterate  ==> print a foreach loop

# Stack

Stack is also used in computing a lot

Track running processes, method, classes, variables etc =⇒ all of your running code is tracked on the STACK which is an area of very fast memory (operating at speeds at limit of your computer)

                                                                     DoThat();  int z=500;

                                                                  DoThis();

                                                                   int x=10, string y = "hi"

Run(F5) ==================⇒>> Main() 

LIFO : last in first out

Think of a rugby scrum or a pack of cards 

    // snap code till lunch
    // take numbers as an array 10 20 30 40
    int[] array = new int[] { 10, 20, 30, 40 };
    // create a list, multiply by 10       100 200 300 400
    var list = new List<int>();
    foreach(var item in array) { list.Add(item*10); }
    // create a queue, add 1               401   301   201  101 ===>
    var queue01 = new Queue<int>();
    foreach(int i in list) {
        queue01.Enqueue(i + 1);
    }
    var stack01 = new Stack<int>();
    // create a stack, add 2   
    while (queue01.Count > 0)
    {
        stack01.Push(queue01.Dequeue() + 2);
    }
    var total = 0;
    foreach(var item in stack01)
    {
        total += item;
    }
    // what's the sum?
    Console.WriteLine(total);  // 1012