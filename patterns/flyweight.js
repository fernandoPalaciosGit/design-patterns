/*PROPIEDADES DE INSTANCIAS
las propiedades que se crean como copia en cada instancia de su tipo constructor*/

/*PROPIEDADES DE PROTOTIPO
son aquellas que se comparten entre instancias y que se almacenan  en el prototipo de su tipo constructor
 */

/*DATOS INTRINSECOS
prpiedades de instancia + propiedades de prototipo
son aquellas que definen e comportamiento o datos no mutables
titulo, autor, isbn, los getters, metodos cuya implementacion no muta (solo el argumento de input).
*/

/*DATOS ETRINSECOS
son comportamientos (metodos) o propiedades que van mutando en function de la logica de la aplicacion
*/

"use strict";
var Book = function( optBook ){
    //  propiedades de instancia, datos intrinsecos
    this.title = optBook.title || "";
    this.author = optBook.author || "";
    this.genere = optBook.genere || "";
    this.ISBN = optBook.ISBN || "";
    this.pageCOunt = optBook.pageCOunt || "";
    this.publisherID = optBook.publisherID || "";
};

// propiedaes de prototipo : datos instrinsecos
Book.prototype = {
    // getters
    getTitle : function(){ return this.title; },
    getAuthor : function(){ return this.author; },
    getISBN : function(){ return this.ISBN; },
    availability : true,  
    checkoutDate : new Date(),
    checkoutMember : "",
    dueReturnDdate : 0
};
// deviolver al prototipo de Book la referencia a su constructor (para que las instancias no pierdan su TYPE)
Book.prototype.constructor = Book;

// almacenar todos los datos extrinsecos enn un objeco con un singleton
var BookRecordManager = (function(){
    var bookRecordDatabase = {}; // intance singleton
    return {
        // interface singleton
        addBookRecords : function(  ISBN, title, author, genere, pageCOunt, publisherID ){
            var book = BookFactory.createBook(ISBN, title, author, genere, pageCOunt, publisherID);
            bookRecordDatabase[ISBN] = BookFactory.getBookStored(ISBN);
            return book;
        },

        // logic
        updateCheckuptStatus : function( bookID, newStatus, checkoutDate, checkoutMember, newReturnDdate ){
            var book = bookRecordDatabase[bookID];
            book.availability = newStatus;
            book.checkoutDate = checkoutDate; 
            book.checkoutMember = checkoutMember;
            book.dueReturnDdate = newReturnDdate;
        },
        extendCheckoutPeriod : function( bookID, newReturnDdate ){
            bookRecordDatabase[bookID].dueReturnDdate = newReturnDdate;
        },
        isPastDue : function( bookID ){
            var now = new Date();
            return now.getTime() > Date.parse( bookRecordDatabase[bookID].dueReturnDdate );
        }
    };    
}());

// instanciamos nuestros libros a traves de una factoria para comprobar de que no repetimos instanciamos
var BookFactory = (function(){
    var existingBooks = {},

        createInstanceBook = function( optBook ){
            var book = new Book( optBook );
            // kepp internal library
            existingBooks[ optBook.ISBN ] = book;
            return book;
        };

    return {
        getBookStored : function( ISBN ){
            if( !ISBN || typeof ISBN != "number" || !existingBooks[ISBN] ) throw new Error("ISBN is not stored into our library");
            return existingBooks[ISBN];
        },
        createBook : function(  ISBN, title, author, genere, pageCOunt, publisherID  ){
            if( !ISBN || typeof ISBN != "number" ) throw new Error("ISBN are number unique references");
            var book = existingBooks[ISBN],
                optBook = {
                    ISBN: ISBN,
                    title: title,
                    author: author,
                    genere: genere,
                    pageCOunt: pageCOunt,
                    publisherID  : publisherID
                };
            return  ( !book ) ?
                    createInstanceBook( optBook ) :
                    book ;
        }
    };
}());


/////////////
// TESTING //
/////////////
var book1 = BookRecordManager.addBookRecords( 654343454, "title", "author", "genere", 502, "publisherID" );
BookRecordManager.isPastDue( book1.getISBN() );
