const db = require('./db');

async function getAllArtists() {
    let result = await db.query('select * from artists');
    return result || [];
}
async function getSingleArtist(id) {
    let result = await db.query(`select * from artists where personal_id=${id}`);
    return result || [];
}

async function setNewArtist(user) {
    const result = await db.query(`insert into showme.artists (personal_id,f_name,l_name,phone,address,user_password,user_email) values (${JSON.stringify(user.personal_id)},${JSON.stringify(user.first_name)},${JSON.stringify(user.last_name)},${JSON.stringify(user.phone)},${JSON.stringify(user.address)},${JSON.stringify(user.email)}, ${JSON.stringify(user.password)})`);
    return result || [];
}

async function deleteArtist(id) {
    const result = await db.query(`delete from artists where personal_id=${id}`);
    return result || [];
}
async function updateArtist(userId, user) {
    const result = await db.query(`UPDATE artists
                                   SET user_password=${JSON.stringify(user.password)},
                                   address=${JSON.stringify(user.address)},
                                   phone=${JSON.stringify(user.phone)},
                                   l_name=${JSON.stringify(user.last_name)},
                                   agent=${JSON.stringify(user.agent)},
                                   user_email=${JSON.stringify(user.address)}
                                   WHERE personal_id = ${userId};`);
    return result;
}
module.exports = {
    getAllArtists, getSingleArtist, setNewArtist, deleteArtist, updateArtist
}