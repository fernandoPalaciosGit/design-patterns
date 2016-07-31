####Patrones de diseño
Define un problema dentro de nuestro ambiente (sistema) para despues ofrecer una solucion especifica.
De esta manera lo podemos reutilizarlo cuandoi surjan unas caracteristicas comunes semejantes al patron.


#####Recursos que NO se deben utiliza como patrones de diseño
Paradigmas de programacion: programacion imperativa, declarativa, orientada a objetos, orientada a aspectos, funcional, logica.

Silver bullet: (Brooks) las tecnologias modernas centralizadas en cierto contexto son perseguidas por el programador para utilizarlas en cualquier problema.

No es una solucion inefectiva ni reiesgosa: Es una solucion en la que se ha testeado reiteradamente la efectividad ante una proiblematica concreta y se ha adoptado como solucion base que no permite riesgo.

No resuelve un problema especifico: resuelve un problema comun que surge recurrentemente en diversas situaciones de nuestro entorno.

No dependen del lenguaje de programacion.

#####UTILIDAD DE UN PATRON DE DISEÑO
Gente nueva prgramando en el sistrema: debe aprender la utilidad del patron.
Los patrones crean un vocabulario en comun entre las personas.

Crean alternativas de diseño flexibles y reutilizable.

Nos permiten construir arquitecturas de software complejas y cada vez mas heterogeneas.
Las aplicaicones (sistemas de siftware) van mutando con el tiempo, aumentan los requisitos de un componente, extienden la plataforma en la que se integra, incrementan la cantidad de servicios integrados o externos. Los patrones de diseño del software daran solidez y reduciran los riesgos de mejorar componentes o nuevas dependencias al sistema.

Favorecera la mantenibilidad (se rigen por soluciones reiterativas, concretas, efectivas y sin riesgo), depuracion (mas sencillo encontrar errores) y durabilidad (al ser un sistema mas estable, ordenado, permitirá una mayor escalabilidad del sistema en el tiempo)

Incrementan la experiencia profesional.


####patron de diseño LAYER
Es como una cadena de montaje, relegas la responsabilidad de inicializar capas de menor nivel a traves de componentes
(injeccion de dependencias, en este caso seria la logica a traves de la pesentacion y la persistencia a traves de la logica).
Todas las capas tienen la implementacion de @setLowerLayer, esto podria ser una interfez implementada.