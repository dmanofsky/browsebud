'use strict';

const Datastore = require('@google-cloud/datastore');
const config = require('./config'); // add config file to project


const ds = Datastore({
    projectId: config.get('GCLOUD_PROJECT')
});

const kind = 'Links'

function addLink(link) {
    var dater = new Date().toJSON()
    const linkKey = ds.key('Links');
    const entity = {
        key: linkKey,
        data: [
    {
        name: "link",
        value: link
    },
    {
        name: "date",
        value: dater
    }
        ]
    };
return ds.save(entity)
.then(() => {
    console.log(`Link ${linkKey.id} created successfully!`);
    return linkKey;
});
}

module.exports = { addLink };