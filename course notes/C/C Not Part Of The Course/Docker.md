# Docker

[https://hub.docker.com/r/microsoft/dotnet/](https://hub.docker.com/r/microsoft/dotnet/)

### Container sample: Run a simple application

    You can quickly run a container with a pre-built .NET Core Docker image, based on the .NET Core console sample.
    
    Type the following command to run a sample console application:
    
    docker run --rm mcr.microsoft.com/dotnet/core/samples

### Container sample: Run a web application

    You can quickly run a container with a pre-built .NET Core Docker image, based on the ASP.NET Core sample.
    
    Type the following command to run a sample web application:
    
    docker run -it --rm -p 8000:80 --name aspnetcore_sample mcr.microsoft.com/dotnet/core/samples:aspnetapp

### Building a sample .NET Core application on Docker

    <https://docs.microsoft.com/en-us/dotnet/core/docker/building-net-docker-images>
    
    Clone the sample app
    
    git clone <https://github.com/dotnet/dotnet-docker/>
    
    Move to the root directory of this repository then type
    
    cd samples
    
    cd aspnetapp
    
    docker build --pull -t aspnetapp .
    
    docker run --name aspnetcore_sample --rm -it -p 8000:80 aspnetapp

### Worked Example With Commands

    # list running containers
    docker container ls
    
    # remove container
    docker container kill ce2df9017968
    
    # list images
    docker image ls
    
    # list images with id
    docker images -a
    
    # remove image
    docker rmi 99f959836f85
    
    # run docker image
    docker run --name aspnetcore_sample --rm -it -p 8000:80 aspnetapp
    
    # Type <http://localhost:8000> and view a running ASP app

# Docker Images In Azure

## Push And Use A Docker Image From Azure

It is possible to create our own custom docker image, and then push this to Azure to use

    git clone <https://github.com/dotnet/dotnet-docker>
    cd dotnet-docker
    cd samples
    cd dotnetapp 
    docker build --pull -t dotnetapp .
    docker run --rm dotnetapp
    az login