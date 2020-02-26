# Day 28 - Custom Code To Read Weather API Data Asynchronously

Well done to one student who has worked ahead and produced this excellent application to read async weather data from the internet.

    public async Task<IEnumerable<WeatherForecast>> GetForecastAsync(string location, int days)
    		{
    			if (location == null) throw new ArgumentNullException("Location can't be null.");
    			if (location == string.Empty) throw new ArgumentException("Location can't be an empty string.");
    			if (days <= 0) throw new ArgumentOutOfRangeException("Days should be greather than zero.");
                if (days > _MAX_FORECAST_DAYS) throw new ArgumentOutOfRangeException($"Days can't be greater than {_MAX_FORECAST_DAYS}");
    
    			//var query = $"forecast/daily?q={location}&type=accurate&mode=xml&units=metric&cnt={days}&appid={_APP_KEY}";
    			var query = $"forecast?q=London,us&mode=xml&appid=b6907d289e10d714a6e88b30761fae22";
    			var response = await _client.GetAsync(query);
    
    			switch (response.StatusCode)
    			{
    				case HttpStatusCode.Unauthorized:
    					throw new Exception("Invalid API key.");
    				case HttpStatusCode.NotFound:
    					throw new Exception("Location not found.");
    				case HttpStatusCode.OK:
    					var s = await response.Content.ReadAsStringAsync();
    					var x = XElement.Load(new StringReader(s));
    
    					var data = x.Descendants("time").Select(w => new WeatherForecast
    					{
    						Date = DateTime.Now,
    						Description = w.Element("symbol").Attribute("name").Value,
    						WindSpeed = double.Parse(w.Element("windSpeed").Attribute("mps").Value),
    						CurrentTemperature = double.Parse(w.Element("temperature").Attribute("value").Value),
    						MaxTemperature = double.Parse(w.Element("temperature").Attribute("max").Value),
    						MinTemperature = double.Parse(w.Element("temperature").Attribute("min").Value),
    					});
    					return data;
    				default:
    					throw new NotImplementedException(response.StatusCode.ToString());
    			}
    		}
    
    public partial class MainWindow : Window
    	{
    		List<WeatherForecast> forecast;
    		WeatherForecast currentWeather;
    		OpenWeatherMapService service;
    
    		Task API_CALL;
    
    		public MainWindow()
    		{
    			InitializeComponent();
    			
    			service = new OpenWeatherMapService();
    		}
    	
    		public async Task GetWeather()
    		{
    			try
    			{
    				var weather = await service.GetForecastAsync("London", 3);
    				currentWeather = weather.First();
    				forecast = weather.Skip(1).Take(2).ToList();
    				
    				// Update UI element now
    				Date.Text = currentWeather.Date.ToString("MM/dd/yyyy h:mm tt");
    			}
    			catch (Exception ex)
    			{
    				throw new Exception(ex.Message);
    			}
    		}
    
    		private void ButtonGetWeather_Click(object sender, RoutedEventArgs e)
    		{
    			API_CALL = GetWeather();
    		}
    	}