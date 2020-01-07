# Streaming and Serialisation

Streaming and Serialization

    Streaming = getting data across internet
    
    	Stream to ....
    
    		FILE SYSTEM  (local computer)  
    
    			.NET RUNTIME  ===> think of HARD DRIVE as REMOTE SYSTEM  --> streaming to/from hard drive
    
    
    		MEMORY OF LOCAL COMPUTER (IE RAM)
    
    			Memory is different because can ALLOCATE A FIXED NUMBER OF BYTES FOR THE DATA
    				Allocate the START BYTE AND FINISH BYTE OF DATA EXACTLY.
    				Pointer at set position 
    
    		NETWORK
    
    			http://    		web
    			https://   		secure web
    			ftp://     		files
    			smb://     		shares
    			//server/share  shares
    
    	ASYNC 		not wait : continue so user 'feels' like app is still 'responsive'.  Data will return and another
    					method runs called the 'callback' method.
    
    	SYNC 		wait for operation : 'pause' or 'hang' whole program	
    
    	How much does programmer get involved???
    
    		Answer : almost none!
    
    			MAKE CALL AND LET OS ==> HANDLE DETAIL.  PROGRAMMER JUST HANDLE INCOMING DATA.

Serialization

    Converting data into a form for 'streaming' ie a linear sequence of 1's and 0's to be sent across internet.
    
    Customer object
    
    	==> SERIALISE PART OF IT 101010101010101010101010101
    
    	==> SEND
    
    	==> UNPACK ==> RECREATE CUSTOMER AT OTHER END  (DESERIALISATION)
    
    
    Customer => Serialise => Stream => Deserialise => Customer
    
    Serialise to 3 types of data for sending
    
    	XML 		UTF8 characters    primarily for web
    
    	JSON  		UTF8 characters    primarily for web     NEWTONSOFT.JSON (3 party 
    															library)
    
    	BINARY 		10101010101010   ==> FASTEST TYPE AS NO DATA CONVERSION
    
    									==> USE TO SEND DATA TO RAM 
    
    									primarily for RAM / MEMORY
    
    									(Files can be any of these three XML/JSON/BINARY
    									other file type)