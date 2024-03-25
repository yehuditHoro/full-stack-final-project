const db = require('./db');

async function getAllOwners() {
    let result = await  db.query('select * from auditorium_owners');
    return result||[];
}
async function getSingleOwner(id) {
    console.log(id);
    let result = await db.query(`select * from auditorium_owners where personal_id=${id}`);
    return result||[];
}

async function setNewOwner(user) {
    console.log("setting owners ========================================================================");
    console.log(user)
    console.log("sql" +  `insert into showme.auditorium_owners (personal_id,f_name,l_name,phone,address,user_password) values (default,${JSON.stringify(user.personal_id)},${JSON.stringify(user.first_name)},${JSON.stringify(user.last_name)},${JSON.stringify(user.phone)},${JSON.stringify(user.address)},${JSON.stringify(user.password)},'default')`);
    const result = await db.query(`insert into showme.auditorium_owners (personal_id,f_name,l_name,phone,address,user_email,user_password) values (${JSON.stringify(user.personal_id)},${JSON.stringify(user.first_name)},${JSON.stringify(user.last_name)},${JSON.stringify(user.phone)},${JSON.stringify(user.address)},${JSON.stringify(user.email)},${JSON.stringify(user.password)})`);
    return result;
}

async function deleteOwner(id) {
    console.log("deleting auditorium_owners");
    const q = `delete from auditorium_owners where personal_id=${id}`
    console.log(q);
    const result = await db.query(q);
}

async function updateOwner(userId, user) {
    const result = await db.query(`UPDATE auditorium_owners
                                   SET user_password=${JSON.stringify(user.password)},
                                   address=${JSON.stringify(user.address)},
                                   phone=${JSON.stringify(user.phone)},
                                   l_name=${JSON.stringify(user.last_name)},
                                   user_email=${JSON.stringify(user.address)}
                                   WHERE personal_id = ${userId};`);
    return result;
}
module.exports = {
    getAllOwners, getSingleOwner,setNewOwner,deleteOwner,updateOwner
}
