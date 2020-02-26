# C# MTA 98-361 Official Notes

HTML 98-375
    Terms
    Course Notes
    Introduction, Official Link, Resources, Pre-Reading
    Chapter 1 : Windows Apps, Life Cycle, Manifest File, Security, Hosting, Licensing, Building, Debugging, Testing, Validating, Certifying, Publishing
    Chapters 2-3
    Chapter 2 - HTML, W3C, Mozilla, W3Schools, XHTML, Basic Tags, Entities, Full List Of Tags, DOM, HTML New Elements, Semantic
    Chapter 8 - Javascript Intro
    Chapter 2 - Audio, Video, Geolocation, Canvas, SVG, Local Storage, Session Storage, Media Input With getUserMedia, Images, Raster Images, Vector Images, Figure, FigCaption, Alt Tag
    Chapter 3 - Forms, Input Types, Input Attributes, Placeholder, Required, Pattern, Tables, Definition Lists
    Chapters 4-7 : CSS
    Chapter 4 - Select by Tag/Class/ID, Font, Font-Family, Websafe Fonts, @Font-Face Custom Fonts, Headers, Block and Inline Elements, Position Static/Relative/Fixed/Absolute, Float Right/Left, Border, Overflow
    Chapter 5 - Vendor Prefixes, Layouts - Box Model, Block, Inline, Media Queries, Flexbox, Grid, Columns,
    Chapter 6 -
    Chapter 7 - Border-Radius, Box-Shadow, ToolTips, Text-Shadow, Opacity, Gradient - Linear/Circular/Repeating, Colors RGB/RGBA, Color Stop, Fonts - Web Safe/Embedded/WOFF/EOT/TTF, Transforms - Transate/Scale/Rotate/Skew/2D/3D, Perspective, Transition From Once CSS Style to another, @keyframes between multiple CSS Styles, SVG Filter, Canvas, SVG
    Chapters 8-10 : Javascript
    Chapter 8
    Chapter 9 : SetTimeout, setInterval, xmlHttpRequest, Ajax, localStorage, sessionStorage, appCache, cookies
    Chapter 10 - Gesture, Geolocation, Web worker, Web Sockets, File API, Camera API, Devicemotion, Acceleration, rotationRate
    Deprecated : Hyphens Auto/Manual/None - use Word-Break instead, Exclusions, Chapter 6 - Regions
    Glossary: Font-Awesome, Sectioning Root Tags, @media, BDI Bi-Directional Indicator, Escape Characters, Image IsMap, Image UseMap,
    Measure Up: Touch Interface, 7mm finger touch size, Windows Phone Hardware Buttons, Manifest, SDK, Colgroup/col styling
    Deprecated - Hyphens, Exclusions, Regions, With
    
    
    98-375 TERMS
    
    
    script async
    Script defer
    input disabled
    input.value
    EXEC
    find
    search
    indexOf
    lastIndexOf
    Apply Call Bind
    ctx.moveTo
    ctx.textAlign
    ctx.strokeRect
    ctx.strokeText
    ctx.font
    ctx.transform
    ctx.translate
    ctx.lineTo
    stroke : needs strokeStyle+font+linewidth+strokeText
    strokeText('string',x,y,maxwidth)
    textAlign=start/end/left/right/center
    fill : needs fillStyle+font+fillText
    fillStyle='red'
    stroke/fillText('text',x,y,maxWidth)
    stroke/fillStyle='green'
    lineWidth=3
    lambda
    d integer
    c currency
    f fixed
    w alphanumeric or _
    s white space
    S non-white space
    worker : w=new worker(abc.js); postMessage();onmessage=fn(event){event.data}
    document.querySelector('#myID')
    document.querySelectorAll('.myClass')
    document.write REPLACES LOADED PAGE
    document.write APPENDS TO DOCUMENT OPENED WITH DOCUMENT.OPEN
    open NEW WINDOW or NEW DOCUMENT
    a:link/hover/active/visited
    cursor:crosshair
    id.focus ==> gives focus
    eval("2+2")   returns 4  don't use
    getUserMedia
    input type=file capture
    manifest file
    capabilities
    dependencies
    prerequisites
    publishing the app
    permission : execute or full trust
    position:fixed to page, absolute to first non-static, relative to previous non-static, static
    manifest.appcache : cache always, network never, fallback display if offline
    display:inline-flex
    flex : left, right, center, stretch
    flex : justify
    flex : space around
    flex : space between
    flex-wrap
    flex-pack:justify, start, end, center
    flex-direction:row,column,reverse
    flex-order
    grid-columns/rows
    1fr
    grid-template
    grid-position
    column-count
    column-gap
    column-rule
    word-break:normal/break-all/keep-all
    CSS exclusions
    exclusions:wrap-flow:both,clear,shape-inside,shape-outside
    perspective
    transition
    animation
    @keyframes
    canvas : context
    CSS overflow
    CSS gradient : linear, radial, repeating
    display:grid
    display:flex
    manifest file
    position:fixed(to page), absolute (to first non-static), relative(to nearest non-static), static
    manifest : name, publisher, prerequisites, language, logo, start page
    permission : full trust or execution only
    appcache : cache (always), network (never), fallback(display if a certain folder goes offline and the app tries to access it)
    capture boolean : camera/mic/video/doc
    navigator.getUserMedia
    flex-wrap
    flex-pack : alignment : start,end,center, justify
    navigator.getUserMedia
    display:flexbox / inline-flexbox
    flex-wrap
    flex-pack : alignment : start, end, center, justify
    flex-direction: row, column, row/column-reverse
    flex-order
    display:grid/inline-grid
    grid-colums/rows
    fr=fraction 1fr 2fr 
    grid-template
    grid-position
    column-count
    column-gap
    column-rule
    Exclusions : wrap-flow:both,clear,shape-inside,shape-outside
    border-radius
    box-shadow:h/v-shadow,blur,spread,colour, inset
    colour stop
    canvas : context
    moveTo,lineTo,stroke
    <section>
      <article>
                  <aside>
    
    <video  width="200px"  height="200px" autoplay  controls  muted  ><   src="play.mp4"> 
    <audio 
    codec
    resolution
    em
    pc
    fr
    vh 
    %
    Browser default UNIT
    Ajax    Asynchronous Javascript and XML : SEND AND RECEIVE DATA ACROSS WEB 
        USING HTTP/HTML AS THE CARRIER, ALSO CAN DO IT IN A WAY NOT TO 'BLOCK'
        OTHER ASPECTS OF YOUR PAGE
    Synchronous STREAM OF DATA : BITS ARRIVE IN SEQUENCE, ONE BY ONE.  WAIT YOUR TURN
    Asynchronous  COMMUNICATE WITH DIFFERENT STREAMS OF DATA, ALL DOING THEIR OWN THING
        AND YOU DON'T HAVE TO WAIT FOR OTHER STREAMS TO FINISH
        IN 'PARALLEL'
    XML   Extensible Markup Language   STRUCTURED TEXT FILE CONTAINING ROOT TAG <> WITH    
    
    $.AJAX    { ::::: }
    $.GET   READ DATA   
    $.POST    SEND DATA
    PRIMITIVE = IMMUTABLE = CAN'T BE CHANGED 
    SEMANTIC TAG : NO FUNCTION : LET COMPUTER KNOW YOUR INTENTION FOR CONTENT AT THAT POINT
    SEMANTIC ? GIVE MEANING ..
    Video
    Audio
    <canvas>   FAST JAVASCRIPT DRAWING          PIXEL IMAGE    DOT BY DOT
    <fieldset>    Break up page : block unit
    <svg>    SCALAR VECTOR GRAPHICS      ?     GENERATED USING MATHEMATICS : SCALE INFINITELY  (SMALL OR LARGE)
    <nav>    NAVIGATION : NAVBAR
    GEOTAGGING : LOCATION
    APPCACHE : ITEMS STORED ON LOCAL MACHINE
    LOCAL STORAGE : LARGE ITEMS UP TO 5MB IN SIZE PERMANENTLY ON CLIENT MACHINE
    Thursday Morning TERM REVIEW
    COOKIE  set expiry    4KB MAX        BOTH CLIENT + SERVER
    SESSION COOKIE HAS NO EXPIRY
    APPCACHE   =>   INSTRUCTIONS FOR WHICH FILES TO BE CACHED : 3 SECTIONS
    1. CACHE ? FILES TO BE CACHED
    2  NETWORK ? MUST BE ONLINE (DON'T CACHE) EG LOGIN FILE
    3 FALLBACK ?   THIS WEBSITE IS OFFLINE MESSAGE ETC
    Manifest.appcache   
    JSON   JAVASCRIPT OBJECT NOTATION
    {    A:1,B:2,C:”HI”   }
    JSON.STRINGIFY   ?  FROM    JSON OBJECT TO STRING
    JSON.PARSE       A STRING ? CREATE JSON OBJECT FROM STRING
    XML   EXTENSIBLE MARKUP LANGUAGE   ? database with rows, columns, data    IN TEXT FILE
    <root>
       <field  att=value>
              <item=value>
      </field>
    </root>
    CROSS-PLATFORM ? 
    WINRT      ?    WIN8 MOBILE PHONE APP
    UWP         ?   WIN10       UNIVERSAL APP      (UNIVERSAL WINDOWS PLATFORM)
    XAML            XML GUI FOR BUILDING NEW APPS
    SDK   SOFTWARE DEV KIT
    PUBLISH APP ? WINDOWS STORE
    PREREQUISITE     VERSION OF OS AND OTHER APPS WHICH MUST BE PRESENT, OR APP CANNOT BE INSTALLED
    DEPENDENCY  
    PERMISSION   :   CODE RUNS WITH PERMISSION LEVEL   EITHER   1) EXECUTION ONLY   OR  2) FULL TRUST
    WEB WORKER   var w = new Worker('worker.js')
    1 message host to worker    w.postMessage('hi')
    2. Message worker to host     postMessage('all ok')
    3. Receive message worker      onmessage=function(event){//event.data}
    4. Receive message host      w.onmessage....
    Ajax
    XmlHttpRequest   =  xhr   ? OBJECT WHICH  SEND DATA FROM US TO REMOTE SERVER
    1      var  xhr = new xmlHttpRequest
    2    listen for event data coming back  : TEST  FOR HTTP STATUS 200   &     DATA STATUS==4
                onreadystatechange
    3    open('GET',URL,async t/f)
    4    send()       
    Navigator.geolocation     ?    callback    function(position)
    Position.coords.lat/long
    Navigator.useragent  =>  
    Css Cascading Style Sheet : display only
    Attr     
    Calc   
    Jquery  LIBRARY.   
    LOCAL   .MIN.JS   MINIFIED
    LOCAL   .JS
    CDN  ? CONTENT DELIVERY NETWORK  ?    FAST DELIVERY OF CONTENT WORLDWIDE
    DOM
    Window.document.body.div...
    appendChild  : add to END OF ITEM
    insertBefore  : add  eg  as new FIRST ITEM IN LIST
    createElement('p')
    array
    var x = new Array(4)             
    var x = [1,2,3,4,”hello”,”sausages”]
    push(1)    add at end
    pop()    Remove end               var x = myarray.pop()
    unshift    Add at start
    shift    Remove start
    <script>
    Var x   ? global   OUTSIDE FUNCTION
    Var x   ?  private  INSIDE FUNCTION
    Let x = 7    private in CODE BLOCK  { }
    CONST
    <DIV ID=”X” CLASS=”Y”  Name='z'>
    $('#x')           ONE
    $('.y')            ARRAY
    $('.y')[0]            FIRST AFFECTED ITEM OF CLASS Y
    JQuery
    Document.getElementById('x')                  ONE
                                            sByClassName
                                            sByTagName('p')
                                            sByName('z')
    Document.querySelector('#x')                           ONE
                                                All('.y')                          MANY
    <UL>
    <LI>
    Li:nth-child(0)       FIRST ITEM
    Li:first-child
    Li:last-child
    Li:nth-child(2n+1)  
    <ruby>  =   eg ASIAN CHARACTER SETS     <rt>   HAS INFORMATION IN IT   
    <rp>      BROWSERS WHICH DON'T SUPPORT <ruby>
    
    MANIFEST FILE : XML WHICH DETERMINES PREREQUISITES EG OS, LANGUAGE, FILES, PATH TO SPLASHSCREEN, LOGO, PUBLISHER
    
    
    
      
      
      
      
      
      
    
    
    
    
    Critical Terms
    Overview
    app container - An app container is a separate memory space within a system in which an application runs. An app container prevents corruption of the operating system if the application fails for some reason and enables a user to cleanly uninstall the app.
    app package - An app package is a file that contains an app’s files and folders. The purpose of an app package is for ease of distribution and deployment.
    AppCache - The Application Cache, or AppCache, is an HTML5 feature that enables Web data to be stored locally when a user is offline. AppCache stores resources like images, HTML pages, CSS files, and JavaScript—data that would ordinarily be stored on a server. Because the resources are stored on the client’s hard disk or device, the resources load faster when requested.
    application programming interface (API) - An application programming interface (API) is a list of instructions letting a program communicate with another program.
    application state - The application state is the phase of a running application at any point in time. For Web applications, the application state is created when the Web browser sends the first request for a Web page to the Web server, and it ends when the user closes the browser.
    Cascading Style Sheets (CSS) - Cascading Style Sheets (CSS) is a style sheet language that defines styles for HTML. CSS styles are usually saved in a separate file from the HTML file. This enables you to easily change fonts, font sizes, and other attributes in the CSS file and the changes are reflected across all HTML files that reference the CSS file.
    cookies - Cookies are small files that contain information about the user and the Web site visited and are saved on the user’s computer.
    debugging - Debugging is the process of detecting, finding, and correcting logical or syntactical errors in an application.
    gesture - A gesture is any finger move, which can involve a single finger (one-touch, such as press, tap, press and hold, slide to pan, and so on) or a finger and a thumb (two-touch, such as a pinch and stretch or a turn to rotate).
    Hypertext Markup Language (HTML) - Hypertext Markup Language (HTML) is the language used to describe Web pages. It is a markup language, not a programming language, which means HTML uses markup tags such as <body> and <h1> to describe parts of a Web page.
    Hypertext Transport Protocol (HTTP) - Hypertext Transport Protocol (HTTP) is the protocol that transfers data on the World Wide Web.
    HTML5 - HTML5 is the latest HTML standard and a family of technologies that includes HTML, CSS, and JavaScript. The HTML5 standard won’t be finalized for a few years.
    identity permissions - Identity permissions are sets of characteristics that identify an assembly. Identity permissions protect assemblies (compiled code libraries) based on evidence, or credentials, which is information about the assembly that an assembly must have in order to run.
    JavaScript - JavaScript is a scripting language that adds interactivity to Web pages.
    launcher icon - A launcher icon is a small image that represents an app.
    localStorage - localStorage is a JavaScript method that allows users to save relatively large amounts of data from session to session (persistent data), and there’s no time limit as to how long the data exists.
    markup language - A markup language is a set of symbols and rules to describe the parts of a markup document, like an HTML Web page.
    media queries - A media query is a CSS3 feature that detects the user’s type of screen and sizes the output accordingly.
    Metro-style user interface (UI) - A Metro-style user interface (UI) is the UI used in Microsoft Windows 8. The Metro style UI includes features like a clean, uncluttered look and feel, use of the full screen, large hubs (graphical buttons), and a focus on lateral scrolling.
    namespace - A namespace is a sort of work area or abstract container for related objects (pages, code, etc.). A single app package can have a lot of functionality. To keep all of the components separated so they don’t conflict, a package defines a namespace.
    permission sets - A permission set is a group of permissions. In coding, transparent code executes commands that don’t exceed the limitations of a permission set.
    persistent state information - Persistent state information is data that an application needs after the session ends. Many Web applications need to store data (make it persistent) so that users can pick up where they left off when they return to the site.
    platform-independent - The term platform-independent describes an application that can run on different desktop and mobile device operating systems, such as Microsoft Windows, Internet Explorer, Windows Phone, Mac OS X, Android, iOS, and Blackberry OS.
    scripting language - A scripting language is a programming language that uses scripts and requires no compiler.
    session state - The session state is an application’s working set of data. When a user first requests access to an application, the session state is created. The state ends when the user closes the session.
    sessionStorage - sessionStorage is a JavaScript method that keeps data only for one session (until the browser is closed), which is also referred to as “per-tab storage.”
    touch event - A touch event is the action an application takes in response to a gesture.
    touch-screen emulator or simulator - A touch-screen emulator or simulator is an application that imitates a system that only has touch capabilities.
    validator - A validator is an application that looks for anything that could cause code to be interpreted incorrectly, such as missing or unclosed tags, an improper DOCTYPE declaration, a trailing slash, deprecated code, and so on.
    Windows Runtime (WinRT) - The Windows Runtime (WinRT) is an application architecture, or framework, that sits on top of the Windows 8 kernel. Developers test Windows applications and users run Windows 8 apps within WinRT.
    Windows Store - The Windows Store is an online global marketplace for Metro-style apps. Publishing your app for distribution through the store can possibly turn a good idea into a lucrative venture.
    World Wide Web Consortium (W3C) - The World Wide Web Consortium (W3C) is the main standards body developing specifications for HTML5, CSS3 and other Web technologies.
    application packaging: the process of bundling an application and its resources into an archive format for the purpose of distribution and deployment.
    platform: the type of computer or operating system being used. The platforms referenced for the content of this review kit are Windows®, Internet Explorer®, and Windows Phone 7.
    permissions: the ability of a particular user to access a particular resource by means of his or her user account. Permissions are grouped into permission sets, and every assembly is assigned a set. The .NET Framework defines some standard permission sets, such as FullTrust (implies all permissions) and Execution (permission to only access the CPU).
    credentials: the level of access assigned to a user account. Credentials can be set to Windows Authentication, database authentication, no authentication, or custom authentication.
    hosting: the practice of providing computer and communication facilities to businesses or individuals, especially for use in creating web and electronic commerce sites. To become active, an application or service must be hosted within a run-time environment that creates it and controls its context and lifetime.
    Images, Audio and Video
    attribute - An attribute is a modifier of HTML elements that provides additional information.
    audio element - The audio element enables you to incorporate audio, such as music and other sounds, in HTML documents.
    canvas element - The canvas element is new in HTML5 and creates a container for  graphics, and uses JavaScript to draw the graphics dynamically.
    codec - A codec is a technology used for compressing data.
    compression - Compression reduces the amount of space needed to store a file, and it reduces the bandwidth needed to transmit the file.
    deprecation - Deprecation is the state of an element or attribute that’s been removed from the list of available HTML elements because its functionality is no longer useful.
    doctype - The doctype is an instruction, or declaration, found at the very top of almost every HTML document that associates the document with a Document Type Definition (DTD). When a Web browser reads a doctype declaration, the browser assumes that everything on the Web page uses the language or rules specified in the declaration.
    element - An element is the combination of tags and the content they enclose. An element can describe content, insert graphics, and create hyperlinks. A tag pair or an empty tag is called an element.
    empty tag - An empty tag is a single tag that doesn’t require an end tag, like <br /> for a line break and <hr /> for a horizontal line.
    entity - An entity is a special character, such as the dollar symbol, the registered trademark (a capital R within a circle), and accented letters.
    ©
    ©
    hello charlie
    &
    $
    figcaption element - The figcaption element adds a caption to an image on a Web page, and you can display the caption before or after the image.
    figure element - The figure element specifies the type of figure you’re adding, such as an image, diagram, photo, and so on. This element provides a major benefit: the ability to easily add multiple images side by side.
    global attribute - A global attribute is one you can use with any HTML5 element. Examples of global attributes include id, lang, and class, among many others.
    nesting - Nesting means to place one element inside another.
    raster image - A raster image is an image made up of pixels, such as a photograph. Raster images are most often in JPG format. Other raster file formats that work well on Web pages are PNG, GIF, and BMP.
    render - Render means to interpret or reproduce. When a Web browser or mobile device such as a smartphone opens an HTML file, it renders the content of the page.
    Scalable Vector Graphics (SVG) - Scalable Vector Graphics (SVG) is a language for describing 2D graphics in Extensible Markup Language (XML). SVG technology is not new, but HTML5 now enables SVG objects to be embedded in Web pages without using the <object> or <embed> tags.
    tags - Tags are keywords that help to give an HTML page structure.
    valid - Valid means logically correct. If a Web page adheres to the specifications perfectly, it is considered valid.
    vector image - A vector image is an image made up of lines and curves based on mathematical expressions. A vector image is an illustration, such as a line drawing. Developers often convert vector file formats from programs like Adobe Illustrator or CorelDRAW, which aren’t supported by Web browsers, into PNG or GIF for Web display.
    video compression - Video compression reduces the size of video images while retaining the highest quality video with the minimum bit rate.
    video element - The video element enables you to incorporate videos in HTML documents using minimal code.
    codec: a technology used for compressing data. Audio and video codec compress and/or decompress digital audio data into different formats to retain the highest quality with minimum bit rate.
    data compression: a means of reducing the amount of space or bandwidth needed to store or transmit a block of data, used in data communications, facsimile transmission, file storage and transfer, and CD-ROM publishing.
    semantic: the relationship between words or symbols and their intended meanings. Programming languages are subject to certain semantic rules. A program statement can be syntactically correct but semantically incorrect; a statement can be written in an acceptable form and still convey the wrong meaning.
    video compression: reduction of the size of files containing video images stored in digital form. If not compressed, 24-bit color video at 640 x 480 pixels would occupy almost one megabyte per frame, or over a gigabyte per minute.
    Input Elements
    article element - The article element defines a part of an HTML document that consists of a “self-contained composition” that is independent from the rest of the content in the document.
    aside element - The aside element is used to set off content that’s related to the current topic but would interrupt the flow of the document if left inline.
    autofocus attribute - The autofocus attribute moves the focus to a particular input field when a Web page loads. An example of autofocus is when you open a search engine Web page and the insertion point automatically appears in the input box so you can type search terms without first clicking in the box.
    automatic validation - Automatic validation of input means the browser checks the data the user inputs.
    client-side validation - Client-side validation is the process of validating user input before submission to the server. A browser is often used to validate user input locally.
    datalist element - The datalist element enables you to present the user with a drop-down list of options to select from. Only the options in the list may be selected.
    email attribute - The email attribute requires the user to enter an email address into an input field.
    footer element - The footer element defines a footer for a document or section, and typically contains information about the document or section, such as the author name, copyright data, links to related documents, and so on.
    form input - Form input is the information a user enters into fields in a Web or client application form.
    global attribute - A global attribute can be used with any HTML element; in other words, it’s permitted globally.
    header element - The header element defines a header for a document, section, or article.
    menu element - The menu element presents a list (or menu) of commands, usually with buttons. The W3C prefers that you use the menu element only for context menus, lists of form controls and commands, toolbars, and similar items.
    nav element - The nav element defines a block of navigation links. The nav element is useful for creating a set of navigation links as your document’s primary navigation, a table of contents, breadcrumbs in a footer, or Previous-Home-Next links.
    ordered list - A list that orders the list entries using numbers, by default.
    pattern attribute - The pattern attribute provides a format (a regular expression) for an input field, which is used to validate whatever is entered into the field.
    placeholder text - Placeholder text is text displayed inside an input field when the field is empty.
    required attribute - The required attribute requires information in a field when the form is submitted.
    section element - The section element defines a section in a document, such as a chapter, parts of a thesis, or parts of a Web page whose content is distinct from each other. The W3C specifies uses for the section element to differentiate it from other structure-related elements, mainly that it contain at least one heading and that it define something that would appear in the document’s outline.
    semantic markup - Semantic markup is intuitive markup that gives better meaning or definition to several tags so they make more sense to humans, programs, and Web browsers.
    server-side validation - Server-side validation is the process of a server validating data received from a user input form.
    table - An HTML table contains rows and columns, and is used to organize and display information in a grid format.
    unordered list - A list that displays list entries in a bulleted list.
    validation - Validation is the process of verifying that information entered or captured in a form is in the correct format and usable before sending the data to the server.
    Web form - A Web form is a Web page that provides input fields for a user to enter data, which is sent to a server for processing. From there, the information is stored in a database or forwarded to a recipient.
    CSS Key Terms
    absolute positioning - Absolute positioning is the placement of an element at a geometric position in the display, relative to the first parent element that has a non-static position.
    block flow - Block flow is a positioning method in which an element is separated from other elements by new lines above and below, and fills from left to right the horizontal extent where it appears.
    bounding box - A bounding box is an invisible rectangle, the smallest perimeter of which surrounds a word.
    Cascading Style Sheets (CSS) - Cascading Style Sheets (CSS) is a style sheet language that defines styles for HTML. CSS styles are usually saved in a separate file from the HTML file. This enables you to easily change fonts, font sizes, and other attributes in the CSS file and the changes are reflected across all HTML files that reference the CSS file.
    class - Class is an attribute a Web author uses to provide structure to a document beyond the meaning HTML builds in with elements such as paragraph, header, and so on.
    declaration - The declaration is the style for a specific selector. A declaration has a property, which is a style attribute, and a value.
    float positioning - Float positioning is the flexible placement of elements, enabling them to move as far as possible either to the right or left; text then “wraps” around the element.
    font - A font is a set of characters of a particular size and style.
    font-family property - The font-family property can declare either a specific font, like Garamond or Arial, or a wider family that includes many different fonts, such as “serif.”
    hidden overflow - Hidden overflow is a feature that makes overflow invisible.
    inline flow - Inline flow is a feature that forces no new lines before or after the inlined element, but simply places the element between the content before and after the inlined element.
    monospace - Monospace is a type of font family in which each character is the same width. Monospace is often used for technical material such as formulas, numbers, codes, and so on.
    rules - Rules are statements that tell Web browsers how to render particular elements on an HTML page or how to apply CSS styles to Web pages.
    sans serif - Sans serif is a font style drawn without serifs, such as the Arial font. Serifs are the details at the ends of particular letters; look at the “d,” “p,” and “t” in this sentence for examples of serif characters.
    scrolling overflow - Scrolling overflow is a feature that prevents content that can overflow its box from appearing outside the box. The content appears to be clipped.
    selector - A selector is a feature that defines which HTML elements will be affected by CSS code. For example, in CSS, the p selector means a particular style will be applied to paragraphs. The general syntax for a selector is selector {property: value}.
    visible overflow - Visible overflow is a feature that enables content that overflows it box to appear in the display rather than be clipped or hidden. Visible overflow also writes over the content that follows it.
    CSS Box, Flex and Grid Layouts (Chapter 5)
    block-level element - A block-level element creates boxes that contribute to the layout of an HTML document. Sections, articles, paragraphs, lists, and images are examples of block-level elements.
    border - A border is a colored or transparent line, which can be thin or thick, that surrounds a box. The border is a part of the CSS Box model.
    content - Content is whatever is displayed on a Web page, such as text and images. Regarding the CSS Box model, content is text or images contained within a box. You use the border, margin, padding, height, and width CSS properties to modify various parts of the CSS Box model.
    flexbox - A flexbox is a type of layout that enables relative sizes and positioning of boxes. Flexbox takes available space into account when defining box dimensions. A box can include child boxes that are flexible by height and width.
    flexbox item - A flexible item is a child box. A child box can be flexible or static. The flex property makes child boxes flexible.
    Flexbox Box model - The CSS Flexbox Box model is a layout mode for using flexible boxes in user interfaces.
    grid item - A grid item is a child element of a grid.
    grid layout - A grid layout is a way to structure complex HTML documents using rows and columns to make the design look cleaner and structured.
    Grid Layout model - The CSS Grid Layout model is a model for structuring HTML layouts. This model lets you control the design of sections or entire HTML-based documents using CSS3.
    grid template - A grid template, an approach to grid layouts, is like an empty table into which data can be flowed. A grid template uses alphabetical characters to represent the position of items in a grid.
    inline element - Inline elements are elements designed for laying out text and don’t disrupt the flow of the document. Applying boldface and the new HTML5 mark element are examples of inline elements.
    margin - A margin is the outermost edge of a box, providing space between the box and other boxes in an HTML document. Margins are transparent. The margin is a part of the CSS Box model.
    media queries - A media query is a CSS3 feature that detects the user’s type of screen and sizes the output accordingly.
    padding - Padding is the space between the border of a box and its content. Padding generally takes on the same color as the box’s background color. Padding is a part of the CSS Box model.
    parent/child relationship - The parent/child relationship describes how a parent box can contain one or more child boxes. Boxes contained within a parent box are referred to as child boxes. Child boxes inherit attributes applied to parent boxes unless coded otherwise.
    user interface (UI) - A user interface (UI) is the portion of a Web site or application with which a user interacts.
    vendor prefix - A vendor prefix is a keyword surrounded by dashes, added to the front of a CSS3 property name. The Microsoft Internet Explorer Web browser recognizes the
    -ms- prefix. Vendor prefixes help to ensure CSS3 styles work properly in Web pages during the transition from CSS2 to CSS3.
    CSS Exclusions, Regions (Chpater 6)
    content container - Using CSS Regions, a content container is an area into which content is flowed.
    content source - Using CSS Regions, a content source may be one or more blocks of text in the same or a separate HTML document that holds the content you want to flow through a layout. The content is referred to as a “content stream.”
    CSS Exclusions - CSS Exclusions are another name for positioned floats.
    CSS Regions - CSS Regions are defined areas (regions) of an HTML document where content can flow. Similar to a page layout program, when there’s too much content to fit in one region, the remaining content automatically flows into the next region.
    flow-from - The flow-from property specifies one or more content containers.
    flow-into - The flow-into property specifies a content source.
    hyphenation - Hyphenation is the process of connecting two words with a hyphen mark (-) or breaking words between syllables at the end of a line.
    iframe - Iframes are like mini boxes on a Web page that contain external content embedded in an HTML document, as the content source.
    multi-column layout - Multi-column layout lets you create columns, divide text across multiple columns, specify the amount of space that appears between columns (the gap), make vertical lines (rules) appear between columns, and define where columns break. You create a multi-column layout using CSS3 properties.
    named flow - A named flow is a set of elements taken from the source and to be flowed into a content container.
    positioned float - A positioned float is a CSS construct that enables you to position images, text, and boxes anywhere in an HTML document and then wrap text completely around these elements.
    CSS Graphical Effects (Chapter 7)  
    animation - An animation is the display of a sequence of static images at a fast enough speed to create the illusion of movement.
    border-radius property - The CSS3 border-radius property creates rounded corners around layout elements, like headers, footers, sidebars, graphics boxes, and outlines around images. border-radius is a length, which is usually expressed in pixels or ems but can be a percentage. The length is the radius of the circle that defines the “roundedness” of each box corner
    drop shadow - A drop shadow is a visual effect in which an object is repeated behind and slightly below itself to create the illusion that the object floats over its background.
    gradient - A gradient is a smooth change of colors, either within the same hue, such as from dark green to light green, or starting with one color and ending with a different color, such as starting with blue and ending with yellow.
    keyframe - A keyframe is a construct that enables you to change values anywhere within an animation. You can also pause, resume, and reverse animations.
    linear gradient - A linear gradient is a horizontal, vertical, or diagonal gradient.
    opacity - Opacity is the quality of an object, like an image or rectangle, that does not allow light to shine through; an opaque image is not transparent.
    perspective - Perspective, in terms of drawings and illustrations, is the convergence of lines that give the illusion of depth.
    radial gradient - Radial gradients start from a central point and radiate color out to the edges of a container.
    rotate - To rotate an element turns it clockwise by a specified number of degrees. To rotate an element, you use the rotate() method in CSS and specify the degrees of rotation.
    scale - To scale an element is to increase or decrease its size.
    skew - To skew an element is to stretch it in one or more directions. To skew an element using CSS, you use the skew() method and provide x-axis and y-axis values, in degrees, to create an angular shape.
    SVG filter - An SVG filter is a set of operations that use CSS to style or otherwise modify an SVG graphic. The enhanced graphic is displayed in a browser while the original graphic is left alone.
    transform - In HTML5/CSS3, a transform is an effect that lets you change the size, shape, and position of an element.
    transition - A transition is a change from one thing to another; in CSS, a transition is the change in an element from one style to another.
    translate - To translate an element means to move it, without rotating, skewing, or otherwise turning the image.
    transparency - Transparency is reduced opacity.
    Web Open Font Format (WOFF) - The Web Open Font Format (WOFF) allows Web developers to use custom fonts instead of being limited to the standard Web fonts. WOFF files are compressed True Type, OpenType, or Open Font Format fonts that contain additional metadata.
    Web safe - Web safe refers to a set of standard fonts that are typically located on a user’s computer and render consistently in the majority of Web browsers.
    Javascript (Chapter 8)   
    callback - A callback is a response to an event, such as a script execution in response to a mouse click.
    computer program - A computer program is a recipe we direct the computer to execute that results in a particular display or action.
    dynamic application - A dynamic application is one that adjusts and responds to end particular users or user actions.
    event handler - An event handler is an optional script or executable that handles input received in a program. Handlers are JavaScript code inside the <html> tags (rather than the <script> tags) that execute other JavaScript code in response to an event.
    events - An event is an action that triggers another action to occur.
    function - A function is a segment of a program defined and performed in isolation from other parts.
    identifier - An identifier is the name of a variable or function. Identifiers cannot be the same as words already used in the language; for example, “if ” has a special meaning in JavaScript statements and is not available as a variable name.
    interactivity - Interactivity enables an end user to take an action in an application, usually by clicking a button or pressing a key.
    JavaScript library - A JavaScript library is pre-written JavaScript code.
    jQuery - jQuery is the leading JavaScript library.
    library - A library is collection of resources, like pre-written function code and subroutines, that developers use to create programs. JavaScript builds in a library of useful functions for many common operations.
    methods - Methods are JavaScript functions that belong to objects. Methods differ from functions only in that methods are always associated and used with a particular object.
    subroutines - A subroutine is a function that returns no value.
    validation - Validation is the process of verifying that information entered or captured is in the correct format.
    variable - A variable is a symbolic abbreviation, or name, that stands for a piece of data.
     
    Animations, Graphics and Data (Chapter 9)   
    animation - An animation is the display of a sequence of static images at a fast enough speed to create the illusion of movement.
    AppCache - The Application Cache, or AppCache, is an HTML5 feature that enables Web data to be stored locally when a user is offline. AppCache stores resources like images, HTML pages, CSS files, and JavaScript—data that would ordinarily be stored on a server. Because the resources are stored on the client’s hard disk or device, the resources load faster when requested.
    canvas element - The canvas element is a drawing area under programmatic control.
    cookies - Cookies are small text files that Web sites save to a computer’s hard disk that contain information about the user and his or her browsing preferences.
    data type - A data type is JavaScript’s interpretation of the kind of data a program can work with. Data types include string, number, array, Boolean, null, object, and undefined.
    encapsulate - To encapsulate is to group data and the methods that operate on it under a single name.
    JSON - JSON (JavaScript Object Notation) is a subset of JavaScript, providing a way to store information in an organized, easy-to-access manner.
    Local Storage - Local Storage is an HTML5 feature that uses the localStorage method to allow users to save relatively large amounts of data from session to session (persistent data). It is an improvement on data storage using cookies.
    parsing - Parsing is a term used to describe analysis of complex information into constituent parts.
    recursion - Recursion is a programming technique in which a function calls itself.
    XMLHttpRequest API - The XMLHttpRequest API, sometimes abbreviated XHR, enables you to use JavaScript to pass data in the form of text strings between a client and a server.
    Advanced Features (Chapter 10)  
    accelerometer - An accelerometer is a device that measures acceleration, which is a change in speed or direction over a period of time. The Accelerometer sensor detects forces applied to the device, such as movement (up, down, sideways) and gravity.
    Blob - A Blob is a data type that can store binary data, like images or multimedia files.
    capacitive touch screen - A capacitive touch screen uses electrodes to sense objects touching the screen. Because the object must have conductive properties, a finger works but something like a stylus does not. Most touch-screen smartphones and computer monitors are capacitive.
    civic data - Civic data is location data that’s more easily understood by humans, such as a map or an address like 637 Park Street.
    device-independent - A program or interface that runs software that produces similar results on a wide variety of hardware is also called device-independent.
    File API - The File API allows a browser or application to upload files from local storage to a remote server without the need for a plug-in.
    geodetic data - Geodetic data provides raw location data, such as longitude and latitude, or meters.
    Geolocation API - The Geolocation API defines an interface that provides a device’s location, usually using latitude and longitude coordinates. The API exposes the latitude and longitude to JavaScript in a Web page using the geolocation object.
    gesture event - A gesture event is a type of touch event triggered by a multi-finger gesture. Gesture events receive event objects that contain touch properties.
    local storage - Local storage is persistent data and is useful for things like online to-do lists, contact lists, calendars, and saved shopping cart data. You want this information to be available to the user after the browser closes and the user reopens it at some point. The information is held in persistent memory of Web applications and mobile devices.
    platform-independent - The term platform-independent describes an application that can run on different desktop and mobile device operating systems, such as Microsoft Windows, Internet Explorer, Windows Phone, Mac OS X, Android, iOS, and Blackberry OS.
    polling - Polling is the process in which a browser contacts a Web server periodically (sometimes constantly) to see if new information is available to present to the user. Technologies such as Comet refresh only a portion of a Web page. Comet and similar “push” technologies introduced polling.
    resistive touch screen - A resistive touch screen is made up of several layers, the topmost of which flexes when pressed and pushes into the layer underneath. Sensors detect the pressure, which is how the system knows which part of the screen has been pressed. The touch screens used in hospitals and restaurants are often resistive.
    session storage - Session storage is temporary data that’s kept for only one session, until the browser is closed. All of the data in a session is saved in session storage and then erased from session storage when you close the browser tab or window.
    touch event - A touch event is the action an application takes in response to a gesture.
    touch object - In JavaScript, the touch object detects input from touch-enabled devices.
    touchlist - A touchlist references touch objects; the touchlist includes all of the points of contact with a touch screen.
    Web Hypertext Application Technology Working Group (WHATWG) - The Web Hypertext Application Technology Working Group (WHATWG) maintains a living HTML specification that includes APIs that were not originally part of the HTML5 specification. These include Geolocation, Web Workers, WebSockets, and File API.
    Web Worker API - Web Workers are APIs that allow scripts to run in the background as parallel threads. These background threads can connect to multiple Web pages, fetch real-time data like stock updates, make network requests, or access local storage while the main HTML document responds to the user input like tapping, scrolling, and typing. Web Workers help keep your user interface responsive for users.
    WebSocket API - WebSocket is an API that offers full-duplex communication, which is simultaneous two-way communication, through a single socket over the Internet. Developers use WebSockets mainly for real-time Web applications like chat, multiplayer online gaming, and stock quotes.
    
    
    
    
    
    
    
    
    
    
    
    MTA 98-375 HTML CSS AND JAVASCRIPT
    
    
    
    Official Link
    
    https://www.microsoft.com/en-gb/learning/exam-98-375.aspx
    
    
    Resources Used
    
    
      Official ebook provided by Vitalsource or Skillpipe
      IDE: Visual Studio or Notepad++ or Sublime Text
      Official Microsoft PDF courseware 1) Single Intro PDF 2) Detailed very small PDF files covering all aspects of the course
      Official Microsoft Exam Link
      Firebrand Powerpoints
      Microsoft Powerpoints
      Working code
      index.htm in Showcase folder
      Cookies at JSFiddle https://jsfiddle.net/user/philanderson888 for example cookie code
      AJAX code - some working demos are found in Showcase folder at ajax_01.htm through to ajax_24.htm showing off various points of Ajax
      Course Notes at course-mta-98-375-html-css-javascript.htm
      Measure Up exam files
      Text questions from the book
    
    
    Course Pre-Reading
    
    
    It would be recommended that to take this course you are able to understand and follow along to simple tutorials (with live coding) at
      
      https://www.codecademy.com/learn/learn-html-css 
      https://www.codecademy.com/learn/learn-javascript
    
    Other topics
      
        AJAX  http://www.w3schools.com/xml/ajax_intro.asp
        CSS Grid Model http://www.w3schools.com/w3css/w3css_grid.asp
        CSS Box Model  http://www.w3schools.com/css/css_boxmodel.asp
        CSS Flex Model http://www.w3schools.com/css/css3_flexbox.asp
        HTML File API http://www.w3schools.com/jsref/dom_obj_fileupload.asp
        JSON http://www.w3schools.com/js/js_json_intro.asp
        JavaScript Web Workers http://www.w3schools.com/html/html5_webworkers.asp
        Javascript Web Sockets https://www.html5rocks.com/en/tutorials/websockets/basics/
        Geolocation API http://www.w3schools.com/html/html5_geolocation.asp
        Canvas http://www.w3schools.com/html/html5_canvas.asp
        SVG http://www.w3schools.com/html/html5_svg.asp
        CSS Transformations http://www.w3schools.com/css/css3_2dtransforms.asp
        W3C Official HTML Specification  https://www.w3.org/TR/html5/
        List of HTML tags http://www.w3schools.com/tags/default.asp
        Mozilla HTML Reference https://developer.mozilla.org/en-US/docs/Web/HTML/Element
    
    
    
    
    
    
    
    
    
    
    Software Development Life Cycle 
    
    
    
    Life Cycle : Building An Application From Scratch
    
    
        
    
    
    
    Building Apps
    
    
      Metro Apps : WINDOWS 8
    
        WinRT ==> Windows RUNTIME
    
      Windows 10
    
        UWP Universal Windows Platform app
    
    
          different to .EXE or .MSI
    
          ==> can't install : have to download via WINDOWS STORE APP
    
    
      XAML  ==> BUILDING WITH AN XML INTERFACE
    
    
    
    BUILDING AN APP
    
      MANIFEST FILE
    
        Name, ORIENTATION, PATH TO ICON
    
        CAPABILITIES ==> ASK USER PERMISSION TO USE VARIOUS ASPECTS OF DEVICE
            CAN WE USE CAMERA PLEASE?
    
        
    
      APPLIATION PACKAGE : FINAL 'ZIP' FILE OF ALL RELEASED FILES IN ONE UNIT
    
      
      APPLICATION 'CONTAINER' : MEMORY SPACE THAT YOUR APP RUNS IN (SO AS TO NOT CRASH
          OTHER PARTS OF OS IF APP CRASHES)
    
          ((THINK 'DOCKER'))
    
    
          
    
    
    
    
    What is an application?
    
    Building A Windows Store Application in XAML
    
    
    Host Process
    Application Package
    Application Container
    WinRT called Windows RunTime (in Windows 8) replaced by Windows 10 UWP Universal Windows Platform
    
    Package file
    All of the files inside the application, zipped up and made available for distribution
    Examples include
    Android .apk
    IOS .app
    Windows .exe  .msi
    
    
    Application Manifest File
      
      Contains instructions about the capabilities of the application.
      eg Windows Store App : File is called Package.appxmanifest
      
      Basic Template Example At https://msdn.microsoft.com/en-us/library/windows/apps/br211475.aspx
      
      <?xml version="1.0" encoding="utf-8"?>
      <Package xmlns="http://schemas.microsoft.com/appx/2010/manifest">
        <Identity Name="" 
                  Version="" 
                  Publisher="" />
        <Properties>
          <DisplayName></DisplayName>
          <PublisherDisplayName></PublisherDisplayName>
          <Logo></Logo>
        </Properties>
        <Prerequisites>
          <OSMinVersion></OSMinVersion>
          <OSMaxVersionTested></OSMaxVersionTested>
        </Prerequisites>
        <Resources>
          <Resource Language="" />
        </Resources>
        <Applications>
          <Application Id="" StartPage="">
            <VisualElements DisplayName="" Description=""
                 Logo="" SmallLogo=""  
                 ForegroundText="" BackgroundColor="">
               <SplashScreen Image="" />
            </VisualElements>
          </Application>
        </Applications>
      </Package>
    
      This is used to trigger the screen which says 'This appliction requests access to these features .... Do you wish to grant the application permission to use these features"
      Contains
      IDENTITY OF THE APPLICATION (WHAT IT IS CALLED)
      Identity Name="MyCompany.MySuite.MyApp"           Version="1.0.0.0"
      PUBLISHER OF THE APP 
      Publisher="CN=MyCompany, O=MyCompany, L=MyCity, S=MyState, C=MyCountry">
      DISPLAY NAME
      <DisplayName>MyApp</DisplayName>
      PUBLISHER DISPLAY NAME
      <PublisherDisplayName>MyCompany</PublisherDisplayName>
      PATH TO LOGO IMAGE
      <Logo>images\icon.png</Logo>
      PREREQUISITES (Minimum OS levels required before the application will be permitted to run)
      <Prerequisites>  <OSMinVersion>6.2.1</OSMinVersion>  <OSMaxVersionTested>6.2.1</OSMaxVersionTested></Prerequisites>
      DEPENDENCIES OF THE APP 
      CAPABILITIES OF THE APP (WHAT IS IT GOING TO NEED PERMISSION TO ACCESS EG NETWORK, GEOLOCATION, PHONE CONTACTS, CAMERA ETC)
      <Capabilities>  <Capability Name="internetClient"/>  <Capability Name="musicLibrary"/>  <Capability Name="videosLibrary"/></Capabilities>
      <DeviceCapability Name="microphone"/>  <DeviceCapability Name="webcam"/>
      <DeviceCapability Name="usb">    <Device Id="vidpid:xxxx xxxx">      <Function Type="classId:xx xx xx"/>      <Function Type="name:xxxxx"/>      <Function Type="winUsbId:xxxxx"/>    </Device></DeviceCapability>
      <DeviceCapability Name="humaninterfacedevice">
      <DeviceCapability Name="pointOfService"/>
    
    
    Security
    
      Permissions grant the ability for some code to execute other code : we are not talking about user permissions here but code permissions!
      .NET : Full Trust : Unrestricted access
      .NET : Execution : Run code
      User Authentication and access
      Users can log in via a variety of methods determined by the programmer
      OAuth : very popular today (not in this exam!) : connects your website to any other method of authentication such as
      Google 
      Facebook
      Windows Authentication : handled by Windows
      Database Authentication : handled by the programmer
      Anonymous : zero authentication
    
    
    Hosting
      
      Your web application must be hosted somewhere on a machine that is accessible from where your users have to access it.  Normally this means the internet but it could also mean a local web-based application stored fully on a secure LAN just for internal use only.
      Factors required for web hosting
      Reliability
      Scalability
      Technial Support when required
      Cross-platform support : normally either a Windows or a Linux based web hosting package is used. But support for other clients would be normal, like IOS and Android for example.
    
    
    
    
    
    Building Your App
    
      Windows SDK
        https://developer.microsoft.com/en-us/windows/downloads/windows-10-sdk
      Android SDK
        https://developer.android.com/studio/index.html
      IOS SDK
        https://en.wikipedia.org/wiki/IOS_SDK
    
      https://developers.facebook.com/docs/ios/
      Launcher Icon
    
    
    
    
    
    Debugging
      
      Syntax Error
    
      Logical Error
    
      Exception
    
    
    
    
    Testing
    
      Touch Screen Testing
    
      Can use mouseTouch events
      Can use an Emulator to simulate touch events
    
    
    
    
    
    Validating your syntax
    
      W3C Page Validation
    
        https://www.w3.org/developers/tools/
        http://ready.mobi/
        validator.w3.org   
    
        Put your site into this URL: it will validate and list errors
    
    
                  
    
    
    Certifying Your App : Windows App Certification Kit (inside SDK) - use to test app and get it validated by Microsoft
    
      https://msdn.microsoft.com/en-us/library/mt637086%28v=vs.85%29.aspx?f=255&MSPPError=-2147217396
      https://developer.microsoft.com/en-us/windows/develop/app-certification-kit
      https://msdn.microsoft.com/en-us/library/mt674655(v=vs.85).aspx
      https://msdn.microsoft.com/en-us/windows/uwp/debug-test-perf/windows-app-certification-kit
      https://msdn.microsoft.com/en-us/library/windows/hardware/br230771(v=vs.85).aspx
    
    
    
    
    Publishing Your App
    
      Licensing
    
        EULA End User License Agreement
    
          Is what you agree to before you start using an application (I agree to these terms...)
      
        Open Source
      
          MIT License
      
          SourceForge.Net
      
        
    
    
    
    
    
      Windows Store
    
       CREATE STORE ACCOUNT; SUBMIT; TEST, UPLOAD FOR OTHERS TO TEST; CREATE AND UPLOAD FINAL VERSION TO STORE; GET FINAL APPROVAL
    
       https://developer.microsoft.com/en-us/store/publish-apps
    
      Android Publishing
    
       https://developer.android.com/studio/publish/index.html
       https://developer.android.com/studio/publish/app-signing.html
    
      IOS Publishing
    
        https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppDistributionGuide/SubmittingYourApp/SubmittingYourApp.html#//apple_ref/doc/uid/TP40012582-CH9-SW1
        https://code.tutsplus.com/tutorials/how-to-submit-an-ios-app-to-the-app-store--mobile-16812
        https://developer.apple.com/app-store/review/guidelines/
    
    
    
    
    
    
    
    
    Chapter 2 : HTML
    
    
    
      HTTP IS A PROTOCOL (LANGUAGE) USED TO SEND DATA ACROSS THE WEB
    
      create a page
    
        HEADER (METADATA)   SEND PAGE ACROSS WEB
    
        BODY OF PAGE (HTML DATA)
    
    
    
      WEB SERVER ===> 'RENDER PAGE' ==>  SEND HTML TO CLIENT  ==> USE 'BROWSER' TO 
                DISPLAY HTML TO USER
    
      HTML  
        <>
        PLAIN TEXT
    
      DOM STRUCTURE Document Object Model
    
      WINDOW
    
        ==> DOCUMENT
    
          ==> HTML
    
            ==> HEAD
    
              METADATA
    
            ==> BODY
    
              <DIV CLASS="CONTAINER">
    
                <BUTTON>
    
    
      <img src="mypic.jpg">
    
        img   Element
        src   Attribute
        mypic.jpg Value
    
      
      
    Central Organisations
    
      w3.org    WWW Consortium
    
      ietf.org  INTERNET ENGINEERING TASK FORCE
    
          RFC REQUEST FOR COMMENTS
      
                
    
    
    Learning 
    
      w3.org    OFFICIAL STANDARDS    TOUGH READING
    
      Mozilla   NETSCAPE : FOUNDATIONAL PART OF WEB
          Excellent 
          
      w3schools ** START HERE **
    
      codecademy  DYNAMIC CODING
    
      CODE.ORG
    
    
      
    Standards
    
      http://javascript.crockford.com/code.html
      
      
    
    <meta>
    
      <head>
        <meta>
    
          METADATA IS data about data
    
            critical data concerning your web page
    
          <meta charset="utf-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1">        
      
          UTF-8  =   'UNICODE'  DEFAULT "ENCODING"  WAY TEXT IS CREATED/STORED
    
            ASCII ((COMMON ENGLISH CHARACTERS ONLY))
    
          UTF-16    ABLE TO DISPLAY CONTENT FROM ANY LANGUAGE IN WORLD
              WITH ANY CHARACTER 
    
    HTML / CSS / JAVASCRIPT VALIDITY
    
      caniuse.com
    
        FEATURE IS CURRENT/VALID ==> SHOULD I USE IT???    
        
            
    
    Colours
    
    
    #eee;
    #eeeeee;
    rgb(R,G,B);
    rgba(R,G,B,Alpha)
    CMYK
    
    
    
    
    
    
    
    
    
    What is HTML?
    
    It is a language used to transmit information across the internet from one machine to another
    Data is transmitted from one machine (client) to another (server), and vice-versa.
    HTML data is split into two parts : the header information which tends to be INVISIBLE then the body information which produces the visible page.
    HTML is PLAIN TEXT
    HTML can be EDITED WITH ANY TEXT EDITOR
    HTML souce code can be VIEWED FOR ANY PAGE (Inspect Element on any web page)
    
    
    What is the structure of HTML?
    
    HTML uses something called the DOM (Document Object Model) model to produce data which can be viewed (rendered) on a page.  Data is stored on the server in text files called .htm files and then when it is sent to the client, the browser is a program which takes this data and produces output for the viewer to see.
    
    Who's in charge of the development of HTML?
    
    W3C the World Wide Web Consortium is a group of companies and organisations which steer the development of HTML and other web-related standards.
    
    Website at https://www.w3.org
    
    Follow at https://twitter.com/w3c
    
    Where are the best places on the web to investigate and learn HTML?
    
    W3C Official Site 
    Mozilla HTML reference 
    W3Schools to learn
    CodeCademy to learn with dynamic editor
    Code.org
    
    
    XHTML is a stricter form of HTML which enforces 1) lower case tags 2) all start tags must have a closing tag etc..
    
    
    
    Building A Basic Web Page
    
    <tag></tag>
    
    Used to open and close all documents within an HTML page
    Every opening <tag> must have a corresponding </tag> closing tag
    Some tags are 'self closing' such as <input />
    <!DOCTYPE html>
    
    <html>
    
    <head>
    
    <meta>
    
    'meta' data is DATA ABOUT DATA so the <meta> tags will hold information about the web page and some of the data within it
    <meta charset="UTF-8">  where UTF is a 2-byte character set used to represent all of the languages in the whole world.  Using it we can represent any character in any language which is quite useful!!!
    
    <title>
    Goes within <head>
    Note that "title" is an attribute that can be used to generate hover text also eg 
    <span title="display this text on hover">Hover Over Me</span> produces Hover Over Me 
    <body>
    Defines visible part of document
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    HTML tags
    See Entire List Of HTML tags At These Locations
    
    Learning Material
    http://www.w3schools.com/tags/
    Official Reference
    https://developer.mozilla.org/en-US/docs/Web/HTML/Element
    W3C Official Reference
    http://w3c.github.io/html-reference/elements.html#elements
    CanIUse.Com
    
    Use to see if a particular feature is supported by a particular browser
    Rendering engines : be aware different browsers 'render' or display data using different mechanisms called 'rendering engines'.  
    https://en.wikipedia.org/wiki/Comparison_of_layout_engines_(HTML)
    Discussion : Blink is a newer engine run by Google, Opera and Samsung https://en.wikipedia.org/wiki/Blink_(web_engine)
    <strong>
    
    <em>
    <small>
    
    <hgroup> contains <h1>...to <h6> tags
    
    
    
    
    
    
    
    
    
    
    
    What is the DOM Model?
    Document Object Model
    
    It is a clear hierarchy of every object laid out correctly and finding its place on the page, so we can locate every item uniquely  using a simple hierarchy system. 
    WINDOW ==> DOCUMENT ==> HTML ==> BODY ==> ELEMENT ==> ATTRIBUTE ==> VALUE
    <div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    HTML5
    
    
    HTML5 Structure Elements 
    
    Nav
    Header
    Section
    Article
    Aside
    Footer
    
    
    HTML5 Semantic Elements
    
    
    These elements may not actually DO ANYTHING but they convey MEANING to the BROWSER PROGRAM and possibly to the END USER also.
    A good example will be <header> or <footer> which don't actually do anything but can be used to clearly mark where the page header and footer go.
    
    
    List Of HTML5 Semantic Elements Below:
    
    
    <article>    Defines an article
    <aside>    Defines content aside from the page content
    <details>    Defines additional details that the user can view or hide
    <figcaption>    Defines a caption for a <figure> element
    <figure>    Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.
    <footer>    Defines a footer for a document or section
    <header>    Specifies a header for a document or section
    <main>    Specifies the main content of a document
    <mark>    Defines marked/highlighted text
    <nav>    Defines navigation links
    <section>    Defines a section in a document
    <summary>    Defines a visible heading for a <details> element
    <time>    Defines a date/time
    http://www.w3schools.com/TAGS/tryit.asp?filename=tryhtml5_time
    Outlining : automatically splitting page up into sections eg at https://gsnedders.html5.org/outliner/ 
    
    
    
    
    ... Interrupt to cover basic Javascript ....
    
    
    
    
    
    
    
    
    
    
    
    
    Javascript
    
    
      Javascript 'engine' is a mini operating system which runs within your browser
    
        Very powerful  ==> NEW TECHNOLOGIES NODE.JS
    
              JAVASCRIPT ON CLIENT AND SERVER
    
    
    Running Javascript
    
        Javascript:alert('hello')
    
        Chrome F12 Console - live Javascript
    
        INTERNAL  (ON PAGE)
    
        <button onclick="fnDoThis()">Click Here</button>
    
          click EVENT
          onclick METHOD/FUNCTION/HANDLER
                 
        <script>
          function fnDoThis(){
            // do stuff here
          }
        </script>
    
    
          EXTERNAL
    
        <script src="script.js"></script>
    
          LINK TO FILE IN SAME FOLDER     
    
                src="folder/sub/script.js"    SUB-FOLDER
    
                src="../../folder/script.js"    HIGHER LEVEL FOLDER
    
          
    
        EXAM : NOTE : 
    
          <script src="script.js" ><script>
    
    
         INLINE
    
        onclick="alert('hello')";
    
          
      jQuery LIBRARY
    
        <script src="....path.to.jquery.library"></script>
    
            LOCAL
            WEB
    
              
        .min.js   MINIFIED : REMOVE EVERYTHING POSSIBLE INCLUDING SPACES
        .js   
    
    
      Other Libraries
    
        YUI
        MoTools
    
    
    Async
    
        <script async src="abc.js"></script>    
    
    Immediate
    
        <script>alert('hello')</script>     ALERT STRAIGHT AWAY
    
    
    Defer
    
        <script defer    DON'T RUN SCRIPT UNTIL PAGE LOADED
    
    
    
    jQuery
    
        $(document).ready(function(){
    
          // WRAP ALL JQUERY CODE TO ENSURE IT ONLY RUNS AFTER 
          // FULL HTML PAGE HAS FINISHED LOADING
    
        });
    
      
    Selecting elements
    
    
      give element a 
          ID    ID="X"
          CLASS   class="green"
          
      or select by TAG  
    
    
      document.getElementById(x)
      document.getElementsByClassName('green')
      document.getElementsByTagName('h3')
    
      document.querySelector('#x')                 (all) as well
    
      $('#x').      ID
      $('.green')   CLASS
    
    
    
    
    
    Amending Elements
    
    
      document.getElementById('x').innerHTML = "<p>HI</p>"
    
                                  .width="200px"
    
                                  .setAttribute("width","200px");
      
    
    
    Creating Elements
    
    
    var text_node = document.createTextNode("some text");
    var paragraph_node = document.createElement('p');
    paragraph_node.appendChild(text_node);
    document.body.insertBefore(paragraph_node,document.getElementById('start_point'));
    
    
    
    
    
    Declaring variables
    
    
      var
    
        Global : all functions
    
          <script>
            var x=1;      global
    
    
    
        Local : within function
    
          function y{}{
            var z=2;      LOCAL INSIDE FUNCTION   
          }
        
          // z not visible HERE
    
      
        MISTAKE :    X=7;    (NO VAR)  ==> NO ERROR
    
        use scrict;   FIRST LINE OF CODE ==>  forces var declaration
    
      let 
    
        within a BLOCK OF CODE EG A FOR LOOP 
    
        let t = 22;     VALID ONLY IN THE LOCAL CODE BLOCK
    
    
    
    
      const
        const c = 15;     FIXED
    
    
      scope = visibility of element
    
      
    
    Data types
    
      CAN REASSIGN A VARIABLE LIVE
    
        var x = 1;
        var x= "hi";
      
      String
      number
      Boolean     var x=true
      Null      var x=null
      Undefined   var x;
      Date      var d = new Date("25 Sept 2017 08:17")
            var d = new Date()      NOW
    
          getDate() 22 => 22nd of the month
          getDay()  3 =>  Monday 1   Wed 3    Sunday 7 (or zero)
          getMonth()  zero based counting 0=jan 1=feb dec=11
          
      Object    same as JSON   
        
          {
            a:1,
            b:"hi",
            c: { z:22 }
    
          }
    
      Array
    
          var myArray=[1,2,3];
          myArray.push()    add to end
          myArray.pop()     from end
          
                  var z=myArray.pop()  
    
          myArray.shift()   remove from start
          myArray.unshift() add to start
      
    
      Declare a variable
    
            var x;    
    
              DECLARED BUT "UNDEFINED"
    
            var x="1",y=1,z=3;
    
          
    
      JSON 
    
        var y = {
          a:1,
          b:"some string"
        }
    
        y.a
        y.b
        y.b.length
        y.b["length"]
    
    
        EXTEND AN OBJECT (ADDING ATTRIBUTES)
    
        y.newProperty=16;
    
        y.prototype.newPropertyB = 77;     // ADD NEW CLASS VALUE TO STRUCTURE
    
    
    Input/Output
    
      alert('hi')
      confirm('are you sure')     
      prompt('what is your name',"no name")
    
    
        
    onload() event
    
    
      <body onload="dothis()">   CAN BE USED TO RUN A FUNCTION AFTER PAGE LOADS
    
      OR
    
      $(document).ready(function(){
          // code 
      });
    
    
    
    Validation
    
    
    Input can be validated eg isNaN() can be used to test if an item is a number or not.
    
    
    
    
    Chapter 9 : SetTimeout, setInterval, xmlHttpRequest, Ajax, localStorage, sessionStorage, appCache, cookies
    
    
    
    
    SetTimeout and SetInterval
    
    
    
    setTimeout      SETS A DELAY
    
      setTimeout(doThis,after_this_delay);
    
    
    setInterval     REPEAT LIKE A CLOCK
    
    
      setInterval(doThisFunction,repeat_function_every_x_milliseconds);
    
    
    
    
    Creating elements eg an image
    
    
    document.createElement('img');
    img.src
    img.width
    img.height
    document.body.appendChild(img)
    
    
    
    
    
    
    
    
        
        
    
    HTML Continued -  Audio, Video, Geolocation, Canvas, SVG, Local Storage, Session Storage, Media Input With getUserMedia, Images, Raster Images, Vector Images, Figure, FigCaption, Alt Tag
    
    
    
    
    Other Items We Will Be Looking At In This Course
    
    
    <audio>
    play audio files natively from within HTML browser without any other plugins
    <video>
    play video files natively from within HTML without any other plugins like flash or silverlight
    Geolocation 
    Detect position of phone on the globe
    Canvas
    Draw images using Javascript
    CSS Media queries : use CSS to detect screen size and adjust display accordingly
    Modernizr
    https://modernizr.com/docs/#what-is-modernizr
     if (Modernizr.awesomeNewFeature) {
        showOffAwesomeNewFeature();
      } else {
        getTheOldLameExperience();
      }
    Application Storage
    Session Storage
    Local Storage
    
    
    
    <input> tag to connect to camera, video and microphone
    
    input type="file" accept="image/*;capture=camera"
    input type="file" accept="video/*;capture=camcorder"
    input type="file" accept="audio/*;capture=microphone"
    
    navigator.getUserMedia Javascript function to access camera, video and microphone
    https://www.html5rocks.com/en/tutorials/getusermedia/intro/
    function hasGetUserMedia() {
      return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia || navigator.msGetUserMedia);
    }
    
    if (hasGetUserMedia()) {
      // Good to go!
    } else {
      alert('getUserMedia() is not supported in your browser');
    }
    navigator.getUserMedia
    
    https://www.html5rocks.com/en/tutorials/getusermedia/intro/
    
    Examine working example from your phone at this URL : goo.gl/dUsrzH
    
    Rarer elements
    
    
    <command>
    <mark>
    <time>
    <meter>
    <progress>
    <details>
    Provides a drop-down for content
    http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_details
    <time>
    
    
    
    
    
    HTML5 changed elements
    
    
    Deprecated means NO LONGER USED (may still work but avoid!)
    
    <font> replaced by CSS styling
    <basefont>
    <center> replaced by CSS
    <strike>
    A few elements have CHANGED THEIR MEANING
    
    <b>
    WAS : bold
    NOW : use CSS for bold effect
    <i>           
    WAS : italic
    NOW : use CSS for bold effect
    <u>
    WAS : underline
    NOW : use CSS for underline effect
    
    
    
    
    
    
    
    
    Images
    
    
    Raster Image (with pixels)
    
    Vector Image (scalable)
    
    <img>
    
    <figure>
    
    <figcaption>
    
    <alt>
    
    Used to display alternative text when the image cannot load for some reason
    
    
    
    
    
    Canvas
    
    
    <canvas>
    
    Better for complex scenes, real-time mathematical animations, high-performance elements (filters and ray tracers), and video manipulation.
    Canvas is better for real time data
    Drawn images cannot be modified by scripting and CSS.
    Image types are bitmaps and not easily scalable.
    Must add an ID to add the element to the HTML DOM
    Must specify which application to run when canvas is clicked
    <script> has two functions
    Firstly : draw interface
    Secondly : process click event
    Sample Game
    https://msdn.microsoft.com/en-us/library/gg589521?f=255&MSPPError=-2147217396
    Test for browser compatibility
    
    try{
        document.createElement(“canvas”).getContext(“2d”); 
        document.getElementById(“support”).innerHTML = “HTML5 Canvas is supported in your browser.”;
    }
    catch (e) {
        document.getElementById(“support”).innerHTML = “HTML5 Canvas is not supported in your browser.”; 
    }
    
    
    Sample Canvas Application
    
    See lab 2.2 for Sample Canvas Application
    
    Run this code eg at http://www.onlinehtmleditor.net/
    
    function drawDiagonal() {
    var canvas = document.getElementById('diagonal'); //creates a css id
    var context = canvas.getContext('2d');
    // Save a copy of the current drawing state to be restored upon exit
    context.save();
    // Move the drawing context to the right and down using transformation
    context.translate(70, 140);
    // Draw the same line as before, but using the origin as a start
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(70, -70);
    context.stroke();
    // Restore the old drawing state
    context.restore();
    }
    window.addEventListener("load", drawDiagonal, true);
    
    
    <canvas id="diagonal" width="400" height ="400";>
    </canvas>
    
    
    
    
    
    var myCanvas = document.getElementById('myCanvas01');
    var ctx = myCanvas.getContext('2d');                //CRITICAL LINE TO CREATE 
                                                        //JAVASCRIPT CODE FOR CANVAS
    ctx.fillStyle = "#FF0000"               // ff RED FULL  00 ZERO  00  ZERO    
    ctx.fillStyle = "#F00"                 // same as above, shorter
    ctx.fillStyle = "red";                
    
    ctx.fillStyle = "rgb(255, 0, 0)";
    ctx.fillStyle = "rgba(255, 0, 0, 0.5)";   // alpha = 0.5 tranparancy
    
    
    
    
    
    
    
    SVG
    
    
    <svg>
    
    Better for static images and high-fidelity documents for viewing and printing.
    Objects are part of the Document Object Model (DOM); they can be modified by scripting and CSS at any time.
    Vector graphics are scalable.
    Sample Game
    https://msdn.microsoft.com/en-us/library/gg589521?f=255&MSPPError=-2147217396
    
    
    Canvas VS SVG
    
    
    https://msdn.microsoft.com/en-us/library/gg193983%28v=VS.85%29.aspx?f=255&MSPPError=-2147217396#Using_Canvas_AndOr_SVG
    
    
    
    
    Audio and Video
    
    
    Codec
    
    Codec is short for ENCODE / DECODE and is used to mean the art of taking a video or audio file, saving it for use as a single file (ENCODING) and then playing it back again on demand (DECODING).  A CODEC is a means of doing this ie different CODECS are used on different platforms to produce the same result ie to play the file
    Compression
    
    Is the art of making a file smaller
    Data compression uses various techniques to reduce the size of data blocks
    Video/audio/image compression may or may not reduce the image quality
    Lossy WILL LOSE DATA (FOREVER!) eg BMP => JPG, WMA => MP3, WMV => MP4
    Lossless means that ALL THE DATA IS SAVED even though the file takes up less space  EG WMA => M4A
    <audio>
    
    Now comes NATIVE IN HTML5!!!
    <audio>
    preload
    controls
    autoplay
    autoloop
    metadata
    canplaytype(type)
    currentTime
    duration
    play()
    pause()
    File types supported
    mp3
    m4a
    wav
    ogg
    aac
    
    
    
    function playAt(seconds){
    var audio = document.getElementsByTagName("audio")[0];
    audio.currentTime=seconds;
    audio.play();
    }
    
    function restart(){
    var audio = document.getElementsByTagName("audio")[0];
    audio.currentTime=0;
    audio.play();
    }
    
    
    <audio controls="controls">
    <source src="BuffaloChickenDip.mp3" />
    Your browser does not support the audio element.
    </audio>
    <button title="Play at 15 seconds" onclick="playAt(4.5);" >4.5
    Seconds</button>
    <button title="Restart Audio" onclick="restart();">Restart</button>
    
    
    
    
    
    
    
    Video
    
    <video>
    
    Now comes NATIVE IN HTML5!!!
    src multiple src elements can be used to define the file to be used to play the video.  The browser will use the first valid source file that it can play.
    width,height of the video
    controls : if present then the play/pause/forward/rewind controls are visible on the screen for the user to use
    poster : image to display while the initial video is downloading so the user is not staring at a blank screen but has something to look at 
    autoplay : automatically begins playing once the video has buffered (annoying adverts on pages do this also!)
    play
    pause
    preload
    seeking
    volume
    fullscreentoggle
    captions/subtitles
    track
    
    <video width="320" height="240" controls="controls">
    <source src="travelVideo1.mp4" type="video/mp4" />
    <source src="travelVideo1.ogg" type="video/ogg" />
    Your browser does not support the video tag.
    </video>
    
    
    
    <video width="320" height="240" controls="controls" poster =
    “FrenchLesson1.png”>
    
    
    
    Chapter 3 - HTML Continued - Forms, Input Types, Input Attributes, Placeholder, Required, Pattern, Tables, Definition Lists
    
    
    Forms
    Document Object Model
    
    Input Elements
    
    Text Field (type="text")
    Number Field (type="number")
    Pattern
    Date Field (type="date)
    URL (type="url")
    Email (type="email")
    Password (type="password")
    Datalist
    Used to provide 'autocomplete' as users find an item within a pre-determined list
    <datalist>
    <option value="x">
    url    For entering a URL. It must start with a valid URI scheme, (for example http://, ftp:// or mailto:).
    tel    For entering phone numbers. It does not enforce a particular syntax for validation, so if you want to ensure a particular format, you can use pattern.
    email    For entering email addresses. By default it will only take one, but if the multiple attribute is provided, a comma separated list of email addresses is valid.
    search    A text input field styled in a way that is consistent with the platform's search field.
    number    For numeric input, can be any rational integer or float value.
    color    For choosing colors.
    range    For number input, but unlike the number input type, the value is less important. It is displayed to the user as a slider control.
    datetime    For entering a date and time value where the time zone is provided as GMT.
    datetime-local    For entering a date and time value where the time zone provided is the local time zone.
    date    For entering a date (only) with no time zone provided.
    time    For entering a time (only) with no time zone provided.
    week    For entering a date that consists of a week-year number and a week number, but no time zone.
    month    For entering a date with a year and a month, but no time zone.
    
    
    Demo - show form submission and show how the items are appended to the URL on submission
    
    
    Input Attributes
    
    
    placeholder
    
    
    required
    
    
    pattern = Regex
    
    
    used to validate the user input against a very specific arrangement of letters, numbers and characters specified inside the pattern /... / string
    pattern=“\d{3}-\d{4}” forces ddd-dddd where d stands for any alphabetic character 
    
    let this site teach you (https://regexone.com/)
    
    then move on to more advanced playing around with regular expressions here - http://regexr.com
    
    
      \s    whitespace
    
      \d  number
    
      \w  word (character)
    
      ^ starts with
    
      $ ends with
    
      a*    means 0 or more instances            aaaa OK
    
      a+    means 1 or more instances
    
      a?    means 0 or 1 instance 
      
      [^9]   not 9
    
    
    
    
    
    
    
    autocomplete
     specifies if an element may have autocomplete enabled
    
    autofocus
     this element will get the focus when the page loads
    
    list - refers to <datalist>
    
    max / min eg of number element
    
    maxlength of input element
    
    
    
    Validation Of User Form Input
    
    
    
    Lab : Create a form and validate different types of input
    New Form Elements in HTML5
    
    What do the new form elements (progress, meter, datalist, keygen, and output) add to a web page? 
    Progress is a control the shows the status of a task being completed such as a file being uploaded. 
    Meter is used for scalar measurement within a known range such as temperature or weight measurement. 
    Datalist is used to show a list of options; it is used with the new list attribute for the input element. 
    Keygen is a control for key-pair generation. 
    The output control displays the result of a calculation; an example would be the sum of the values of two input elements. (NOTE: These are not supported in IE9)
    
    
    Output Elements
    
    
    Tables
    
    <table>
    <caption>
    <thead>
    <tbody>
    <tfoot>
    <tr>
    <td>
    <col> for styling
    <colgroup> for styling
     
    
    Alternative To Table - Definition List
    
    Note : Can be called either Definition List or Description List
    <dl> Definition List
    <dt> Definition Tag
    <dd> Definition Detail
    
    
    
    
    
    
    
    
    
    
    
    
    Chapter 4 : CSS Selectors, Fonts, Font-family, Websafe Fonts, @Font-Face Custom Fonts, Headers, Block and Inline Elements, Position Static/Relative/Fixed/Absolute, Float Right/Left, Border, Overflow
    
    
    
    CSS Styling
    
    
    CSS Selector
    
    
    Basic CSS Lab : 3.1
    
    
    Font
    
    
    Arial
    Serif
    
    monospaced fonts like Courier
    
    font-family
    
    Web-Safe Font
    WOFF Web Open Font Format
    Content Flow
    
    
    Typography And Fonts
    
    
    What are fonts?
    
    Fonts are files which are stored on a computer.  When a particular letter is requested to be viewed on the screen it is 'rendered' (displayed) with the help of the font files already present on that computer.
    
    fonts are FILES DOWNLOADED TO YOUR COMPUTER : USED TO DISPLAY
    
        FILE EXTENSION
    
          .eot    EMBEDDED OPEN 
          .ttf    TRUE TYPE FONT
    
      web font
    
      web-safe font
    
        FONT GUARANTEED TO WORK IN NEARLY ALL BROWSERS
    
    
    
    
    Discussion Introduction And Demo : Some Example Of Latests Fonts
    
    https://www.myfonts.com/hotnewfonts/
    
    What files are used to create fonts?
    
    Common ones are
    
    EOT Embedded Open Font
    TTF True Type Font
    OFF Open Font Format
    WOFF Web Open Font Format
    
    Support For Fonts
    
    Support for fonts is not universal but differs from operating system to operating system.
    
    EOT : Microsoft only!
    TTF : very good - see http://caniuse.com/#feat=ttf
    OTF : very good - see http://caniuse.com/#search=otf
    WOFF : very good  - see http://caniuse.com/#search=woff
    SVG fonts : Apple only - see http://caniuse.com/#feat=svg-fonts
    
    
    Using A Font On A Web Page
    
    <font> tag is now deprecated.
    
    Fonts are set on a page using CSS font-family declaration eg font-family:arial to include arial font on a page.
    
    Web-safe Fonts
    
    These fonts are included in most operating systems so are counted as safe to use on your web page with the minimum of fuss.
    
    http://www.w3schools.com/cssref/css_websafe_fonts.asp
    https://www.tutorialspoint.com/html/html_fonts_ref.htm
    http://www.cssfontstack.com/
    
    Web Fonts
    
    
    These fonts have to be installed in order to be used.
    
    They are installed for a web page by downloading the font then including the link to that font on the website using the CSS @font-face command
    
    CSS @font-face {     font-family: FONT-NAME;     src:url('path-to-font-file.eot');   font-weight: normal;   font-style: normal;    }
    
    
    
      @font-face{
        font-family: CustomFontName;
        src:url('http://get_font_from_here');
      }
    
      <div font-family:CustomFontName>
    
                www = > font squirrel
    
    
    
    
    Font stacks are used to declare multiple fonts in case the first (preferred) ones are not supported
    font-family: Chunkfive, Georgia, Palatino, Times New Roman, serif;
    Examples of web fonts
    http://www.cssfontstack.com/Web-Fonts
    https://fonts.google.com/
    WOFF Web Open Font Format
    Is an open standard for managing fonts
    https://developer.mozilla.org/en-US/docs/Web/Guide/WOFF
    Other links
    Create, download and use fonts at Font Squirrel 
    https://www.fontsquirrel.com/
    Possible lab : download and use ChunkFive web font
    Instructions at 
    http://sixrevisions.com/css/font-face-guide/
    Font at 
    http://www.fontex.org/download/Chunkfive.otf#
    
    
    
    
    
    Inline vs Block
    
    
    
    Block Elements
    
    Header H1..H6
    <div>
    <p>
    
    
    Inline Elements
    
    <span>
    
    
    
    Display:block
    Display:inline
    Display:inline-block - can have a width
    
    
    Float
    
    
    float:left
    float:right;
    clear:both
    
    Clearing a float with the clear: both property
    
    
    Positioning Elements
    
    
    position:absolute     (x,y) relative to origin at top left  eg top="100px" left="100px"
    Relative
    Static    this is the default
    Fixed     fixed on page
    
    
    
    
    
    
    postion:static
          DON'T USE (THIS IS THE DEFAULT)
          EVERY ITEM TAKES UP SPACE, PAGE FLOW DOWN FROM 
          PREVIOUS ITEM
    
    
        !!! REMOVE ITEMS OUT OF NATURAL FLOW OF PAGE CONTENT !!!
    
    :fixed    item does not move as page moves up down : fixed background
          fixed relative to PHYSICAL VIEWPORT WINDOW
    
    :absolute fixed relative to page(0,0) BUT WILL MOVE UP AND DOWN
          WITH PAGE
    
    :relative   DON'T USE AS SAME AS FLOAT:LEFT
    
    See css_20_position.htm
    
    
    
    
    
    Overflow
    
    
    Overflow : What to do when content exceeds the size of a box
    
    scroll : scroll bar becomes visible
    hidden : extra text is hidden and truncated and unavailable to view by the user
    visible : extra text flows outside the box (very messy)
    
    
    
    
    
    
    Chapter 5 - CSS Continued - Vendor Prefixes, Layouts - Box Model, Block, Inline, Flexbox, Grid, Columns
    
    
    
    Vendor Prefixes
    
    
    -ms-     Microsoft
    -o-      Old Opera
    -moz-    Firefox
    -webkit- Chrome, Safari, New Opera
    
    
    
    
    Introduction To CSS Box model
    
    
    Alignment eg 
    
    http://www.w3schools.com/css/css_align.asp and 
    http://ss64.com/css/box-align.html
    
    
    
    
    CSS Box Model
    
    
    Outline : doesn't take up space!
    Margin : takes up the space around the element, pushing other elements away from it
    Border
    Padding : Between the content and the border of the box
    Content : Inside the box
    Float : Left, Right
    
    
    
    Box-sizing : content-box  (default)
    
    
    .div1{
      width: 200;   // this is for the content only!
      border : 10px
      padding: 10px
    }
    Total width on screen is 200 + 10 + 10 + 10 + 10
    
    
    
    
    
    Box-sizing : border-box
    
    
    Width is set by the width variable and the border and padding fit inside this width!
    
    https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_box-sizing
    
    
    
    
    
    
    Have a look at the four basic box types : Block, Multi-column, Flex and Grid at 
    
    https://www.w3.org/TR/css-align-3/#distribution-details
    
    https://www.html5rocks.com/en/tutorials/flexbox/quick/
    
    Basic Lab 3.2 : Create a basic flexbox model to view on the page
    
    An example of a flexbox with two child elements
    
    <div id="myFlexbox"> 
    <div id="child1">child 1</div> 
    <div id="child2">child 2</div> 
    </div>
    
    
    
    
    Second Lab : Use CSS to style flexbox (see slides)
    
    
    CSS Layouts : CSS Box Model, also Flex and Grid Layouts : Chapter 3
    Overview
    
    W3C Box Model Specification at https://www.w3.org/TR/css-align-3/#distribution-details
    
    
    
    
    
    Media Queries
    
    
    @media screen and (min-width:480px){
      p{}
    }
    
    
    
    Flexbox Layout
    
    
    
    
    Official Spec at www.w3.org/TR/css-flexbox-1
    
    display:flexbox               block-level (creates a new row to display the item)
    display:inline-flexbox     inline (displays beside any other content) 
    flexbox item : is a flexbox inside the main outer container
    flex property : defines height, width of flexbox items (individual boxes inside the main container)
    positive
    negative
    preferred
    none
    
    flex-wrap : do boxes wrap or not?
    flex-pack : alignment within a flex container
    start, end, justify, center
    flex-align : alignment within container
    flex-direction
    row, row-reverse, column,  column-reverse
    flex-flow : sets flex-direction and flex-wrap at the same time
    flex-order : of child items
    
    
    Summary of Flex
    
    FLEX:
    FLEX-WRAP:WRAP/NO-WRAP
    FLEX-PACK : START/END/JUSTIFY/CENTER *** CURRENT? - ARRANGES WHITESPACE
    FLEX-ALIGN : HORIZONTAL/VERTICAL ALIGNMENT ??
    FLEX-DIRECTION : ROW/ROW-REVERSE/COLUMN/COLUMN-REVERSE
    FLEX-ORDER : SETS ORDER OF DISPLAY
    
    
    
    Grid Layout
    
    
    Official Spec at www.w3.org/TR/css3-grid-layout
    
    https://css-tricks.com/snippets/css/complete-guide-grid
    
    display:grid              block-level element
    display:inline-grid    inline element
    grid-columns
    grid-rows
    fr = fraction
    2fr is twice the width as 1fr
    grid-template
    grid-position
    
    
    
    Summary of Grid
    
    
    GRID LAYOUT SKIP
    1FR 2FR AUTO
    GRID-POSITION WITH NAMED VALUE
    
    
    
    
    <style>
      div > div{
          background-color:red;
      }
      .container{
          display:grid;
          grid-template-columns:100px 20% 1fr 1fr;
          grid-gap:4px;
          width:500px;
          background-color:#a79292;
      }
    </style>
    
    
    <div class="container">
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
    </div>
    
    
    
    
    
    
    grid-rows        length/%/fr/max-content/min-content/minmax/(min,max),auto
    
    grid-columns
    
    
    grid-column    start/end/auto
    
    grid-column-span
    
    grid-column-align start/center/end/stretch   child inside
    
    grid-template : uses letters to define regions
    
    
    
    
    
    CSS Columns
    
    
    Column-count
    column-gap
    column-rule
    Lab : Slide 3.3.8
    
    CSS Multi-Column Layout Columns
    
    CSS Multi-Column Layout
    
    https://www.w3.org/TR/css3-multicol/
    
    Example Of Multi Column Layout
    http://people.opera.com/howcome/2013/02-reader/
    http://people.opera.com/howcome/2013/reader/news/h1.html
    
    
    
    Columns
    
      div{
          column-count:3;
          column-gap:10px;
    
          column-rule-color:royalblue;
          column-rule-width:1px;
          column-rule:dashed;
      }
    
    
    
    break-after       
    break-before
    
    
    
    
    
    Chapter 7 - CSS Graphical Effects
    
    
    border-radius
     
    Rounding box corners eg at https://msdn.microsoft.com/library/gg589503.aspx
    
    box-shadow
    
    box-shadow: 10px 10px 5px #888888;
    h-shadow
    v-shadow
    blur
    spread
    colour 
    inset
    
    
    
    Tooltips
    
    
    Tooltips are a pop-up box which appear on the screen 
    
    http://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_tooltip
    
    
    
    
    Opacity
    
    
    opacity between 0 (transparent) and 1 (opaque)
    
    
    
    
    Background Gradients
    
    
    RGB colour
    RGBA colour
    linear-gradient
    radial-gradient
    repeating-linear-gradient
    repeating-radial-gradient
    color stop
    
    
    Gradients
    
    
    <style>
        div{
            height:200px;
            margin:30px;
        }
        #grad1{
            background:linear-gradient(red,green);
        }
        #grad2{
            background:linear-gradient(to left,red,green);
        }
        #grad3{
            background:linear-gradient(45deg,red,green);
        }
        #grad4{
            background:radial-gradient(circle,red,green);
        }
    </style>
    
    
    
    <div id="grad1"></div>
    <div id="grad2"></div>
    <div id="grad3"></div>
    <div id="grad4"></div>
    
    
    
    
    
    
    
    Transformations
    
    
    2D Transformations
    Translate
    transform:translate(x,y); will move item along x and y axes by amount given.
    Rotation 
    transform:rotate(30deg);
    Scaling
    transform:scale(2,3) will scale twice as large in x direction and treble in size in y direction
    Skewing
    transform:skew(30deg,30deg) skews the item along x and y axes
    3DTransformations
    
    
    Perspective
    
    
    http://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_perspective
    
    
    
    Transition
    
    
    CSS Transitions are between two CSS states
    
    <style>
    div {
      width:300px;
      height:200px;
      background-color:green;
      transition-duration:2s;
    }
    
    div:hover{
      width:700px;
      transition-duration:2s;
      transition-delay:1s;
    }
    </style>
    
    
    
    
    
    
    
    Animation using @keyframes
    
    
    GET START AND END AND TIME
    ANIMATION-NAME
    ANIMATION-DURATION
    
    animation-name property specifies a name for the @keyframes animation.
    animation-duration property defines how many seconds or milliseconds an animation takes to complete one cycle.
    Remember to include an animation duration or it will default to 0.
    animation-timing-function  specifies the speed curve of the animation.
    animation-delay property defines when the animation will start.
    animation-iteration-count property defines how many times an animation should be played
    animation-direction property defines whether or not the animation should play in reverse on alternate cycles.
    animation-play-state property specifies whether the animation is running or paused.
    animate command can combine shorthand some commands into one line
    
    
    SVG Filters
    
    
    Used to enhance a SVG object without changing the raw underlying SVG Object
    
    Set the effect either using HTML 
    
    filter=url(#filterid)
    
    or CSS 
    
    filter:url(#filterid)
    
    
    Effects
    
    
    Canvas
    
    
    <canvas>
    Created using HTML code 
    <canvas id="canvasElement" width="480" height="320"></canvas>
    Used for gaming where javascript controls the screen
    context
    moveTo
    lineTo
    stroke
    
    
    SVG Scalar Vector Graphics
    
    <svg>
    Used to create images which scale well on any screen at any dimension
    context
    moveTo
    lineTo
    stroke
    
    
    
        <svg width="200" height="200" style="background-color:#c5ebea">
        <circle cx="100" cy="100" r="50" stroke="blue" stroke-width="2" fill="yellow" />
        </svg>
        <svg width="200" height="200" style="background-color:#c5ebea">
            <ellipse cx="100" cy="100" rx="50" ry="80" stroke="blue" 
                     stroke-width="2" fill="yellow" />
        </svg>
        <svg width="200" height="200" style="background-color:#c5ebea">
            <rect x="50" y="50" width="100" height="100" fill="pink" stroke="blue" stroke-width="2"/>
        </svg>
        <svg width="200" height="200" style="background-color:#c5ebea">
            <rect x="50" y="50" width="100" height="100" fill="pink" stroke="blue" stroke-width="2" class="transparent" />
        </svg>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    Javascript 
    
    
    
    Adding Javascript To A Page
    
    <script>
    
    
    Variables
    
      var
      numbers
      strings
    
    
    Communicating With The User
    
    Alert
    Confirm
    Prompt
    
    
    Events
    
    event Listener
    addEventListener
    onclick
    event handler
    onLoad
    
    Example
    
      show/hide data with display:none/visible 
    
      set CSS with document.body.style.backgroundColor= "green";
    
    
    
    
    
    Function
    
      Passing parameters when the function is called var x = fnDoThis(y);
    
    
    DOM Model : Finding Elements
    
      document.getElementById('id')
    
    
    jQuery 
    
      $(document).ready(function(){});
      $('selector').doSomething
    
    
    
    
    
    
    Using Javascript To Alter HTML DOM Elements
    
    innerHTML
    createElement
    var newRadioButton = document.createElement("<INPUT TYPE='RADIO'
    NAME='RADIOTEST' VALUE='First Choice'>")
    insertBefore/After
    document.body.insertBefore(newRadioButton);
    appendChild
    Hide an element with display:none
    document.getElementById(“hide”).style.display:none;
    
    
    
    
    
    
    Graphics : Bringing It All Together : Chapter 5
    
    
    Animations
    
    setTimeout()
    setInterval()
    animate
    Animation can be done with CSS Keyframes
    Animation can also be done with jQuery animate() method
    http://api.jquery.com/animate/
    See examples in section 4.3
    Working With Images, Shapes and other Graphics
    
    createElement to place images on a page
    Canvas manipulation with Javascript
    
    canvas.getContext
    Example
    Canvas clock
    Animated box
    AJAX : Send and Receive Data
    
    XMLHttpRequest
    Complex Javascript Objects 
    JSON
    JSON.parse
    JSON.stringify
    
    Parsing Data
    
    
    String.split(';');
    
    See example in section 4.4
    
    
    
    Loading and saving local text files
    
    Validation Of File Type before loading
    
    
    
    
    
    
    
    AppCache - Application Cache
    
    
    Note : different to browser cache 
    Note : web page must be accessed through web server
    
    
    
    APPCACHE : TURN ON 
    
      1) 
    
        Create a file called Manifest.appcache
    
        This is our CACHE MANIFEST file.
    
        Link to it from every HTML page using 
    
         <html manifest="MANIFEST.appcache">
    
    
      2) 
    
        The other way is to explicitly list this file inside the manifest cache file 
    
    
    
      2) WEB SERVER
      
          SET MIME FILE-HANDLING TYPE TO
            text/cache-manifest
    
          MIME ==> USED TO MANAGE DIFFERENT FILE EXTENSIONS
              ON SITE EG OPEN PDF FILE
    
            .htaccess  OR  IIS 
    
    
    
    
    
    
    
    
    myManifest.appcache
    
    
    
    Select files can be named in a CACHE MANIFEST file which specifies certain files to be stored on the client machine for offline usage.
    
    CACHE MANIFEST file also dictates what files to use if the application goes offline.
    
    
    
    https://www.html5rocks.com/en/tutorials/appcache/beginner/
    
    
    AppCache is best used on SPA Single Page Apps because then there is only one cache used.  If you are using an app which adds data in the URL then each different permutation of text will be independently cached, meaning lots of extra data is cached on your machine eg www.mysite.com/a=1&b=2 will have a new cache created for it.
    
    View manifest files at
    
    chrome://appcache-internals/
    
    
    
    
      SPECIFY OFFLINE BEHAVIOUR
    
    
      3 SECTIONS TO FILE
    
        1. CACHE
          script.js   FILES WHICH SHOULD BE
                CACHED (STORED ON LOCAL 
                DEVICE) TO SPEED UP 
                FUTURE VISITS
        2. NETWORK    
          login.asp   NEVER CACHE THIS AS ALWAYS
                MUST BE ONLINE WHEN LOG IN
        3. FALLBACK
                FILES TO BE DISPLAYED WHEN
                APP GOES OFFLINE
                
              /html/  /offline.html
    
                                           FOLDER    MESSAGE WHEN OFFLINE
    
    
      
    Note : deprecated
    
      https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache
    
    To be replaced by Service Workers (not covered)
    
    https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    CACHE MANIFEST 
      # in here go files which are explicitly named and will go in the application
      myfile.htm
      mystyle.css
      myscript.js
      Note : can also add another CACHE section later on in the file which does the same thing
    NETWORK
      # specifies files which must be accessed online if not in the cache
      * means all files must be accessed online if not explicitly named in the cache
    FALLBACK
      # use this to tell the browser what file to use if a network resource is not available
      offline.html will display to the user if the application is offline
      Talk to the appcache by using window.applicationCache javascriopt object
      window.applicationCache.status == UNCACHED/IDLE/CHECKING/DOWNLOADING/UPDATEREADY/OBSOLETE
      applicationCache.update()  
      listen for the UPDATEREADY event then auto-reload page to get new cache contents
    MIME type : text/cache-manifest
    .appcache file extension
    Lab : Slide 1-2 : Is AppCache supported in your browser?
    Add this code to determine if the browser also supports the AppCache
    
    var AppCache_support = !!window.applicationCache;
    
    AppCache.update(); // Attempt to update the user's cache....
    
    https://www.html5rocks.com/en/tutorials/appcache/beginner/
    
    
    
    cache, network, fallback.  
    NOT USEFUL IF URL CHANGES (USE IN SPA)
    window.applicationCache - true if supported
    Appcache.update
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    Storage
    
    
    
    
    
    HTML is a STATELESS PROTOCOL
    
      it does not have any 'memory' of previous page visits
    
    
    Persistence = STORING DATA BETWEEN CLICKS
    
    
    
    
    
    Storing Data Between Clicks - The 'State' Of The Application or Session
    
    Persistence is the ability to store data
    
    Data can be stored on the SERVER and the CLIENT!
    
    
    HTML
    
      Stateless protocol : does not have any inherent 'memory' of previous page visits
    
    
    Look at
    
      1. Cookies
      2. Session Cookies
      3. Application State
      4. Local Storage
    
    
    
    
    
    
    
      
    Cookies
    
    
        SMALL TINY PIECES OF DATA
        
        4kb max
    
        SENT WITH EVERY PAGE REQUEST 
    
        DATA ACCESSIBLE BOTH BY CLIENT AND SERVER
    
          document.cookie = "username=John Doe";
    
          document.cookie = "username=John Doe; 
                expires=Thu, 18 Dec 2013 12:00:00 UTC";
    
    
          SESSION COOKIE HAS NO EXPIRY DATE; VALID FOR THIS SESSION ONLY
    
        ((COOKIE/SESSION DATA ==> VALID FOR ONE USER ONLY))
    
        Example at http://jsfiddle.net/user/philanderson888/fiddles/
    
    
    
      Local Storage
    
    
        FOR LARGE FILES WE WANT A WAY OF STORING DATA ON LOCAL CLIENT MACHINE
    
        5MB PERMANENTLY ON CLIENT
    
        localStorage.setItem("lastname", "Smith");
    
        localStorage.lastname
    
        localStorage.getItem("lastname")
    
    
    
      Session Storage
    
        
        same as local storage, destroyed after session
    
        sessionStorage.setItem("lastname", "Smith");
    
    
      Browser Cache (temporary internet files)
    
    
        Files downloaded eg CSS, Javascript can be stored in client cache for
            later use
    
    
    
    
    
    
    
    
    
    
    
    
    Cookies
    
    
    Cookies are small text files which can be used to transmit data between the client and the server which reflect the state of the session or application.
    Small file size (4kb)
    Sent with every HTTP request
    Can be accessed by both client and server code
    
    
    
    
    Cookies are tiny (4kb max) pieces of text data
    
    They are SENT WITH EVERY HTML REQUEST
    
    create with
    
    document.cookie="username=Phil";
    
      ((store data as key/value pair))
    
    
      IF NO EXPIRY DATE ==> SESSION COOKIE : DELETED WHEN YOU FINISH
        USING THIS SITE
    
    expires="18 Dec 2017";
    
      THIS COOKIE NOW LAST UNTIL THAT DATE
    
    
    ** not secure, vulnerable to hacking **
    
    CLIENT : STORE MORE DATA
    
    
    
    
    
    
    
    
    
    
    HTML5 localStorage
    
    
    Local storage is the ability to store files and data permanently on the client machine.  
    This is fully persistent ie it has no time span after which the data will expire, 
    so in that sense the data is permanent although if the client clears their cache and temporary 
    storage areas out which they are more than welcome to do at any stage, the data will be erased.
    Can only be accessed by client browser code
    Can timestamp and purge items from local storage cache in order to manage space effectively
    Lab - Code on PDF : does your browser support local storage???
    
    
    Up to 5MB max
    
    localStorage.setItem("firstName","phil");
                
    
    Get data (next time)
    
      localStorage.getItem("firstName");   ==> return "phil"
    
    
    Shorten this
    
      localStorage.firstName   ==> return "phil"
    
    
    
    
    
    
    
    
    
    
    
    
    HTML5 Session Storage
    
    
    Same exists just for one session
    
    sessionStorage.setItem..
                  .getItem..    same syntax
    
    
    Note : BROWSER CACHE WILL ALREADY STORE EG IMAGES, GIF, STYLESHEETS, JS, FROM 
      YOUR SITE ANYWAY ***********
    
    
    
    
    
    
    
    Application State
    
    
    The data pertaining to the application as a whole for all users
    
    
    
    Session State
    
    
    The data pertaining to one user after they log in, relevant for that user for that logged in 'session' until they either log out or they stop using the application in which case after a certain time span the session will automatically log them out and the session data will cease to exist.
    Storing Data Permanently On The Client Device
    
    
    
    
    
    
    
    
    Touch Interface (Chapter 10)
    
    
    Types Of Screen
    Resistive : stylus
    Capactive : finger
    
    Gestures
    touchstart
    touchmove
    touchend
    touchcancel
    touch object
    touchlist
    touches
    targetTouches
    changedTouches
    
    addEventListener
    
    
    <div onclick='alert("you clicked");'>click once</div>   //INLINE
    
    <div id="clickMeTwice">click twice</div>
    
    <script>
    document.getElementById("clickMeTwice").addEventListener("dblclick", fnDblClick);
    
    function fnDblClick() {
        document.getElementById('clickMeTwice').innerText = "You double clicked ";
    }
    
    </script>
    
    
    
    
    
    
    
    
    
    gesturestart
    scale
    rotation
    gesturechange
    gestureend
    
    Testing
    
    Use mouseTouch events and an online touch-screen emulator
    
    
    Geolocation
    API
    getCurrentPosition
    watchPosition
    Example in Textbook
    
    
    
    Web Workers
    
    Isolated threads - in a different environment to the DOM so therefore cannot access DOM elements
    passing a message to a Web Worker
    receiving a message from a Web Worker
    
    
    Web Sockets
    
    Full-duplex two-way communication through a channel over the internet ws:// or wss:// similar to HTTP but not using headers for every request so very lightweight
    Uses : real time eg chat applications, gaming, live stocks and share updates
    declare a socket
    var mySocket = 'ws://mysite.com';
    var mySecureSocket = 'wss://mysecuresite.com';
    onopen()
    onmessage()
    onclose()
    
    
    HTML File API
    
    
    Input type=file (one)
    Input type=filelist (array)
    Input type=blob
    Filereader means to read a text file line by line
    
    
    
    
    
    Talking To Your Device's Hardware 
    
      Accessing the camera
      Accessing the GPS
      Accessing the accelerometer
      Host Process
    
    
    
    
    
    
    
    
    
    
    
    
    
    Touch Interface
    
    Events
    
      Focus/Blur
      Select
      Resize
    
    Keyboard Events
    
      KeyPress
      KeyDown
      KeyUp
      shiftKey/ctrlKey/altKey
      charCode : Keyboard Letters, Numbers and Characters : KeyPress
      scanCode : Special Keys like Escape : KeyUp/Down
      http://javascript.info/tutorial/keyboard-events
    
    
    Mouse Events
    
      mouseMove
      mouseDown
      mouseUp
      mouseEnter
      mouseLeave
      mouseOut
      click
      dblClick
    
    
    Finger Events : Gestures
    
      TouchStart
        Finger is placed on the screen
    
      TouchMove
        Finger is dragged across screen
    
      TouchEnd
        Finger is removed from screen
    
      Testing Finger Events : Using An Emulator
        Hold down shift in these emulations to simulate multiple finger touches
        http://cdn.rawgit.com/hammerjs/touchemulator/master/tests/manual/hammer.html
        http://cdn.rawgit.com/hammerjs/touchemulator/master/tests/manual/leaflet.html
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    AJAX
    
    
    
    AJAX demos are in the Showcase folder
    
      Delete up to 10
    
      Ajax 10
    
      Serialize  : Ajax 11
    
      Live AJAX call : Ajax 12
    
    
    
    
    
    AJAX USING XMLHTTPREQUEST
    
    
    
        request = new XMLHttpRequest();       CREATE REQUEST OBJECT
    
        request.open('GET',url,true);
          // Get = read data
          // true = asynchronous
    
        request.onload=function(){
          callback(request.responseText);
        };
        request.send(data);   // Fire off request
    
    
       request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              document.getElementById("demo").innerHTML =
              this.responseText;
            }
        };
    
    
    
    
    Book example
    
    function loadJSON(url, data, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onload = function() {
            callback( JSON.parse(xhr.responseText) );
        }
        xhr.send( JSON.stringify(data) );
    }
    loadJSON("my.json", { id : 1 }, function(response) {
        setTitle(response.title); 
    });
    
    
    
    
    
    
    AJAX USING JQUERY
    
    
      $.ajax({
          method: "GET/POST",
          url: "some.php",
          data: { name: "John", location: "Boston" }
      })
      .success(function( msg ) {
            alert( "Data Saved: " + msg );
      });
        
    
      $.GET
    
        $.get("URL",function(data){
          // handle data
        });
      
    
      $.POST
    
        $.post("URL",dataOUT,function(dataIN){
          // handle dataIN
        });
    
    
      $.LOAD
    
        $('#divID').load("URL");
                DATA ==> PAGE ELEMENT
    
        
    
    
    
    
    
    
    Parsing Data
    
    
    
    var text="this;is;some;long;list;of;items";
    var list=text.split(';');
    for(var i = 0; i < list.length;i++){
      console.log(list[i]);
      console.log(list[i].trim());
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    Chapter 10 - Geolocation, touch
    
    
    
    
        
    Geolocation
    
    
      navigator element can LET US KNOW OUR COORDINATES ON PLANET
    
        navigator.geolocation.getCurrentPosition(function(position){
    
    
        });
    
    
          1. ASK FOR POSITION
          2. WHEN DATA COMES BACK, RUN A FUNCTION (CALLBACK)
            function(position)    POSITION = OUR DATA 
          3. EXTRACT COORDINATES
              position.coords.longitude
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    DAY 2 THEORY : COVERING ITEMS NOT OR ONLY PARTIALLY DISCUSSED YESTERDAY
    
    touch events
    
      $('mycanvas').addEventListener('click'
                                           'mouseover'
                                           'touchstart    FINGER HITS
              touchmove     DRAG FINGER
              touchend    LIFT FINGER
                ((prefer touchend not touchcancel))
    
    
      touch target    item event happens to 
    
        
      TOUCHES     ARRAY OF MULTIPLE FINGERS ON SCREEN
    
      TARGETTOUCHES   ARRAY OF FINGERS INVOLVED IN THIS EVENT
    
      9mm optimal
      7mm min
    
    
    
    PUBLISH APP
    
      CERTIFY YOUR APP WHEN PUBLISHING IT
    
          WINDOWS CERTIFICATION KIT         
    
          VETTING PROCESS BEFORE CAN BE ON STORE
    
    
    
    CHAPTER 2
    
    
      CODEC
    
        SOFTWARE DELIBERATELY MATCHING A PARTICULAR AUDIO/VIDEO FORMAT TO ENABLE        PLAYBACK
    
      IMAGE
    
        <img src= width= height= title="HOVER: WILL DISPLAY"  alt="YOUR IMAGE CANNOT
            BE LOADED"
        
    
      FIGURE
        
        <figcaption>THIS IS A BIG TITLE COVERING 5 IMAGES</figcaption>
    
        <figure
    
          MULTIPLE IMAGES INSIDE ONE FIGURE ELEMENT
    
    
    
      
    CHAPTER 3
    
    
      <form>
    
        <input     autofocus PAGE LOAD : CURSOR BLINK IN THIS FIELD
                  SO USER TYPES, ALREADY IN THIS BOX
    
              readonly  date : view only (can't select) 
    
              disabled  <button GREYED OUT, CAN'T PRESS>
    
              tabindex  tabbing order
    
        visibility:hidden KEEP IN DOM; JUST NOT VISIBLE   
    
        display:none    REMOVE FROM DOM 
                  
      z-index     -1  bottom layer
            0 mid layer
            1 top layer
            10  top of all
      
      <wbr>   WORD BREAK               : word will break if it is at end of line
    
    
      autocomplete    (in form) BROWSER WILL BE ALLOWED TO USE USER DATA
                TO PRE-COMPLETE FIELDS
      
      datalist : option box (can type)
    
      
    
      <form method=GET/POST action="URL" target=_blank=NEW,_self SAME FRAME
                ,_parent FRAME,top SAME WINDOW
    
        
        onSubmit="return fnValidate()"
    
            
        <button type="button"      NOT RELATED TO FORM
               "submit"     SUBMIT FORM
               "reset"      RESET FORM
    
        
        <script>
        function fnValidate(){
          //CODE
          return true/false
        }
    
    
        <script>
        function fnValidate(){
          //CODE
          myform.submit();    SUBMIT
        }
    
    
    
      <input required
    
        required="required"
    
    
      REGULAR EXPRESSIONS
    
        <input pattern="[0-9]{5}"      FORCES 5 NUMBERS
        
        <input pattern="[a-zA-Z]{2}"     2 alpha
    
          \w      any character  a-z A-Z 0-9
    
          \s    white space
          \S    non-white space
    
          /g    global
    
          var myregex = "/searchterm/"
    
          var myregex = "/searchterm/g"          GLOBAL SEARCH MULTIPLE HITS      
            
    
    
    
    
    
      
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    <section>
      <article>
                  <aside>
    
    <tag>   lower case
    HTML
    XHTML ==> STRICTER VERSION   <tag>  </tag>
    <!DOCTYPE html>       HTML5
    CSS Cascading Style Sheets
    INTERNAL CSS <style>                    </style>
    EXTERNAL CSS <link rel="stylesheet" href="style.css">
    <head>
    <body>
    <div>
    <div class="container">
    <table>
    <header>
    <footer>
    <section>
    <aside>
    <article>
    <video  width="200px"  height="200px" autoplay  controls  muted  ><   src="play.mp4"> 
    <audio 
    codec
    resolution
    px
    em
    pc
    fr
    vh 
    %
    Browser default UNIT
    Ajax    Asynchronous Javascript and XML : SEND AND RECEIVE DATA ACROSS WEB 
        USING HTTP/HTML AS THE CARRIER, ALSO CAN DO IT IN A WAY NOT TO 'BLOCK'
        OTHER ASPECTS OF YOUR PAGE
    Synchronous STREAM OF DATA : BITS ARRIVE IN SEQUENCE, ONE BY ONE.  WAIT YOUR TURN
    Asynchronous  COMMUNICATE WITH DIFFERENT STREAMS OF DATA, ALL DOING THEIR OWN THING
        AND YOU DON'T HAVE TO WAIT FOR OTHER STREAMS TO FINISH
        IN 'PARALLEL'
    XML   Extensible Markup Language   STRUCTURED TEXT FILE CONTAINING ROOT TAG <> WITH     STRUCTURED SUB-TAGS WHICH REPRESENT ROWS AND COLUMNS OF A DATABASE
        Cross-platform
    Cross-platform  
    JSON    {
          field:"string",
          field2:3      
        }
    
    $.AJAX    { ::::: }
    $.GET   READ DATA   
    $.POST    SEND DATA
    $   JQUERY
    PRIMITIVE = IMMUTABLE = CAN'T BE CHANGED 
    HTML 4 : STANDARD HTML   table, p, div
    HTML 5 : NEW FEATURES
    Div
    <header>
    <footer>
    <article>
    <aside>
    <section>
    SEMANTIC TAG : NO FUNCTION : LET COMPUTER KNOW YOUR INTENTION FOR CONTENT AT THAT POINT
    SEMANTIC ? GIVE MEANING ..
    Video
    Audio
    <canvas>   FAST JAVASCRIPT DRAWING          PIXEL IMAGE    DOT BY DOT
    <fieldset>    Break up page : block unit
    <svg>    SCALAR VECTOR GRAPHICS      ?     GENERATED USING MATHEMATICS : SCALE INFINITELY  (SMALL OR LARGE)
    <nav>    NAVIGATION : NAVBAR
    GEOTAGGING : LOCATION
    APPCACHE : ITEMS STORED ON LOCAL MACHINE
    LOCAL STORAGE : LARGE ITEMS UP TO 5MB IN SIZE PERMANENTLY ON CLIENT MACHINE
    Thursday Morning TERM REVIEW
    COOKIE  set expiry    4KB MAX        BOTH CLIENT + SERVER
    SESSION COOKIE HAS NO EXPIRY
    APPCACHE   =>   INSTRUCTIONS FOR WHICH FILES TO BE CACHED : 3 SECTIONS
    1. CACHE ? FILES TO BE CACHED
    2  NETWORK ? MUST BE ONLINE (DON’T CACHE) EG LOGIN FILE
    3 FALLBACK ?   THIS WEBSITE IS OFFLINE MESSAGE ETC
    Manifest.appcache   
    JSON   JAVASCRIPT OBJECT NOTATION
    {    A:1,B:2,C:”HI”   }
    JSON.STRINGIFY   ?  FROM    JSON OBJECT TO STRING
    JSON.PARSE       A STRING ? CREATE JSON OBJECT FROM STRING
    XML   EXTENSIBLE MARKUP LANGUAGE   ? database with rows, columns, data    IN TEXT FILE
    <root>
       <field  att=value>
              <item=value>
      </field>
    </root>
    CROSS-PLATFORM ? 
    WINRT      ?    WIN8 MOBILE PHONE APP
    UWP         ?   WIN10       UNIVERSAL APP      (UNIVERSAL WINDOWS PLATFORM)
    XAML            XML GUI FOR BUILDING NEW APPS
    SDK   SOFTWARE DEV KIT
    PUBLISH APP ? WINDOWS STORE
    PREREQUISITE     VERSION OF OS AND OTHER APPS WHICH MUST BE PRESENT, OR APP CANNOT BE INSTALLED
    DEPENDENCY  
    PERMISSION   :   CODE RUNS WITH PERMISSION LEVEL   EITHER   1) EXECUTION ONLY   OR  2) FULL TRUST
    WEB WORKER   var w = new Worker(‘worker.js’)
    1 message host to worker    w.postMessage(‘hi’)
    2. Message worker to host     postMessage(‘all ok’)
    3. Receive message worker      onmessage=function(event){//event.data}
    4. Receive message host      w.onmessage....
    Ajax
    XmlHttpRequest   =  xhr   ? OBJECT WHICH  SEND DATA FROM US TO REMOTE SERVER
    1      var  xhr = new xmlHttpRequest
    2    listen for event data coming back  : TEST  FOR HTTP STATUS 200   &     DATA STATUS==4
                onreadystatechange
    3    open(‘GET’,URL,async t/f)
    4    send()       
    Navigator.geolocation     ?    callback    function(position)
    Position.coords.lat/long
    Navigator.useragent  =>  
    Css Cascading Style Sheet : display only
    Attr     
    Calc   
    Jquery  LIBRARY.   
    LOCAL   .MIN.JS   MINIFIED
    LOCAL   .JS
    CDN  ? CONTENT DELIVERY NETWORK  ?    FAST DELIVERY OF CONTENT WORLDWIDE
    DOM
    Window.document.body.div...
    appendChild  : add to END OF ITEM
    insertBefore  : add  eg  as new FIRST ITEM IN LIST
    createElement(‘p’)
    array
    var x = new Array(4)             
    var x = [1,2,3,4,”hello”,”sausages”]
    push(1)    add at end
    pop()    Remove end               var x = myarray.pop()
    unshift    Add at start
    shift    Remove start
    <script>
    Var x   ? global   OUTSIDE FUNCTION
    Var x   ?  private  INSIDE FUNCTION
    Let x = 7    private in CODE BLOCK  { }
    CONST
    <DIV ID=”X” CLASS=”Y”  Name=’z’>
    $(‘#x’)           ONE
    $(‘.y’)            ARRAY
    $(‘.y’)[0]            FIRST AFFECTED ITEM OF CLASS Y
    JQuery
    Document.getElementById(‘x’)                  ONE
                                            sByClassName
                                            sByTagName(‘p’)
                                            sByName(‘z’)
    Document.querySelector(‘#x’)                           ONE
                                                All(‘.y’)                          MANY
    <UL>
    <LI>
    Li:nth-child(0)       FIRST ITEM
    Li:first-child
    Li:last-child
    Li:nth-child(2n+1)  
    <ruby>  =   eg ASIAN CHARACTER SETS     <rt>   HAS INFORMATION IN IT   
    <rp>      BROWSERS WHICH DON'T SUPPORT <ruby>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        <fieldset>
            <h1>Javascript - innerText/innerHTML</h1>
            <button type="button" onclick="fnChangeText()">Change Text</button>
            <div id="amendHTML">hi</div>
            <script>
                function fnChangeText() {
                    document.getElementById('amendHTML').innerText += "<h1>I am changed</h1>";
                }
            </script>
        </fieldset>
    
    
    
    
    
    
    
    
    
    
    
        <fieldset id="setMyWidth">
            <h1>Javascript - setAttribute</h1>
            <button type="button" onclick="fnChangeText2()">Change Text</button>
            <div id="amendHTML2">hi</div>
            <script>
                function fnChangeText2() {
                    $('#amendHTML2').html("<h1>I am changed</h1>");
                    document.getElementById("setMyWidth").setAttribute("style","background-color:red");
                    $('#amendHTML2').css("border", "solid blue 2px");
                }
            </script>
        </fieldset>
    
    
    
    
    
        <fieldset id="setMyWidth">
            <h1>jQuery - css</h1>
            <button type="button" onclick="fnChangeText2()">Change Text</button>
            <div id="amendHTML2">hi</div>
            <script>
                function fnChangeText2() {
                    $('#amendHTML2').html("<h1>I am changed</h1>");
                    document.getElementById("setMyWidth").setAttribute("style","background-color:red");
                    $('#amendHTML2').css("border", "solid blue 2px");
                }
            </script>
        </fieldset>
    
    
    
    
    
    
    
    
    
    
    
        <fieldset>
            <h1>Javascript - querySelector</h1>
            <button type="button" onclick="fnQuerySelector()">Change Text</button>
            <div id="querySelector">hi</div>
            <script>
                function fnQuerySelector() {
                    document.querySelector('#querySelector').setAttribute("style", "background-color:green");
                }
            </script>
        </fieldset>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        <fieldset>
            <h1>Javascript - Global and Local Scope</h1>
            <div id="scope" onclick="fnScope()">Scope</div>
            <script>
                "use strict";
                var scopeX = 1;
                console.log(scopeX);            // GLOBAL
                function fnScope() {
                    console.log(scopeX);
                    var privateVar = 3;         // PRIVATE
                    console.log(privateVar);
                    if (privateVar === 3) {
                        let t = 22;
                        console.log(t);
                    }
                    const xx = 555;
                }
            </script>
        </fieldset>
    
    
    
        <fieldset>
            <h1>Javascript - var, let and const</h1>
            <div id="scope" onclick="fnScope()">Scope</div>
            <script>
                "use strict";
                var scopeX = 1;
                console.log(scopeX);            // GLOBAL
                function fnScope() {
                    console.log(scopeX);
                    var privateVar = 3;         // PRIVATE
                    console.log(privateVar);
                    if (privateVar === 3) {
                        let t = 22;
                        console.log(t);
                    }
                    const xx = 555;
                }
            </script>
        </fieldset>
    
    
    
    
    
    
    
    
    
    
    
    
    
        <fieldset>
            <h1>Javascript - setTimeout and setInterval</h1>
            <div id="delay" onclick="fnDelay()">Delay</div>
            <div id="timer" onclick="fnTimer()">Timer</div>
            <script>
                function fnDelay() {
                    setTimeout(function () {
                        document.getElementById("delay").style.backgroundColor = "blue"; //EASIER AND BETTER
                        //document.getElementById("delay").setAttribute("style", "background-color:blue");                    // set DELAY DIV TO CHANGE BACKGROUND
                    }, 2000);
                }
                function fnTimer() {
                    setInterval(function () {
                        var d = new Date();
                        document.getElementById("timer").innerHTML = d.toLocaleTimeString();
                    }, 1000);
                }
    
            </script>
        </fieldset>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        <fieldset>
            <h1>Javascript - web worker</h1>
            <div id="worker" onclick="fnWorker()">Web Worker</div>
            <script>
                function fnWorker() {
                    var w = new Worker("assets/js/webworker.js");
                    w.onmessage=function(event){
                        console.log(event.data);
                    }
                    w.postMessage("You are my worker and you will do whatever I command you");
                    
                }
            </script>
        </fieldset>
    
    
    
    
    
    
    // webworker.js
    
    
    console.log("Inside webWorker");
    onmessage = function (event) {
        console.log('worker has received a message ' + event.data);
    }
    setTimeout(function () {
        console.log(new Date());
        postMessage('Sending message back to main page ' + new Date());
    }, 1000);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    Glossary
    
    
    
    
    
    
      
    CSS Font Awesome
    
      
    CSS W3
    
    
    
    CSS Font Awesome
    
      
    http://fontawesome.io/
    
    
    
    sectioning root tags
     - body, blockquote, fieldset
    
    @media
     - detect screen size
    
    BDI - Bi-Directional Indicator
     (left to right, or right to left)
    
    
    
    Escape Characters
    
    
    \n  NEW LINE!!!!
    \r  carriage return (new line)
    \ CAN BE INTERPETED AS AN 'ESCAPE' CHARACTER FOR SPECIAL SYMBOLS
    \'
    \"
    \\
    
    
    
    
    
    Image ISMAP
    
    
    ISMAP is a flag set to TRUE or FALSE inside the <img> tag.  
      <img ismap>  
      If present then this tells the computer that a server-side image map 
      has been created which maps to different parts of the same image, so 
      in order to implement this mapping all that is required is to send the 
      coordinates of the click points to the server as part of the html
      information, in this case as part of the URL information sent.
    
      Note : relative image coordinates are sent (not absolute page coordinages)
    
      See W3 Schools ISMAP for working example of this
    
    
    
    Image USEMAP
    
    Usemap is a CLIENT SIDE IMAGE MAP DEFINED HERE
    Usemap="#map_region"
    <map name="map_region">
      <area shape="rect" coords="0,0,10,10" href="abc.htm" />
      <area shape="circle" coords="10,10,2" ../>
      </map>
    
    
    
    
    Measure Up
    
    
    Touch
     
      https://blogs.msdn.microsoft.com/b8/2012/03/28/touch-hardware-and-windows-8/
      Touch hardware and Windows 8 – Building Windows 8
      blogs.msdn.microsoft.com
      The great improvements have been made in Windows 8 Consumer Preview and the more new hardware coming with touch compatibility is a welcoming news.
      
      http://image.slidesharecdn.com/desginfortouch2-121019201517-phpapp01/95/desgin-for-touch-10-638.jpg?cb=1353223819
       
      http://image.slidesharecdn.com/adaptinguisformobiletouch-140619173004-phpapp01/95/adapting-uis-for-mobile-touch-17-638.jpg?cb=1406129878
    
    
    
    
    Hardware buttons
     
      https://msdn.microsoft.com/en-us/library/windows/apps/hh202905(v=vs.105).aspx
    
      First look at Windows Phone - msdn.microsoft.com
      msdn.microsoft.com
      [ This article is for Windows Phone 8 developers. If you’re developing for Windows 10, see the latest documentation. ] The Windows Phone user interface framework ...
       
       
      http://www.wideskills.com/sites/default/files/subjects/Windows%20Mobile%20App%20Dev%20Tutorial/14/image3.png
    
    
    
    Manifest
     https://i-msdn.sec.s-msft.com/dynimg/IC619115.png
     
    SDK
     https://developer.microsoft.com/en-us/windows/downloads/windows-10-sdk
    
    Windows 10 SDK - Windows app development
      developer.microsoft.com
      The Windows SDK for Windows 10 contains headers, libraries, and tools you can use when you create apps that run on Windows.
    
       <colgroup> does not do styling but <col> does
    
    
    
    GlobalCompositeOperation
    
     
    http://images.cnitblog.com/blog/503563/201502/152218545899109.png
    
    Red item ON TOP
    
    Blue item UNDERNEATH
    
    Way of showing both items in relationship to each other
    
      SOURCE = FROM TOP (SEE RED ITEM FIRST)
    
      DESTINATION = FROM BOTTOM (SEE BLUE ITEM PRIORITY)
    
      IN ==> BOTH ITEMS OVERLAP
    
      OUT ==> ONLY ONE OR OTHER ITEM, NOT WHERE THEY OVERLAP
    
      OVER ==> BOTH ITEMS
    
    
    
    
    
    
    
    Sectioning Root
     
      DO NOT AFFECT THE 'OUTLINE' OR BIG-PICTURE-SUMMARY OF THE DOCUMENT AS A WHOLE, IF THEY HAVE SUB-ITEMS LIKE 
    
       
      https://www.w3.org/TR/html5/sections.html#sectioning-root
       
      The following are 'Sectioning Root' items               
       
                       blockquote body fieldset figure td
       
    
    
    
    
    
    
    
    
    
    
    Deprecated
    
    
    
    
    Hyphens
    
    
    Supported on Firefox!!!
    
    
    https://www.w3.org/TR/css-text-3/#hyphens-property
    
      none   NO HYPHENS
      manual ­  MUST BE PRESENT
      auto
    
    
    lang : must be set
    -ms-hyphenate-limit-zone/chars/lines
    
    
    https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens
    
    Lab : see slide 3.3.8
    
    
    CSS Word-Break
    
    
    WHERE WORD BREAKS OCCUR
    
    https://www.w3.org/TR/css-text-3/#word-break-property
    http://www.w3schools.com/cssref/tryit.asp?filename=trycss3_word-break
    
    normal
    keep-all BREAK AT WORD SPACES ONLY
    break-all CAN BREAK ON ANY LETTER AT ALL, NO MATTER WHERE IT OCCURS
    
    
    
    <style>
        p{
            word-break:
        }
    </style>
    
    <p>
        some veryveryveryveryvery-longlonglonglong veryveryveryveryvery-longlonglonglong
        veryveryveryveryveryveryvery-longlonglonglong veryveryveryveryvery-longlonglonglong veryveryveryveryvery-longlonglonglong
        veryveryveryveryvery-longlonglonglong veryveryveryveryvery-longlonglonglong veryveryveryveryvery-longlonglonglong
        veryveryveryveryvery-longlonglonglong veryveryveryveryvery-longlonglonglong words
    </p>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    CSS Exclusions
    
    
    
    Used to WRAP TEXT AROUND AN OBJECT
    
    
    
    
    wrap-flow : both, clear, 
    shape-inside
    shape-outside
    text-outside
    
    Care - not implemented in ANY non-Microsoft browsers!  Please see http://caniuse.com/#feat=css-exclusions for details!!!
    
    
    
    Shape Inside
    
    CSS Exclusion : Shape-Inside
    
    
    Shape outside
    
    CSS Exclusion : Text-Outside
    
      
    Exclusions
    
    CSS Exclusion
    
    
    
    
    
    
    CSS Regions
    
    
    Created by ADOBE for Desktop publishing but has not really caught on, in fact Google and many others oppose this being used in browsers because it conflicts with the basic programming authority of separation of code from the display (rendering) of that code - this reverts back to mixing the two.
    
    The idea is to create a 'named flow' of source content (text) which flows into one or more 'regions' for display on a page, such as when a newspaper article is displayed in more than one place.
    
    Even Microsoft does not fully support this product!!!
    
    We have the CONTENT SOURCE TEXT called FLOW-INTO:my-flow where my-flow is the name given to this flow
    
    source=RAW TEXT=named flow=flow-into
    
    
    We have the CONTENT CONTAINERS, INTO WHICH THE SOURCE TEXT FLOWS, called FLOW-FROM
    
    container=DESTINATION DIVS=flow from
    
    
    CSS Regions
    
    
    
    
    http://caniuse.com/#search=regions   
    
    https://drafts.csswg.org/css-regions-1/
      
    
    
    Slides 3.3.6 onwards 
    
    
    Chrome : turn on Regions using 
    
      https://www.sitepoint.com/a-beginners-guide-css-regions/  
      and 
      chrome://flags/
    
    
    Warnings
    
      http://alistapart.com/blog/post/css-regions-considered-harmful
    
      https://www.chromestatus.com/feature/5655612935372800
    
    
    Official Documentation At
    
      https://www.w3.org/TR/2011/WD-css3-regions-20110609/
    
      https://drafts.csswg.org/css-regions-1/
    
      https://www.w3.org/TR/css-regions-1/
       
      https://msdn.microsoft.com/library/hh673537.aspx
    
    
    
    Use CSS Multi Column layout instead
      https://www.w3.org/TR/css3-multicol/
    
    Another alternative is CSS Fragmentation 
      https://drafts.csswg.org/css-break/
    
    Discussion : Google want to remove Regions from W3C Standards 
      https://slashdot.org/story/14/01/29/1745233/google-planning-to-remove-css-regions-from-blink
    
    
    
    
    
    
    
    
    
    
    
    With
    
    
    With is now deprecated so don’t use.
    
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with