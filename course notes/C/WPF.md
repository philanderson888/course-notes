# WPF

## Resources

### WPF-Tutorial.Com

[https://www.wpf-tutorial.com](https://www.wpf-tutorial.com/panels/canvas/) 

### Free Succinctly ebook online

[https://www.syncfusion.com/ebooks/wpf_succinctly/wpf-origins](https://www.syncfusion.com/ebooks/wpf_succinctly/wpf-origins)

[Ebook - Chapter 1 of WPF](https://www.syncfusion.com/ebooks/wpf_succinctly/wpf-origins)

### WPF on the web in Microsoft Documentation

[Windows Presentation Foundation](https://docs.microsoft.com/en-us/dotnet/framework/wpf/index?redirectedfrom=MSDN)

[http://msdn.microsoft.com/en-us/library/ms754130.aspx](http://msdn.microsoft.com/en-us/library/ms754130.aspx).

### WPF in Visual Studio

[http://msdn.microsoft.com/en-us/library/aa970268.aspx](http://msdn.microsoft.com/en-us/library/aa970268.aspx).

### Getting Started in WPF

[http://msdn.microsoft.com/en-us/library/ms742119.aspx](http://msdn.microsoft.com/en-us/library/ms742119.aspx).

## Topics To Investigate

    INOTIFYPROPERTYCHANGED
    MULTIBINDING
    MVVM
    FRAMELESS WINDOW

# Main Grid ... Sub Grid

# Panels

    StackPanel ==>   Vertical list of items  (or horizontal)
    
    	Scrollbar for lots of items
    
    DockPanel  ==>  Align TOP/BOTTOM/RIGHT/LEFT/CENTRE   eg GamePad
    
    WrapPanel  ==>  1 2 3 4 |
    				        5 6 7 8 |
    
    Tabbed Panel: with tabs

## Stack Panel

        <ScrollViewer VerticalScrollBarVisibility="Auto" Grid.Row="1" Grid.Column="0">
            <StackPanel Grid.Row="1" Grid.Column="0" Background="#ddd" Orientation="Vertical">
                <Button Background="#e0c18b" Content="Button" />
                <Button Background="#e0c18b" Content="Button" />
                <Button Background="#e0c18b" Content="Button" />
                <Button Background="#e0c18b" Content="Button" />
                <RichTextBox />
                <TextBox Text="Enter plain text" />
                <Label Content="label" />
                <TextBlock Text="TextBlock = plain text" />
                <Button Background="#e0c18b" Content="Button" />
                <Button Background="#e0c18b" Content="Button" />
                <Button Background="#e0c18b" Content="Button" />
                <Button Background="#e0c18b" Content="Button" />
                <RichTextBox />
                <TextBox Text="Enter plain text" />
                <Label Content="label" />
                <TextBlock Text="TextBlock = plain text" />
                <Button Background="#e0c18b" Content="Button" />
                <Button Background="#e0c18b" Content="Button" />
                <Button Background="#e0c18b" Content="Button" />
                <Button Background="#e0c18b" Content="Button" />
                <RichTextBox />
                <TextBox Text="Enter plain text" />
                <Label Content="label" />
                <TextBlock Text="TextBlock = plain text" />
            </StackPanel>
        </ScrollViewer>

## Tab Control

    <TabControl Grid.Row="1" Grid.Column="3" Background="#f0d6aa">
        <TabItem Header="One" Background="#ccc">
            <TabPanel Grid.Row="1" Grid.Column="3" Background="#f7e7cb">
                <Label Content="1"/>
            </TabPanel>
        </TabItem>
        <TabItem Header="Two" Background="#ccc">
            <TabPanel Grid.Row="1" Grid.Column="3" Background="#f7e7cb">
                <Label Content="2"/>
            </TabPanel>
        </TabItem>
        <TabItem Header="Three" Background="#ccc">
            <TabPanel Grid.Row="1" Grid.Column="3" Background="#f7e7cb">
                <Label Content="3"/>
            </TabPanel>
        </TabItem>
    
    </TabControl>

## Wrap Panel

            <WrapPanel Grid.Row="1" Grid.Column="2" Background="#f7f6cb">
                <Button Background="#00f" Width="20" Height="20" Margin="3" />
                <Button Background="#00f" Width="20" Height="20" Margin="3" />
                <Button Background="#00f" Width="20" Height="20" Margin="3" />
                <Button Background="#00f" Width="20" Height="20" Margin="3" />
                <Button Background="#00f" Width="20" Height="20" Margin="3" />
                <Button Background="#00f" Width="20" Height="20" Margin="3" />
                <Button Background="#00f" Width="20" Height="20" Margin="3" />
                <Button Background="#00f" Width="20" Height="20" Margin="3" />
                <Button Background="#00f" Width="20" Height="20" Margin="3" />
                <Button Background="#00f" Width="20" Height="20" Margin="3" />
                <Button Background="#00f" Width="20" Height="20" Margin="3" />
                <Button Background="#00f" Width="20" Height="20" Margin="3" />
                <Button Background="#00f" Width="20" Height="20" Margin="3" />
                <Button Background="#00f" Width="20" Height="20" Margin="3" />
                <Button Background="#00f" Width="20" Height="20" Margin="3" />
                <Button Background="#00f" Width="20" Height="20" Margin="3" />
                <Button Background="#00f" Width="20" Height="20" Margin="3" />
                <Button Background="#00f" Width="20" Height="20" Margin="3" />
                <Button Background="#00f" Width="20" Height="20" Margin="3" />
                <Button Background="#00f" Width="20" Height="20" Margin="3" />
                <Button Background="#00f" Width="20" Height="20" Margin="3" />
            </WrapPanel>

## Dock Panel

        <DockPanel Grid.Row="1" Grid.Column="1" Background="#dcd" LastChildFill="True">
            <Button Background="#ccc" DockPanel.Dock="Top" Content="Top" />
            <Button Background="#ccc" DockPanel.Dock="Bottom" Content="Bottom" />
            <Button Background="#ccc" DockPanel.Dock="Left" Content="Left" />
            <Button Background="#ccc" DockPanel.Dock="Right" Content="Right" />
            <Button Background="#ccc" Content="Center" />
        </DockPanel>

# Colours And Brushes

[Color](http://color.adobe.com)

 

## Brushes

    // set with string
    Background="#eef" 
    Background = "#aabbcc"
    
    // What we actually want is solid colour brushes, 
    // These are the same syntax and the `cast` will be greyed out ie unused
    Button01.Background = Brushes.AliceBlue;
    Button02.Background = (SolidColorBrush)Brushes.Aqua;

## Setting Colour Using RGB values

    int R = 12
    int B = 0
    int G = 255
    var brush = new SolidColorBrush(Color.FromArgb(255, (byte)R, (byte)G, (byte)B));
    myGrid.Background = brush;
    

## Setting Colour Using Hex Values

    var brushconverter = new BrushConverter();
    Button01.Background = (Brush)brushconverter.ConvertFrom("#F0F9D9");

## Random RGB Brush Colours

    
        
    <Button x:Name="Button01" Grid.Row="0" Grid.Column="0" Click="any_button_click" />
    <Button x:Name="Button02" Grid.Row="1" Grid.Column="1" Click="any_button_click"/>
    <Button x:Name="Button03" Grid.Row="2" Grid.Column="2" Click="any_button_click"/>
    
    namespace WPF_03_Colors_Brushes
    {
        public partial class MainWindow : Window
        {
            public MainWindow()
            {
                InitializeComponent();
                Initialise();
            }
            void Initialise()
            {
                Button01.Background = Brushes.AliceBlue;
                Button02.Background = (SolidColorBrush)Brushes.Aqua;
                Button03.Background = Brushes.LightSteelBlue;
            }
    
            private void any_button_click(object sender, RoutedEventArgs e)
            {
                var random = new Random();
                byte R;
                byte G;
                byte B;
    
                R = (byte)random.Next(255);
                G = (byte)random.Next(255);
                B = (byte)random.Next(255);
                var button01RandomBrush = new SolidColorBrush(Color.FromArgb(255, R,G,B));
                R = (byte)random.Next(255);
                G = (byte)random.Next(255);
                B = (byte)random.Next(255);
                var button02RandomBrush = new SolidColorBrush(Color.FromArgb(255, R, G, B));
                R = (byte)random.Next(255);
                G = (byte)random.Next(255);
                B = (byte)random.Next(255);
                var button03RandomBrush = new SolidColorBrush(Color.FromArgb(255, R, G, B));
    
                Button01.Background = button01RandomBrush;
                Button02.Background = button02RandomBrush;
                Button03.Background = button03RandomBrush;
    
            }
    
        }
    }

# Label And TextBlock

Both Are Read-Only

Label is for use as a custom control to be integrated into an application more

Text Block is for raw text

    <TextBlock x:Name="ParagraphText" TextWrapping="WrapWithOverflow" Padding="20"

### Label Underline

    <Label x:Name="LabelTitle"
           Background="#E6EEdd" Grid.Column="1" Grid.ColumnSpan="3" 
           HorizontalContentAlignment="Center" VerticalContentAlignment="Center"
           FontWeight="Bold">
        <TextBlock TextDecorations="Underline">Customer App</TextBlock>
    </Label>

# RichTextBox

    	<RichTextBox x:Name="textInputCharacter" Background="#97efec" 
    					Grid.Column="1" Grid.Row="3"   Grid.ColumnSpan="3"/>

# Images

## Displaying An Image

    <Image x:Name="ImageRabbit" Grid.Row="1" Grid.Column="1" 
                   Source="C:\2019-09-c-sharp-labs\labs\lab_16_wpf_rabbit_explosion\Images\BugsBunny.png"  />

## Grid Background Image

    <Grid>
        <Grid.Background>
            <ImageBrush ImageSource="/path/to/image.png" Stretch="UniformToFill"/>
        </Grid.Background>
    </Grid>

    <Grid.Background>
        <ImageBrush ImageSource="/lab_52_wpf_grid;component/Images/" />
        <ImageBrush ImageSource="pack://application:,,,/Images/snakes-and-ladders.jpg" />
    </Grid.Background>

# EventArgs (Bubble up) vs RoutedEventArgs (No Bubble Up)

EventArgs causes all events in a logical tree, from the bottom object up to the root object, to have the `click` event triggered for example, on click.    The event propogation will stop at the first object to handle the event.

Bubble ⇒ from bottom to top

Tunnel (called PreviewClick)  ⇒ from top to bottom

The RoutedEventArgs will only handle the event in the one object that sets the event, and in none of the parent or child objects.

# Displaying Data

## List Box

    <ListBox x:Name="ListBox02" Grid.Row="3" Grid.Column="1" Opacity="0.5"
         Background="#c9cfd8" >
        <ListBox.ItemTemplate>
            <DataTemplate>
                <TextBlock>
                    <TextBlock.Text>
                        <MultiBinding StringFormat="ID - {0} - Name {1} - City - {2}">
                            <Binding Path="CustomerID " />
                            <Binding Path="ContactName" />
                            <Binding Path="City" />
                        </MultiBinding>
                    </TextBlock.Text>
                </TextBlock>
            </DataTemplate>
        </ListBox.ItemTemplate>
    </ListBox>

### WPF Listbox Select Customer

Right click on your project and choose Add, New Item, Data,
ADO Entity Data Model. Call the model NorthwindModel'
and select EF Designer From Databaseand choose relevant tables eg Customer

    private void ListBox01_SelectionChanged(object sender, SelectionChangedEventArgs e)
    {
        if (ListBox01.SelectedItem != null)
        {
            // selected item is an object which we cast to Customer
            customer = (Customer)ListBox01.SelectedItem;
            // set the screen IDs
            TextId.Text = customer.CustomerID;
            TextName.Text = customer.ContactName;
            TextCity.Text = customer.City;
        }
    }

## WPF List View

A ListView is a bit like a ListBox but it can have a Stack Panel inside it with for example images and text

    <!-- simple -->
    
    <ListView Margin="10,10,0,13" Name="ListView1" HorizontalAlignment="Left" VerticalAlignment="Top" Width="194" Height="200">  
        <ListViewItem Content="Coffie"></ListViewItem>  
        <ListViewItem Content="Tea"></ListViewItem>  
        <ListViewItem Content="Orange Juice"></ListViewItem>  
        <ListViewItem Content="Milk"></ListViewItem>  
        <ListViewItem Content="Iced Tea"></ListViewItem>  
        <ListViewItem Content="Mango Shake"></ListViewItem>  
    </ListView>
    
    <!-- complex -->
    
    <ListViewItem Background="LightCoral" Foreground="Red" FontFamily="Verdana" FontSize="12" FontWeight="Bold">  
        <StackPanel Orientation="Horizontal">  
            <Image Source="coffie.jpg" Height="30"></Image>  
            <TextBlock Text="Coffie"></TextBlock>  
        </StackPanel>  
    </ListViewItem>

### We can add/remove items in code

    privatevoid button1_Click(object sender, RoutedEventArgs e) {  
        ListView1.Items.Add(textBox1.Text);  
    }
    
    privatevoid DeleteButton_Click(object sender, RoutedEventArgs e) {  
        ListView1.Items.RemoveAt(ListView1.Items.IndexOf(ListView1.SelectedItem));  
    }

### Embed within a check box

    <ListViewItem Background="LightSlateGray" Foreground="Orange" 
               FontFamily="Georgia" FontSize="14" FontWeight="Bold">  
        <CheckBox Name="MangoShakeCheckBox">  
            <StackPanel Orientation="Horizontal">  
                <Image Source="MangoShake.jpg" Height="30"></Image>  
                <TextBlock Text="Mango Shake"></TextBlock>  
            </StackPanel>  
        </CheckBox>  
    </ListViewItem>

### We can bind to an ArrayList

    privateArrayList LoadListViewData() {  
        ArrayList itemsList = newArrayList();  
        itemsList.Add("Coffie");  
        itemsList.Add("Tea");  
        itemsList.Add("Orange Juice");  
        itemsList.Add("Milk");  
        itemsList.Add("Mango Shake");  
        itemsList.Add("Iced Tea");  
        itemsList.Add("Soda");  
        itemsList.Add("Water");  
        return itemsList;  
    }
    
    
    myDataList = LoadListViewData();
    LeftListView.ItemsSource = myDataList;
    
    

### Power of ListView comes with the GridView

    https://www.wpf-tutorial.com/listview-control/listview-with-gridview/
    
    <ListView Margin="10" Name="lvUsers">
    			<ListView.View>
    				<GridView>
    					<GridViewColumn Header="Name" Width="120" 
                            DisplayMemberBinding="{Binding Name}" />
    					<GridViewColumn Header="Age" Width="50" 
                            DisplayMemberBinding="{Binding Age}" />
    					<GridViewColumn Header="Mail" Width="150" 
                            DisplayMemberBinding="{Binding Mail}" />
    				</GridView>
    			</ListView.View>
    		</ListView>
    
    
    
    using System;
    using System.Collections.Generic;
    using System.Windows;
    
    namespace WpfTutorialSamples.ListView_control
    {
    	public partial class ListViewGridViewSample : Window
    	{
    		public ListViewGridViewSample()
    		{
    			InitializeComponent();
    			List<User> items = new List<User>();
    			items.Add(new User() { Name = "John Doe", Age = 42, Mail = "john@doe-family.com" });
    			items.Add(new User() { Name = "Jane Doe", Age = 39, Mail = "jane@doe-family.com" });
    			items.Add(new User() { Name = "Sammy Doe", Age = 7, Mail = "sammy.doe@gmail.com" });
    			lvUsers.ItemsSource = items;
    		}
    	}
    
    	public class User
    	{
    		public string Name { get; set; }
    
    		public int Age { get; set; }
    
    		public string Mail { get; set; }
    	}
    }

### We can even decorate items within the grid with a data template

    <ListView Margin="10" x:Name="ListViewCustomers">
        <ListView.View>
            <GridView>
                <GridViewColumn Header="ID" Width="120" DisplayMemberBinding="{Binding CustomerID}"/>
                <GridViewColumn Header="Name" Width="120" DisplayMemberBinding="{Binding ContactName}"/>
                <GridViewColumn Header="Company" Width="120" DisplayMemberBinding="{Binding CompanyName}"/>
            </GridView>
        </ListView.View>
    </ListView>

    <ListView Margin="10" Name="lvUsers">
    			<ListView.View>
    				<GridView>
    					<GridViewColumn Header="Name" Width="120" 
                      DisplayMemberBinding="{Binding Name}" />
    					<GridViewColumn Header="Age" Width="50" 
                      DisplayMemberBinding="{Binding Age}" />
    					<GridViewColumn Header="Mail" Width="150">
    						<GridViewColumn.CellTemplate>
    							<DataTemplate>
    								<TextBlock Text="{Binding Mail}" TextDecorations="Underline" 
                              Foreground="Blue" Cursor="Hand" />
    							</DataTemplate>
    						</GridViewColumn.CellTemplate>
    					</GridViewColumn>
    				</GridView>
    			</ListView.View>
    		</ListView>

### List View Simple Version

    <Window x:Class="lab_28_list_view_WPF.MainWindow"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    xmlns:local="clr-namespace:lab_28_list_view_WPF"
    mc:Ignorable="d"
    Title="MainWindow" Height="450" Width="800">
    <Grid>
    <Grid.ColumnDefinitions>
        <ColumnDefinition Width="*" />
        <ColumnDefinition Width="*" />
        <ColumnDefinition Width="*" />
        <ColumnDefinition Width="*" />
        <ColumnDefinition Width="*" />
    </Grid.ColumnDefinitions>
    <Grid.RowDefinitions>
        <RowDefinition Height="*" />
        <RowDefinition Height="*" />
        <RowDefinition Height="*" />
        <RowDefinition Height="*" />
        <RowDefinition Height="*" />
    </Grid.RowDefinitions>
    <ListView x:Name="ListViewRabbits" Grid.Row="1" Grid.Column="1" Grid.ColumnSpan="3" Grid.RowSpan="3" Background="#eee">
        <ListView.View>
            <GridView>
                <GridViewColumn Header="ID" Width="Auto" DisplayMemberBinding="{Binding RabbitId}" />
                <GridViewColumn Header="Name" Width="Auto" DisplayMemberBinding="{Binding RabbitName}" />
                <GridViewColumn Header="Age" Width="Auto" DisplayMemberBinding="{Binding Age}" />
            </GridView>
        </ListView.View>
    </ListView>
    </Grid>
    </Window>

# Messagebox yes no

    if (MessageBox.Show("Close Application?", "Question", 
                MessageBoxButton.YesNo, MessageBoxImage.Warning) == MessageBoxResult.No)
                {
                    //do no stuff
                }
                else
                {
                    //do yes stuff
                }

# Radio Button

      <RadioButton x:Name="radioModeStrict" GroupName="radioMode" 
                       Grid.Row="2" Grid.Column="1"    Background="Beige"/>
      <RadioButton x:Name="radioModeRandom" GroupName="radioMode" 
                       Grid.Row="2" Grid.Column="2"    Background="Beige"/>

# ComboBox

    // populate static combo
      ComboBoxStaticCity.Items.Add("New York");
      ComboBoxStaticCity.Items.Add("Paris");
      ComboBoxStaticCity.Items.Add("Milan");
    
    
    
    private void ComboBoxStaticCity_SelectionChanged(object sender, 
                                                 SelectionChangedEventArgs e)
    {
      //  MessageBox.Show($"You chose {ComboBoxStaticCity.SelectedItem}");
    }

# Select Box

    
    supplierArray = 
                db.Suppliers.Select(s => s.CompanyName).OrderBy(s => s).ToArray();

# WPF Grid

## Creating A Button Grid Programmatically

    <Window x:Class="lab_37_WPF_grid_click.MainWindow"
    xmlns="[http://schemas.microsoft.com/winfx/2006/xaml/presentation](http://schemas.microsoft.com/winfx/2006/xaml/presentation)"
    xmlns:x="[http://schemas.microsoft.com/winfx/2006/xaml](http://schemas.microsoft.com/winfx/2006/xaml)"
    xmlns:d="[http://schemas.microsoft.com/expression/blend/2008](http://schemas.microsoft.com/expression/blend/2008)"
    xmlns:mc="[http://schemas.openxmlformats.org/markup-compatibility/2006](http://schemas.openxmlformats.org/markup-compatibility/2006)"
    xmlns:local="clr-namespace:lab_37_WPF_grid_click"
    mc:Ignorable="d"
    Title="MainWindow" Height="Auto" Width="Auto"
    Background="#e8f0d1" FontSize="30">
    <Grid x:Name="Grid01">
    <Grid.ColumnDefinitions>
    <ColumnDefinition Width="*" />
    <ColumnDefinition Width="*" />
    <ColumnDefinition Width="*" />
    </Grid.ColumnDefinitions>
    <Grid.RowDefinitions>
    <RowDefinition Height="*" />
    <RowDefinition Height="*" />
    <RowDefinition Height="*" />
    </Grid.RowDefinitions>
    </Grid>
    </Window>
    
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using System.Windows;
    using System.Windows.Controls;
    using System.Windows.Data;
    using System.Windows.Documents;
    using System.Windows.Input;
    using System.Windows.Media;
    using System.Windows.Media.Imaging;
    using System.Windows.Navigation;
    using System.Windows.Shapes;
    
    namespace lab_37_WPF_grid_click
    {
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
    List<Button> buttons = new List<Button>();
    public MainWindow()
    {
    InitializeComponent();
    Initialize();
    }
    
        void Initialize()
            {
        
                for (int i = 0; i < 9; i++)
                {
                    var b = new Button();
                    int buttonNumber = i + 1;
                    b.Name = "Button" + buttonNumber;
                    b.Content = buttonNumber;
                    b.Click += new RoutedEventHandler(button_click);
                    buttons.Add(b);
                    //switch (i)
                    //{
                    //    case 0:
                    //        Grid.SetColumn(b, 0);
                    //        Grid.SetRow(b, 0);
                    //        break;
                    //    case 1:
                    //        Grid.SetColumn(b, 1);
                    //        Grid.SetRow(b, 0);
                    //        break;
                    //    case 2:
                    //        Grid.SetColumn(b, 2);
                    //        Grid.SetRow(b, 0);
                    //        break;
                    //    case 3:
                    //        Grid.SetColumn(b, 0);
                    //        Grid.SetRow(b, 1);
                    //        break;
                    //    case 4:
                    //        Grid.SetColumn(b, 1);
                    //        Grid.SetRow(b, 1);
                    //        break;
                    //    case 5:
                    //        Grid.SetColumn(b, 2);
                    //        Grid.SetRow(b, 1);
        
                    //        break;
                    //}
        
                    Grid.SetColumn(b, i % 3);
                    Grid.SetRow(b, i / 3);
        
                    Grid01.Children.Add(b);
                }
        
        
            }
        
        
            private void button_click(object sender,EventArgs e)
            {
                var b = (Button)sender;
                MessageBox.Show($"You clicked button {b.Name} 
                       on Row {Grid.GetRow(b)} and col {Grid.GetColumn(b)}");
            }
        
        }
    
    }

## WPF Detect Grid Position

### Returning the grid row or column which you clicked on

    int row = grid.cell.column
    int column = grid.cell.row

We can also find which grid cell a button has been clicked in by using this following code :

    private void Button01_click(object sender, eventArgs e){
        buttonClicked = (Button)sender;
        int row = Grid.GetRow(buttonClicked);
        int col = Grid.GetCol(buttonClicked);
    }

# Search

## Dynamic Text Box Search

    Dynamic Text Box Search
        
     private void TextSearch_TextChanged(object sender, TextChangedEventArgs e)
    {
    
    
        using (var db = new northwindEntities())
        {
            RetProductList = db.Products.Where(p => p.ProductName.Contains(textSearch.Text)).ToList();
            
        }
        ListViewProducts.ItemsSource = null;
        ListViewProducts.ItemsSource = RetProductList;
    }

# Canvas

[The Canvas control - The complete WPF tutorial](https://www.wpf-tutorial.com/panels/canvas/)

[https://www.wpf-tutorial.com/panels/canvas](https://www.wpf-tutorial.com/panels/canvas/)  

Useful for absolutely positioned items : no relative positioning

    
    <Canvas>
    		<Button Canvas.Left="10">Top left</Button>
    		<Button Canvas.Right="10">Top right</Button>
    		<Button Canvas.Left="10" Canvas.Bottom="10">Bottom left</Button>
    		<Button Canvas.Right="10" Canvas.Bottom="10">Bottom right</Button>
    	</Canvas>
    
    

## Z-Axis

    
    <Canvas>
            <Ellipse Fill="Gainsboro" Canvas.Left="25" 
                                          Canvas.Top="25" Width="200" Height="200" />
            <Rectangle Fill="LightBlue" Canvas.Left="25" 
                                           Canvas.Top="25" Width="50" Height="50" />
            <Rectangle Fill="LightCoral" Canvas.Left="50" 
                                           Canvas.Top="50" Width="50" Height="50" />
            <Rectangle Fill="LightCyan" Canvas.Left="75" 
                                           Canvas.Top="75" Width="50" Height="50" />
        </Canvas>
    
    
    
    <Canvas>
            <Ellipse Panel.ZIndex="2" Fill="Gainsboro" Canvas.Left="25" Canvas.Top="25" Width="200" Height="200" />
            <Rectangle Panel.ZIndex="3" Fill="LightBlue" Canvas.Left="25" Canvas.Top="25" Width="50" Height="50" />
            <Rectangle Panel.ZIndex="2" Fill="LightCoral" Canvas.Left="50" Canvas.Top="50" Width="50" Height="50" />
            <Rectangle Panel.ZIndex="4" Fill="LightCyan" Canvas.Left="75" Canvas.Top="75" Width="50" Height="50" />
        </Canvas>

# WPF Data Grid

    
    namespace WPF_Data_Grid
    {
        /// <summary>
        /// Interaction logic for MainWindow.xaml
        /// </summary>
        public partial class MainWindow : Window
        {
            Customer customer;
    
            public MainWindow()
            {
                InitializeComponent();
                Initialise();
            }
            void Initialise()
            {
                using (var db = new NorthwindEntities())
                {
                    DataGrid01.ItemsSource = db.Customers.ToList();
                }
            }
    
            private void DataGrid01_SelectionChanged(object sender, SelectionChangedEventArgs e)
            {
                customer = (Customer)DataGrid01.SelectedItem;
            }
    
            private void SaveCellChanges(object sender, EventArgs e)
            {
                if (customer != null)
                {
                    MessageBox.Show($"cell has changed for customer {customer.CustomerID} of type {sender.GetType()}");
                }
            }
        }
    }

# WPF Panels Lab

## Stack Panel

    <Window x:Class="lab_15_panels.MainWindow"
            xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
            xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
            xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
            xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
            xmlns:local="clr-namespace:lab_15_panels"
            mc:Ignorable="d"
            Title="MainWindow" Height="Auto" Width="Auto" Background="#c4d6f2">
        <Grid>
            <Grid.RowDefinitions>
                <RowDefinition Height="*" />
                <RowDefinition Height="3*" />
                <RowDefinition Height="*" />
                <RowDefinition Height="3*" />
                <RowDefinition Height="3*" />
            </Grid.RowDefinitions>
            <Grid.ColumnDefinitions>
                <ColumnDefinition Width="*" />
                <ColumnDefinition Width="3*" />
            </Grid.ColumnDefinitions>
            <Button x:Name="ButtonChangePanel" Background="#8db3ef" Grid.Row="1" Content="Change Panel" Click="ButtonChangePanel_Click"/>
            <Button x:Name="ButtonChangeTab" Background="#8fa4c6" Grid.Row="3" Content="Change Panel By Index" Click="ButtonChangeTab_Click"  />
            <Button x:Name="ButtonChangeTabByName" Background="#8fa4c6" Grid.Row="4" Content="Change Panel By Name" Click="ButtonChangeTabByName_Click" />
            <StackPanel x:Name="StackPanel01" Background="#5992ea" Grid.Row="1" Grid.Column="1"/>
            <StackPanel x:Name="StackPanel02" Background="#347ced" Grid.Row="1" Grid.Column="1"/>
            <StackPanel x:Name="StackPanel03" Background="#0c65f2" Grid.Row="1" Grid.Column="1"/>
            <TabControl x:Name="TabControl01" Background="#75dadd" Grid.Row="3" Grid.Column="1" Grid.RowSpan="2">
                <TabItem x:Name="First" Background="#84e8dc" Header="First">
                    <Label x:Name="Label01" Content="First" />
                </TabItem>
                <TabItem x:Name="Second" Background="#56efdd" Header="Second">
                    <Label x:Name="Label02" Content="Second" />
                </TabItem>
                <TabItem x:Name="Third" Background="#1cedd4" Header="Third">
                    <Label x:Name="Label03" Content="Third" />
                </TabItem>
            </TabControl>
        </Grid>
    </Window>
    
    
    //cs
    
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using System.Windows;
    using System.Windows.Controls;
    using System.Windows.Data;
    using System.Windows.Documents;
    using System.Windows.Input;
    using System.Windows.Media;
    using System.Windows.Media.Imaging;
    using System.Windows.Navigation;
    using System.Windows.Shapes;
    
    namespace lab_15_panels
    {
        /// <summary>
        /// Interaction logic for MainWindow.xaml
        /// </summary>
        public partial class MainWindow : Window
        {
            // Tracks which panel we are on
            int index;
    
    
            
    
            public MainWindow()
            {
                InitializeComponent();
                Initialize();
            }
    
            void Initialize() {
                index = 1;
                displayPanel(index);
            }
            private void ButtonChangePanel_Click(object sender, RoutedEventArgs e)
            {
                index++;
                if (index == 4)
                {
                    index = 1;
                }
                displayPanel(index);
            }
            void displayPanel(int index)
            {
                switch (index)
                {
                    case 1:
                        StackPanel01.Visibility = Visibility.Visible;
                        StackPanel02.Visibility = Visibility.Collapsed;
                        StackPanel03.Visibility = Visibility.Collapsed;
                        break;
                    case 2:
                        StackPanel01.Visibility = Visibility.Collapsed;
                        StackPanel02.Visibility = Visibility.Visible;
                        StackPanel03.Visibility = Visibility.Collapsed;
                        break;
                    case 3:
                        StackPanel01.Visibility = Visibility.Collapsed;
                        StackPanel02.Visibility = Visibility.Collapsed;
                        StackPanel03.Visibility = Visibility.Visible;
                        break;
                }
            }
    
            private void ButtonChangeTab_Click(object sender, RoutedEventArgs e)
            {
                if (TabControl01.SelectedIndex < TabControl01.Items.Count-1)
                {
                    TabControl01.SelectedIndex++;
                }
                else
                {
                    TabControl01.SelectedIndex = 0;
                }
            }
    
            // enum is structure which maps names to numbers  
            // days of week   0=sunday 6=saturday
            // months 0=january
            // enum automatically sets first=0, second=1, third=2 (same as TabIndex)
            enum tabs
            {
                First,
                Second,
                Third
            }
    
            private void ButtonChangeTabByName_Click(object sender, RoutedEventArgs e)
            {
                ChangeTabByName((TabControl01.SelectedItem as TabItem).Header.ToString());
            }
    
            void ChangeTabByName(string headerName)
            {
                switch (headerName)
                {
                    // if index is 0 ('first' tab) then change it to index = 1 ('second' tab)
                    case "First":
                        TabControl01.SelectedIndex = (int)tabs.Second;
                        break;
                    case "Second":
                        TabControl01.SelectedIndex = (int)tabs.Third;
                        break;
                    case "Third":
                        TabControl01.SelectedIndex = (int)tabs.First;
                        break;
                }
            }
        }
    }

## WPF Stack Panel Toggle Visibility

    
    
    XML
    
            <StackPanel x:Name="Stackpanel01" Background="LightBlue" 
                        Grid.Row="5" Grid.Column="1">
                <Label x:Name="Label01" Content="Label01"/>
            </StackPanel>
            <StackPanel x:Name="Stackpanel02" Background="LightGreen" 
                        Grid.Row="5" Grid.Column="1">
                <Label x:Name="Label02" Content="Label02"/>
            </StackPanel>
    
        <CheckBox x:Name="EditMode" Unchecked="TogglePanel" Checked="TogglePanel" 
                      Grid.Column="2" Grid.Row="0" Content="Edit"/>
    
    C# 
    
            void Initialise()
            {
                Panel.SetZIndex(Stackpanel01, 1);
                Panel.SetZIndex(Stackpanel02, -1);
            }
    
    
            private void TogglePanel(object sender, EventArgs e)
            {
                Panel.SetZIndex(Stackpanel01, Canvas.GetZIndex(Stackpanel01) * -1);
                Panel.SetZIndex(Stackpanel02, Canvas.GetZIndex(Stackpanel02) * -1);
            }

### Toggling Visibility - Also Check Out

StackPanel.SendToBack()
.BringToFront()
.Hide()
.Show()

## Scrollable Stack Panel

    <ScrollViewer VerticalScrollBarVisibility="Auto" Grid.Row="1" Grid.Column="1">
      <StackPanel x:Name="stackpanel02" Background="#dff" Orientation="Vertical" >
          <Button  Background="#ddd" Content="Button 01" />
          <Button  Background="#ddd" Content="Button 02" />
          <Button  Background="#ddd" Content="Button 03" />
          <Label Content="Label" Background="#888" HorizontalContentAlignment="Center" />
          <TextBlock Text="TextBlock" Background="#aaa" HorizontalAlignment="Center" />
          <TextBox Text="Text Box" HorizontalContentAlignment="Center" />
          <Button  Background="#ddd" Content="Button 01" />
          <Button  Background="#ddd" Content="Button 02" />
          <Button  Background="#ddd" Content="Button 03" />
          <Label Content="Label" Background="#888" HorizontalContentAlignment="Center" />
          <TextBlock Text="TextBlock" Background="#aaa" HorizontalAlignment="Center" />
          <TextBox Text="Text Box" HorizontalContentAlignment="Center" />
          <Button  Background="#ddd" Content="Button 01" />
          <Button  Background="#ddd" Content="Button 02" />
          <Button  Background="#ddd" Content="Button 03" />
          <Label Content="Label" Background="#888" HorizontalContentAlignment="Center" />
          <TextBlock Text="TextBlock" Background="#aaa" HorizontalAlignment="Center" />
          <TextBox Text="Text Box" HorizontalContentAlignment="Center" />
      </StackPanel>
    </ScrollViewer>

## WPF DockPanel

Docks to Top, Bottom, Left and Right.  Center can be filled if `LastChildFill="True"`

    <DockPanel x:Name="dockpanel" Grid.Row="1" Grid.Column="2" Background="#eef" 
            LastChildFill="True">
        <Button Content="Top" DockPanel.Dock="Top" />
        <Button Content="Bottom" DockPanel.Dock="Bottom" />
        <Button Content="L" DockPanel.Dock="Left" />
        <Button Content="R" DockPanel.Dock="Right" />
        <Button Content="C" Background="Cyan" />
    
    </DockPanel>

## WPF WrapPanel

    <WrapPanel x:Name="wrappanel" Grid.Row="1" Grid.Column="3" Background="#efe" >
      <Button Width="30" Background="Blue" Content="B" Margin="2" />
      <Button Width="30" Background="Blue" Content="B" Margin="2" />
      <Button Width="30" Background="Blue" Content="B" Margin="2" />
      <Button Width="30" Background="Blue" Content="B" Margin="2" />
      <Button Width="30" Background="Blue" Content="B" Margin="2" />
      <Button Width="30" Background="Blue" Content="B" Margin="2" />
      <Button Width="30" Background="Blue" Content="B" Margin="2" />
      <Button Width="30" Background="Blue" Content="B" Margin="2" />
      <Button Width="30" Background="Blue" Content="B" Margin="2" />
      <Button Width="30" Background="Blue" Content="B" Margin="2" />
      <Button Width="30" Background="Blue" Content="B" Margin="2" />
      <Button Width="30" Background="Blue" Content="B" Margin="2" />
      <Button Width="30" Background="Blue" Content="B" Margin="2" />
      <Button Width="30" Background="Blue" Content="B" Margin="2" />
      <Button Width="30" Background="Blue" Content="B" Margin="2" />
      <Button Width="30" Background="Blue" Content="B" Margin="2" />
    </WrapPanel>

## WPF TabControl

    <TabControl>
        <TabItem Header="Customers" Background="#ACEFF8" />
        <TabItem Header="Products" Background="#87BDC4" />
        <TabItem Header="ListView With Multiple Columns" Background="#87BDC4">
            <ListView Margin="10" x:Name="ListViewCustomers">
                <ListView.View>
                    <GridView>
                        <GridViewColumn Header="ID" Width="120" 
                                  DisplayMemberBinding="{Binding CustomerID}"/>
                        <GridViewColumn Header="Name" Width="120" 
                                  DisplayMemberBinding="{Binding ContactName}"/>
                        <GridViewColumn Header="Company" Width="120" 
                                   DisplayMemberBinding="{Binding CompanyName}"/>
                    </GridView>
                </ListView.View>
            </ListView>
        </TabItem>
    </TabControl>

# WPF CRUD 28

## Lab Examples

### 1) WPF Framework CRUD app

[https://github.com/philanderson888/c-sharp/tree/master/Entity_10_WPF_Northwind](https://github.com/philanderson888/c-sharp/tree/master/Entity_10_WPF_Northwind)

## Set up our Entity CRUD App

    <Grid>
        <Grid.RowDefinitions>
            <RowDefinition Height="*" />
            <RowDefinition Height="*" />
            <RowDefinition Height="*" />
            <RowDefinition Height="*" />
            <RowDefinition Height="*" />
            <RowDefinition Height="*" />
            <RowDefinition Height="20*" />
        </Grid.RowDefinitions>
        <Grid.ColumnDefinitions>
            <ColumnDefinition Width="*" />
            <ColumnDefinition Width="*" />
            <ColumnDefinition Width="*" />
        </Grid.ColumnDefinitions>
        <ListBox x:Name="ListBox01" Background="Beige" Grid.Column="0" Grid.Row="7" />
    </Grid>

    // can use lists
    using System.Collections.Generic;
    // can use Entity
    using System.Data.Entity;
    
    ..
    
    namespace Entity_10_WPF_Northwind
    {
        public partial class MainWindow : Window
        {       
            public MainWindow()
            {
                InitializeComponent();
                PopulateListBox();
            }
    
            private void PopulateListBox()
            {
                using (var db = new NorthwindEntities())
                {
                    ListBox01.ItemsSource = db.Customers.ToList<Customer>();                  
                }
            }
        }
     }

The customers will display as objects. To display certain fields we can bind certain fields in our XAML :

### Binding One Field

    using (var db = new NorthwindEntities())
    {
        customers = db.Customers.ToList<Customer>();
        ListBox03.ItemsSource = customers;
        ListBox03.DisplayMemberPath = "ContactName";
    }

### Binding Several Fields

    <ListBox x:Name="ListBox01" Background="Beige" Grid.Column="0" Grid.Row="7" SelectionChanged="ListBox01_SelectionChanged">
        <ListBox.ItemTemplate>
            <DataTemplate>
                <TextBlock>
                    <TextBlock.Text>
                        <MultiBinding StringFormat="ID - {0} - Name - {1} - City -{2}">
                            <Binding Path="CustomerID" />
                            <Binding Path="ContactName" />
                            <Binding Path="City" />
                        </MultiBinding>
                    </TextBlock.Text>
                </TextBlock>
            </DataTemplate>
        </ListBox.ItemTemplate>

We should now be able to see all our Customers displaying in the list box.

### Selecting a customer

We can now click on our list box and select an individual customer.

Let's output the data to the screen when we select this customer.

To keep things simple let's just output the CustomerID, ContactName and City.

Let us firstly add a placeholder `customer` object

    public partial class MainWindow : Window
    {
        // use this to hold the selected customer when manipulating
        Customer customer;

Then the code to select an individual customer

    private void ListBox01_SelectionChanged(object sender, SelectionChangedEventArgs e)
    {
        if (ListBox01.SelectedItem != null)
        {
            // selected item is an object which we cast to Customer
            customer = (Customer)ListBox01.SelectedItem;
            // set the screen IDs
            TextId.Text = customer.CustomerID;
            TextName.Text = customer.ContactName;
            TextCity.Text = customer.City;
        }
    }

We should be able to select customers and view them on the right also.

### Updating a customer

Now let's update a customer

Firstly add an `update` button

    <Button x:Name="ButtonUpdate" Grid.Row="4" Grid.Column="2" Background="#8db0e8" Content="Update" Click="ButtonUpdate_Click"/>

and the code

    private void ButtonUpdate_Click(object sender, RoutedEventArgs e)
    {
        using (var db = new NorthwindEntities())
        {
            customer = db.Customers.Where(c => c.CustomerID == TextId.Text).FirstOrDefault();
            customer.ContactName = TextName.Text;
            customer.City = TextCity.Text;
            // write changes to database
            db.SaveChanges();
            // now clear out the screen items 
            ListBox01.SelectedItem = null;
            TextId.Text = null;
            TextName.Text = null;
            TextCity.Text = null;
            // refresh the list box
            ListBox01.ItemsSource = null;
            PopulateListBox();
            // put back the screen data
            ListBox01.SelectedItem = customer;
            TextId.Text = customer.CustomerID;
            TextName.Text = customer.ContactName;
            TextCity.Text = customer.City;
        }
    }

We should find the updates are applied, written to the database, and refreshed on the screen.

Binding a combo box with distinct items

    using (var db = new NorthwindEntities()) {
    cities =
        (from cust in db.Customers
         select cust.City).Distinct().OrderByDescending(city=>city).ToList<string>();
    ComboBoxBoundToCity.ItemsSource = cities;
    }
    
    
    private void ComboBoxStaticCity_SelectionChanged(object sender, 
                                                 SelectionChangedEventArgs e)
    {
      //  MessageBox.Show($"You chose {ComboBoxStaticCity.SelectedItem}");
    }

### Deleting a customer

Now finally let us delete a customer

Add a `delete` button

    <Button x:Name="ButtonDelete" Grid.Row="5" Grid.Column="2" Background="#ff0000" Content="Delete" Click="ButtonDelete_Click"/>

And the code

    private void ButtonDelete_Click(object sender, RoutedEventArgs e)
    {
        using (var db = new NorthwindEntities())
        {
            customer = db.Customers.Where(c => c.CustomerID == TextId.Text).FirstOrDefault();
            // remove customer from local copy of database
            db.Customers.Remove(customer);
            // write changes to database
            db.SaveChangesAsync();
            // refresh screen items
            ListBox01.SelectedItem = null;
            TextId.Text = null;
            TextName.Text = null;
            TextCity.Text = null;
            ListBox01.ItemsSource = null;
            PopulateListBox();
        }
    }

# WPF Northwind Customer App

    
    
    <Window x:Class="lab_24_Customers_App.MainWindow"
            xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
            xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
            xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
            xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
            xmlns:local="clr-namespace:lab_24_Customers_App"
            mc:Ignorable="d"
            Title="MainWindow" Height="Auto" Width="Auto" FontSize="18">
        <Grid Background="#E6EEFF">
            <Grid.ColumnDefinitions>
                <ColumnDefinition Width="*" />
                <ColumnDefinition Width="*" />
                <ColumnDefinition Width="*" />
                <ColumnDefinition Width="*" />
                <ColumnDefinition Width="*" />
            </Grid.ColumnDefinitions>
            <Grid.RowDefinitions>
                <RowDefinition Height="*" />
                <RowDefinition Height="*" />
                <RowDefinition Height="*" />
                <RowDefinition Height="*" />
                <RowDefinition Height="*" />
            </Grid.RowDefinitions>
            <Label x:Name="LabelTitle"
                   Background="#E6EEdd" Grid.Column="1" Grid.ColumnSpan="3" 
                   HorizontalContentAlignment="Center" VerticalContentAlignment="Center"
                   FontWeight="Bold">
                <TextBlock TextDecorations="Underline">Customer App</TextBlock>
            </Label>
    
            <StackPanel x:Name="StackPanel02" Grid.Row="1" Grid.RowSpan="3" Grid.Column="1"
                        Grid.ColumnSpan="3" Background="#FFFEE6">
                <Label x:Name="StackPanel01Label02" Content="StackPanel02" Background="#EFE6FF" 
                       HorizontalAlignment="Stretch" HorizontalContentAlignment="Center" />
                <Button Content="button" />
                <Button Content="button" />
                <Button Content="button" />
                <Button Content="button" />
                <Button Content="button" />
                <ListBox x:Name="ListBoxCustomers02" />
            </StackPanel>
            <StackPanel x:Name="StackPanel03" Grid.Row="1" Grid.RowSpan="3" Grid.Column="1"
                        Grid.ColumnSpan="3" Background="#FFFEE6">
                <Label x:Name="StackPanel01Label03" Content="StackPanel03" Background="#EFE6FF" 
                       HorizontalAlignment="Stretch" HorizontalContentAlignment="Center" />
                <Button Content="button" />
                <Button Content="button" />
                <Button Content="button" />
                <Button Content="button" />
                <Button Content="button" />
                <ListBox x:Name="ListBoxCustomers03" />
            </StackPanel>
            <StackPanel x:Name="StackPanel01" Grid.Row="1" Grid.RowSpan="3" Grid.Column="1"
                        Grid.ColumnSpan="3" Background="#FFFEE6" >
                <Label x:Name="StackPanel01Label01" Content="StackPanel01" Background="#EFE6FF" 
                       HorizontalAlignment="Stretch" HorizontalContentAlignment="Center" />
                <Button x:Name="CustomerNameFilter" Content="Search By Customer Name"
                         HorizontalAlignment="Stretch" HorizontalContentAlignment="Center" />
                <TextBox x:Name="CustomerSearch" 
                          HorizontalAlignment="Stretch" HorizontalContentAlignment="Center"
                         KeyUp="CustomerSearch_KeyUp" TextChanged="CustomerSearch_TextChanged"/>
                <ListBox x:Name="ListBoxCustomers" 
                          HorizontalAlignment="Stretch" HorizontalContentAlignment="Left" 
                         SelectionChanged="ListBoxCustomers_SelectionChanged" MouseDoubleClick="ViewOrders" >
                    <ListBox.ItemTemplate>
                        <DataTemplate>
                            <TextBlock>
                                <TextBlock.Text>
                                    <MultiBinding StringFormat=" {0,-10}  {1,-20} {2} ">
                                        <Binding Path="CustomerID" />
                                        <Binding Path="ContactName" />
                                        <Binding Path="City" />
                                    </MultiBinding>
                                </TextBlock.Text>
                            </TextBlock>
                        </DataTemplate>
                    </ListBox.ItemTemplate>
                </ListBox>
            </StackPanel>
            <Button x:Name="ButtonBack" Content="Back" Background="#D1E2E8" Grid.Row="4" Grid.Column="1" Click="ButtonBack_Click"/>
            <Button x:Name="ButtonForward" Content="Forward" Background="#D1E2E8" Grid.Row="4" Grid.Column="3" 
                    Click="ButtonForward_Click" />
        </Grid>
    </Window>
    
    
    
    
    
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using System.Windows;
    using System.Windows.Controls;
    using System.Windows.Data;
    using System.Windows.Documents;
    using System.Windows.Input;
    using System.Windows.Media;
    using System.Windows.Media.Imaging;
    using System.Windows.Navigation;
    using System.Windows.Shapes;
    
    namespace lab_24_Customers_App
    {
        /// <summary>
        /// Interaction logic for MainWindow.xaml
        /// </summary>
        public partial class MainWindow : Window
        {
    
            static List<Customer> customers;
            public MainWindow()
            {
                InitializeComponent();
                Initialise();
            }
    
            void Initialise()
            {
                StackPanel01.Visibility = Visibility.Visible;
                StackPanel02.Visibility = Visibility.Collapsed;
                StackPanel03.Visibility = Visibility.Collapsed;
    
    
    
                using(var db = new NorthwindEntities())
                {
                    customers = db.Customers.ToList();
                    ListBoxCustomers.ItemsSource = customers;
                }
            }
    
            private void ButtonBack_Click(object sender, RoutedEventArgs e)
            {
                if(StackPanel01.Visibility == Visibility.Visible)
                {
                    StackPanel01.Visibility = Visibility.Collapsed;
                    StackPanel02.Visibility = Visibility.Collapsed;
                    StackPanel03.Visibility = Visibility.Visible;
                }
                else if (StackPanel02.Visibility == Visibility.Visible)
                {
                    StackPanel01.Visibility = Visibility.Visible;
                    StackPanel02.Visibility = Visibility.Collapsed;
                    StackPanel03.Visibility = Visibility.Collapsed;
                }
                else if (StackPanel03.Visibility == Visibility.Visible)
                {
                    StackPanel01.Visibility = Visibility.Collapsed;
                    StackPanel02.Visibility = Visibility.Visible;
                    StackPanel03.Visibility = Visibility.Collapsed;
                }
            }
    
            private void ButtonForward_Click(object sender, RoutedEventArgs e)
            {
                if (StackPanel01.Visibility == Visibility.Visible)
                {
                    StackPanel01.Visibility = Visibility.Collapsed;
                    StackPanel02.Visibility = Visibility.Visible;
                    StackPanel03.Visibility = Visibility.Collapsed;
                }
                else if (StackPanel02.Visibility == Visibility.Visible)
                {
                    StackPanel01.Visibility = Visibility.Collapsed;
                    StackPanel02.Visibility = Visibility.Collapsed;
                    StackPanel03.Visibility = Visibility.Visible;
                }
                else if (StackPanel03.Visibility == Visibility.Visible)
                {
                    StackPanel01.Visibility = Visibility.Visible;
                    StackPanel02.Visibility = Visibility.Collapsed;
                    StackPanel03.Visibility = Visibility.Collapsed;
                }
            }
    
            private void CustomerSearch_KeyUp(object sender, KeyEventArgs e)
            {
                
                ListBoxCustomers.ItemsSource = customers.Where
                    (c => c.ContactName.Contains(CustomerSearch.Text)).ToList(); 
            }
    
            private void CustomerSearch_TextChanged(object sender, TextChangedEventArgs e)
            {
    
            }
    
            private void ListBoxCustomers_SelectionChanged(object sender, SelectionChangedEventArgs e)
            {
    
            }
        }
    }

# WPF Rabbit CRUD App

    
    <Window x:Class="lab_18_Rabbit_Database_CRUD.MainWindow"
            xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
            xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
            xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
            xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
            xmlns:local="clr-namespace:lab_18_Rabbit_Database_CRUD"
            mc:Ignorable="d"
            Title="MainWindow" Height="Auto" Width="Auto" FontSize="25" KeyDown="DoThis">
        <Grid Background="#B5EBE5">
            <Grid.ColumnDefinitions>
                <ColumnDefinition Width="*" />
                <ColumnDefinition Width="*" />
                <ColumnDefinition Width="*" />
                <ColumnDefinition Width="*" />
            </Grid.ColumnDefinitions>
            <Grid.RowDefinitions>
                <RowDefinition Height="Auto" />
                <RowDefinition Height="*" />
                <RowDefinition Height="*" />
                <RowDefinition Height="10*" />
            </Grid.RowDefinitions>
            <Label x:Name="labelHeading" Content="Rabbit App" Grid.Column="1" Grid.Row="0" 
                   Grid.ColumnSpan="2" Background="#76C3E8" HorizontalAlignment="Center" HorizontalContentAlignment="Center" 
                 FontSize="35" FontWeight="Bold" />
            <ListBox x:Name="ListBoxRabbits" Grid.Row="3" Grid.Column="0"  Background="#B3C6ED" 
                     SelectionChanged="ListBoxRabbits_SelectionChanged"
                      />
            <TextBox x:Name="TextBoxName" Grid.Row="2" Grid.Column="2" Background="#D3E9ED" />
            <TextBox x:Name="TextBoxAge" Grid.Row="2" Grid.Column="3" Background="#D3E9ED" />
            <Button x:Name="ButtonAdd" Grid.Row="1" Grid.Column="1" Background="#B3C6ED" Content="Add" 
                    Click="ButtonAdd_Click" />
            <Button x:Name="ButtonEdit" Grid.Row="1" Grid.Column="2" Background="#B3C6ED" Content="Edit" Click="ButtonEdit_Click" />
            <Button x:Name="ButtonDelete" Grid.Row="1" Grid.Column="3" Background="#B3C6ED" Content="Delete" Click="ButtonDelete_Click" />
        </Grid>
    </Window>
    
    
    
    
    
    
    
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using System.Windows;
    using System.Windows.Controls;
    using System.Windows.Data;
    using System.Windows.Documents;
    using System.Windows.Input;
    using System.Windows.Media;
    using System.Windows.Media.Imaging;
    using System.Windows.Navigation;
    using System.Windows.Shapes;
    
    namespace lab_18_Rabbit_Database_CRUD
    {
        /// <summary>
        /// Interaction logic for MainWindow.xaml
        /// </summary>
        public partial class MainWindow : Window
        {
    
            static List<Rabbit> rabbits;
            static Rabbit rabbit = new Rabbit();
    
            public MainWindow()
            {
                InitializeComponent();
                Initialise();
            }
    
            void Initialise()
            {
    
                // using : automatic clean-up ((C# does not know
                // inherently when we're done so this block help
                // C# know that we are done, and clean all memory
                using (var db = new RabbitDbEntities())
                {
                    rabbits = db.Rabbits.ToList();
                }
    
                // MANUAL METHOD
                // Fancy 'lambda' to a) loop rabbits b) each loop, add item to listbox on screen
                // get the list of rabbits.  For each rabbit in the list of rabbits do the following
                // rabbits.ForEach(rabbit => ListBoxRabbits.Items.Add(rabbit));
                // foreach (var rabbit in rabbits){ ... ListBoxRabbits.Items.Add...}
    
                // BINDING METHOD : BIND LISTBOX TO DATABASE (BETTER)
                ListBoxRabbits.DisplayMemberPath = "Name";
                ListBoxRabbits.ItemsSource = rabbits;
    
                TextBoxAge.IsReadOnly = false;
                TextBoxName.IsReadOnly = true;
    
                ButtonEdit.IsEnabled = false;
                ButtonDelete.IsEnabled = false;
    
            }
    
            private void ListBoxRabbits_SelectionChanged(object sender, SelectionChangedEventArgs e)
            {
                // when deselect a rabbit, don't run this code
                // if(rabbit != null)  // or
                if(ListBoxRabbits.SelectedItem != null)
                {
                    // whenever we select an item in the list, cast it from (Object) type 
                    // and put it as a (Rabbit) type.  Put in the global 'rabbit' variable.
                    rabbit = (Rabbit)ListBoxRabbits.SelectedItem;
                    TextBoxName.Text = rabbit.Name;
                    TextBoxAge.Text = rabbit.Age.ToString();
                    // enable edit and delete
                    ButtonEdit.IsEnabled = true;
                    ButtonDelete.IsEnabled = true;
                }
            }
    
            private void ButtonAdd_Click(object sender, EventArgs e)
            {
                if (ButtonAdd.Content.Equals("Add")){
                    ButtonAdd.Content = "Save";
                    ButtonAdd.Background = (SolidColorBrush)(new BrushConverter().ConvertFrom("#9589FF"));
                    // clear boxes and set to white
                    TextBoxName.Text = "";
                    TextBoxAge.Text = "";
                    TextBoxName.Background = (SolidColorBrush)Brushes.White;
                    TextBoxAge.Background = (SolidColorBrush)Brushes.White;
                    TextBoxName.IsReadOnly = false;
                    TextBoxAge.IsReadOnly = false;
                    ButtonEdit.IsEnabled = false;
                    ButtonDelete.IsEnabled = false;
                }
                else
                {
                    ButtonAdd.Content = "Add";
                    ButtonAdd.Background = (SolidColorBrush)(new BrushConverter().ConvertFrom("#B3C6ED"));
                    TextBoxName.Background = (SolidColorBrush)(new BrushConverter().ConvertFrom("#D3E9ED"));
                    TextBoxAge.Background = (SolidColorBrush)(new BrushConverter().ConvertFrom("#D3E9ED"));
                    TextBoxName.IsReadOnly = true;
                    TextBoxAge.IsReadOnly = true;
                    // commit changes
                    if ((TextBoxName.Text.Length > 0) && (TextBoxAge.Text.Length > 0))
                    {
                        // get age
                        if(int.TryParse(TextBoxAge.Text,out int age)){
                            var RabbitToAdd = new Rabbit()
                            {
                                Name = TextBoxName.Text,
                                Age = age
                            };
                            // read db and add new rabbit
                            using (var db = new RabbitDbEntities())
                            {
                                db.Rabbits.Add(RabbitToAdd);
                                db.SaveChanges();
                                // update view
                                rabbit = null;
    
                                rabbits = db.Rabbits.ToList();
                                ListBoxRabbits.ItemsSource = null;
                                ListBoxRabbits.ItemsSource = rabbits;
                            }
                        }
                    }
                    
                }
            }
    
            private void ButtonEdit_Click(object sender, RoutedEventArgs e)
            {
                if (ButtonEdit.Content.Equals("Edit"))
                {
                    ButtonEdit.Background = (SolidColorBrush)(new BrushConverter().ConvertFrom("#9589FF"));
                    ButtonEdit.Content = "Save";
                    TextBoxName.IsReadOnly = false;
                    TextBoxAge.IsReadOnly = false;
                    TextBoxName.Background = (SolidColorBrush)Brushes.White;
                    TextBoxAge.Background = (SolidColorBrush)Brushes.White;
                    ButtonAdd.IsEnabled = false;
                    TextBoxName.Focus();
                    TextBoxName.SelectAll();
                }
                else
                {
                    Color color = (Color)ColorConverter.ConvertFromString("#B3C6ED");
                    var brush = new SolidColorBrush(color);
                    ButtonEdit.Background = brush;
                    ButtonEdit.Content = "Edit";
                    if ((TextBoxAge.Text.Length > 0) && (TextBoxName.Text.Length > 0))
                    {
                        // must have selected a rabbit
                        if (rabbit != null)
                        {
                            rabbit.Name = TextBoxName.Text;
                            if(int.TryParse(TextBoxAge.Text, out int age))
                            {
                                rabbit.Age = age;
                            }
    
                            using (var db = new RabbitDbEntities())
                            {
                                // read rabbit from database by ID
                                var rabbitToUpdate = db.Rabbits.Find(rabbit.RabbitId);
                                // update rabbit
                                rabbitToUpdate.Name = rabbit.Name;
                                rabbitToUpdate.Age = rabbit.Age;
                                // save rabbit back to DB
                                db.SaveChanges();
                                // clear listbox because we're going to change (the binding)
                                rabbit = null;  // remove binding on rabbit
                               // ListBoxRabbits.ItemsSource = null;  // remove binding
                               // ListBoxRabbits.Items.Clear();       // clear it out
                                // repopulate listbox // re-read from db
                                rabbits = db.Rabbits.ToList();                // get rabbits
                                ListBoxRabbits.ItemsSource = rabbits;         // bind to listbox again
    
                            }
    
                        }
                    }
                    ButtonAdd.IsEnabled = true;
                }
            }
    
            private void ButtonDelete_Click(object sender, RoutedEventArgs e)
            {
                if (ButtonDelete.Content.Equals("Delete"))
                { 
                    ButtonDelete.Content = "Confirm Delete";
                }
                else
                {
                    // delete record
                    // find record in database which matches selected rabbit
                    if (rabbit != null)
                    {
                        using (var db = new RabbitDbEntities())
                        {
                            var rabbitToDelete = db.Rabbits.Find(rabbit.RabbitId);
                            db.Rabbits.Remove(rabbitToDelete);
                            db.SaveChanges();
    
                            //ListBoxRabbits.ItemsSource = null;
    
                            rabbits = db.Rabbits.ToList();
    
                            ListBoxRabbits.ItemsSource = rabbits;
                        }
                    }
    
                    TextBoxName.Text = "";
                    TextBoxAge.Text = "";
    
                    ButtonDelete.IsEnabled = false;
                    ButtonDelete.Content = "Delete";
                }
            }
    
            private void DoThis(object sender, KeyEventArgs e)
            {
    	
                MessageBox.Show(e.Key.ToString());      
            }
        }
    }

# WPF Movement with Dispatch Timer

[https://www.wpf-tutorial.com/creating-game-snakewpf/continuous-movement-with-dispatchertimer/](https://www.wpf-tutorial.com/creating-game-snakewpf/continuous-movement-with-dispatchertimer/) 

    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using System.Windows;
    using System.Windows.Controls;
    using System.Windows.Data;
    using System.Windows.Documents;
    using System.Windows.Input;
    using System.Windows.Media;
    using System.Windows.Media.Imaging;
    using System.Windows.Navigation;
    using System.Windows.Shapes;
    using System.Windows.Threading;
    
    namespace lab_16_wpf_rabbit_explosion
    {
        /// <summary>
        /// Interaction logic for MainWindow.xaml
        /// </summary>
        public partial class MainWindow : Window
        {
            public DispatcherTimer timer = new DispatcherTimer();
            public MainWindow()
            {
                InitializeComponent();
                Initialise();
            }
    
            void Initialise()
            {
                Button01.Content = "Click Here";
                timer.Interval = TimeSpan.FromMilliseconds(1000);
                timer.Tick += changeColor;
    
            }
    
            void changeColor(object sender, EventArgs e)
            {
                var randomColor = RandomColorGenerator();
                Label01.Background = new SolidColorBrush(Color.FromRgb(randomColor.R, randomColor.G, randomColor.B));
            }
    
            static int counter = 0;
            private void Button01_Click(object sender, RoutedEventArgs e)
            {
                counter++;
                Button01.Content = $"{counter} times";
    
              //  var randomColor = RandomColorGenerator();
              //  Label01.Background = new SolidColorBrush(Color.FromRgb(randomColor.R,randomColor.G,randomColor.B));
                timer.Start();
            }
    
            public (byte R, byte G, byte B) RandomColorGenerator()
            {
                var r = new Random();
                byte R = (byte)r.Next(0, 256);
                byte G = (byte)r.Next(0, 256);
                byte B = (byte)r.Next(0, 256);
                return (R, G, B);
            }
        }
    }

# Metro Apps GUI

    
    https://mahapps.com/ 
    install mahappsmetro and mahapps.metro.resources
    
    
    paste
    
            <ResourceDictionary>
                <ResourceDictionary.MergedDictionaries>
                    <!-- MahApps.Metro resource dictionaries. Make sure that all file names are Case Sensitive! -->
                    <ResourceDictionary Source="pack://application:,,,/MahApps.Metro;component/Styles/Controls.xaml" />
                    <ResourceDictionary Source="pack://application:,,,/MahApps.Metro;component/Styles/Fonts.xaml" />
                    <ResourceDictionary Source="pack://application:,,,/MahApps.Metro;component/Styles/Colors.xaml" />
                    <!-- Accent and AppTheme setting -->
                    <ResourceDictionary Source="pack://application:,,,/MahApps.Metro;component/Styles/Accents/Blue.xaml" />
                    <ResourceDictionary Source="pack://application:,,,/MahApps.Metro;component/Styles/Accents/BaseLight.xaml" />
                </ResourceDictionary.MergedDictionaries>
            </ResourceDictionary>
    
    
    <Controls:MetroWindow x:Class="lab_54_WPF_Metro.MainWindow"
            xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
            xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
            xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
            xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
            xmlns:local="clr-namespace:lab_54_WPF_Metro"
            mc:Ignorable="d"
            Title="MainWindow" Height="450" Width="800">
        <Grid>
            
        </Grid>
    </Controls:MetroWindow>
    
    
    
    
    
    
    
    
    
    
    
    <Controls:MetroWindow x:Class="lab_54_WPF_Metro.MainWindow"
            xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
            xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
            xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
            xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
            xmlns:Controls="clr-namespace:MahApps.Metro.Controls;assembly=MahApps.Metro"
            xmlns:local="clr-namespace:lab_54_WPF_Metro"
            mc:Ignorable="d"
            Title="MyTitle" Height="Auto" Width="Auto">
        <Grid>
            <Controls:MetroTabControl>
                
            </Controls:MetroTabControl>
        </Grid>
    </Controls:MetroWindow>
    
    
    
    
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using System.Windows;
    using System.Windows.Controls;
    using System.Windows.Data;
    using System.Windows.Documents;
    using System.Windows.Input;
    using System.Windows.Media;
    using System.Windows.Media.Imaging;
    using System.Windows.Navigation;
    using System.Windows.Shapes;
    using MahApps.Metro.Controls;
    
    namespace lab_54_WPF_Metro
    {
        /// <summary>
        /// Interaction logic for MainWindow.xaml
        /// </summary>
        public partial class MainWindow : MetroWindow
        {
            public MainWindow()
            {
                InitializeComponent();
            }
        }
    }
    
    
    
    
    
    
    mahapps.metro.iconpacks.modern
    
    
    
    guides - icons and resources - copy
    
      xmlns:iconPacks="http://metro.mahapps.com/winfx/xaml/iconpacks"
    
    
    
    Add new window

    Full code
    
    
    <Controls:MetroWindow x:Class="lab_54_WPF_Metro.MainWindow"
            xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
            xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
            xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
            xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
            xmlns:Controls="clr-namespace:MahApps.Metro.Controls;assembly=MahApps.Metro"
            xmlns:iconPacks="http://metro.mahapps.com/winfx/xaml/iconpacks"
            xmlns:local="clr-namespace:lab_54_WPF_Metro"
            mc:Ignorable="d"
            Title="MyTitle" Height="Auto" Width="Auto" Icon="Images/cross.png">
        <Controls:MetroWindow.RightWindowCommands>
            <Controls:WindowCommands>
                <Button Content="Click" Click="Page_Open"/>
                <StackPanel Orientation="Horizontal">
                    <iconPacks:PackIconModern Kind="User" Width="20" Height="20" Margin="0 5 0 0" />
                    <TextBlock Margin="4 0 0 0" VerticalAlignment="Center" Text="Peter" />
                </StackPanel>
            </Controls:WindowCommands>
        </Controls:MetroWindow.RightWindowCommands>
        <Grid>
            <Controls:Flyout x:Name="Flyout01" Width="450" Header="Sparta" 
                             Position="Right">
                <Controls:Flyout.Background>
                    <SolidColorBrush Color="#FF2B2B2B" Opacity="0.75" />
                </Controls:Flyout.Background>
                <Canvas>
                    <Image Source="Images\crusader.jpg" Width="450" Height="87" Stretch="Fill" />
                </Canvas>
            </Controls:Flyout>
            <Controls:FlipView x:Name="FlipView01" Foreground="{DynamicResource WhiteBrush}" Height="200" 
                               SelectionChanged="FlipView01_SelectionChanged">
                <Controls:FlipView.Items>
                    <Grid Background="#2e8def" >
                        <iconPacks:PackIconModern Width="147" Height="48" 
                                                  HorizontalAlignment="Center" 
                                                  VerticalAlignment="Center" Kind="Cupcake" Margin="525,26,81.6,118" />
                        <iconPacks:PackIconModern Width="147" Height="48" 
                            HorizontalAlignment="Center" 
                            VerticalAlignment="Center" Kind="Acorn" Margin="319,26,287.6,118" />
                        <iconPacks:PackIconModern Width="147" Height="48" 
                            HorizontalAlignment="Center" 
                            VerticalAlignment="Center" Kind="ArrowCollapsed" Margin="114,26,492.6,118" />
                    </Grid>
                    <Grid Background="#2e8def" >
                        <iconPacks:PackIconModern Width="147" Height="48" 
                                                  HorizontalAlignment="Center" 
                                                  VerticalAlignment="Center" Kind="Cupcake" Margin="525,26,81.6,118" />
                        <iconPacks:PackIconModern Width="147" Height="48" 
                            HorizontalAlignment="Center" 
                            VerticalAlignment="Center" Kind="Acorn" Margin="319,26,287.6,118" />
                        <iconPacks:PackIconModern Width="147" Height="48" 
                            HorizontalAlignment="Center" 
                            VerticalAlignment="Center" Kind="ArrowCollapsed" Margin="114,26,492.6,118" />
                    </Grid>
                    <Grid Background="#2e8def" >
                        <iconPacks:PackIconModern Width="147" Height="48" 
                                                  HorizontalAlignment="Center" 
                                                  VerticalAlignment="Center" Kind="Cupcake" Margin="525,26,81.6,118" />
                        <iconPacks:PackIconModern Width="147" Height="48" 
                            HorizontalAlignment="Center" 
                            VerticalAlignment="Center" Kind="Acorn" Margin="319,26,287.6,118" />
                        <iconPacks:PackIconModern Width="147" Height="48" 
                            HorizontalAlignment="Center" 
                            VerticalAlignment="Center" Kind="ArrowCollapsed" Margin="114,26,492.6,118" />
                    </Grid>
                </Controls:FlipView.Items>
    
            </Controls:FlipView>
            <Controls:MetroTabControl Margin="0,275,-0.4,-0.4">
                <Controls:MetroTabItem Header="Customers" Margin="0,0,-0.2,0" Height="39" VerticalAlignment="Top">
                    <Button x:Name="Button01" Content="Button" />
                </Controls:MetroTabItem>
                <Controls:MetroTabItem Header="Products" Height="39" Margin="0.2,0,0,0" VerticalAlignment="Top">
    
                </Controls:MetroTabItem>
                <Button Content="Button" Height="100" Width="75"/>
                <Button Content="Button" Height="100" Width="75"/>
            </Controls:MetroTabControl>
            <Button Content="Button" HorizontalAlignment="Left" Margin="218,28,0,0" VerticalAlignment="Top" Width="174" Height="99" BorderBrush="#FFE51010" OpacityMask="#FFD9B2B2" Click="Button_Click">
                <Button.Background>
                    <LinearGradientBrush EndPoint="0.5,1" StartPoint="0.5,0">
                        <GradientStop Color="Black" Offset="0"/>
                        <GradientStop Color="#FFF62E2E" Offset="1"/>
                    </LinearGradientBrush>
                </Button.Background>
            </Button>
        </Grid>
    </Controls:MetroWindow>
    
    
    
    
    
    
    
    
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using System.Windows;
    using System.Windows.Controls;
    using System.Windows.Data;
    using System.Windows.Documents;
    using System.Windows.Input;
    using System.Windows.Media;
    using System.Windows.Media.Imaging;
    using System.Windows.Navigation;
    using System.Windows.Shapes;
    using MahApps.Metro.Controls;
    
    namespace lab_54_WPF_Metro
    {
        /// <summary>
        /// Interaction logic for MainWindow.xaml
        /// </summary>
        public partial class MainWindow : MetroWindow
        {
            public MainWindow()
            {
                InitializeComponent();
            }
    
            private void FlipView01_SelectionChanged(object sender, SelectionChangedEventArgs e)
            {
    
            }
    
            private void Page_Open(object sender, RoutedEventArgs e)
            {
                var page1 = new Page1();
                page1.Show();
           //     page1.ShowDialog();
            }
    
            private void Button_Click(object sender, RoutedEventArgs e)
            {
    
    
                
                if (Flyout01.IsOpen == true)
                {
                    Flyout01.IsOpen = false;
                }
                else
                {
                    Flyout01.IsOpen = true;
                }
            }
        }
    }

    Google - images - icon
    
    Icon="Images/cross.png">
    
    <Controls:MetroWindow x:Class="lab_54_WPF_Metro.MainWindow"
            xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
            xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
            xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
            xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
            xmlns:Controls="clr-namespace:MahApps.Metro.Controls;assembly=MahApps.Metro"
            xmlns:iconPacks="http://metro.mahapps.com/winfx/xaml/iconpacks"
            xmlns:local="clr-namespace:lab_54_WPF_Metro"
            mc:Ignorable="d"
            Title="MyTitle" Height="Auto" Width="Auto" Icon="Images/cross.png">