# Collections

Collections

    Arrays : fixed size
    		 in memory, every cell has unique, allocated memory address.
    		 ((Picture : mail boxes with individual box for inidividual address))
    		 Read/Write data : computer map RAM address to array member and therefore
    		 		no time delay to find data item and read/write data
    
    		 		#ABCDEF0123    ==>    Array start
    		 		Pointer : +1          First member
    		: index    [0] [1] [2] ... [array.length-1]   (IEnumerable means can 'count' numerically
    														over the array)
    
    Collections : variable size
    
    	Generics <T>  where T refers to any data type
    			int, string, char, MyClass, ...
    
    	List<int>
    	List<rabbit>
    	List<customer>
    
    List<int>    [index] 
    			 Insert/Remove at ends/middle
    
    Queue<int>
    
    Stack<int>  
    
    Dictionary<TKey,TValue>
              <int,string>
    
    Arraylist (object)
    
    Hashset<int>   fast but has no order (index)
    
    LinkedList<object>

Queue<int> No index

    Cannot get items out of the middle
                 FIFO : Think village quite bus-stop queue
                 			5	4	3	2	1
                 			                    BUS
                 			                      1
                 			                      2
                 			                      3
                 			                      4
                 			                      5
            	Enqueue : add new person at back of queue
            	Dequeue : take first person
            	Peek    : check first item
            	Contains: search for item (T/F)
            	Uses : Printing, Email, Batch Processing

Stack<int> LIFO Last In First Out

    Computers use Stack memory to order running code so every method is 'frozen' apart
    		from the very top method which is active.  Finished => 'peel off the stack'
    
    											DoThat(){ int z , struct s}
    										DoThis(){}
    									Method01(){  int x, bool y }
    		Run an application  ==>   Main() method 
    
    		Picture : Rugby Scrum / Pileup
    
    			      Pack of cards
    
    		Push       Put new item on top
    		Pop        Remove top item
    		Peek
    		Contains

Dictionary<Tkey,Tvalue>
Tkey must be unique

Arraylist
List of OBJECTS so ANY TYPE GOES

HashSet
Has unique values
Has NO INDEX
Fast to read/write but not indexed

Dictionary

    // dictionary of KEY-VALUE PAIRS
            // KEY IS INDEX 0,1,2,3
            // VALUE IS STRING SAVED 
            // pairs  0,"hi"     1,"there"
            var dictionary = new Dictionary<int, string>();
            dictionary.Add(0, "hi");
            dictionary.Add(1, "hi"); 
            dictionary.TryAdd(0, "hi");  // silently fail
            dictionary.TryAdd(2, "there");
    
            // GET VALUES
            foreach(KeyValuePair<int,string> item in dictionary)
            {
                Console.WriteLine($"{ item.Key,-10}{item.Value}");
            }