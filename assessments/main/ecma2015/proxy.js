'use strict';

/*
 Metaprogramming is (loosely) all about the underlying mechanics of the language,
 rather than “high level” data modelling or business logic

 - Code generation: eval
 - Reflection: apply, call, bind, name, length (Function), getOwnProperties (Object)
 - Reflection / Introspection: typeof, delete, instanceof
 - Reflection through intercession - Proxy (wrapping objects and intercepting their behaviours)

 - Es un constructor que hereda de los prototipos que pasas por parametro e intercepta los metodos cuando este los lanza.
 - encapsula un objeto e intercepta su comportamiento
 */

module.exports = {};
