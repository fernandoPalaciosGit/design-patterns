;(function( w, $ ){
    "use strict";

    var URL_API_PHOTO_FLICKR = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
        resetTemplate = function( wrapperSelector, tmplSelector, data ){
            $(wrapperSelector).html("");
            $(tmplSelector).tmpl( data ).appendTo( $(wrapperSelector) );
        }; 

    $("#flickrSearch").submit(function(event) {
        event.preventDefault();
        var tags = $(this).find("#queryImgName").val();
        if( tags.length === 0 ){ return false; }

        $.publish( "/search/tags", [$.trim(tags)] );
    });

    $.subscribe("/search/tags", function(channel, tags){
        
        $.getJSON( URL_API_PHOTO_FLICKR , {
            tags: tags,
            tagmode: 'any',
            format: 'json'
        }, function(data) {
            if ( data.items.length === 0 ) return false;
            $.publish( "/result/labels", {link: data.link, title : data.title} );
            $.publish("/result/items", [data.items]);
        });
    });

    $.subscribe("/result/labels", function(channel, labels){
        resetTemplate("#lastQuery", "#result-label-search", labels);
    });

    $.subscribe("/result/items", function(channel, items){
        resetTemplate("#searchResults", "#result-item-search", items);
    });

}( window, jQuery ));