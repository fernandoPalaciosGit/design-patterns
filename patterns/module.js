///////////////////////////
// MODULE SELF CONTAINED //
///////////////////////////
var counterModule = (function(){ // clousure
    var _counter = 0;// cannot read outside module, only properties into clousure scope
    
    return { // public interface
        incrementCounter: function(){
            _counter++;
        },
        resetCounter: function(){
            _counter = 0;
        },
        printCounter: function(){
            return _counter;
        }
    };
}());

////////////////////////////////
// MODULE WITH 'THIS' PATTERN //
////////////////////////////////
var bascketModule = (function(){
    var _bascket = [],
        _isDefinedPrice = function( newBasket ){
            return newBasket.hasOwnProperty("price");
        };

    return {
        bascketNames: function( name ){
            return _bascket.filter(function(index, item) {
                return item.itemName === name ;
            }); 
        },
        addItem: function( newItem ){
            var item = newItem || {};
            if( !_isDefinedPrice(item) ) throw {msg: "undefined price"};
            _bascket.push(item);
        },
        getItemsCount: function(){
            return _bascket.length;
        },
        getTotalPrice: function(){
            var totalItem = this.getItemsCount()-1,
                countPrize = 0;
            while ( totalItem >= 0 ) {
                countPrize += _bascket[totalItem].price;
                totalItem--;
            }
            return countPrize;
        } 
    }; 
}());

bascketModule.addItem({ itemName: "bread" }); // throw exception
bascketModule.addItem({price: 25, itemName: "jam"});

// ERROR : cannot access private members from outsite
bascketModule.getItemName = function( indexItem ){ return _bascket[indexItem].itemName; };

// CORRECT :  access public members
bascketModule.newItemByName = function( name, price ){ if (!!this.bascketNames(name)) this.addItem({price: price, itemName: name}); };