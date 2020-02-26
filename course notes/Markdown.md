# Markdown

## Cheatsheets

[https://www.markdownguide.org/cheat-sheet/](https://www.markdownguide.org/cheat-sheet/)

[https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

[https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)

    # Markdown Syntax
    
    # Main Header
    ## Sub Header
    ### Sub-Sub Header
    
    *italics*
    
    **bold**
    
    ***bold italic***
    
    This is a `highlight` for individual words / blocks of text
    
    > This can be used to quote a whole paragraph ('blockquote')
    
    We can use regular html for images
    
    <img src="https://cdn.programiz.com/sites/tutorial2program/files/hello-world.jpg" width="250" />
    
    We can also <ins>underline</ins> text
    
    
    ### Code highlighting
    
    ```
    int x = 1;
    ```
    
    	This is tabbed in once
    	It also can be used for code
    
    
    ```java
    int x = 1;
    ```
    
    ```html
    <!DOCTYPE html>
    <html>
    ```
    
    
    
    &nbsp; space
    > blockquote
    *italics*
    **bold**
    `comment`
    <span style="text-decoration:underline">Underline</span>
    ![Alt Text](myimage.jpg "Image Title")
    <img src="myimage.jpg" width="200" />

## Markdown Commands

### Blank Lines

Add blank spaces into your Markdown document using

    &nbsp;

or

    <pre>
    
    </pre>

### Blockquote

> Here is a block quote

> Here is a very long line.  Here is a very long line.  Here is a very long line.  Here is a very long line.  Here is a very long line.  Here is a very long line.  Here is a very long line.  Here is a very long line.  Here is a very long line.  Here is a very long line.  Here is a very long line.  Here is a very long line.  Here is a very long line.  Here is a very long line.  Here is a very long line.

### Italics

    *italics*

This text is in *italics*

### Bold

    **bold**

This text is in **bold**

### Bold and italics

    ***bold-and-italics***

This text is ***both in bold and in italics***

### Comments

    code   // inline comment
      
      // one line comment
      code
      
      /*
      Comment
      Block
      */
      code

`Inline` Comment

here is an `inline comment`

### Code highlighting

    General code

Bash

    # bash comment
    ls

    <!-- html comment -->
    <html>
    hi
    </html>

### Underline

Underline some text <span style="text-decoration:underline">here</span>

### Images

    ![alt text](<https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png> "Logo Title Text 1")

or just use HTML

    <img src="file.jpg" width="200" />

### Tables

| Tables        | Are           | Cool  |

| ------------- |:-------------:| -----:|

| col 3 is      | right-aligned | $1600 |

| col 2 is      | centered      |   $12 |

| zebra stripes | are neat      |    $1 |

    | Tables        | Are           | Cool  |
    | ------------- |:-------------:| -----:|
    | col 3 is      | right-aligned | $1600 |
    | col 2 is      | centered      |   $12 |
    | zebra stripes | are neat      |    $1 |

### Horizontal Rule

    Three or more...
    
    ---
    
    Hyphens
    
    ***
    
    Asterisks
    
    ___
    
    Underscores

### Tickboxes

We can also do tickboxes in Markdown!

Category 1

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

Category 2

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

## Sublime Text And Markdown

### Sublime Text - Install Markdown Plugin

    # Windows
    Control-Shift-P 
    # Linux
    Command-Shift-P

Then choose

    Package Control : install Package

Type `Markdown` and choose the package you want eg

Markdown Preview

or

Markdown Live Preview

### Sublime Text - Viewing Markdown

Type Control + Shift + P (Command + Shift + P on a MAC) then type `markdown` in the search box until `Preview Markdown In Browser` appears. Select this item then choose `Markdown` as the final option which then should display your file in your default browser.

To view just a portion of your Markdown, simply highlight it then choose the above steps and the output will be not the whole file but just your highlighted text.