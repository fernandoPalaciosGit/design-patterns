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


####sintomas de un mal diseño
Rigidez (poco digestivo): sistemas con muchas dependencias o con grandes configuraciones para llegar a una solucion pequeña o mas sencilla de lo que parece. Solemos verlo cuando el developer llora al detectar un problema que es complicado detectarlo o de resolverlo porque esta muy dispersado su solucion.

Fragilidad (mirame pero no me toques mucho): asociado a lla rigidez (un sistema rigido es fragil). Hay un cambio y este desencadena un conjunto de consecuencias fuera del scope del problema. Se vuelve complicada la depuracion.

Inmovilidad: los modulos no se pueden mover. Si cojes esa variable y la pones mas abajo..peta

Viscosidad: las piezas deben permitir conectarse libremente, sin crear demasiada complejidad de acoplamiento, visibilidad entre elles, cuando se tiene que hacer mucho work arround para conectarlas, es sintoma de mal diseño.

#####Principios Solid DOO  (diseño de programacion Orientada a Objetos)
Single responsability: una unica razon del modulo

Open-close: los modulos deben ser abiertas para acceder a ellas (extensibles), pero lo suficientemente cerrada para no impactar en comportamiento privado.

Principio de sustitucion de Liskov: una subclase debe poermitor desacoplarse de los atributos y comportamiento en herencia de la clase base.

segregacion de interfaces: tener interfaces con responsabilidades detalladas, que son especificas del cliente.

Principio de inversion de dependencia: de lo que tengo que depender es de las clases abstraidas, padre, y nod e las derivadas.Por ejemplo la clase Persona no deberia tener una dependencia de una clase especifica como Taxista.

#### Categoria de Patrones (POSA)
poder diferenciar subsistemas, modulos, responsabilidades.
Van hacia niveles mas especializados dentro del sistema.

Patrones de Arquitectura: Layer, MVC, EDA...
Patrones de Diseño: Factory, Façade, Strategy, Observer...
Idioms (modeismos, mejor uso de lenguajes de programacion): Manejo de memeoria, uso del lenguaje, convencion de nombrado.


####Clasificacion de los patrones de diseño
- por Proposito: ¿Que resolvera el patron?:
patrones de creacion (ordenar nuevos componentes),
patrones de estructura (distribucion en el sistema de los componentes)
patrones de comportamiento (enfocados a la interaccion entre componentes, dependiendo de su responsabilidad)

- por alcance: la solucion se aplica a una Clase o Objetos.
patrones de Clase (relacion entre herencias o interfaces)
patrones de objetos (mas dinamicos ya que tienen el alcance de las instancias)

![Image of Yaktocat](https://drive.google.com/uc?export=view&id=0BxsVbGnLpHpASzlQRHFmLV9KMjg)

###PATRONES: Problema + Contexto + Aplicacion

#### Patron Layer
Es como una cadena de montaje, relegas la responsabilidad de inicializar capas de menor nivel a traves de componentes
(injeccion de dependencias, en este caso seria la logica a traves de la pesentacion y la persistencia a traves de la logica).
Todas las capas tienen la implementacion de @setLowerLayer, esto podria ser una interfez implementada.
Otro de los usos es un patroin orientado a los servicios (SOA)
Injectamos servicios como dependencias.
Cada servicio puede estar interado en una plataforma diferente, y se acoplan como layers en una arquitectura servidor-servidor.
El mismo ejemplo extrapolado al modelo cliente-servidor es el MVC, cada capa representa un estado de la aplicacion, tambien en diferentes plataformas.
Cada capa es un subsistema, que provee de servicios a la capa superior.

Problemas: el acoiplamiento puede provocar una dependencia de capas inferiores que al modificarse creen mucha repercusion a las capas superiores y dificil mantenimiento.

#### Patron Factory method (creacional de objeto)
Crea una instancia de diferentes tipos derivados del mismo. tener una clase de creacion de animales de diferentes especies


#### Patron Abstract Factory (creacional de objetos)
Crea una instancia de diferentes familias de clase. La clase permite diferenciar familias de diferentes tipos de animales, como mamiifero/anfibio.



#### Patron Builder (creacional de objetos)
Durante la construccion de un oobjeto, no se define su representacion.
Defininir una instancia y dejar que las subclases decidan cual objeto instanciar.
Builder class (clase abstracta, identifica las propiedades del objeto),
Concrete Builder (herencia de Builders),
Director Class (clase que usa los objetos, la interfaz del builder),
Product: objeto instanciado

![Image of Yaktocat](https://drive.google.com/uc?export=view&id=0BxsVbGnLpHpAM1EzOWZyWHFSV2c)


#### Patron Prototye (creacional de objetos)
los prototipos son instancias que previamente se inicializaron y existen para copiarse en diferentes contextos de aplicacion,


#### Patron Singleton (creacional de objetos)
Crear una sola instancia de una clase durante toda la aplicacion. Esa instancia se coge como referencia en cuaslquier contexto de aplicaion.
En la conexion a la BBDD, es un singleton, una sola conexion por cliente.


