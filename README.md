# Node API Project Template

# Background
This typescript based project is intended to serve as a boilerplate project which provides a minimal set of functionality, and configuration presets. 

The following features are provided:

* Expressjs API endpoints
* TypeORM persistence support (via mariadb)
* Logging (powered by winston)
* Unit testing and test coverage support
* OpenAPI documentation generation
* A shared module that other clones of this project may share

# Project structure
The main folder contains general files, including docker related files) and a Typescript node based project under the 'app' sub directory.

# Integrating the shared module. 
In order to import the shared module, follow the instructions in the corresponding shared module template readme.