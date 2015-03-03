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