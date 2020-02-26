# Day 34 - Bootstrap Photo Gallery

<!doctype html>
    <html lang="en">
    
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
      <!-- Bootstrap CSS -->
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
      <style>
        body {
          background-color: #F5F9FB;
        }
    
        .customcontainer {
          margin-left: 49px;
          margin-top: 11px;
        }
    
        .italic {
          font-style: italic;
        }
        .center{
          text-align: center;
          padding:20px;
        }
        h1{
          background-color: #E1EFF7;
        }
    
        .minorheader{
          margin-left:30px;
        }
        #navbar-icon{
          width:1.7vw;    // % of VIEWPORT (VISIBLE SCREEN) WIDTH 
        }
        #paragraph-gallery{
          font-size:2.0em;
          font-weight: bold;
          font-style:italic;
        }
        #photo-gallery{
          background-color: #EBEBEC;
          padding:3vw 5vh;   // vw % width    vh  % height    vmin  % smaller of two heigh/width
        }
        .gallery-image{
          margin:3vh;
        }
        #photo-gallery-flexbox{
          display:flex;
          background-color: #EBEBEC;
          margin-top:10vh;
          flex-wrap:wrap;
          padding:3vw 5vh;
          justify-content: center;
    
        }
        .gallery-flex{
          margin:3vh;
    
        }
    
      </style>
      <title>Hello, world!</title>
    </head>
    
    
    <body>
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          
          <a class="navbar-brand" href="#">Photo Gallery</a>
          <img id="navbar-icon" src="https://cdn0.iconfinder.com/data/icons/indoor-photographer-photography/182/photography-photographer-008-512.png" />
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
    
          <!-- Navbar -->
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Gallery</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  Contact
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
            </ul>
          </div>
          <!-- Navbar -->
        </nav>
    
    
        <h1 class="center">Photo Gallery</h1>
        <h2 class="italic minorheader">Images from around the world</h2>
        <p style="margin-left:30px">This is a <span id="paragraph-gallery">gallery of images</span> I have collected on my travels</p>
        <section id="photo-gallery">
          <img class="gallery-image" src="https://picsum.photos/200/150?random=1" />
          <img class="gallery-image" src="https://picsum.photos/200/150?random=2" />
          <img class="gallery-image" src="https://picsum.photos/200/150?random=3" />
          <img class="gallery-image" src="https://picsum.photos/200/150?random=4" />
          <img class="gallery-image" src="https://picsum.photos/200/150?random=5" />
          <img class="gallery-image" src="https://picsum.photos/200/150?random=6" />
          <img class="gallery-image" src="https://picsum.photos/200/150?random=7" />
          <img class="gallery-image" src="https://picsum.photos/200/150?random=8" />
          <img class="gallery-image" src="https://picsum.photos/200/150?random=9" />
          <img class="gallery-image" src="https://picsum.photos/200/150?random=10" />
          <img class="gallery-image" src="https://picsum.photos/200/150?random=11" />
          <img class="gallery-image" src="https://picsum.photos/200/150?random=12" />
          <img class="gallery-image" src="https://picsum.photos/200/150?random=13" />
          <img class="gallery-image" src="https://picsum.photos/200/150?random=14" />
          <img class="gallery-image" src="https://picsum.photos/200/150?random=15" />
        </section>
    
        <section id="photo-gallery-flexbox">
          <img class="gallery-flex" src="https://picsum.photos/200/150?random=1" />
          <img class="gallery-flex" src="https://picsum.photos/200/150?random=2" />
          <img class="gallery-flex" src="https://picsum.photos/200/150?random=3" />
          <img class="gallery-flex" src="https://picsum.photos/200/150?random=4" />
          <img class="gallery-flex" src="https://picsum.photos/200/150?random=5" />
          <img class="gallery-flex" src="https://picsum.photos/200/150?random=6" />
          <img class="gallery-flex" src="https://picsum.photos/200/150?random=7" />
          <img class="gallery-flex" src="https://picsum.photos/200/150?random=8" />
          <img class="gallery-flex" src="https://picsum.photos/200/150?random=9" />
          <img class="gallery-flex" src="https://picsum.photos/200/150?random=10" />
          <img class="gallery-flex" src="https://picsum.photos/200/150?random=11" />
          <img class="gallery-flex" src="https://picsum.photos/200/150?random=12" />
          <img class="gallery-flex" src="https://picsum.photos/200/150?random=13" />
          <img class="gallery-flex" src="https://picsum.photos/200/150?random=14" />
          <img class="gallery-flex" src="https://picsum.photos/200/150?random=15" />
        </section>
      </div> <!-- container -->
    
    
    
    
    
    
    
    
    
    
      <!-- Optional JavaScript -->
      <!-- jQuery first, then Popper.js, then Bootstrap JS -->
      <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"></script>
    </body>
    
    </html>