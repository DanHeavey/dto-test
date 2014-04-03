define(['dto/EntryDTO', 'dto/ErrorDTO'], function (EntryDTO, ErrorDTO) {
    'use strict';

    var EntryFactory;

    EntryFactory =
    {
        getEntryDTO: function(data)
        {
            try
            {
                var entry = new EntryDTO();
                entry.id = data.entry.id;
                entry.link = data.entry.link;
                entry.summary = data.entry.summary;
                entry.updated = data.entry.updated;
                return entry;
            }
            catch ( error )
            {
                console.log(error);
                console.log(data);
                return null;
            }

        }
    };

    return EntryFactory;
});
