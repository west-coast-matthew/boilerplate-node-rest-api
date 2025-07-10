## Node API Template (Node project)

# Description
This is where the node project implementation lives. 

Basically this implementation will provide a full stack, typescript, REST API capable project, intended for consumption by external systems. The project is dependant on the shared library located under the '"@west-coast-matthew/node-shared-template' project. 


# Overall architecture

The modular approach illustrated by these projects represents a flexible approach that enables solutions to escape the trap of large monolithic apps. While the concept of a micorservice at its most formal definition implies very independant project/deployments, there is a lot of middle ground between the monolith single deployment and an army of independant, isolated applications. 

Each API template implementation is configured to provide it's own express implementation and associated routers. Additionally, specifics of business logic, and interations with a persistent store (i.e. which data source and ORM specifics) are defined at this level.


# Generating API docs

It is encouraged that all REST endpoints are back with the appropriate documentation. Support for OpenAPI documentation is provided here. 

`yarn run gen-docs`