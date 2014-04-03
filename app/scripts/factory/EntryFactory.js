define(['dto/EntryDTO'], function (EntryDTO) {
    'use strict';

    var EntryFactory;

    EntryFactory =
    {
        getEntryDTO: function(data)
        {
            var entry = new EntryDTO();
            entry.id = data.entry.id;
            entry.link = data.entry.link;
            entry.summary = data.entry.summary;
            entry.updated = data.entry.updated;
            return entry;
        }
    };

    return EntryFactory;
});
