define(['dto/FeedDTO'], function (EntryDTO) {
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
