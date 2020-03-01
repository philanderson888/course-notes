# Office

[https://www.c-sharpcorner.com/article/generate-word-document-using-c-sharp/](https://www.c-sharpcorner.com/article/generate-word-document-using-c-sharp/)

    // Open a doc file.
    Application application = new Application();
    Document document = application.Documents.Open("C:\\word.doc");
    
    
    // Loop through all words in the document.
    int count = document.Words.Count;
    for (int i = 1; i <= count; i++)
    {
        // Write the word.
        string text = document.Words[i].Text;
        Console.WriteLine("Word {0} = {1}", i, text);
    }
    // Close word.
    application.Quit();

# Nuget : add 1) Docx  and 2) Microsoft.Office

[https://github.com/closedxml/closedxml](https://github.com/closedxml/closedxml)

You can use ClosedXML for this.

Store your table in a DataTable and you can export the table to excel by this simple snippet:

XLWorkbook workbook = new XLWorkbook();
DataTable table = GetYourTable();
workbook.Worksheets.Add(table );
You can read the documentation of ClosedXML to learn more. Hope this helps!

    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    
    
    
    using System;
    using System.Collections.Generic;
    using System.Diagnostics;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using Xceed.Words.NET;
    
    
    
    namespace Office_Export_01
    {
        class Program
        {
            static void Main(string[] args)
            {
    
                // word
    
                string fileName = @"exampleWord.docx";
    
                var doc = DocX.Create(fileName);
    
                doc.InsertParagraph("Hello Word");
    
                doc.Save();
    
                Process.Start("WINWORD.EXE", fileName);
    
    
                // excel
    
                Microsoft.Office.Interop.Excel.Application oXL;
                Microsoft.Office.Interop.Excel._Workbook oWB;
                Microsoft.Office.Interop.Excel._Worksheet oSheet;
                Microsoft.Office.Interop.Excel.Range oRng;
    
                object misvalue = System.Reflection.Missing.Value;
                try
                {
                    //Start Excel and get Application object.
                    oXL = new Microsoft.Office.Interop.Excel.Application();
                    oXL.Visible = true;
    
                    //Get a new workbook.
                    oWB = (Microsoft.Office.Interop.Excel._Workbook)(oXL.Workbooks.Add(""));
                    oSheet = (Microsoft.Office.Interop.Excel._Worksheet)oWB.ActiveSheet;
    
                    //Add table headers going cell by cell.
                    oSheet.Cells[1, 1] = "First Name";
                    oSheet.Cells[1, 2] = "Last Name";
                    oSheet.Cells[1, 3] = "Full Name";
                    oSheet.Cells[1, 4] = "Salary";
    
                    //Format A1:D1 as bold, vertical alignment = center.
                    oSheet.get_Range("A1", "D1").Font.Bold = true;
                    oSheet.get_Range("A1", "D1").VerticalAlignment =
                        Microsoft.Office.Interop.Excel.XlVAlign.xlVAlignCenter;
    
                    // Create an array to multiple values at once.
                    string[,] saNames = new string[5, 2];
    
                    saNames[0, 0] = "John";
                    saNames[0, 1] = "Smith";
                    saNames[1, 0] = "Tom";
    
                    saNames[4, 1] = "Johnson";
    
                    //Fill A2:B6 with an array of values (First and Last Names).
                    oSheet.get_Range("A2", "B6").Value2 = saNames;
    
                    //Fill C2:C6 with a relative formula (=A2 & " " & B2).
                    oRng = oSheet.get_Range("C2", "C6");
                    oRng.Formula = "=A2 & \" \" & B2";
    
                    //Fill D2:D6 with a formula(=RAND()*100000) and apply format.
                    oRng = oSheet.get_Range("D2", "D6");
                    oRng.Formula = "=RAND()*100000";
                    oRng.NumberFormat = "$0.00";
    
                    //AutoFit columns A:D.
                    oRng = oSheet.get_Range("A1", "D1");
                    oRng.EntireColumn.AutoFit();
    
                    oXL.Visible = false;
                    oXL.UserControl = false;
                    // saves in My Documents
                    oWB.SaveAs("test505.xls", Microsoft.Office.Interop.Excel.XlFileFormat.xlWorkbookDefault, Type.Missing, Type.Missing,
                        false, false, Microsoft.Office.Interop.Excel.XlSaveAsAccessMode.xlNoChange,
                        Type.Missing, Type.Missing, Type.Missing, Type.Missing, Type.Missing);
    
                    oWB.Close();
    
                } 
                catch(Exception e)
                {
    
                }
    
            }
        }
    }