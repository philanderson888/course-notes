# Node HTTP 


REQUEST.HEADERS()
	
	
	REQUEST.HEADERS() WILL HOLD INFORMATION ABOUT THE HEADER INFORMATION SENT IN WITH THE REQUEST 
	
		
	REQUEST.POST  :   POSTING DATA SIMILAR TO A HTTP POST REQUEST ON HTML FORM SUBMISSION
	
		IN THE SAME WAY AN HTML FORM CAN BE SUBMITTED AND THE DATA 'POSTED' TO A REMOTE SERVER, SO NODE CAN USE THE POST METHOD OF THE REQUEST OBJECT NOT TO GET DATA BUT TO POST DATA
		
		
		
		
		
	REQUEST.POST : ONE PARAMETER
	
					
			request.post('http://service.com/upload', {form:{key:'value'}})
			// or 
			request.post('http://service.com/upload').form({key:'value'})
		
			
			
	
	REQUEST.POST : MULTIPLE PARAMETERS
	
	
	
		https://github.com/form-data/form-data
		
		npm install form-data 
		
		
		var formData = {
		  // Pass a simple key-value pair 
		  my_field: 'my_value',
		  // Pass data via Buffers 
		  my_buffer: new Buffer([1, 2, 3]),
		  // Pass data via Streams 
		  my_file: fs.createReadStream(__dirname + '/unicycle.jpg'),
		  // Pass multiple values /w an Array 
		  attachments: [
			fs.createReadStream(__dirname + '/attachment1.jpg'),
			fs.createReadStream(__dirname + '/attachment2.jpg')
		  ],
		  // Pass optional meta-data with an 'options' object with style: {value: DATA, options: OPTIONS} 
		  // Use case: for some types of streams, you'll need to provide "file"-related information manually. 
		  // See the `form-data` README for more information about options: https://github.com/form-data/form-data 
		  custom_file: {
			value:  fs.createReadStream('/dev/urandom'),
			options: {
			  filename: 'topsecret.jpg',
			  contentType: 'image/jpg'
			}
		  }
		};
		request.post({url:'http://service.com/upload', formData: formData}, function optionalCallback(err, httpResponse, body) {
		  if (err) {
			return console.error('upload failed:', err);
		  }
		  console.log('Upload successful!  Server responded with:', body);
		});
			
	
	
	
	
	
	NODE SENDING DATA USING send-data module 
		https://www.npmjs.com/package/body
		
		var sendJson = require("send-data/json")
		  
		  
		  
	
	
	