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

# OBSERVE PATTERN
Based on a publisher and subscriber *(Pub/Sub)* objects.
- **behavior of publisher**
    - broadcast notifications when there is something to publish
    - **publicar evento, handler / callback => [trigger]**

    
- **behavior of subscriber**
    - register and recive notification of publisher
    - subscribe and unsubscribe to publiser notifications
    - **subscribirse a eventos => [on, live, eventListener]**
    

The old way is callling methods of other objects. 
With observer pattern, the publisher (Dom object) of an an activity or task  (event) expose an interface (handler / callback),
and the subscriber listen.


#### OBSERVER IMPLEMENTATION INTO AJAX LOADER DATA
- Ajax single request : resultset once (end-behaviour)
    - handle POST/request logic into a success callback

- By observers
    - rewrite code multiple tomes

#### MEDIATOR PATTERN
one interface, and all the system interacction with among themselves throught its methods.
Interfaz que sirve para comunicar partes de un sistema.
We have a central point that promotes the interaction between modules (loooose coupling system).


**implementation**
Is a implementation of an bserver pattern
A centralize controller of Pub/Subs event liseners (a central pomint of contact).

#### PROTOTYPE PATTERN
based on the ability of a Prototype constructor to create blueprints objects,
that will reused to build (copy or extend) our application objects.

Its a Bosst and Native Javascript core way to inheritance objects.

// create a Object by reference, type from blueprint constructor and reference to properties of blueprint
var refInstance = instance;

// create a Copy object, type from blueprint constructor
var copyInstance = Object.create( instance, {optionalDescriptorObject} );


#### COMMAND PATTERN
permite tener una interfaz abstracta llamada **execute, run**, la cual se encarga de ejecutar 
los metodos del objeto.

It is useful when we want to unify all methods under a single interface, 
with the problem that would not be viable after manipulating instructions for each method separately.


#### FACTORY PATTERN -> Factory emethods
nos permite ocultar el contructor del objeto creado
a traves de la interfaxz podemos podemos definir la herencia de subclases (tipos de herencia)
y configuracion de propiedades.
- Util cuando la creacion de instancias ebns bastante complicada.
- Util cuando generamos varias instancias para un para diferentes entornos
- cuando trabaamos con pequeños ojetos que comparten propiedades.
- Cuando tenemos Componentes (instancias como `propiedade sde clase) y van mutan,do de tipo a lo largo de la logica de la aplicacion
(por ejemplo en la login page, podemos tener una factoria de login de terceros que represente un componente de LoginConstructor, y 
que depediendo de la interaccion, esta valla mutando al tipo del vendor que halla elegido el user). 


#### MIXINS PATTERN -> way to inherit properties
Mixins are clases thet provide functionality to be inherit by subclass.
in this pattern we are inheriting the properties of the prototype scope, 
means that instance of the recieving class are not passing *instanceof()* 
from the properties mixin class.
> JS does not support multiple inheritance.

The old manner for doing inheritance is augment a constructor to expand methods from other constructor, 
[native inheritance](https://github.com/fernandoPalaciosGit/osmani-design-patterns/blob/master/patterns/basic-inherit.js "extend inheritance inteance behaviour").