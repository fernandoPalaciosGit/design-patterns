(function (w, $) {
    'use strict';

    var URL_API_PHOTO_FLICKR = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?',
        resetTemplate = function (wrapperSelector, tmplSelector, data) {
            $(wrapperSelector).html('');
            $(tmplSelector).tmpl(data).appendTo($(wrapperSelector));
        };

    $('#flickrSearch').submit(function (event) {
        event.preventDefault();
        var tags = $(this).find('#queryImgName').val(),
            hasTags = tags.length !== 0;

        if (hasTags) {
            $.publish('/search/tags', [$.trim(tags)]);
        }

        return hasTags;
    });

    $.subscribe('/search/tags', function (channel, tags) {

        $.getJSON(URL_API_PHOTO_FLICKR, {
            tags: tags,
            tagmode: 'any',
            format: 'json'
        }, function (data) {
            var hasItems = data.items.length !== 0;

            if (hasItems) {
                $.publish('/result/labels', {link: data.link, title: data.title});
                $.publish('/result/items', [data.items]);
            }

            return hasItems;
        });
    });

    $.subscribe('/result/labels', function (channel, labels) {
        resetTemplate('#lastQuery', '#result-label-search', labels);
    });

    $.subscribe('/result/items', function (channel, items) {
        resetTemplate('#searchResults', '#result-item-search', items);
    });
}(window, jQuery));