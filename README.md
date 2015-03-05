# JAVASCRIPT DESIGN PATTERNS

Most Usefull design patterns in Javascript Knowledge through the Osmani book.

## CONSTRUCTORS
Custom constructors that define a **Type Object** (instance from), 
defining properties and methods, also **Member variables from contructor**.
In ES5 Age, Javascript doesn´t support classes, but it does support constructor Functions.
Inside the function, keyword **this** refference th enew bject that´s being created.

**disadvantages**
Each property from Variable members are created like a Copy to several instance from constructor.
*(the properties are own into each istance)*

**prototype**
to share shared between all the instance


## SINGLETON
Based on a class that expose public method that **create a instance of its type if one doesn´t exist**.
That mean we replace the behaviour of **new**. 

**usefull**
Is usefull when exactly one object is needed to coordenate patterns across the system.


## MODULE
Usefull to organize code, based on Object literal module notation.
Emulate Classes behaviour as well as encapsulate private and public properties to instance type.
Avoid Name conflicting with other variables defined in aditionas scripts on the page.

**privacy**
We use the Function´s scopes to simulate the public or private access properties modifiers.
Through to Clousure ( Function that return a configurate object ), 
variables or methods declared within module pattern, are only aviable inside the module.

**namespaced**
the namespace is the variable that catch the clousure scope.
that scoping function is called and inmediately store the return value of.

**adventages**
coding cleaner
private variable restricted scoping access, hidden to the rest of the page.
Easier to debugging
Acess dinamic public members (this), through new properties declaration ( after create namespace )

**disadventages**
Can´t access private members methods that are added to the object at a later point.
Inhabiulity t create automated unit tests for private members
Complex to fix bugs later.

# REVEAL MODULE PATERN
The only difference with the above, is that the private properties are revaled 
like a new declaration in the public interface :
```javascript
return{ publicMethod: privateMethod };
```
**disadventages : only to functions, no member variables those can be overriden**
If a private function refers ro a public function, 
that public function can´t be overriden if a parch if necessary.
This is because private function still reference private implementations.