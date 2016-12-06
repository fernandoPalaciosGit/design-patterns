'use strict';

/*
 Metaprogramming is (loosely) all about the underlying mechanics of the language,
 rather than “high level” data modelling or business logic

 - Code generation: eval
 - Reflection: apply, call, bind, name, length (Function), getOwnProperties (Object)
 - Reflection / Introspection: typeof, delete, instanceof
 - Reflection within implementation: Symbols (to change the behaviour of classes and objects)
 - Reflection through introspection - Reflect (used to discover very low level information about your code)
 - Reflection through intercession - Proxy (wrapping objects and intercepting their behaviours)
 - Utiledad -> acceso especifico a las propiedades de un objeto: las propiedades de los objetos indexados por un symbolo estan ocultas a partes de la aplicacion que acceden de manera habitual a las propiedades miembro del objeto.
 Y esto se consigue a traves de la interfaz "getOwnPropertySymbols", desde la que unicamente se puede acceder a las propiedades almacenadas por un symbolo.
 */

module.exports = {};
