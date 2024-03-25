const db = require('./db');

async function getAllAuditoriums() {
    let result =await db.query('select * from auditoriums');
    return result||[];
}

async function getSingleAuditoriums(id) {
    let q = `select * from auditoriums where auditorium_id=${id}`
    console.log(q);
    let result = await db.query(q);
    return result||[];
}

async function setNewAuditoium(auditorium) {
    console.log(auditorium)
    const result = await db.query(`insert into showme.auditoriums (auditorium_id,auditorium_name,auditorium_address,auditorium_owner,auditorium_capacity,auditorium_type,auditorium_price) 
                                    values (default,${JSON.stringify(auditorium.name)},${JSON.stringify(auditorium.address)},${JSON.stringify(auditorium.owner)},${JSON.stringify(auditorium.capacity)},${JSON.stringify(auditorium.type)},${JSON.stringify(auditorium.price)})`);
    return result;
}

module.exports = {
    getAllAuditoriums, getSingleAuditoriums, setNewAuditoium
}