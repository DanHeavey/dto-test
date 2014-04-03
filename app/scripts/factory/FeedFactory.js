define(['dto/FeedDTO'], function (FeedDTO) {
    'use strict';

    var FeedFactory;

    FeedFactory =
    {
        getFeedDTO: function(data)
        {
            var feed = new FeedDTO();
            return feed;
        }
    };

    return FeedFactory;
});
