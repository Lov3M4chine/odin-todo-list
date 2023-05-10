# odin-todo-list
This is a simple todo list application that allows users to create, update, and delete tasks. It will display a list of tasks, along with their status (completed or not) and priority level. Users can add new tasks by typing them into an input field, and can edit or delete existing tasks by clicking on them. The application will also allow users to filter the list by status and priority, and will persist the task data to local storage so that it is not lost when the browser is closed.

*****Key Concepts*****
Abstraction: Abstraction is the process of simplifying complex systems by breaking them into smaller, more manageable parts. In the context of programming, abstraction can involve creating simple functions or classes that hide the complexity of the underlying code, making it easier to understand and manage.

SOLID principles: SOLID is an acronym that represents five design principles for writing maintainable, scalable, and flexible code. They are as follows:

Single Responsibility Principle (SRP): Each class or module should have only one reason to change. This means that it should be responsible for only one aspect of the system. This makes it easier to understand, modify, and maintain the code.

Open/Closed Principle (OCP): Code entities (classes, modules, functions, etc.) should be open for extension but closed for modification. This means that you should be able to add new functionality without changing the existing code, making the system more flexible and easier to maintain.

Liskov Substitution Principle (LSP): Subtypes must be substitutable for their base types. In simpler terms, this means that objects of derived classes should be able to replace objects of their base classes without affecting the correctness of the program. This principle is primarily concerned with class inheritance and polymorphism in object-oriented programming.

Interface Segregation Principle (ISP): Clients should not be forced to depend on interfaces they do not use. This means that each class or module should only expose the necessary functions and properties to other classes or modules, preventing unnecessary coupling and making the system more modular and maintainable.

Dependency Inversion Principle (DIP): High-level modules should not depend on low-level modules. Both should depend on abstractions. This principle states that your code should depend on interfaces or abstract classes rather than concrete implementations, making the system more flexible and maintainable.

*****Why we are using abstractions and SOLID principles*****
Applying abstractions and SOLID principles to code helps make it more maintainable, scalable, and flexible. These principles serve as a guide for structuring code in a way that is easier to understand and manage as the project grows in complexity.

In the refactored code, we introduced interfaces (abstractions) for task management and formatting. This allows you to easily swap out different implementations (e.g., local storage vs. a remote server for task storage) without affecting the rest of your code. This adheres to the Dependency Inversion Principle (DIP), which promotes a more flexible and maintainable system.

We also broke the Display.js module into smaller, more focused classes that handle specific responsibilities, following the Single Responsibility Principle (SRP). This makes the code easier to understand and maintain, as each class has a single purpose.

*****Simplified Code Explanation*****
Here's a high-level breakdown of the refactored code:

ITaskRepository and LocalStorageTaskRepository: These two classes represent an abstraction (interface) for managing tasks and a concrete implementation using local storage, respectively. By introducing this abstraction, we make it easier to swap out different storage mechanisms without affecting the rest of the code.

IFormatter and HtmlFormatter: Similarly, these two classes represent an abstraction for formatting tasks and a concrete implementation for formatting tasks as HTML elements. This abstraction allows you to easily swap out different formatting strategies without affecting the rest of the code.

IRenderer and HtmlRenderer: These classes handle rendering tasks using the provided formatter. The IRenderer class is an abstraction (interface) that defines a common method, render(), which all rendering classes should implement. The HtmlRenderer class is a concrete implementation that renders tasks as HTML elements. By introducing this abstraction, we make it easier to add new rendering strategies without affecting the rest of the code.

IFormHandler and TaskFormHandler: These two classes represent an abstraction (interface) for handling form visibility and a concrete implementation, respectively. By introducing this abstraction, we make it easier to modify how forms are shown or hidden without affecting the rest of the code.

Initialization.js: This module initializes and ties together all the components. It creates instances of the TaskRepository, Formatter, Renderer, and FormHandler, and then passes these instances to the Form.js module. By passing the instances as arguments, we adhere to the Dependency Inversion Principle, which makes our code more flexible and maintainable.

Form.js: The processTaskForm function in this module handles form submission, creating new tasks, and updating the task list. It receives instances of the TaskRepository, Renderer, Formatter, and FormHandler from the Initialization.js module, which allows it to be more flexible and independent of specific implementations.

Credits
Patterns:
https://www.toptal.com/designers/subtlepatterns
Fonts:
https://fonts.google.com/