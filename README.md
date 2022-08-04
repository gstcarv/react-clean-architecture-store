# Full Scalable Clean React Architeture + Dependency Injection

> High-level modules should not depend on low-level modules. Both should depend on abstractions.

> Abstractions should not depend on details. Details should depend on abstractions.

> Independent of Frameworks. The architecture does not depend on the existence of some library of feature laden software. This allows you to use such frameworks as tools, rather than having to cram your system into their limited constraints.

> Testable. The business rules can be tested without the UI, Database, Web Server, or any other external element.

> Independent of UI. The UI can change easily, without changing the rest of the system. A Web UI could be replaced with a console UI, for example, without changing the business rules.

> Independent of Database. You can swap out Oracle or SQL Server, for Mongo, BigTable, CouchDB, or something else. Your business rules are not bound to the database.

> Independent of any external agency. In fact your business rules simply don’t know anything at all about the outside world.

<br />

Sources:

https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html <br />
https://medium.com/@kedren.villena/simplifying-dependency-inversion-principle-dip-59228122649a

## Folder structure

    ├── common              # Common types and protocols that are used in all other layers
    ├── core                # The root and main layer, that setups App, DI Container and Modules
    ├── infra               # External framework/library adapters
    ├── modules             # Modules from Application
        ├── [ModuleName]
            ├── data                # Domain protocol implementations
            ├── domain              # Application bussines rules abstraction
            └── [ModuleName].tsx    # Module providers configuration
        ├── AppModule.ts        # Root Module from Application
    ├── presentation        # Application UI
    └── tests               # Testing utils

## Thanks

with ❤️ by Gustavo
