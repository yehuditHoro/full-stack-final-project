const db = require('./db');

async function getAllShowsTypes() {
    console.log("getting all showsTypes, before");
    let result = await db.query('select * from shows_types');
    console.log(result);
    return result;
}

async function getSingleShowsTypes(type) {
    console.log("getting all showsTypes, before");
    let d = `select * from shows_types where show_type = '${type}'`
    console.log(d);
    let result = await db.query(d);
    console.log(result);
    return result;
}

module.exports = {
    getAllShowsTypes,getSingleShowsTypes
}
