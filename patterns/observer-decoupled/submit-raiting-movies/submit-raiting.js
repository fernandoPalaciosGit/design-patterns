;(function($){
    var movieList = [], userList = [];
    
    // Subscribers -> new user topic
    $.subscribe( "/new/user", function(e, userName){
        if( userName.length > 0 ){
            userList.push({user: userName });
            $('#userTemplate').tmpl( userList[userList.length - 1] ).appendTo('#users');
        }
    });
    $.subscribe( "/new/raiting", function(e, movieTitle, userRaiting){
        if( movieTitle.length > 0 && userRaiting.length > 0){
            movieList.push( {movie: movieTitle, raiting: userRaiting} );
            $('#raitingTemplate').tmpl( movieList[movieList.length - 1] ).appendTo('#raitings');
        }
    });

    $('#js-add-raiting').on("click", function(){
        var user = $("#twitter_handle").val(),
            movie = $("#movie_seen").val(),
            raiting = $("#movie_raiting").val();

        // Publishers
        $.publish("/new/user", user);
        $.publish("/new/raiting", movie, raiting);
    });
    
}(jQuery));