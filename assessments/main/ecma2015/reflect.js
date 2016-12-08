'use strict';

/*
 Metaprogramming is (loosely) all about the underlying mechanics of the language,
 rather than “high level” data modelling or business logic

 - Code generation: eval
 - Reflection: apply, call, bind, name, length (Function), getOwnProperties (Object)
 - Reflection / Introspection: typeof, delete, instanceof
 - Reflection through introspection - Reflect (used to discover very low level information about your code)

 - Reflect to access javascript engine internal methods: [[Get]], [[Set]], [[HasOwnProperty]], [[HasOwnProperty]]
 This mean the way to access the behaviour of the engine JS process (not to override, this is the way how to).
 Some access on JS: Object.create [[HasOwnProperty]], getOwnPropertyNames or getOwnPropertySymbols [[HasOwnProperty]]
 Is not handy for the usual programming development (Not tested here)

 - Reflect to override javascript engine internal methods: Reflect.apply, Reflect.construct, Reflect.defineProperty...

 - you could totally ditch Object.* and Function.* prototype methods and use the new Reflect ones instead.
 */

module.exports = {};
